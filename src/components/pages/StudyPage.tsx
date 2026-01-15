import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db, updateUserProgress } from '@/utils/database';
import { VocabularyWord, QuizResult } from '@/types';
import { ArrowLeft, Volume2, CheckCircle, XCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { calculatePoints, updateProgressAfterSession } from '@/utils/gamification';
import { calculateNextReview, mapResultToQuality } from '@/utils/spaced-repetition';
import { useUser } from '@/contexts/UserContext';

function StudyPage() {
  const { categoryId, subcategoryId } = useParams();
  const navigate = useNavigate();
  const { user, userProgress, refreshProgress } = useUser();

  const [words, setWords] = useState<VocabularyWord[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [mode, setMode] = useState<'flashcard' | 'quiz'>('flashcard');
  const [quizAnswer, setQuizAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [sessionResults, setSessionResults] = useState<QuizResult[]>([]);
  const [sessionComplete, setSessionComplete] = useState(false);
  const [streak, setStreak] = useState(0);
  const [sessionPoints, setSessionPoints] = useState(0);
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());

  useEffect(() => {
    async function loadWords() {
      let wordsToStudy: VocabularyWord[];

      if (subcategoryId) {
        // Try compound index first, fallback to manual filter
        try {
          wordsToStudy = await db.vocabulary
            .where('[category+subcategory]')
            .equals([categoryId!, subcategoryId])
            .toArray();
        } catch (error) {
          // Fallback: filter manually if compound index doesn't work
          console.warn('Compound index query failed, using manual filter:', error);
          const allCategoryWords = await db.vocabulary
            .where('category')
            .equals(categoryId!)
            .toArray();
          wordsToStudy = allCategoryWords.filter(word => word.subcategory === subcategoryId);
        }
      } else {
        wordsToStudy = await db.vocabulary
          .where('category')
          .equals(categoryId!)
          .toArray();
      }

      console.log(`Loaded ${wordsToStudy.length} words for category: ${categoryId}, subcategory: ${subcategoryId || 'all'}`);

      // Mezclar las palabras
      const shuffled = wordsToStudy.sort(() => Math.random() - 0.5);
      setWords(shuffled);
    }

    loadWords();
  }, [categoryId, subcategoryId]);

  const currentWord = words[currentIndex];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    if (currentIndex < words.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
      setShowResult(false);
      setQuizAnswer('');
      setQuestionStartTime(Date.now());
    } else {
      completeSession();
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
      setShowResult(false);
      setQuizAnswer('');
      setQuestionStartTime(Date.now());
    }
  };

  const handleSubmitAnswer = async () => {
    if (showResult) {
      // Si ya se mostró el resultado, pasar a la siguiente palabra
      handleNext();
      return;
    }

    if (!quizAnswer.trim() || !user || !userProgress) {
      return;
    }

    const timeSpent = (Date.now() - questionStartTime) / 1000;
    const correct = quizAnswer.trim().toLowerCase() === currentWord.english.toLowerCase();
    
    setIsCorrect(correct);
    setShowResult(true);

    // Calcular puntos
    const currentStreak = correct ? streak + 1 : 0;
    const points = calculatePoints(correct, timeSpent, currentStreak);
    
    setStreak(currentStreak);
    setSessionPoints(sessionPoints + points);

    // Guardar resultado
    const result: QuizResult = {
      questionId: `q_${currentIndex}`,
      wordId: currentWord.id,
      isCorrect: correct,
      timeSpent,
      attempts: 1,
    };
    setSessionResults([...sessionResults, result]);

    // Actualizar SRS
    const quality = mapResultToQuality(correct, 1, timeSpent);
    const flashcardState = await db.flashcardStates.get(currentWord.id);
    
    if (flashcardState) {
      const newState = calculateNextReview(flashcardState, quality);
      await db.flashcardStates.update(currentWord.id, newState);
    } else {
      const newState = calculateNextReview(
        {
          wordId: currentWord.id,
          easeFactor: 2.5,
          interval: 1,
          repetitions: 0,
          nextReview: new Date(),
        },
        quality
      );
      await db.flashcardStates.add(newState);
    }

    // Celebrar si es correcto
    if (correct && currentStreak > 0 && currentStreak % 5 === 0) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const completeSession = async () => {
    const correctAnswers = sessionResults.filter(r => r.isCorrect).length;
    const totalQuestions = sessionResults.length;

    // Actualizar progreso del usuario
    if (userProgress && user) {
      const { newProgress, leveledUp } = updateProgressAfterSession(
        userProgress,
        sessionPoints,
        correctAnswers,
        totalQuestions
      );

      await updateUserProgress(newProgress, user.id);
      await refreshProgress();

      if (leveledUp) {
        confetti({
          particleCount: 200,
          spread: 100,
          origin: { y: 0.5 }
        });
      }
    }

    setSessionComplete(true);
  };

  const playAudio = () => {
    // Implementar síntesis de voz
    const utterance = new SpeechSynthesisUtterance(currentWord.polish);
    utterance.lang = 'pl-PL';
    speechSynthesis.speak(utterance);
  };

  if (!user || !userProgress) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="spinner" style={{ borderLeftColor: '#0074bd' }}></div>
      </div>
    );
  }

  if (words.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <div className="card p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            No hay palabras disponibles
          </h2>
          <p className="text-gray-600 mb-6">
            {subcategoryId 
              ? 'Esta subcategoría aún no tiene vocabulario disponible.'
              : 'Esta categoría aún no tiene vocabulario disponible.'}
          </p>
          <button
            onClick={() => navigate(-1)}
            className="btn-primary"
          >
            Volver
          </button>
        </div>
      </div>
    );
  }

  if (sessionComplete) {
    const correctAnswers = sessionResults.filter(r => r.isCorrect).length;
    const accuracy = Math.round((correctAnswers / sessionResults.length) * 100);

    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <div className="card p-8">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¡Sesión Completada!
          </h2>
          
          <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(0, 116, 189, 0.1)' }}>
              <div className="text-3xl font-bold" style={{ color: '#0074bd' }}>
                {sessionPoints}
              </div>
              <div className="text-sm text-gray-600">Puntos</div>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600">
                {accuracy}%
              </div>
              <div className="text-sm text-gray-600">Precisión</div>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg">
              <div className="text-3xl font-bold text-orange-600">
                {streak}
              </div>
              <div className="text-sm text-gray-600">Racha máx.</div>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => window.location.reload()}
              className="w-full btn-primary"
            >
              Estudiar de nuevo
            </button>
            <button
              onClick={() => navigate(`/category/${categoryId}`)}
              className="w-full btn-secondary"
            >
              Volver a la categoría
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 pb-24 md:pb-8">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Atrás
        </button>

        <div className="flex items-center space-x-4">
          <div className="text-sm text-gray-600">
            {currentIndex + 1} / {words.length}
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setMode('flashcard')}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                mode === 'flashcard'
                  ? 'text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              style={mode === 'flashcard' ? { backgroundColor: '#0074bd' } : {}}
            >
              Flashcards
            </button>
            <button
              onClick={() => setMode('quiz')}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                mode === 'quiz'
                  ? 'text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              style={mode === 'quiz' ? { backgroundColor: '#0074bd' } : {}}
            >
              Quiz
            </button>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full transition-all duration-300"
          style={{ backgroundColor: '#0074bd', width: `${((currentIndex + 1) / words.length) * 100}%` }}
        ></div>
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

      {/* Main Content */}
      {mode === 'flashcard' ? (
        <div className="card p-8 min-h-[400px] flex flex-col items-center justify-center">
          <button
            onClick={playAudio}
            className="mb-4 p-3 rounded-full transition-colors"
            style={{ backgroundColor: 'rgba(0, 116, 189, 0.1)' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 116, 189, 0.2)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 116, 189, 0.1)'}
          >
            <Volume2 className="w-6 h-6" style={{ color: '#0074bd' }} />
          </button>

          <div
            className="text-center cursor-pointer"
            onClick={handleFlip}
          >
            <div className="text-5xl font-bold mb-4">
              {isFlipped ? currentWord.english : currentWord.polish}
            </div>
            <div className="text-gray-500 text-sm">
              {isFlipped ? 'Inglés' : 'Polaco'} - Click para voltear
            </div>
          </div>

          <div className="mt-8 flex space-x-4">
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className="btn-secondary"
            >
              Anterior
            </button>
            <button
              onClick={handleNext}
              className="btn-primary"
            >
              {currentIndex === words.length - 1 ? 'Finalizar' : 'Siguiente'}
            </button>
          </div>
        </div>
      ) : (
        <div className="card p-8">
          <button
            onClick={playAudio}
            className="mb-6 mx-auto block p-3 rounded-full transition-colors"
            style={{ backgroundColor: 'rgba(0, 116, 189, 0.1)' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 116, 189, 0.2)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 116, 189, 0.1)'}
          >
            <Volume2 className="w-6 h-6" style={{ color: '#0074bd' }} />
          </button>

          <div className="text-center mb-6">
            <div className="text-4xl font-bold mb-2">{currentWord.polish}</div>
            <div className="text-gray-500">¿Cómo se dice en inglés?</div>
          </div>

          {!showResult ? (
            <div className="max-w-md mx-auto">
              <input
                type="text"
                value={quizAnswer}
                onChange={(e) => setQuizAnswer(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && quizAnswer.trim()) {
                    e.preventDefault();
                    handleSubmitAnswer();
                  }
                }}
                placeholder="Escribe tu respuesta..."
                className="input mb-4"
                autoFocus
              />
              <button
                onClick={handleSubmitAnswer}
                disabled={!quizAnswer.trim()}
                className="w-full btn-primary"
              >
                Verificar (Enter)
              </button>
            </div>
          ) : (
            <div className="max-w-md mx-auto">
              <div
                className={`p-6 rounded-lg mb-4 ${
                  isCorrect ? 'bg-green-50' : 'bg-red-50'
                }`}
              >
                <div className="flex items-center justify-center mb-2">
                  {isCorrect ? (
                    <CheckCircle className="w-12 h-12 text-green-600" />
                  ) : (
                    <XCircle className="w-12 h-12 text-red-600" />
                  )}
                </div>
                <div className="text-center">
                  <div
                    className={`text-xl font-bold mb-2 ${
                      isCorrect ? 'text-green-800' : 'text-red-800'
                    }`}
                  >
                    {isCorrect ? '¡Correcto!' : 'Incorrecto'}
                  </div>
                  {!isCorrect && (
                    <div className="text-gray-700">
                      La respuesta correcta es: <strong>{currentWord.english}</strong>
                    </div>
                  )}
                </div>
              </div>
              <button 
                onClick={handleNext}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleNext();
                  }
                }}
                className="w-full btn-primary"
                autoFocus
              >
                {currentIndex === words.length - 1 ? 'Ver Resultados (Enter)' : 'Continuar (Enter)'}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default StudyPage;
