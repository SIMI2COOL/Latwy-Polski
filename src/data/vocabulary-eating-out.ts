import { VocabularyWord } from '@/types';

export const eatingOutVocabulary: VocabularyWord[] = [
  // KAWIARNIA (Café)
  { id: 'cafe_001', polish: 'kawa', spanish: 'café', category: 'eating-out', subcategory: 'cafe', difficulty: 'beginner' },
  { id: 'cafe_002', polish: 'herbata', spanish: 'té', category: 'eating-out', subcategory: 'cafe', difficulty: 'beginner' },
  { id: 'cafe_003', polish: 'espresso', spanish: 'espresso', category: 'eating-out', subcategory: 'cafe', difficulty: 'intermediate' },
  { id: 'cafe_004', polish: 'cappuccino', spanish: 'capuchino', category: 'eating-out', subcategory: 'cafe', difficulty: 'intermediate' },
  { id: 'cafe_005', polish: 'latte', spanish: 'café con leche', category: 'eating-out', subcategory: 'cafe', difficulty: 'intermediate' },
  { id: 'cafe_006', polish: 'kawa mrożona', spanish: 'café helado', category: 'eating-out', subcategory: 'cafe', difficulty: 'intermediate' },
  { id: 'cafe_007', polish: 'gorąca czekolada', spanish: 'chocolate caliente', category: 'eating-out', subcategory: 'cafe', difficulty: 'beginner' },
  { id: 'cafe_008', polish: 'ciastko', spanish: 'pastel', category: 'eating-out', subcategory: 'cafe', difficulty: 'beginner' },
  { id: 'cafe_009', polish: 'pączek', spanish: 'dona', category: 'eating-out', subcategory: 'cafe', difficulty: 'beginner' },
  { id: 'cafe_010', polish: 'rogalik', spanish: 'croissant', category: 'eating-out', subcategory: 'cafe', difficulty: 'intermediate' },
  { id: 'cafe_011', polish: 'muffinka', spanish: 'muffin', category: 'eating-out', subcategory: 'cafe', difficulty: 'intermediate' },
  { id: 'cafe_012', polish: 'herbatnik', spanish: 'galleta', category: 'eating-out', subcategory: 'cafe', difficulty: 'beginner' },

  // BAR (Bar)
  { id: 'bar_001', polish: 'piwo', spanish: 'cerveza', category: 'eating-out', subcategory: 'bar', difficulty: 'beginner' },
  { id: 'bar_002', polish: 'wino', spanish: 'vino', category: 'eating-out', subcategory: 'bar', difficulty: 'beginner' },
  { id: 'bar_003', polish: 'wódka', spanish: 'vodka', category: 'eating-out', subcategory: 'bar', difficulty: 'beginner' },
  { id: 'bar_004', polish: 'whisky', spanish: 'whisky', category: 'eating-out', subcategory: 'bar', difficulty: 'intermediate' },
  { id: 'bar_005', polish: 'rum', spanish: 'ron', category: 'eating-out', subcategory: 'bar', difficulty: 'intermediate' },
  { id: 'bar_006', polish: 'gin', spanish: 'ginebra', category: 'eating-out', subcategory: 'bar', difficulty: 'intermediate' },
  { id: 'bar_007', polish: 'koktajl', spanish: 'cóctel', category: 'eating-out', subcategory: 'bar', difficulty: 'intermediate' },
  { id: 'bar_008', polish: 'drink', spanish: 'bebida', category: 'eating-out', subcategory: 'bar', difficulty: 'beginner' },
  { id: 'bar_009', polish: 'sok', spanish: 'zumo', category: 'eating-out', subcategory: 'bar', difficulty: 'beginner' },
  { id: 'bar_010', polish: 'woda mineralna', spanish: 'agua mineral', category: 'eating-out', subcategory: 'bar', difficulty: 'beginner' },
  { id: 'bar_011', polish: 'cola', spanish: 'cola', category: 'eating-out', subcategory: 'bar', difficulty: 'beginner' },
  { id: 'bar_012', polish: 'tonik', spanish: 'tónica', category: 'eating-out', subcategory: 'bar', difficulty: 'intermediate' },

  // RESTAURACJA (Restaurante)
  { id: 'restaurant_001', polish: 'menu', spanish: 'menú', category: 'eating-out', subcategory: 'restaurant', difficulty: 'beginner' },
  { id: 'restaurant_002', polish: 'kelner', spanish: 'camarero', category: 'eating-out', subcategory: 'restaurant', difficulty: 'beginner' },
  { id: 'restaurant_003', polish: 'kelnerka', spanish: 'camarera', category: 'eating-out', subcategory: 'restaurant', difficulty: 'beginner' },
  { id: 'restaurant_004', polish: 'szef kuchni', spanish: 'chef', category: 'eating-out', subcategory: 'restaurant', difficulty: 'intermediate' },
  { id: 'restaurant_005', polish: 'stolik', spanish: 'mesa', category: 'eating-out', subcategory: 'restaurant', difficulty: 'beginner' },
  { id: 'restaurant_006', polish: 'krzesło', spanish: 'silla', category: 'eating-out', subcategory: 'restaurant', difficulty: 'beginner' },
  { id: 'restaurant_007', polish: 'talerz', spanish: 'plato', category: 'eating-out', subcategory: 'restaurant', difficulty: 'beginner' },
  { id: 'restaurant_008', polish: 'szklanka', spanish: 'vaso', category: 'eating-out', subcategory: 'restaurant', difficulty: 'beginner' },
  { id: 'restaurant_009', polish: 'sztućce', spanish: 'cubiertos', category: 'eating-out', subcategory: 'restaurant', difficulty: 'intermediate' },
  { id: 'restaurant_010', polish: 'nóż', spanish: 'cuchillo', category: 'eating-out', subcategory: 'restaurant', difficulty: 'beginner' },
  { id: 'restaurant_011', polish: 'widelec', spanish: 'tenedor', category: 'eating-out', subcategory: 'restaurant', difficulty: 'beginner' },
  { id: 'restaurant_012', polish: 'łyżka', spanish: 'cuchara', category: 'eating-out', subcategory: 'restaurant', difficulty: 'beginner' },
  { id: 'restaurant_013', polish: 'serwetka', spanish: 'servilleta', category: 'eating-out', subcategory: 'restaurant', difficulty: 'intermediate' },
  { id: 'restaurant_014', polish: 'rachunek', spanish: 'cuenta', category: 'eating-out', subcategory: 'restaurant', difficulty: 'intermediate' },
  { id: 'restaurant_015', polish: 'napiwek', spanish: 'propina', category: 'eating-out', subcategory: 'restaurant', difficulty: 'intermediate' },

  // FAST FOOD (Comida rápida)
  { id: 'fastfood_001', polish: 'hamburger', spanish: 'hamburguesa', category: 'eating-out', subcategory: 'fastfood', difficulty: 'beginner' },
  { id: 'fastfood_002', polish: 'cheeseburger', spanish: 'hamburguesa con queso', category: 'eating-out', subcategory: 'fastfood', difficulty: 'beginner' },
  { id: 'fastfood_003', polish: 'frytki', spanish: 'patatas fritas', category: 'eating-out', subcategory: 'fastfood', difficulty: 'beginner' },
  { id: 'fastfood_004', polish: 'pizza', spanish: 'pizza', category: 'eating-out', subcategory: 'fastfood', difficulty: 'beginner' },
  { id: 'fastfood_005', polish: 'hot dog', spanish: 'perrito caliente', category: 'eating-out', subcategory: 'fastfood', difficulty: 'beginner' },
  { id: 'fastfood_006', polish: 'kanapka', spanish: 'bocadillo', category: 'eating-out', subcategory: 'fastfood', difficulty: 'beginner' },
  { id: 'fastfood_007', polish: 'kebab', spanish: 'kebab', category: 'eating-out', subcategory: 'fastfood', difficulty: 'intermediate' },
  { id: 'fastfood_008', polish: 'nuggetsy', spanish: 'nuggets', category: 'eating-out', subcategory: 'fastfood', difficulty: 'beginner' },
  { id: 'fastfood_009', polish: 'taco', spanish: 'taco', category: 'eating-out', subcategory: 'fastfood', difficulty: 'intermediate' },
  { id: 'fastfood_010', polish: 'burrito', spanish: 'burrito', category: 'eating-out', subcategory: 'fastfood', difficulty: 'intermediate' },

  // ŚNIADANIE (Desayuno)
  { id: 'breakfast_001', polish: 'jajko', spanish: 'huevo', category: 'eating-out', subcategory: 'breakfast', difficulty: 'beginner' },
  { id: 'breakfast_002', polish: 'jajecznica', spanish: 'huevos revueltos', category: 'eating-out', subcategory: 'breakfast', difficulty: 'intermediate' },
  { id: 'breakfast_003', polish: 'jajko sadzone', spanish: 'huevo frito', category: 'eating-out', subcategory: 'breakfast', difficulty: 'intermediate' },
  { id: 'breakfast_004', polish: 'omlet', spanish: 'tortilla', category: 'eating-out', subcategory: 'breakfast', difficulty: 'intermediate' },
  { id: 'breakfast_005', polish: 'płatki śniadaniowe', spanish: 'cereales', category: 'eating-out', subcategory: 'breakfast', difficulty: 'beginner' },
  { id: 'breakfast_006', polish: 'owsianka', spanish: 'avena', category: 'eating-out', subcategory: 'breakfast', difficulty: 'intermediate' },
  { id: 'breakfast_007', polish: 'naleśnik', spanish: 'tortita', category: 'eating-out', subcategory: 'breakfast', difficulty: 'intermediate' },
  { id: 'breakfast_008', polish: 'gofr', spanish: 'gofre', category: 'eating-out', subcategory: 'breakfast', difficulty: 'intermediate' },
  { id: 'breakfast_009', polish: 'tost', spanish: 'tostada', category: 'eating-out', subcategory: 'breakfast', difficulty: 'beginner' },
  { id: 'breakfast_010', polish: 'masło', spanish: 'mantequilla', category: 'eating-out', subcategory: 'breakfast', difficulty: 'beginner' },
  { id: 'breakfast_011', polish: 'dżem', spanish: 'mermelada', category: 'eating-out', subcategory: 'breakfast', difficulty: 'beginner' },
  { id: 'breakfast_012', polish: 'miód', spanish: 'miel', category: 'eating-out', subcategory: 'breakfast', difficulty: 'beginner' },

  // OBIAD (Cena)
  { id: 'dinner_001', polish: 'zupa', spanish: 'sopa', category: 'eating-out', subcategory: 'dinner', difficulty: 'beginner' },
  { id: 'dinner_002', polish: 'rosół', spanish: 'caldo', category: 'eating-out', subcategory: 'dinner', difficulty: 'intermediate' },
  { id: 'dinner_003', polish: 'sałatka', spanish: 'ensalada', category: 'eating-out', subcategory: 'dinner', difficulty: 'beginner' },
  { id: 'dinner_004', polish: 'makaron', spanish: 'pasta', category: 'eating-out', subcategory: 'dinner', difficulty: 'beginner' },
  { id: 'dinner_005', polish: 'ryż', spanish: 'arroz', category: 'eating-out', subcategory: 'dinner', difficulty: 'beginner' },
  { id: 'dinner_006', polish: 'ziemniaki', spanish: 'patatas', category: 'eating-out', subcategory: 'dinner', difficulty: 'beginner' },
  { id: 'dinner_007', polish: 'stek', spanish: 'filete', category: 'eating-out', subcategory: 'dinner', difficulty: 'intermediate' },
  { id: 'dinner_008', polish: 'kotlet', spanish: 'chuleta', category: 'eating-out', subcategory: 'dinner', difficulty: 'intermediate' },
  { id: 'dinner_009', polish: 'ryba', spanish: 'pescado', category: 'eating-out', subcategory: 'dinner', difficulty: 'beginner' },
  { id: 'dinner_010', polish: 'kurczak', spanish: 'pollo', category: 'eating-out', subcategory: 'dinner', difficulty: 'beginner' },
  { id: 'dinner_011', polish: 'sos', spanish: 'salsa', category: 'eating-out', subcategory: 'dinner', difficulty: 'beginner' },
  { id: 'dinner_012', polish: 'przyprawa', spanish: 'condimento', category: 'eating-out', subcategory: 'dinner', difficulty: 'intermediate' },
];

export async function seedEatingOutVocabulary() {
  const { db } = await import('@/utils/database');
  
  try {
    // Get existing eating-out vocabulary IDs
    const existingEatingOut = await db.vocabulary.where('category').equals('eating-out').toArray();
    const existingIds = new Set(existingEatingOut.map(w => w.id));
    
    // Filter out words that already exist
    const newWords = eatingOutVocabulary.filter(word => !existingIds.has(word.id));
    
    if (newWords.length > 0) {
      await db.vocabulary.bulkAdd(newWords);
      console.log(`✅ Added ${newWords.length} new eating-out words`);
    }
    
    // Update total word count
    const totalCount = await db.vocabulary.where('category').equals('eating-out').count();
    await db.categories.update('eating-out', { totalWords: totalCount });
    console.log(`✅ Eating Out vocabulary: ${totalCount} total words (${eatingOutVocabulary.length} in file)`);
    return true;
  } catch (error) {
    if (error instanceof Error && error.name === 'ConstraintError') {
      // Some words might already exist, try to add the rest
      const existingEatingOut = await db.vocabulary.where('category').equals('eating-out').toArray();
      const existingIds = new Set(existingEatingOut.map(w => w.id));
      const newWords = eatingOutVocabulary.filter(word => !existingIds.has(word.id));
      
      if (newWords.length > 0) {
        try {
          await db.vocabulary.bulkAdd(newWords);
          const totalCount = await db.vocabulary.where('category').equals('eating-out').count();
          await db.categories.update('eating-out', { totalWords: totalCount });
          console.log(`✅ Added ${newWords.length} new eating-out words. Total: ${totalCount}`);
        } catch (e) {
          console.error('Error adding remaining eating-out words:', e);
        }
      }
      return true;
    }
    console.error('Error seeding eating out vocabulary:', error);
    return false;
  }
}
