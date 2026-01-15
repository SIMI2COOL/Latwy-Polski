import { VocabularyWord } from '@/types';

/**
 * Comprehensive vocabulary for all categories
 * This file contains vocabulary for categories that don't have dedicated files yet
 */

// All major categories now have dedicated files:
// - vocabulary-food.ts
// - vocabulary-home.ts
// - vocabulary-appearance.ts
// - vocabulary-eating-out.ts
// - vocabulary-environment.ts
// - vocabulary-health.ts
// - vocabulary-leisure.ts
// - vocabulary-reference.ts
// - vocabulary-services.ts
// - vocabulary-shopping.ts
// - vocabulary-sports.ts
// - vocabulary-study.ts
// - vocabulary-transport.ts
// - vocabulary-work.ts
// This file is now minimal and only contains basic vocabulary for categories that might need expansion

// Combined vocabulary for seeding (all major categories have dedicated files now)
export const allVocabulary: VocabularyWord[] = [];

export async function seedAllVocabulary() {
  // All major categories now have dedicated seed functions
  // This function is kept for backward compatibility but does nothing
  console.log('All vocabulary is handled by dedicated seed functions');
  return true;
}
