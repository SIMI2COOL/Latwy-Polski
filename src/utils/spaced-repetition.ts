import { FlashcardState } from '@/types';

/**
 * Implementation of SM-2 (SuperMemo 2) algorithm for spaced repetition
 * This algorithm adjusts the review interval based on the difficulty of remembering the word
 */

export type Quality = 0 | 1 | 2 | 3 | 4 | 5;

/**
 * Calculates the next flashcard state based on answer quality
 * 
 * @param currentState - Current flashcard state
 * @param quality - Answer quality (0-5)
 *   0 - Not remembered at all
 *   1 - Incorrect answer, but remembered when seeing the correct one
 *   2 - Incorrect answer, difficult to remember
 *   3 - Correct answer with difficulty
 *   4 - Correct answer with hesitation
 *   5 - Perfect answer
 * 
 * @returns New flashcard state
 */
export function calculateNextReview(
  currentState: FlashcardState,
  quality: Quality
): FlashcardState {
  let { easeFactor, interval, repetitions } = currentState;
  
  // If answer quality was less than 3, reset interval
  if (quality < 3) {
    repetitions = 0;
    interval = 1;
  } else {
    // Increment repetitions
    repetitions += 1;
    
    // Calculate new interval based on repetitions
    if (repetitions === 1) {
      interval = 1;
    } else if (repetitions === 2) {
      interval = 6;
    } else {
      interval = Math.round(interval * easeFactor);
    }
  }
  
  // Update ease factor
  // EF' = EF + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))
  easeFactor = easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  
  // Ease factor cannot be less than 1.3
  if (easeFactor < 1.3) {
    easeFactor = 1.3;
  }
  
  // Calculate next review date
  const nextReview = new Date();
  nextReview.setDate(nextReview.getDate() + interval);
  
  return {
    ...currentState,
    easeFactor,
    interval,
    repetitions,
    nextReview,
    lastReviewed: new Date(),
  };
}

/**
 * Converts exercise result to a quality score (0-5)
 * 
 * @param isCorrect - Whether the answer was correct
 * @param attempts - Number of attempts made
 * @param timeSpent - Time spent in seconds
 * @returns Quality score
 */
export function mapResultToQuality(
  isCorrect: boolean,
  attempts: number = 1,
  timeSpent: number = 0
): Quality {
  if (!isCorrect) {
    return attempts > 2 ? 0 : 1;
  }
  
  // Correct answer
  if (attempts === 1) {
    // Perfect answer on first attempt
    // Adjust based on response time
    if (timeSpent < 3) return 5; // Less than 3 seconds = perfect
    if (timeSpent < 5) return 4; // Less than 5 seconds = with hesitation
    return 3; // More time = with difficulty
  }
  
  // Multiple attempts but finally correct
  return 2;
}

/**
 * Gets readable interval to display to user
 */
export function getIntervalDisplay(interval: number): string {
  if (interval === 0) return 'Today';
  if (interval === 1) return 'Tomorrow';
  if (interval < 7) return `In ${interval} days`;
  if (interval < 30) {
    const weeks = Math.floor(interval / 7);
    return `In ${weeks} ${weeks === 1 ? 'week' : 'weeks'}`;
  }
  const months = Math.floor(interval / 30);
  return `In ${months} ${months === 1 ? 'month' : 'months'}`;
}

/**
 * Determines if a flashcard should be reviewed today
 */
export function isDueForReview(state: FlashcardState): boolean {
  return state.nextReview <= new Date();
}

/**
 * Calculates user progress with a specific word
 * Returns a percentage from 0 to 100
 */
export function calculateWordMastery(state: FlashcardState): number {
  const { easeFactor, repetitions, interval } = state;
  
  // Ease factor contributes 40% (normalized from 1.3-2.5 to 0-100)
  const efScore = ((easeFactor - 1.3) / 1.2) * 40;
  
  // Repetitions contribute 30% (maximum 10 repetitions)
  const repScore = Math.min(repetitions / 10, 1) * 30;
  
  // Interval contributes 30% (maximum 180 days = 6 months)
  const intervalScore = Math.min(interval / 180, 1) * 30;
  
  return Math.round(efScore + repScore + intervalScore);
}
