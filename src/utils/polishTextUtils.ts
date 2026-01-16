/**
 * Utility functions for comparing Polish text
 * Handles case-insensitive comparison while preserving special characters
 */

/**
 * Normalizes Polish text for comparison
 * Removes extra whitespace and converts to lowercase
 */
export function normalizePolishText(text: string): string {
  return text.trim().toLowerCase();
}

/**
 * Compares two Polish strings (case-insensitive)
 * Returns true if they match after normalization
 */
export function comparePolishText(userAnswer: string, correctAnswer: string): boolean {
  const normalizedUser = normalizePolishText(userAnswer);
  const normalizedCorrect = normalizePolishText(correctAnswer);
  return normalizedUser === normalizedCorrect;
}
