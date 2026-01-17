import { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db, updateUserProgress } from '@/utils/database';
import { VocabularyWord, QuizResult } from '@/types';
import { ArrowLeft, Volume2, CheckCircle, XCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { calculatePoints, updateProgressAfterSession } from '@/utils/gamification';
import {
  sendAchievementNotification,
  sendStreakNotification,
  sendGoalCompletionNotification,
  canSendNotifications,
} from '@/utils/notifications';
import { hasReachedDailyGoal } from '@/utils/dailyLimit';
import { calculateNextReview, mapResultToQuality } from '@/utils/spaced-repetition';
import { useUser } from '@/contexts/UserContext';
import { comparePolishText } from '@/utils/polishTextUtils';
import { playSuccessSound, playErrorSound, playLevelUpSound, playAchievementSound, playSoundIfEnabled } from '@/utils/soundEffects';
import { getUserSettings } from '@/utils/database';

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
  const [viewedWords, setViewedWords] = useState<Set<string>>(new Set()); // Track words viewed in flashcard mode
  const [flashcardComplete, setFlashcardComplete] = useState(false); // Track if flashcards are finished
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null); // Track if current answer is correct
  const [autoAdvanceTimeout, setAutoAdvanceTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);

  // Use ref to store the latest handleNext function
  const handleNextRef = useRef<() => void>(() => {});

  // Load voices when component mounts (some browsers load voices asynchronously)
  useEffect(() => {
    const loadVoices = () => {
      // Trigger voice loading by calling getVoices()
      speechSynthesis.getVoices();
    };

    // Try to load voices immediately
    loadVoices();

    // Some browsers fire this event when voices are loaded
    if ('onvoiceschanged' in speechSynthesis) {
      speechSynthesis.onvoiceschanged = loadVoices;
    }

    // Fallback: try again after a short delay
    const timeout = setTimeout(loadVoices, 100);

    return () => {
      clearTimeout(timeout);
      if ('onvoiceschanged' in speechSynthesis) {
        speechSynthesis.onvoiceschanged = null;
      }
    };
  }, []);

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

      // Shuffle the words
      const shuffled = wordsToStudy.sort(() => Math.random() - 0.5);
      setWords(shuffled);
    }

    loadWords();
  }, [categoryId, subcategoryId]);

  const currentWord = words[currentIndex];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    // Mark word as viewed when flipped
    if (currentWord && !isFlipped) {
      setViewedWords(prev => new Set(prev).add(currentWord.id));
    }
  };

  const handleNext = () => {
    // Clear any pending auto-advance timeout
    if (autoAdvanceTimeout) {
      clearTimeout(autoAdvanceTimeout);
      setAutoAdvanceTimeout(null);
    }
    
    // Reset answer state
    setIsAnswerCorrect(null);
    
    if (currentIndex < words.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
      setShowResult(false);
      setQuizAnswer('');
      setQuestionStartTime(Date.now());
    } else {
      // Mark current word as viewed
      if (currentWord) {
        setViewedWords(prev => new Set(prev).add(currentWord.id));
      }
      // If in flashcard mode, mark as complete
      if (mode === 'flashcard') {
        setFlashcardComplete(true);
      } else {
        completeSession();
      }
    }
  };

  const handlePrevious = () => {
    // Clear any pending auto-advance timeout
    if (autoAdvanceTimeout) {
      clearTimeout(autoAdvanceTimeout);
      setAutoAdvanceTimeout(null);
    }
    
    // Reset answer state
    setIsAnswerCorrect(null);
    
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
      setShowResult(false);
      setQuizAnswer('');
      setQuestionStartTime(Date.now());
    }
  };

  // Handle mode switch to quiz
  const handleSwitchToQuiz = () => {
    // Reorganize words: viewed words first (randomized), then unseen words
    const viewed = words.filter(w => viewedWords.has(w.id));
    const unseen = words.filter(w => !viewedWords.has(w.id));
    
    // Shuffle viewed words
    const shuffledViewed = viewed.sort(() => Math.random() - 0.5);
    // Shuffle unseen words
    const shuffledUnseen = unseen.sort(() => Math.random() - 0.5);
    
    // Combine: viewed first, then unseen
    const reorganizedWords = [...shuffledViewed, ...shuffledUnseen];
    setWords(reorganizedWords);
    setCurrentIndex(0);
    setMode('quiz');
    setShowResult(false);
    setQuizAnswer('');
    setQuestionStartTime(Date.now());
    setFlashcardComplete(false);
  };

  // Check answer in real-time as user types
  const checkAnswerRealTime = async (answer: string) => {
    if (!answer.trim() || !currentWord) return;

    const correct = comparePolishText(answer, currentWord.polish);
    setIsAnswerCorrect(correct);

    // If correct, set up auto-advance
    if (correct) {
      // Clear any existing timeout
      if (autoAdvanceTimeout) {
        clearTimeout(autoAdvanceTimeout);
      }

      // Wait a moment to show green highlight, then advance
      const timeout = setTimeout(async () => {
        await processCorrectAnswer();
      }, 800); // 800ms to show green highlight
      
      setAutoAdvanceTimeout(timeout);
    } else {
      // Clear timeout if answer becomes incorrect
      if (autoAdvanceTimeout) {
        clearTimeout(autoAdvanceTimeout);
        setAutoAdvanceTimeout(null);
      }
    }
  };

  // Process correct answer and move to next word
  const processCorrectAnswer = async () => {
    if (!user || !userProgress || !currentWord) return;

    const timeSpent = (Date.now() - questionStartTime) / 1000;

    // Calculate points
    const currentStreak = streak + 1;
    const points = calculatePoints(true, timeSpent, currentStreak);
    
    setStreak(currentStreak);
    setSessionPoints(sessionPoints + points);

    // Save result
    const result: QuizResult = {
      questionId: `q_${currentIndex}`,
      wordId: currentWord.id,
      isCorrect: true,
      timeSpent,
      attempts: 1,
    };
    setSessionResults([...sessionResults, result]);

    // Update SRS
    const quality = mapResultToQuality(true, 1, timeSpent);
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

    // Celebrate if on a streak milestone
    if (currentStreak > 0 && currentStreak % 5 === 0) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }

    // Move to next word
    handleNext();
  };

  const handleSubmitAnswer = async () => {
    // If result is already shown (incorrect answer), pressing Enter should move to next word
    if (showResult) {
      handleNext();
      return;
    }

    if (!quizAnswer.trim() || !user || !userProgress) {
      return;
    }

    const timeSpent = (Date.now() - questionStartTime) / 1000;
    // Compare user's Polish answer with correct Polish word
    const correct = comparePolishText(quizAnswer, currentWord.polish);

    // If already correct and auto-advancing, don't process again
    if (correct && isAnswerCorrect) {
      return;
    }

    // Calculate points
    const currentStreak = correct ? streak + 1 : 0;
    const points = calculatePoints(correct, timeSpent, currentStreak);
    
    setStreak(currentStreak);
    setSessionPoints(sessionPoints + points);

    // Save result
    const result: QuizResult = {
      questionId: `q_${currentIndex}`,
      wordId: currentWord.id,
      isCorrect: correct,
      timeSpent,
      attempts: 1,
    };
    setSessionResults([...sessionResults, result]);

    // Update SRS
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

    // Play sound effects
    const settings = await getUserSettings();
    if (correct) {
      await playSoundIfEnabled(playSuccessSound, settings);
    } else {
      await playSoundIfEnabled(playErrorSound, settings);
    }

    // If incorrect, show the result and wait for user to press Enter
    if (!correct) {
      setIsCorrect(false);
      setShowResult(true);
      setIsAnswerCorrect(false);
      // Blur the input field when showing result so Enter key works globally
      const inputElement = document.activeElement as HTMLElement;
      if (inputElement && inputElement.tagName === 'INPUT') {
        inputElement.blur();
      }
    }
  };

  // Update ref when handleNext changes
  useEffect(() => {
    handleNextRef.current = handleNext;
  }, [handleNext]);

  // Cleanup timeout on unmount or when it changes
  useEffect(() => {
    return () => {
      if (autoAdvanceTimeout) {
        clearTimeout(autoAdvanceTimeout);
      }
    };
  }, [autoAdvanceTimeout]);

  // Handle Enter key globally when result is shown in quiz mode
  useEffect(() => {
    if (mode !== 'quiz') return;

    const handleKeyPress = (e: KeyboardEvent) => {
      // Only handle Enter when result is shown
      if (e.key === 'Enter' && showResult) {
        e.preventDefault();
        e.stopPropagation();
        handleNextRef.current();
      }
    };

    // Use capture phase to catch the event early
    window.addEventListener('keydown', handleKeyPress, true);
    return () => window.removeEventListener('keydown', handleKeyPress, true);
  }, [showResult, mode]);

  const completeSession = async () => {
    const correctAnswers = sessionResults.filter(r => r.isCorrect).length;
    const totalQuestions = sessionResults.length;

    // Actualizar progreso del usuario
    if (userProgress && user) {
      const { newProgress, leveledUp, achievements } = updateProgressAfterSession(
        userProgress,
        sessionPoints,
        correctAnswers,
        totalQuestions
      );

      await updateUserProgress(newProgress, user.id);
      await refreshProgress();

      const settings = await getUserSettings();

      // Send notifications and play sounds for achievements
      if (achievements.length > 0) {
        await playSoundIfEnabled(playAchievementSound, settings);
        
        if (canSendNotifications()) {
          for (const achievementId of achievements) {
            const achievement = newProgress.achievements.find(a => a.id === achievementId);
            if (achievement) {
              await sendAchievementNotification(achievement.title, achievement.icon);
            }
          }
        }
      }

      // Send notification for streak milestones
      if (canSendNotifications() && newProgress.streak > userProgress.streak) {
        if (newProgress.streak === 7 || newProgress.streak === 30 || newProgress.streak % 10 === 0) {
          await sendStreakNotification(newProgress.streak);
        }
      }

      // Check if daily goal was reached
      if (canSendNotifications()) {
        const reachedGoal = await hasReachedDailyGoal(user.id);
        // If we just reached the goal, send notification
        if (reachedGoal) {
          await sendGoalCompletionNotification();
        }
      }

      if (leveledUp) {
        await playSoundIfEnabled(playLevelUpSound, settings);
        confetti({
          particleCount: 200,
          spread: 100,
          origin: { y: 0.5 }
        });
      }
    }

    setSessionComplete(true);
  };

  // Helper function to check if a voice is female
  const isFemaleVoice = (voice: SpeechSynthesisVoice): boolean => {
    const nameLower = voice.name.toLowerCase();
    // Check if voice has gender property (some browsers support this)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ('gender' in voice && (voice as any).gender === 'female') {
      return true;
    }
    // Check for common female voice indicators in the name
    const femaleIndicators = [
      'female', 'zira', 'hazel', 'karen', 'samantha', 'victoria', 'susan', 'linda',
      'kobieta', 'żeńska', 'żeński', 'feminine', 'woman', 'girl',
      // iOS voices
      'samantha', 'karen', 'moira', 'tessa', 'veena', 'fiona',
      // Android voices
      'female', 'woman',
      // Windows voices
      'zira', 'hazel'
    ];
    return femaleIndicators.some(indicator => nameLower.includes(indicator));
  };

  // Helper function to find a female voice for a given language
  const findFemaleVoice = (voices: SpeechSynthesisVoice[], langPrefix: string, strict: boolean = false): SpeechSynthesisVoice | null => {
    // First, try to find a female voice with the language, prioritizing local voices
    let femaleVoice = voices.find(voice => 
      voice.lang.startsWith(langPrefix) && 
      voice.localService && 
      isFemaleVoice(voice)
    ) || voices.find(voice => 
      voice.lang.startsWith(langPrefix) && 
      isFemaleVoice(voice)
    );
    
    // If strict mode, don't fall back to other languages
    if (strict) {
      return femaleVoice || null;
    }
    
    // If no female voice found in the language, try to find any female voice
    // (better than using a male voice) - but only for non-strict mode
    if (!femaleVoice) {
      femaleVoice = voices.find(voice => 
        voice.localService && isFemaleVoice(voice)
      ) || voices.find(voice => isFemaleVoice(voice));
    }
    
    return femaleVoice || null;
  };

  const playAudio = () => {
    // Stop any currently playing speech
    speechSynthesis.cancel();

    // Get available voices
    const voices = speechSynthesis.getVoices();
    
    // Play audio based on mode
    if (mode === 'quiz') {
      // In quiz mode, play the English word (the question)
      const utterance = new SpeechSynthesisUtterance(currentWord.english);
      utterance.lang = 'en-US';
      
      // Try to find a female English voice, prioritizing local voices
      let englishVoice = findFemaleVoice(voices, 'en');
      
      // Fallback to any English voice if no female voice found
      if (!englishVoice) {
        englishVoice = voices.find(voice => 
          voice.lang.startsWith('en') && voice.localService
        ) || voices.find(voice => voice.lang.startsWith('en')) || null;
      }
      
      if (englishVoice) {
        utterance.voice = englishVoice;
      }
      
      utterance.rate = 1.0; // Normal speed for clarity
      utterance.pitch = 1.1; // Slightly higher pitch for clearer sound
      utterance.volume = 1.0; // Maximum volume
      speechSynthesis.speak(utterance);
    } else {
      // In flashcard mode, play the Polish word
      const utterance = new SpeechSynthesisUtterance(currentWord.polish);
      utterance.lang = 'pl-PL';
      
      // STRICTLY find a female Polish voice - don't fall back to other languages
      let polishVoice = findFemaleVoice(voices, 'pl', true);
      
      // If no female Polish voice, try any Polish voice (but still Polish)
      if (!polishVoice) {
        polishVoice = voices.find(voice => 
          voice.lang.startsWith('pl') && voice.localService
        ) || voices.find(voice => voice.lang.startsWith('pl')) || null;
      }
      
      // If still no Polish voice found, try to find any voice that supports Polish
      if (!polishVoice) {
        polishVoice = voices.find(voice => 
          voice.lang.includes('pl') || voice.name.toLowerCase().includes('polish')
        ) || null;
      }
      
      if (polishVoice) {
        utterance.voice = polishVoice;
        utterance.lang = polishVoice.lang; // Use the voice's language
      } else {
        // Fallback: explicitly set Polish locale even if no Polish voice is available
        utterance.lang = 'pl-PL';
        console.warn('No Polish voice found, using default voice with pl-PL locale');
      }
      
      // Improve clarity: faster rate, higher pitch, higher volume
      utterance.rate = 1.0; // Normal speed for clarity
      utterance.pitch = 1.1; // Slightly higher pitch for clearer sound
      utterance.volume = 1.0; // Maximum volume
      
      speechSynthesis.speak(utterance);
    }
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
            No Words Available
          </h2>
          <p className="text-gray-600 mb-6">
            {subcategoryId 
              ? 'This subcategory does not have vocabulary available yet.'
              : 'This category does not have vocabulary available yet.'}
          </p>
          <button
            onClick={() => navigate(-1)}
            className="btn-primary"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  // Show flashcard completion screen
  if (flashcardComplete && mode === 'flashcard') {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <div className="card p-8">
          <div className="text-6xl mb-4">📚</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Flashcards Complete!
          </h2>
          <p className="text-gray-600 mb-8">
            You've reviewed all {words.length} words. Ready to test yourself?
          </p>

          <div className="space-y-3">
            <button
              onClick={handleSwitchToQuiz}
              className="w-full btn-primary"
            >
              Start Quiz
            </button>
            <button
              onClick={() => window.location.reload()}
              className="w-full btn-secondary"
            >
              Study Again
            </button>
            <button
              onClick={() => navigate(`/category/${categoryId}`)}
              className="w-full btn-secondary"
            >
              Back to Category
            </button>
          </div>
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
            Session Completed!
          </h2>
          
          <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(0, 116, 189, 0.1)' }}>
              <div className="text-3xl font-bold" style={{ color: '#0074bd' }}>
                {sessionPoints}
              </div>
              <div className="text-sm text-gray-600">Points</div>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600">
                {accuracy}%
              </div>
              <div className="text-sm text-gray-600">Accuracy</div>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg">
              <div className="text-3xl font-bold text-orange-600">
                {streak}
              </div>
              <div className="text-sm text-gray-600">Max Streak</div>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => window.location.reload()}
              className="w-full btn-primary"
            >
              Study Again
            </button>
            <button
              onClick={() => navigate(`/category/${categoryId}`)}
              className="w-full btn-secondary"
            >
              Back to Category
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
          Back
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
              onClick={() => {
                if (mode === 'flashcard') {
                  handleSwitchToQuiz();
                } else {
                  setMode('quiz');
                }
              }}
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
              {isFlipped ? 'English' : 'Polish'} - Click to flip
            </div>
          </div>

          <div className="mt-8 flex space-x-4">
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className="btn-secondary"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className="btn-primary"
            >
              {currentIndex === words.length - 1 ? 'Finish' : 'Next'}
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
            <div className="text-4xl font-bold mb-2">{currentWord.english}</div>
            <div className="text-gray-500">How do you say this in Polish?</div>
          </div>

          {!showResult ? (
            <div className="max-w-md mx-auto">
              <input
                type="text"
                value={quizAnswer}
                onChange={(e) => {
                  setQuizAnswer(e.target.value);
                  // Check answer in real-time
                  checkAnswerRealTime(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && quizAnswer.trim()) {
                    e.preventDefault();
                    e.stopPropagation();
                    handleSubmitAnswer();
                  }
                }}
                placeholder="Type the Polish word..."
                className={`input mb-4 transition-all duration-300 ${
                  isAnswerCorrect === true 
                    ? 'border-green-500 bg-green-50 ring-2 ring-green-300' 
                    : isAnswerCorrect === false
                    ? 'border-red-300'
                    : ''
                }`}
                autoFocus
              />
              <button
                onClick={handleSubmitAnswer}
                disabled={!quizAnswer.trim()}
                className="w-full btn-primary"
              >
                Check Answer (Enter)
              </button>
              <p className="text-xs text-gray-500 text-center mt-2">
                Correct answers are detected automatically
              </p>
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
                    {isCorrect ? 'Correct!' : 'Incorrect'}
                  </div>
                  {!isCorrect && (
                    <div className="text-gray-700">
                      The correct answer is: <strong>{currentWord.polish}</strong>
                    </div>
                  )}
                </div>
              </div>
              <div className="text-center mb-2 text-sm text-gray-500">
                Press Enter to continue
              </div>
              <button 
                onClick={handleNext}
                className="w-full btn-primary"
                autoFocus
              >
                {currentIndex === words.length - 1 ? 'View Results' : 'Continue'}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default StudyPage;
