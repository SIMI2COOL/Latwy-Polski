import { db } from './database';
import { getUserSettings } from './database';

/**
 * Get the number of words studied today
 */
export async function getWordsStudiedToday(_userId: string): Promise<number> {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    // Count unique words studied today (words with flashcard states created/updated today)
    const todayStates = await db.flashcardStates
      .filter(state => {
        const lastReviewed = state.lastReviewed ? new Date(state.lastReviewed) : null;
        if (!lastReviewed) return false;
        return lastReviewed >= today && lastReviewed < tomorrow;
      })
      .toArray();

    // Get unique word IDs
    const uniqueWords = new Set(todayStates.map(state => state.wordId));
    return uniqueWords.size;
  } catch (error) {
    console.error('Error getting words studied today:', error);
    return 0;
  }
}

/**
 * Check if user has reached their daily goal
 */
export async function hasReachedDailyGoal(userId: string): Promise<boolean> {
  try {
    const settings = await getUserSettings();
    if (!settings) return false;

    const wordsStudied = await getWordsStudiedToday(userId);
    return wordsStudied >= settings.dailyGoal;
  } catch (error) {
    console.error('Error checking daily goal:', error);
    return false;
  }
}

/**
 * Get daily progress percentage
 */
export async function getDailyProgress(userId: string): Promise<number> {
  try {
    const settings = await getUserSettings();
    if (!settings || settings.dailyGoal === 0) return 0;

    const wordsStudied = await getWordsStudiedToday(userId);
    return Math.min(100, Math.round((wordsStudied / settings.dailyGoal) * 100));
  } catch (error) {
    console.error('Error getting daily progress:', error);
    return 0;
  }
}
