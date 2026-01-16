import { db } from './database';
import { calculateWordMastery } from './spaced-repetition';

/**
 * Calculates the completion percentage for a category
 * Based on flashcard states and word mastery
 */
export async function calculateCategoryProgress(categoryId: string): Promise<number> {
  try {
    // Get all words in the category
    const words = await db.vocabulary
      .where('category')
      .equals(categoryId)
      .toArray();

    if (words.length === 0) return 0;

    // Get flashcard states for all words
    const wordIds = words.map((w) => w.id);
    const flashcardStates = await db.flashcardStates
      .where('wordId')
      .anyOf(wordIds)
      .toArray();

    // Create a map for quick lookup
    const stateMap = new Map(flashcardStates.map((s) => [s.wordId, s]));

    // Calculate mastery for each word
    let totalMastery = 0;
    let wordsWithProgress = 0;

    for (const word of words) {
      const state = stateMap.get(word.id);
      if (state) {
        const mastery = calculateWordMastery(state);
        totalMastery += mastery;
        wordsWithProgress++;
      }
    }

    // If no words have been studied, return 0
    if (wordsWithProgress === 0) return 0;

    // Consider a word "mastered" if mastery >= 80%
    // Progress is based on how many words are mastered
    const masteredWords = words.filter((word) => {
      const state = stateMap.get(word.id);
      if (!state) return false;
      return calculateWordMastery(state) >= 80;
    }).length;

    // Progress is percentage of words mastered
    const progress = (masteredWords / words.length) * 100;

    return Math.min(100, Math.round(progress));
  } catch (error) {
    console.error('Error calculating category progress:', error);
    return 0;
  }
}
