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

  // NABIAŁ (Dairy Products)
  { id: 'dairy_001', polish: 'mleko', english: 'milk', category: 'food', subcategory: 'dairy', difficulty: 'beginner' },
  { id: 'dairy_002', polish: 'ser', english: 'cheese', category: 'food', subcategory: 'dairy', difficulty: 'beginner' },
  { id: 'dairy_003', polish: 'masło', english: 'butter', category: 'food', subcategory: 'dairy', difficulty: 'beginner' },
  { id: 'dairy_004', polish: 'jogurt', english: 'yogurt', category: 'food', subcategory: 'dairy', difficulty: 'beginner' },
  { id: 'dairy_005', polish: 'śmietana', english: 'cream', category: 'food', subcategory: 'dairy', difficulty: 'intermediate' },
  { id: 'dairy_006', polish: 'twaróg', english: 'cottage cheese', category: 'food', subcategory: 'dairy', difficulty: 'intermediate' },
  { id: 'dairy_007', polish: 'kefir', english: 'kefir', category: 'food', subcategory: 'dairy', difficulty: 'intermediate' },
  { id: 'dairy_008', polish: 'serek', english: 'cream cheese', category: 'food', subcategory: 'dairy', difficulty: 'intermediate' },
  { id: 'dairy_009', polish: 'maślanka', english: 'buttermilk', category: 'food', subcategory: 'dairy', difficulty: 'advanced' },
  { id: 'dairy_010', polish: 'ser żółty', english: 'yellow cheese', category: 'food', subcategory: 'dairy', difficulty: 'intermediate' },

  // ZBOŻA (Grains & Cereals)
  { id: 'grains_001', polish: 'ryż', english: 'rice', category: 'food', subcategory: 'grains', difficulty: 'beginner' },
  { id: 'grains_002', polish: 'makaron', english: 'pasta', category: 'food', subcategory: 'grains', difficulty: 'beginner' },
  { id: 'grains_003', polish: 'kasza', english: 'groats', category: 'food', subcategory: 'grains', difficulty: 'intermediate' },
  { id: 'grains_004', polish: 'płatki', english: 'cereal', category: 'food', subcategory: 'grains', difficulty: 'beginner' },
  { id: 'grains_005', polish: 'owsianka', english: 'oatmeal', category: 'food', subcategory: 'grains', difficulty: 'intermediate' },
  { id: 'grains_006', polish: 'kasza gryczana', english: 'buckwheat', category: 'food', subcategory: 'grains', difficulty: 'intermediate' },
  { id: 'grains_007', polish: 'kasza jęczmienna', english: 'barley', category: 'food', subcategory: 'grains', difficulty: 'intermediate' },
  { id: 'grains_008', polish: 'kasza manna', english: 'semolina', category: 'food', subcategory: 'grains', difficulty: 'intermediate' },
  { id: 'grains_009', polish: 'quinoa', english: 'quinoa', category: 'food', subcategory: 'grains', difficulty: 'intermediate' },
  { id: 'grains_010', polish: 'bulgur', english: 'bulgur', category: 'food', subcategory: 'grains', difficulty: 'advanced' },

  // NAPOJE (Beverages)
  { id: 'beverages_001', polish: 'woda', english: 'water', category: 'food', subcategory: 'beverages', difficulty: 'beginner' },
  { id: 'beverages_002', polish: 'sok', english: 'juice', category: 'food', subcategory: 'beverages', difficulty: 'beginner' },
  { id: 'beverages_003', polish: 'kawa', english: 'coffee', category: 'food', subcategory: 'beverages', difficulty: 'beginner' },
  { id: 'beverages_004', polish: 'herbata', english: 'tea', category: 'food', subcategory: 'beverages', difficulty: 'beginner' },
  { id: 'beverages_005', polish: 'piwo', english: 'beer', category: 'food', subcategory: 'beverages', difficulty: 'beginner' },
  { id: 'beverages_006', polish: 'wino', english: 'wine', category: 'food', subcategory: 'beverages', difficulty: 'beginner' },
  { id: 'beverages_007', polish: 'napój gazowany', english: 'soda', category: 'food', subcategory: 'beverages', difficulty: 'intermediate' },
  { id: 'beverages_008', polish: 'cola', english: 'cola', category: 'food', subcategory: 'beverages', difficulty: 'beginner' },
  { id: 'beverages_009', polish: 'lemoniada', english: 'lemonade', category: 'food', subcategory: 'beverages', difficulty: 'intermediate' },
  { id: 'beverages_010', polish: 'smoothie', english: 'smoothie', category: 'food', subcategory: 'beverages', difficulty: 'intermediate' },
  { id: 'beverages_011', polish: 'mleko czekoladowe', english: 'chocolate milk', category: 'food', subcategory: 'beverages', difficulty: 'intermediate' },
  { id: 'beverages_012', polish: 'woda mineralna', english: 'mineral water', category: 'food', subcategory: 'beverages', difficulty: 'intermediate' },

  // PRZYPRAWY (Spices & Seasonings)
  { id: 'spices_001', polish: 'sól', english: 'salt', category: 'food', subcategory: 'spices', difficulty: 'beginner' },
  { id: 'spices_002', polish: 'pieprz', english: 'pepper', category: 'food', subcategory: 'spices', difficulty: 'beginner' },
  { id: 'spices_003', polish: 'cukier', english: 'sugar', category: 'food', subcategory: 'spices', difficulty: 'beginner' },
  { id: 'spices_004', polish: 'ocet', english: 'vinegar', category: 'food', subcategory: 'spices', difficulty: 'intermediate' },
  { id: 'spices_005', polish: 'bazylia', english: 'basil', category: 'food', subcategory: 'spices', difficulty: 'intermediate' },
  { id: 'spices_006', polish: 'oregano', english: 'oregano', category: 'food', subcategory: 'spices', difficulty: 'intermediate' },
  { id: 'spices_007', polish: 'cynamon', english: 'cinnamon', category: 'food', subcategory: 'spices', difficulty: 'intermediate' },
  { id: 'spices_008', polish: 'papryka', english: 'paprika', category: 'food', subcategory: 'spices', difficulty: 'intermediate' },
  { id: 'spices_009', polish: 'czosnek', english: 'garlic', category: 'food', subcategory: 'spices', difficulty: 'intermediate' },
  { id: 'spices_010', polish: 'imbir', english: 'ginger', category: 'food', subcategory: 'spices', difficulty: 'intermediate' },
  { id: 'spices_011', polish: 'kurkuma', english: 'turmeric', category: 'food', subcategory: 'spices', difficulty: 'intermediate' },
  { id: 'spices_012', polish: 'kminek', english: 'cumin', category: 'food', subcategory: 'spices', difficulty: 'intermediate' },

  // DESERY I SŁODYCZE (Desserts & Sweets)
  { id: 'desserts_001', polish: 'ciasto', english: 'cake', category: 'food', subcategory: 'desserts', difficulty: 'beginner' },
  { id: 'desserts_002', polish: 'ciasteczko', english: 'cookie', category: 'food', subcategory: 'desserts', difficulty: 'beginner' },
  { id: 'desserts_003', polish: 'lody', english: 'ice cream', category: 'food', subcategory: 'desserts', difficulty: 'beginner' },
  { id: 'desserts_004', polish: 'czekolada', english: 'chocolate', category: 'food', subcategory: 'desserts', difficulty: 'beginner' },
  { id: 'desserts_005', polish: 'cukierki', english: 'candies', category: 'food', subcategory: 'desserts', difficulty: 'beginner' },
  { id: 'desserts_006', polish: 'batonik', english: 'candy bar', category: 'food', subcategory: 'desserts', difficulty: 'intermediate' },
  { id: 'desserts_007', polish: 'tort', english: 'layer cake', category: 'food', subcategory: 'desserts', difficulty: 'intermediate' },
  { id: 'desserts_008', polish: 'pudding', english: 'pudding', category: 'food', subcategory: 'desserts', difficulty: 'intermediate' },
  { id: 'desserts_009', polish: 'galaretka', english: 'jelly', category: 'food', subcategory: 'desserts', difficulty: 'intermediate' },
  { id: 'desserts_010', polish: 'muffinka', english: 'muffin', category: 'food', subcategory: 'desserts', difficulty: 'intermediate' },

  // METODY GOTOWANIA (Cooking Methods)
  { id: 'cooking_001', polish: 'gotować', english: 'to boil', category: 'food', subcategory: 'cooking-methods', difficulty: 'beginner' },
  { id: 'cooking_002', polish: 'smażyć', english: 'to fry', category: 'food', subcategory: 'cooking-methods', difficulty: 'beginner' },
  { id: 'cooking_003', polish: 'piec', english: 'to bake', category: 'food', subcategory: 'cooking-methods', difficulty: 'beginner' },
  { id: 'cooking_004', polish: 'grillować', english: 'to grill', category: 'food', subcategory: 'cooking-methods', difficulty: 'intermediate' },
  { id: 'cooking_005', polish: 'dusić', english: 'to stew', category: 'food', subcategory: 'cooking-methods', difficulty: 'intermediate' },
  { id: 'cooking_006', polish: 'gotować na parze', english: 'to steam', category: 'food', subcategory: 'cooking-methods', difficulty: 'intermediate' },
  { id: 'cooking_007', polish: 'smażyć na głębokim tłuszczu', english: 'to deep fry', category: 'food', subcategory: 'cooking-methods', difficulty: 'intermediate' },
  { id: 'cooking_008', polish: 'piec w piekarniku', english: 'to roast', category: 'food', subcategory: 'cooking-methods', difficulty: 'intermediate' },
  { id: 'cooking_009', polish: 'gotować', english: 'to cook', category: 'food', subcategory: 'cooking-methods', difficulty: 'beginner' },
  { id: 'cooking_010', polish: 'kroić', english: 'to cut', category: 'food', subcategory: 'cooking-methods', difficulty: 'beginner' },

  // NACZYNIA KUCHENNE (Kitchen Utensils)
  { id: 'utensils_001', polish: 'garnek', english: 'pot', category: 'food', subcategory: 'utensils', difficulty: 'beginner' },
  { id: 'utensils_002', polish: 'patelnia', english: 'pan', category: 'food', subcategory: 'utensils', difficulty: 'beginner' },
  { id: 'utensils_003', polish: 'nóż', english: 'knife', category: 'food', subcategory: 'utensils', difficulty: 'beginner' },
  { id: 'utensils_004', polish: 'widelec', english: 'fork', category: 'food', subcategory: 'utensils', difficulty: 'beginner' },
  { id: 'utensils_005', polish: 'łyżka', english: 'spoon', category: 'food', subcategory: 'utensils', difficulty: 'beginner' },
  { id: 'utensils_006', polish: 'deska do krojenia', english: 'cutting board', category: 'food', subcategory: 'utensils', difficulty: 'intermediate' },
  { id: 'utensils_007', polish: 'miska', english: 'bowl', category: 'food', subcategory: 'utensils', difficulty: 'beginner' },
  { id: 'utensils_008', polish: 'talerz', english: 'plate', category: 'food', subcategory: 'utensils', difficulty: 'beginner' },
  { id: 'utensils_009', polish: 'szklanka', english: 'glass', category: 'food', subcategory: 'utensils', difficulty: 'beginner' },
  { id: 'utensils_010', polish: 'kubek', english: 'mug', category: 'food', subcategory: 'utensils', difficulty: 'beginner' },
  { id: 'utensils_011', polish: 'łyżka do mieszania', english: 'spatula', category: 'food', subcategory: 'utensils', difficulty: 'intermediate' },
  { id: 'utensils_012', polish: 'chochla', english: 'ladle', category: 'food', subcategory: 'utensils', difficulty: 'intermediate' },

  // POSIŁKI (Meals & Eating)
  { id: 'meals_001', polish: 'śniadanie', english: 'breakfast', category: 'food', subcategory: 'meals', difficulty: 'beginner' },
  { id: 'meals_002', polish: 'obiad', english: 'lunch', category: 'food', subcategory: 'meals', difficulty: 'beginner' },
  { id: 'meals_003', polish: 'kolacja', english: 'dinner', category: 'food', subcategory: 'meals', difficulty: 'beginner' },
  { id: 'meals_004', polish: 'przekąska', english: 'snack', category: 'food', subcategory: 'meals', difficulty: 'beginner' },
  { id: 'meals_005', polish: 'apetyt', english: 'appetite', category: 'food', subcategory: 'meals', difficulty: 'intermediate' },
  { id: 'meals_006', polish: 'głód', english: 'hunger', category: 'food', subcategory: 'meals', difficulty: 'intermediate' },
  { id: 'meals_007', polish: 'sytość', english: 'fullness', category: 'food', subcategory: 'meals', difficulty: 'intermediate' },
  { id: 'meals_008', polish: 'smak', english: 'taste', category: 'food', subcategory: 'meals', difficulty: 'beginner' },
  { id: 'meals_009', polish: 'smaczny', english: 'tasty', category: 'food', subcategory: 'meals', difficulty: 'beginner' },
  { id: 'meals_010', polish: 'niesmaczny', english: 'tasteless', category: 'food', subcategory: 'meals', difficulty: 'intermediate' },
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
