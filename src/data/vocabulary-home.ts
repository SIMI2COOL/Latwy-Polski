import { VocabularyWord } from '@/types';

export const homeVocabulary: VocabularyWord[] = [
  // MEBLE (Muebles)
  { id: 'furn_001', polish: 'stół', spanish: 'mesa', category: 'home', subcategory: 'furniture', difficulty: 'beginner' },
  { id: 'furn_002', polish: 'krzesło', spanish: 'silla', category: 'home', subcategory: 'furniture', difficulty: 'beginner' },
  { id: 'furn_003', polish: 'kanapa', spanish: 'sofá', category: 'home', subcategory: 'furniture', difficulty: 'beginner' },
  { id: 'furn_004', polish: 'fotel', spanish: 'sillón', category: 'home', subcategory: 'furniture', difficulty: 'intermediate' },
  { id: 'furn_005', polish: 'łóżko', spanish: 'cama', category: 'home', subcategory: 'furniture', difficulty: 'beginner' },
  { id: 'furn_006', polish: 'szafa', spanish: 'armario', category: 'home', subcategory: 'furniture', difficulty: 'intermediate' },
  { id: 'furn_007', polish: 'komoda', spanish: 'cómoda', category: 'home', subcategory: 'furniture', difficulty: 'intermediate' },
  { id: 'furn_008', polish: 'szafka nocna', spanish: 'mesita de noche', category: 'home', subcategory: 'furniture', difficulty: 'intermediate' },
  { id: 'furn_009', polish: 'regał', spanish: 'estantería', category: 'home', subcategory: 'furniture', difficulty: 'intermediate' },
  { id: 'furn_010', polish: 'biurko', spanish: 'escritorio', category: 'home', subcategory: 'furniture', difficulty: 'beginner' },

  // KUCHNIA (Cocina)
  { id: 'kitchen_001', polish: 'kuchenka', spanish: 'cocina', category: 'home', subcategory: 'kitchen', difficulty: 'beginner' },
  { id: 'kitchen_002', polish: 'piekarnik', spanish: 'horno', category: 'home', subcategory: 'kitchen', difficulty: 'intermediate' },
  { id: 'kitchen_003', polish: 'lodówka', spanish: 'nevera', category: 'home', subcategory: 'kitchen', difficulty: 'beginner' },
  { id: 'kitchen_004', polish: 'zamrażarka', spanish: 'congelador', category: 'home', subcategory: 'kitchen', difficulty: 'intermediate' },
  { id: 'kitchen_005', polish: 'zmywarka', spanish: 'lavavajillas', category: 'home', subcategory: 'kitchen', difficulty: 'intermediate' },
  { id: 'kitchen_006', polish: 'mikrofalówka', spanish: 'microondas', category: 'home', subcategory: 'kitchen', difficulty: 'intermediate' },
  { id: 'kitchen_007', polish: 'zlew', spanish: 'fregadero', category: 'home', subcategory: 'kitchen', difficulty: 'intermediate' },
  { id: 'kitchen_008', polish: 'kran', spanish: 'grifo', category: 'home', subcategory: 'kitchen', difficulty: 'intermediate' },
  { id: 'kitchen_009', polish: 'blat', spanish: 'encimera', category: 'home', subcategory: 'kitchen', difficulty: 'intermediate' },
  { id: 'kitchen_010', polish: 'szafka', spanish: 'armario', category: 'home', subcategory: 'kitchen', difficulty: 'beginner' },

  // ŁAZIENKA (Baño)
  { id: 'bath_001', polish: 'wanna', spanish: 'bañera', category: 'home', subcategory: 'bathroom', difficulty: 'beginner' },
  { id: 'bath_002', polish: 'prysznic', spanish: 'ducha', category: 'home', subcategory: 'bathroom', difficulty: 'beginner' },
  { id: 'bath_003', polish: 'toaleta', spanish: 'inodoro', category: 'home', subcategory: 'bathroom', difficulty: 'beginner' },
  { id: 'bath_004', polish: 'umywalka', spanish: 'lavabo', category: 'home', subcategory: 'bathroom', difficulty: 'beginner' },
  { id: 'bath_005', polish: 'lustro', spanish: 'espejo', category: 'home', subcategory: 'bathroom', difficulty: 'beginner' },
  { id: 'bath_006', polish: 'mydło', spanish: 'jabón', category: 'home', subcategory: 'bathroom', difficulty: 'beginner' },
  { id: 'bath_007', polish: 'szampon', spanish: 'champú', category: 'home', subcategory: 'bathroom', difficulty: 'beginner' },
  { id: 'bath_008', polish: 'ręcznik', spanish: 'toalla', category: 'home', subcategory: 'bathroom', difficulty: 'beginner' },
  { id: 'bath_009', polish: 'szczoteczka do zębów', spanish: 'cepillo de dientes', category: 'home', subcategory: 'bathroom', difficulty: 'intermediate' },
  { id: 'bath_010', polish: 'pasta do zębów', spanish: 'pasta de dientes', category: 'home', subcategory: 'bathroom', difficulty: 'intermediate' },
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
