import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, CheckCircle, XCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

import { useUser } from '@/contexts/UserContext';
import { db, updateUserProgress } from '@/utils/database';
import { calculateNextReview, mapResultToQuality } from '@/utils/spaced-repetition';
import { calculatePoints, updateProgressAfterSession } from '@/utils/gamification';
import type { QuizResult, VocabularyWord } from '@/types';
import {
  buildArrangeWordsQuestion,
  buildMultipleChoiceQuestion,
  getExerciseDescription,
  getExerciseTitle,
  isMultiWordPolish,
  isValidExerciseType,
  type ExerciseQuestion,
  type ExerciseType,
} from '@/utils/exercises';

type RouteParams = {
  categoryId?: string;
  exerciseType?: string;
  subcategoryId?: string;
};

const DEFAULT_QUESTION_COUNT = 10;

function arraysEqual(a: string[], b: string[]): boolean {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

async function updateSrsForWord(params: {
  wordId: string;
  isCorrect: boolean;
  attempts: number;
  timeSpentSeconds: number;
}) {
  const { wordId, isCorrect, attempts, timeSpentSeconds } = params;
  const quality = mapResultToQuality(isCorrect, attempts, timeSpentSeconds);
  const flashcardState = await db.flashcardStates.get(wordId);

  if (flashcardState) {
    const newState = calculateNextReview(flashcardState, quality);
    await db.flashcardStates.update(wordId, newState);
  } else {
    const newState = calculateNextReview(
      {
        wordId,
        easeFactor: 2.5,
        interval: 1,
        repetitions: 0,
        nextReview: new Date(),
      },
      quality
    );
    await db.flashcardStates.add(newState);
  }
}

function ExercisePage() {
  const navigate = useNavigate();
  const { user, userProgress, refreshProgress } = useUser();
  const { categoryId, exerciseType, subcategoryId } = useParams<RouteParams>();

  const resolvedExerciseType: ExerciseType | null = useMemo(() => {
    if (!isValidExerciseType(exerciseType)) return null;
    return exerciseType;
  }, [exerciseType]);

  const [words, setWords] = useState<VocabularyWord[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  const [questionIndex, setQuestionIndex] = useState(0);
  const [questionStartTime, setQuestionStartTime] = useState<number>(Date.now());

  const [streak, setStreak] = useState(0);
  const [sessionPoints, setSessionPoints] = useState(0);
  const [sessionResults, setSessionResults] = useState<QuizResult[]>([]);

  const [showResult, setShowResult] = useState(false);
  const [lastAnswerWasCorrect, setLastAnswerWasCorrect] = useState<boolean | null>(null);

  // Multiple choice selection
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);

  // Arrange words selection
  const [pickedTokens, setPickedTokens] = useState<string[]>([]);
  const [remainingTokens, setRemainingTokens] = useState<string[]>([]);

  const [sessionComplete, setSessionComplete] = useState(false);

  // Keep a ref to "next" so Enter handler can use latest state.
  const goNextRef = useRef<() => void>(() => {});

  useEffect(() => {
    async function loadWords() {
      try {
        setLoading(true);
        setLoadError(null);

        if (!categoryId) {
          setWords([]);
          setLoadError('Missing category.');
          return;
        }
        if (!resolvedExerciseType) {
          setWords([]);
          setLoadError('Unknown exercise type.');
          return;
        }

        let wordsToUse: VocabularyWord[];
        if (subcategoryId) {
          try {
            wordsToUse = await db.vocabulary
              .where('[category+subcategory]')
              .equals([categoryId, subcategoryId])
              .toArray();
          } catch {
            const allCategoryWords = await db.vocabulary.where('category').equals(categoryId).toArray();
            wordsToUse = allCategoryWords.filter((w) => w.subcategory === subcategoryId);
          }
        } else {
          wordsToUse = await db.vocabulary.where('category').equals(categoryId).toArray();
        }

        // Shuffle once per session.
        const shuffled = wordsToUse.sort(() => Math.random() - 0.5);
        setWords(shuffled);
      } catch (err) {
        setLoadError(err instanceof Error ? err.message : 'Failed to load words.');
      } finally {
        setLoading(false);
      }
    }

    loadWords();
  }, [categoryId, subcategoryId, resolvedExerciseType]);

  const eligibleWordsForType = useMemo(() => {
    if (!resolvedExerciseType) return [];
    if (resolvedExerciseType === 'arrange-words') {
      return words.filter(isMultiWordPolish);
    }
    return words;
  }, [words, resolvedExerciseType]);

  const questionCount = useMemo(
    () => Math.min(DEFAULT_QUESTION_COUNT, eligibleWordsForType.length),
    [eligibleWordsForType.length]
  );

  const currentWord = useMemo(() => {
    if (eligibleWordsForType.length === 0) return null;
    return eligibleWordsForType[questionIndex % eligibleWordsForType.length] ?? null;
  }, [eligibleWordsForType, questionIndex]);

  const currentQuestion: ExerciseQuestion | null = useMemo(() => {
    if (!resolvedExerciseType || !currentWord) return null;

    if (resolvedExerciseType === 'multiple-choice') {
      return buildMultipleChoiceQuestion({ word: currentWord, pool: words, choiceCount: 4 });
    }

    if (resolvedExerciseType === 'arrange-words') {
      return buildArrangeWordsQuestion(currentWord);
    }

    return null;
  }, [resolvedExerciseType, currentWord, words]);

  // Reset per-question UI state when question changes
  useEffect(() => {
    setShowResult(false);
    setLastAnswerWasCorrect(null);
    setSelectedChoice(null);
    setPickedTokens([]);

    if (currentQuestion?.type === 'arrange-words') {
      setRemainingTokens(currentQuestion.tokens);
    } else {
      setRemainingTokens([]);
    }

    setQuestionStartTime(Date.now());
  }, [currentQuestion]);

  const completeSession = useCallback(async () => {
    if (!user || !userProgress || !categoryId) {
      setSessionComplete(true);
      return;
    }

    const correctAnswers = sessionResults.filter((r) => r.isCorrect).length;
    const totalQuestions = sessionResults.length;

    const { newProgress, leveledUp } = updateProgressAfterSession(
      userProgress,
      sessionPoints,
      correctAnswers,
      totalQuestions
    );

    await updateUserProgress(newProgress, user.id);
    await refreshProgress();

    if (leveledUp) {
      confetti({ particleCount: 160, spread: 90, origin: { y: 0.6 } });
    }

    // NOTE: Your app currently never records study sessions in `db.studySessions`.
    // I’m leaving that alone for now to avoid a confusing “mixed” activity list,
    // but we can add it for BOTH Study + Exercises in one go afterwards.
    setSessionComplete(true);
  }, [user, userProgress, categoryId, sessionResults, sessionPoints, refreshProgress]);

  const goNext = useCallback(() => {
    if (questionIndex + 1 >= questionCount) {
      void completeSession();
      return;
    }
    setQuestionIndex((i) => i + 1);
  }, [questionIndex, questionCount, completeSession]);

  useEffect(() => {
    goNextRef.current = goNext;
  }, [goNext]);

  // Allow Enter to continue after result shown.
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && showResult) {
        e.preventDefault();
        e.stopPropagation();
        goNextRef.current();
      }
    };
    window.addEventListener('keydown', handler, true);
    return () => window.removeEventListener('keydown', handler, true);
  }, [showResult]);

  const submitAnswer = async (params: { isCorrect: boolean; attempts: number }) => {
    if (!user || !userProgress || !currentWord) return;

    const timeSpent = (Date.now() - questionStartTime) / 1000;
    const nextStreak = params.isCorrect ? streak + 1 : 0;
    const points = calculatePoints(params.isCorrect, timeSpent, nextStreak);

    setStreak(nextStreak);
    setSessionPoints((p) => p + points);

    const result: QuizResult = {
      questionId: `ex_${resolvedExerciseType}_${questionIndex}`,
      wordId: currentWord.id,
      isCorrect: params.isCorrect,
      timeSpent,
      attempts: params.attempts,
    };
    setSessionResults((r) => [...r, result]);

    await updateSrsForWord({
      wordId: currentWord.id,
      isCorrect: params.isCorrect,
      attempts: params.attempts,
      timeSpentSeconds: timeSpent,
    });

    if (params.isCorrect && nextStreak > 0 && nextStreak % 5 === 0) {
      confetti({ particleCount: 90, spread: 70, origin: { y: 0.7 } });
    }

    setLastAnswerWasCorrect(params.isCorrect);
    setShowResult(true);
  };

  if (!resolvedExerciseType) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <div className="card p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Unknown exercise</h2>
          <p className="text-gray-600 mb-6">This exercise type does not exist.</p>
          <button onClick={() => navigate(-1)} className="btn-primary">
            Go Back
          </button>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="spinner" style={{ borderLeftColor: '#0074bd' }}></div>
      </div>
    );
  }

  if (loadError) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <div className="card p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Couldn’t load exercise</h2>
          <p className="text-gray-600 mb-6">{loadError}</p>
          <button onClick={() => navigate(-1)} className="btn-primary">
            Go Back
          </button>
        </div>
      </div>
    );
  }

  if (eligibleWordsForType.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <div className="card p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Not enough content for this exercise
          </h2>
          <p className="text-gray-600 mb-6">
            {resolvedExerciseType === 'arrange-words'
              ? 'This category has no multi-word phrases yet. Try Multiple Choice.'
              : 'No words found in this category.'}
          </p>
          {categoryId && (
            <Link to={`/exercise/${categoryId}/multiple-choice`} className="btn-primary inline-block">
              Start Multiple Choice
            </Link>
          )}
        </div>
      </div>
    );
  }

  if (sessionComplete) {
    const correctAnswers = sessionResults.filter((r) => r.isCorrect).length;
    const accuracy = sessionResults.length > 0 ? Math.round((correctAnswers / sessionResults.length) * 100) : 0;

    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <div className="card p-8">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Exercise Completed!</h2>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(0, 116, 189, 0.1)' }}>
              <div className="text-3xl font-bold" style={{ color: '#0074bd' }}>
                {sessionPoints}
              </div>
              <div className="text-sm text-gray-600">Points</div>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600">{accuracy}%</div>
              <div className="text-sm text-gray-600">Accuracy</div>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg">
              <div className="text-3xl font-bold text-orange-600">{streak}</div>
              <div className="text-sm text-gray-600">Max Streak</div>
            </div>
          </div>

          <div className="space-y-3">
            {categoryId && (
              <Link
                to={`/exercise/${categoryId}/${resolvedExerciseType}${subcategoryId ? `/${subcategoryId}` : ''}`}
                className="w-full btn-primary inline-block"
              >
                Play Again
              </Link>
            )}
            {categoryId && (
              <Link to={`/category/${categoryId}`} className="w-full btn-secondary inline-block">
                Back to Category
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (!currentQuestion || !currentWord || !categoryId) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <div className="card p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">No question available</h2>
          <button onClick={() => navigate(-1)} className="btn-primary">
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 pb-24 md:pb-8">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <button onClick={() => navigate(-1)} className="flex items-center text-gray-600 hover:text-gray-900">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </button>

        <div className="text-right">
          <div className="text-sm text-gray-600">
            {getExerciseTitle(resolvedExerciseType)} • {questionIndex + 1}/{questionCount}
          </div>
          <div className="text-xs text-gray-500">{getExerciseDescription(resolvedExerciseType)}</div>
        </div>
      </div>

      {/* Stats */}
      <div className="mb-6 flex items-center justify-center space-x-6">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">🔥</span>
          <span className="font-semibold">{streak}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-2xl">⭐</span>
          <span className="font-semibold">{sessionPoints}</span>
        </div>
      </div>

      {/* Main Card */}
      <div className="card p-8">
        {currentQuestion.type === 'multiple-choice' ? (
          <>
            <div className="text-center mb-6">
              <div className="text-4xl font-bold mb-2">{currentQuestion.prompt}</div>
              <div className="text-gray-500">Choose the correct Polish word</div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
              {currentQuestion.choices.map((choice) => {
                const isPicked = selectedChoice === choice;
                const isCorrectChoice = choice === currentQuestion.correctChoice;
                const showCorrect = showResult && isCorrectChoice;
                const showWrongPicked = showResult && isPicked && !isCorrectChoice;

                return (
                  <button
                    key={choice}
                    disabled={showResult}
                    onClick={async () => {
                      setSelectedChoice(choice);
                      await submitAnswer({ isCorrect: choice === currentQuestion.correctChoice, attempts: 1 });
                    }}
                    className={`w-full px-4 py-3 rounded-lg font-semibold border transition-colors ${
                      showCorrect
                        ? 'bg-green-50 border-green-300 text-green-800'
                        : showWrongPicked
                        ? 'bg-red-50 border-red-300 text-red-800'
                        : isPicked
                        ? 'bg-gray-100 border-gray-300'
                        : 'bg-white border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    {choice}
                  </button>
                );
              })}
            </div>
          </>
        ) : (
          <>
            <div className="text-center mb-4">
              <div className="text-3xl font-bold mb-2">{currentWord.english}</div>
              <div className="text-gray-500">Build the Polish phrase</div>
            </div>

            {/* Picked tokens */}
            <div className="max-w-2xl mx-auto">
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg min-h-[64px] flex flex-wrap gap-2 items-center justify-center">
                {pickedTokens.length === 0 ? (
                  <span className="text-sm text-gray-400">Tap the words below…</span>
                ) : (
                  pickedTokens.map((t, idx) => (
                    <span key={`${t}_${idx}`} className="px-3 py-1 rounded-full bg-white border border-gray-200">
                      {t}
                    </span>
                  ))
                )}
              </div>

              {/* Remaining tokens */}
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                {remainingTokens.map((token, idx) => (
                  <button
                    key={`${token}_${idx}`}
                    disabled={showResult}
                    onClick={() => {
                      setPickedTokens((prev) => [...prev, token]);
                      setRemainingTokens((prev) => prev.filter((_, i) => i !== idx));
                    }}
                    className="px-4 py-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 font-medium"
                  >
                    {token}
                  </button>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-center gap-3">
                <button
                  className="btn-secondary"
                  disabled={showResult || pickedTokens.length === 0}
                  onClick={() => {
                    // Undo last token
                    setPickedTokens((prev) => {
                      const next = [...prev];
                      const last = next.pop();
                      if (last) {
                        setRemainingTokens((r) => [...r, last]);
                      }
                      return next;
                    });
                  }}
                >
                  Undo
                </button>

                <button
                  className="btn-secondary"
                  disabled={showResult || (pickedTokens.length === 0 && remainingTokens.length > 0)}
                  onClick={() => {
                    // Reset
                    if (currentQuestion.type !== 'arrange-words') return;
                    setPickedTokens([]);
                    setRemainingTokens(currentQuestion.tokens);
                  }}
                >
                  Reset
                </button>

                <button
                  className="btn-primary"
                  disabled={showResult || pickedTokens.length === 0}
                  onClick={async () => {
                    const isCorrect = arraysEqual(pickedTokens, currentQuestion.correctTokens);
                    await submitAnswer({ isCorrect, attempts: 1 });
                  }}
                >
                  Check
                </button>
              </div>
            </div>
          </>
        )}

        {/* Result footer */}
        {showResult && (
          <div className="mt-8 max-w-2xl mx-auto">
            <div
              className={`p-4 rounded-lg border ${
                lastAnswerWasCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                {lastAnswerWasCorrect ? (
                  <CheckCircle className="w-6 h-6 text-green-600" />
                ) : (
                  <XCircle className="w-6 h-6 text-red-600" />
                )}
                <div className={`font-semibold ${lastAnswerWasCorrect ? 'text-green-800' : 'text-red-800'}`}>
                  {lastAnswerWasCorrect ? 'Correct!' : 'Incorrect'}
                </div>
              </div>

              {!lastAnswerWasCorrect && (
                <div className="mt-2 text-center text-gray-700">
                  Correct answer: <strong>{currentWord.polish}</strong>
                </div>
              )}

              <div className="mt-3 text-center text-sm text-gray-500">Press Enter to continue</div>
              <div className="mt-3">
                <button onClick={() => goNext()} className="w-full btn-primary">
                  {questionIndex + 1 >= questionCount ? 'Finish' : 'Continue'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ExercisePage;

