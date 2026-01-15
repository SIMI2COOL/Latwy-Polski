import { VocabularyWord } from '@/types';

export const homeVocabulary: VocabularyWord[] = [
  // MEBLE (Furniture)
  { id: 'furn_001', polish: 'stół', english: 'table', category: 'home', subcategory: 'furniture', difficulty: 'beginner' },
  { id: 'furn_002', polish: 'krzesło', english: 'chair', category: 'home', subcategory: 'furniture', difficulty: 'beginner' },
  { id: 'furn_003', polish: 'kanapa', english: 'sofa', category: 'home', subcategory: 'furniture', difficulty: 'beginner' },
  { id: 'furn_004', polish: 'fotel', english: 'armchair', category: 'home', subcategory: 'furniture', difficulty: 'intermediate' },
  { id: 'furn_005', polish: 'łóżko', english: 'bed', category: 'home', subcategory: 'furniture', difficulty: 'beginner' },
  { id: 'furn_006', polish: 'szafa', english: 'wardrobe', category: 'home', subcategory: 'furniture', difficulty: 'intermediate' },
  { id: 'furn_007', polish: 'komoda', english: 'chest of drawers', category: 'home', subcategory: 'furniture', difficulty: 'intermediate' },
  { id: 'furn_008', polish: 'szafka nocna', english: 'nightstand', category: 'home', subcategory: 'furniture', difficulty: 'intermediate' },
  { id: 'furn_009', polish: 'regał', english: 'bookshelf', category: 'home', subcategory: 'furniture', difficulty: 'intermediate' },
  { id: 'furn_010', polish: 'biurko', english: 'desk', category: 'home', subcategory: 'furniture', difficulty: 'beginner' },

  // KUCHNIA (Kitchen)
  { id: 'kitchen_001', polish: 'kuchenka', english: 'stove', category: 'home', subcategory: 'kitchen', difficulty: 'beginner' },
  { id: 'kitchen_002', polish: 'piekarnik', english: 'oven', category: 'home', subcategory: 'kitchen', difficulty: 'intermediate' },
  { id: 'kitchen_003', polish: 'lodówka', english: 'refrigerator', category: 'home', subcategory: 'kitchen', difficulty: 'beginner' },
  { id: 'kitchen_004', polish: 'zamrażarka', english: 'freezer', category: 'home', subcategory: 'kitchen', difficulty: 'intermediate' },
  { id: 'kitchen_005', polish: 'zmywarka', english: 'dishwasher', category: 'home', subcategory: 'kitchen', difficulty: 'intermediate' },
  { id: 'kitchen_006', polish: 'mikrofalówka', english: 'microwave', category: 'home', subcategory: 'kitchen', difficulty: 'intermediate' },
  { id: 'kitchen_007', polish: 'zlew', english: 'sink', category: 'home', subcategory: 'kitchen', difficulty: 'intermediate' },
  { id: 'kitchen_008', polish: 'kran', english: 'faucet', category: 'home', subcategory: 'kitchen', difficulty: 'intermediate' },
  { id: 'kitchen_009', polish: 'blat', english: 'countertop', category: 'home', subcategory: 'kitchen', difficulty: 'intermediate' },
  { id: 'kitchen_010', polish: 'szafka', english: 'cabinet', category: 'home', subcategory: 'kitchen', difficulty: 'beginner' },

  // ŁAZIENKA (Bathroom)
  { id: 'bath_001', polish: 'wanna', english: 'bathtub', category: 'home', subcategory: 'bathroom', difficulty: 'beginner' },
  { id: 'bath_002', polish: 'prysznic', english: 'shower', category: 'home', subcategory: 'bathroom', difficulty: 'beginner' },
  { id: 'bath_003', polish: 'toaleta', english: 'toilet', category: 'home', subcategory: 'bathroom', difficulty: 'beginner' },
  { id: 'bath_004', polish: 'umywalka', english: 'sink', category: 'home', subcategory: 'bathroom', difficulty: 'beginner' },
  { id: 'bath_005', polish: 'lustro', english: 'mirror', category: 'home', subcategory: 'bathroom', difficulty: 'beginner' },
  { id: 'bath_006', polish: 'mydło', english: 'soap', category: 'home', subcategory: 'bathroom', difficulty: 'beginner' },
  { id: 'bath_007', polish: 'szampon', english: 'shampoo', category: 'home', subcategory: 'bathroom', difficulty: 'beginner' },
  { id: 'bath_008', polish: 'ręcznik', english: 'towel', category: 'home', subcategory: 'bathroom', difficulty: 'beginner' },
  { id: 'bath_009', polish: 'szczoteczka do zębów', english: 'toothbrush', category: 'home', subcategory: 'bathroom', difficulty: 'intermediate' },
  { id: 'bath_010', polish: 'pasta do zębów', english: 'toothpaste', category: 'home', subcategory: 'bathroom', difficulty: 'intermediate' },
];

export async function seedHomeVocabulary() {
  const { db } = await import('@/utils/database');
  
  try {
    // Get existing home vocabulary IDs
    const existingHome = await db.vocabulary.where('category').equals('home').toArray();
    const existingIds = new Set(existingHome.map(w => w.id));
    
    // Filter out words that already exist
    const newWords = homeVocabulary.filter(word => !existingIds.has(word.id));
    
    if (newWords.length > 0) {
      await db.vocabulary.bulkAdd(newWords);
      console.log(`✅ Added ${newWords.length} new home words`);
    }
    
    // Update total word count
    const totalCount = await db.vocabulary.where('category').equals('home').count();
    await db.categories.update('home', { totalWords: totalCount });
    console.log(`✅ Home vocabulary: ${totalCount} total words (${homeVocabulary.length} in file)`);
    return true;
  } catch (error) {
    if (error instanceof Error && error.name === 'ConstraintError') {
      // Some words might already exist, try to add the rest
      const existingHome = await db.vocabulary.where('category').equals('home').toArray();
      const existingIds = new Set(existingHome.map(w => w.id));
      const newWords = homeVocabulary.filter(word => !existingIds.has(word.id));
      
      if (newWords.length > 0) {
        try {
          await db.vocabulary.bulkAdd(newWords);
          const totalCount = await db.vocabulary.where('category').equals('home').count();
          await db.categories.update('home', { totalWords: totalCount });
          console.log(`✅ Added ${newWords.length} new home words. Total: ${totalCount}`);
        } catch (e) {
          console.error('Error adding remaining home words:', e);
        }
      }
      return true;
    }
    console.error('Error seeding home vocabulary:', error);
    return false;
  }
}
