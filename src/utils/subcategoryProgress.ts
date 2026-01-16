import { db } from './database';

/**
 * Calculates the completion percentage for a subcategory
 * Returns 0-100, where 100 means all words have been studied and answered correctly
 */
export async function calculateSubcategoryProgress(
  categoryId: string,
  subcategoryId: string
): Promise<number> {
  try {
    // Get all words in the subcategory
    let words;
    try {
      words = await db.vocabulary
        .where('[category+subcategory]')
        .equals([categoryId, subcategoryId])
        .toArray();
    } catch {
      // Fallback if compound index doesn't work
      const allCategoryWords = await db.vocabulary
        .where('category')
        .equals(categoryId)
        .toArray();
      words = allCategoryWords.filter(word => word.subcategory === subcategoryId);
    }

    if (words.length === 0) return 0;

    // Get flashcard states for all words
    const wordIds = words.map((w) => w.id);
    const flashcardStates = await db.flashcardStates
      .where('wordId')
      .anyOf(wordIds)
      .toArray();

    // Create a map for quick lookup
    const stateMap = new Map(flashcardStates.map((s) => [s.wordId, s]));

    // Count words that have been studied and answered correctly
    // A word is considered "studied correctly" if:
    // - It has a flashcard state (been studied)
    // - It has repetitions > 0 (indicates at least one correct answer, since incorrect answers reset repetitions to 0)
    // OR it has been reviewed and easeFactor > 2.5 (indicates correct answer increased ease from initial 2.5)
    const completedWords = words.filter((word) => {
      const state = stateMap.get(word.id);
      if (!state) return false;
      // Word has been studied and answered correctly at least once
      // repetitions > 0 means it was answered correctly (incorrect answers reset to 0)
      // OR if it has lastReviewed and easeFactor > 2.5, it means it was answered correctly (ease increased from 2.5)
      // Note: When quality >= 3 (correct answer), repetitions becomes 1, so repetitions > 0 is the primary check
      return state.repetitions > 0 || (state.lastReviewed && state.easeFactor > 2.5);
    }).length;

    // Progress is percentage of words completed
    const progress = (completedWords / words.length) * 100;

    return Math.min(100, Math.round(progress));
  } catch (error) {
    console.error('Error calculating subcategory progress:', error);
    return 0;
  }
}

/**
 * Checks if a subcategory is perfectly completed (all words studied and answered correctly)
 */
export async function isSubcategoryComplete(
  categoryId: string,
  subcategoryId: string
): Promise<boolean> {
  try {
    // Get all words in the subcategory
    let words;
    try {
      words = await db.vocabulary
        .where('[category+subcategory]')
        .equals([categoryId, subcategoryId])
        .toArray();
    } catch {
      const allCategoryWords = await db.vocabulary
        .where('category')
        .equals(categoryId)
        .toArray();
      words = allCategoryWords.filter(word => word.subcategory === subcategoryId);
    }

    if (words.length === 0) return false;

    // Get flashcard states for all words
    const wordIds = words.map((w) => w.id);
    const flashcardStates = await db.flashcardStates
      .where('wordId')
      .anyOf(wordIds)
      .toArray();

    // Create a map for quick lookup
    const stateMap = new Map(flashcardStates.map((s) => [s.wordId, s]));

    // Check if ALL words have been studied and answered correctly
    const allCompleted = words.every((word) => {
      const state = stateMap.get(word.id);
      if (!state) return false;
      // Word has been studied and answered correctly at least once
      // repetitions > 0 means it was answered correctly (incorrect answers reset to 0)
      // OR if it has lastReviewed and easeFactor > 2.5, it means it was answered correctly (ease increased from 2.5)
      return state.repetitions > 0 || (state.lastReviewed && state.easeFactor > 2.5);
    });

    return allCompleted;
  } catch (error) {
    console.error('Error checking subcategory completion:', error);
    return false;
  }
}
