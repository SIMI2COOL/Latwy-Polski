import { VocabularyWord } from '@/types';

export const foodVocabulary: VocabularyWord[] = [
  // MIĘSO (Meat)
  { id: 'meat_001', polish: 'boczek', english: 'bacon', category: 'food', subcategory: 'meat', difficulty: 'beginner' },
  { id: 'meat_002', polish: 'kiełbasa', english: 'sausage', category: 'food', subcategory: 'meat', difficulty: 'beginner' },
  { id: 'meat_003', polish: 'wątróbka', english: 'liver', category: 'food', subcategory: 'meat', difficulty: 'intermediate' },
  { id: 'meat_004', polish: 'szynka', english: 'ham', category: 'food', subcategory: 'meat', difficulty: 'beginner' },
  { id: 'meat_005', polish: 'kurczak', english: 'chicken', category: 'food', subcategory: 'meat', difficulty: 'beginner' },
  { id: 'meat_006', polish: 'kaczka', english: 'duck', category: 'food', subcategory: 'meat', difficulty: 'intermediate' },
  { id: 'meat_007', polish: 'gęś', english: 'goose', category: 'food', subcategory: 'meat', difficulty: 'intermediate' },
  { id: 'meat_008', polish: 'indyk', english: 'turkey', category: 'food', subcategory: 'meat', difficulty: 'intermediate' },
  { id: 'meat_009', polish: 'wołowina', english: 'beef', category: 'food', subcategory: 'meat', difficulty: 'intermediate' },
  { id: 'meat_010', polish: 'wieprzowina', english: 'pork', category: 'food', subcategory: 'meat', difficulty: 'intermediate' },
  { id: 'meat_011', polish: 'jagnięcina', english: 'lamb', category: 'food', subcategory: 'meat', difficulty: 'intermediate' },
  { id: 'meat_012', polish: 'cielęcina', english: 'veal', category: 'food', subcategory: 'meat', difficulty: 'advanced' },

  // WARZYWA (Vegetables)
  { id: 'veg_001', polish: 'pomidor', english: 'tomato', category: 'food', subcategory: 'vegetables', difficulty: 'beginner' },
  { id: 'veg_002', polish: 'ogórek', english: 'cucumber', category: 'food', subcategory: 'vegetables', difficulty: 'beginner' },
  { id: 'veg_003', polish: 'sałata', english: 'lettuce', category: 'food', subcategory: 'vegetables', difficulty: 'beginner' },
  { id: 'veg_004', polish: 'brokuł', english: 'broccoli', category: 'food', subcategory: 'vegetables', difficulty: 'intermediate' },
  { id: 'veg_005', polish: 'kalafior', english: 'cauliflower', category: 'food', subcategory: 'vegetables', difficulty: 'intermediate' },
  { id: 'veg_006', polish: 'kapusta', english: 'cabbage', category: 'food', subcategory: 'vegetables', difficulty: 'intermediate' },
  { id: 'veg_007', polish: 'szpinak', english: 'spinach', category: 'food', subcategory: 'vegetables', difficulty: 'intermediate' },
  { id: 'veg_008', polish: 'marchew', english: 'carrot', category: 'food', subcategory: 'vegetables', difficulty: 'beginner' },
  { id: 'veg_009', polish: 'ziemniak', english: 'potato', category: 'food', subcategory: 'vegetables', difficulty: 'beginner' },
  { id: 'veg_010', polish: 'cebula', english: 'onion', category: 'food', subcategory: 'vegetables', difficulty: 'beginner' },
  { id: 'veg_011', polish: 'czosnek', english: 'garlic', category: 'food', subcategory: 'vegetables', difficulty: 'intermediate' },
  { id: 'veg_012', polish: 'papryka', english: 'pepper', category: 'food', subcategory: 'vegetables', difficulty: 'intermediate' },
  { id: 'veg_013', polish: 'dynia', english: 'pumpkin', category: 'food', subcategory: 'vegetables', difficulty: 'intermediate' },
  { id: 'veg_014', polish: 'cukinia', english: 'zucchini', category: 'food', subcategory: 'vegetables', difficulty: 'intermediate' },
  { id: 'veg_015', polish: 'bakłażan', english: 'eggplant', category: 'food', subcategory: 'vegetables', difficulty: 'intermediate' },
  { id: 'veg_016', polish: 'kukurydza', english: 'corn', category: 'food', subcategory: 'vegetables', difficulty: 'beginner' },
  { id: 'veg_017', polish: 'groszek', english: 'peas', category: 'food', subcategory: 'vegetables', difficulty: 'beginner' },
  { id: 'veg_018', polish: 'fasola', english: 'beans', category: 'food', subcategory: 'vegetables', difficulty: 'intermediate' },
  { id: 'veg_019', polish: 'szparagi', english: 'asparagus', category: 'food', subcategory: 'vegetables', difficulty: 'advanced' },
  { id: 'veg_020', polish: 'pieczarka', english: 'mushroom', category: 'food', subcategory: 'vegetables', difficulty: 'intermediate' },

  // OWOCE (Fruits)
  { id: 'fruit_001', polish: 'jabłko', english: 'apple', category: 'food', subcategory: 'fruits', difficulty: 'beginner' },
  { id: 'fruit_002', polish: 'gruszka', english: 'pear', category: 'food', subcategory: 'fruits', difficulty: 'beginner' },
  { id: 'fruit_003', polish: 'pomarańcza', english: 'orange', category: 'food', subcategory: 'fruits', difficulty: 'beginner' },
  { id: 'fruit_004', polish: 'cytryna', english: 'lemon', category: 'food', subcategory: 'fruits', difficulty: 'beginner' },
  { id: 'fruit_005', polish: 'limonka', english: 'lime', category: 'food', subcategory: 'fruits', difficulty: 'intermediate' },
  { id: 'fruit_006', polish: 'brzoskwinia', english: 'peach', category: 'food', subcategory: 'fruits', difficulty: 'intermediate' },
  { id: 'fruit_007', polish: 'morela', english: 'apricot', category: 'food', subcategory: 'fruits', difficulty: 'intermediate' },
  { id: 'fruit_008', polish: 'śliwka', english: 'plum', category: 'food', subcategory: 'fruits', difficulty: 'intermediate' },
  { id: 'fruit_009', polish: 'wiśnia', english: 'cherry', category: 'food', subcategory: 'fruits', difficulty: 'intermediate' },
  { id: 'fruit_010', polish: 'truskawka', english: 'strawberry', category: 'food', subcategory: 'fruits', difficulty: 'beginner' },
  { id: 'fruit_011', polish: 'malina', english: 'raspberry', category: 'food', subcategory: 'fruits', difficulty: 'intermediate' },
  { id: 'fruit_012', polish: 'jeżyna', english: 'blackberry', category: 'food', subcategory: 'fruits', difficulty: 'intermediate' },
  { id: 'fruit_013', polish: 'borówka', english: 'blueberry', category: 'food', subcategory: 'fruits', difficulty: 'intermediate' },
  { id: 'fruit_014', polish: 'banan', english: 'banana', category: 'food', subcategory: 'fruits', difficulty: 'beginner' },
  { id: 'fruit_015', polish: 'arbuz', english: 'watermelon', category: 'food', subcategory: 'fruits', difficulty: 'intermediate' },
  { id: 'fruit_016', polish: 'melon', english: 'melon', category: 'food', subcategory: 'fruits', difficulty: 'intermediate' },
  { id: 'fruit_017', polish: 'winogrono', english: 'grape', category: 'food', subcategory: 'fruits', difficulty: 'intermediate' },
  { id: 'fruit_018', polish: 'ananas', english: 'pineapple', category: 'food', subcategory: 'fruits', difficulty: 'intermediate' },
  { id: 'fruit_019', polish: 'mango', english: 'mango', category: 'food', subcategory: 'fruits', difficulty: 'intermediate' },
  { id: 'fruit_020', polish: 'kiwi', english: 'kiwi', category: 'food', subcategory: 'fruits', difficulty: 'beginner' },

  // PIECZYWO (Bread)
  { id: 'bread_001', polish: 'chleb', english: 'bread', category: 'food', subcategory: 'bread', difficulty: 'beginner' },
  { id: 'bread_002', polish: 'bułka', english: 'roll', category: 'food', subcategory: 'bread', difficulty: 'beginner' },
  { id: 'bread_003', polish: 'bagietka', english: 'baguette', category: 'food', subcategory: 'bread', difficulty: 'intermediate' },
  { id: 'bread_004', polish: 'kromka', english: 'slice', category: 'food', subcategory: 'bread', difficulty: 'beginner' },
  { id: 'bread_005', polish: 'skórka', english: 'crust', category: 'food', subcategory: 'bread', difficulty: 'intermediate' },
  { id: 'bread_006', polish: 'miękisz', english: 'crumb', category: 'food', subcategory: 'bread', difficulty: 'advanced' },
  { id: 'bread_007', polish: 'mąka', english: 'flour', category: 'food', subcategory: 'bread', difficulty: 'intermediate' },
  { id: 'bread_008', polish: 'drożdże', english: 'yeast', category: 'food', subcategory: 'bread', difficulty: 'advanced' },
];

export async function seedFoodVocabulary() {
  const { db } = await import('@/utils/database');
  
  try {
    // Get existing food vocabulary IDs
    const existingFood = await db.vocabulary.where('category').equals('food').toArray();
    const existingIds = new Set(existingFood.map(w => w.id));
    
    // Filter out words that already exist
    const newWords = foodVocabulary.filter(word => !existingIds.has(word.id));
    
    if (newWords.length > 0) {
      await db.vocabulary.bulkAdd(newWords);
      console.log(`✅ Added ${newWords.length} new food words`);
    }
    
    // Update total word count
    const totalCount = await db.vocabulary.where('category').equals('food').count();
    await db.categories.update('food', { totalWords: totalCount });
    console.log(`✅ Food vocabulary: ${totalCount} total words (${foodVocabulary.length} in file)`);
    return true;
  } catch (error) {
    if (error instanceof Error && error.name === 'ConstraintError') {
      // Some words might already exist, try to add the rest
      const existingFood = await db.vocabulary.where('category').equals('food').toArray();
      const existingIds = new Set(existingFood.map(w => w.id));
      const newWords = foodVocabulary.filter(word => !existingIds.has(word.id));
      
      if (newWords.length > 0) {
        try {
          await db.vocabulary.bulkAdd(newWords);
          const totalCount = await db.vocabulary.where('category').equals('food').count();
          await db.categories.update('food', { totalWords: totalCount });
          console.log(`✅ Added ${newWords.length} new food words. Total: ${totalCount}`);
        } catch (e) {
          console.error('Error adding remaining food words:', e);
        }
      }
      return true;
    }
    console.error('Error seeding food vocabulary:', error);
    return false;
  }
}
