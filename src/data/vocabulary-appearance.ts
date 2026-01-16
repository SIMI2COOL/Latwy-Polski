import { VocabularyWord } from '@/types';

export const appearanceVocabulary: VocabularyWord[] = [
  // UBRANIA DZIECIĘCE (Children's Clothing)
  { id: 'child_clothes_001', polish: 'body', english: 'onesie', category: 'appearance', subcategory: 'children-clothing', difficulty: 'intermediate' },
  { id: 'child_clothes_002', polish: 'pajac', english: 'sleepsuit', category: 'appearance', subcategory: 'children-clothing', difficulty: 'intermediate' },
  { id: 'child_clothes_003', polish: 'śpioszki', english: 'romper', category: 'appearance', subcategory: 'children-clothing', difficulty: 'intermediate' },
  { id: 'child_clothes_004', polish: 'koszulka', english: 't-shirt', category: 'appearance', subcategory: 'children-clothing', difficulty: 'beginner' },
  { id: 'child_clothes_005', polish: 'spodenki', english: 'shorts', category: 'appearance', subcategory: 'children-clothing', difficulty: 'beginner' },
  { id: 'child_clothes_006', polish: 'spodnie', english: 'pants', category: 'appearance', subcategory: 'children-clothing', difficulty: 'beginner' },
  { id: 'child_clothes_007', polish: 'sukienka', english: 'dress', category: 'appearance', subcategory: 'children-clothing', difficulty: 'beginner' },
  { id: 'child_clothes_008', polish: 'bluza', english: 'hoodie', category: 'appearance', subcategory: 'children-clothing', difficulty: 'beginner' },
  { id: 'child_clothes_009', polish: 'płaszcz przeciwdeszczowy', english: 'raincoat', category: 'appearance', subcategory: 'children-clothing', difficulty: 'intermediate' },
  { id: 'child_clothes_010', polish: 'kapcie', english: 'slippers', category: 'appearance', subcategory: 'children-clothing', difficulty: 'intermediate' },
  { id: 'child_clothes_011', polish: 'buty sportowe', english: 'sneakers', category: 'appearance', subcategory: 'children-clothing', difficulty: 'beginner' },
  { id: 'child_clothes_012', polish: 'sandały', english: 'sandals', category: 'appearance', subcategory: 'children-clothing', difficulty: 'beginner' },

  // UBRANIA MĘSKIE (Men's Clothing)
  { id: 'mens_clothes_001', polish: 'marynarka', english: 'jacket', category: 'appearance', subcategory: 'mens-clothing', difficulty: 'intermediate' },
  { id: 'mens_clothes_002', polish: 'garnitur', english: 'suit', category: 'appearance', subcategory: 'mens-clothing', difficulty: 'intermediate' },
  { id: 'mens_clothes_003', polish: 'koszula', english: 'shirt', category: 'appearance', subcategory: 'mens-clothing', difficulty: 'beginner' },
  { id: 'mens_clothes_004', polish: 'krawat', english: 'tie', category: 'appearance', subcategory: 'mens-clothing', difficulty: 'intermediate' },
  { id: 'mens_clothes_005', polish: 'pasek', english: 'belt', category: 'appearance', subcategory: 'mens-clothing', difficulty: 'beginner' },
  { id: 'mens_clothes_006', polish: 'spodnie', english: 'trousers', category: 'appearance', subcategory: 'mens-clothing', difficulty: 'beginner' },
  { id: 'mens_clothes_007', polish: 'dżinsy', english: 'jeans', category: 'appearance', subcategory: 'mens-clothing', difficulty: 'beginner' },
  { id: 'mens_clothes_008', polish: 'sweter', english: 'sweater', category: 'appearance', subcategory: 'mens-clothing', difficulty: 'beginner' },
  { id: 'mens_clothes_009', polish: 'kurtka', english: 'jacket', category: 'appearance', subcategory: 'mens-clothing', difficulty: 'beginner' },
  { id: 'mens_clothes_010', polish: 'płaszcz', english: 'coat', category: 'appearance', subcategory: 'mens-clothing', difficulty: 'intermediate' },
  { id: 'mens_clothes_011', polish: 'szlafrok', english: 'bathrobe', category: 'appearance', subcategory: 'mens-clothing', difficulty: 'intermediate' },
  { id: 'mens_clothes_012', polish: 'piżama', english: 'pajamas', category: 'appearance', subcategory: 'mens-clothing', difficulty: 'beginner' },

  // UBRANIA DAMSKIE (Women's Clothing)
  { id: 'womens_clothes_001', polish: 'bluzka', english: 'blouse', category: 'appearance', subcategory: 'womens-clothing', difficulty: 'beginner' },
  { id: 'womens_clothes_002', polish: 'spódnica', english: 'skirt', category: 'appearance', subcategory: 'womens-clothing', difficulty: 'beginner' },
  { id: 'womens_clothes_003', polish: 'sukienka', english: 'dress', category: 'appearance', subcategory: 'womens-clothing', difficulty: 'beginner' },
  { id: 'womens_clothes_004', polish: 'suknia wieczorowa', english: 'evening gown', category: 'appearance', subcategory: 'womens-clothing', difficulty: 'intermediate' },
  { id: 'womens_clothes_005', polish: 'rajstopy', english: 'tights', category: 'appearance', subcategory: 'womens-clothing', difficulty: 'intermediate' },
  { id: 'womens_clothes_006', polish: 'pończochy', english: 'stockings', category: 'appearance', subcategory: 'womens-clothing', difficulty: 'intermediate' },
  { id: 'womens_clothes_007', polish: 'stanik', english: 'bra', category: 'appearance', subcategory: 'womens-clothing', difficulty: 'intermediate' },
  { id: 'womens_clothes_008', polish: 'majtki', english: 'panties', category: 'appearance', subcategory: 'womens-clothing', difficulty: 'intermediate' },
  { id: 'womens_clothes_009', polish: 'halka', english: 'slip', category: 'appearance', subcategory: 'womens-clothing', difficulty: 'advanced' },
  { id: 'womens_clothes_010', polish: 'szpilki', english: 'high heels', category: 'appearance', subcategory: 'womens-clothing', difficulty: 'intermediate' },
  { id: 'womens_clothes_011', polish: 'baleriny', english: 'flats', category: 'appearance', subcategory: 'womens-clothing', difficulty: 'intermediate' },
  { id: 'womens_clothes_012', polish: 'torebka', english: 'handbag', category: 'appearance', subcategory: 'womens-clothing', difficulty: 'beginner' },

  // AKCESORIA (Accessories)
  { id: 'accessories_001', polish: 'czapka', english: 'hat', category: 'appearance', subcategory: 'accessories', difficulty: 'beginner' },
  { id: 'accessories_002', polish: 'szalik', english: 'scarf', category: 'appearance', subcategory: 'accessories', difficulty: 'beginner' },
  { id: 'accessories_003', polish: 'rękawiczki', english: 'gloves', category: 'appearance', subcategory: 'accessories', difficulty: 'beginner' },
  { id: 'accessories_004', polish: 'parasol', english: 'umbrella', category: 'appearance', subcategory: 'accessories', difficulty: 'beginner' },
  { id: 'accessories_005', polish: 'okulary', english: 'glasses', category: 'appearance', subcategory: 'accessories', difficulty: 'beginner' },
  { id: 'accessories_006', polish: 'okulary przeciwsłoneczne', english: 'sunglasses', category: 'appearance', subcategory: 'accessories', difficulty: 'intermediate' },
  { id: 'accessories_007', polish: 'zegarek', english: 'watch', category: 'appearance', subcategory: 'accessories', difficulty: 'beginner' },
  { id: 'accessories_008', polish: 'bransoletka', english: 'bracelet', category: 'appearance', subcategory: 'accessories', difficulty: 'intermediate' },
  { id: 'accessories_009', polish: 'naszyjnik', english: 'necklace', category: 'appearance', subcategory: 'accessories', difficulty: 'intermediate' },
  { id: 'accessories_010', polish: 'kolczyki', english: 'earrings', category: 'appearance', subcategory: 'accessories', difficulty: 'intermediate' },
  { id: 'accessories_011', polish: 'pierścionek', english: 'ring', category: 'appearance', subcategory: 'accessories', difficulty: 'intermediate' },
  { id: 'accessories_012', polish: 'portfel', english: 'wallet', category: 'appearance', subcategory: 'accessories', difficulty: 'beginner' },

  // WŁOSY (Hair)
  { id: 'hair_001', polish: 'krótkie włosy', english: 'short hair', category: 'appearance', subcategory: 'hair', difficulty: 'beginner' },
  { id: 'hair_002', polish: 'długie włosy', english: 'long hair', category: 'appearance', subcategory: 'hair', difficulty: 'beginner' },
  { id: 'hair_003', polish: 'kręcone włosy', english: 'curly hair', category: 'appearance', subcategory: 'hair', difficulty: 'intermediate' },
  { id: 'hair_004', polish: 'proste włosy', english: 'straight hair', category: 'appearance', subcategory: 'hair', difficulty: 'intermediate' },
  { id: 'hair_005', polish: 'blond', english: 'blonde', category: 'appearance', subcategory: 'hair', difficulty: 'beginner' },
  { id: 'hair_006', polish: 'brunet', english: 'brunette', category: 'appearance', subcategory: 'hair', difficulty: 'intermediate' },
  { id: 'hair_007', polish: 'rudy', english: 'red-haired', category: 'appearance', subcategory: 'hair', difficulty: 'intermediate' },
  { id: 'hair_008', polish: 'siwy', english: 'gray', category: 'appearance', subcategory: 'hair', difficulty: 'intermediate' },
  { id: 'hair_009', polish: 'łysy', english: 'bald', category: 'appearance', subcategory: 'hair', difficulty: 'intermediate' },
  { id: 'hair_010', polish: 'warkocz', english: 'braid', category: 'appearance', subcategory: 'hair', difficulty: 'intermediate' },
  { id: 'hair_011', polish: 'kucyk', english: 'ponytail', category: 'appearance', subcategory: 'hair', difficulty: 'intermediate' },
  { id: 'hair_012', polish: 'grzywka', english: 'bangs', category: 'appearance', subcategory: 'hair', difficulty: 'intermediate' },

  // URODA (Beauty)
  { id: 'beauty_001', polish: 'makijaż', english: 'makeup', category: 'appearance', subcategory: 'beauty', difficulty: 'beginner' },
  { id: 'beauty_002', polish: 'szminka', english: 'lipstick', category: 'appearance', subcategory: 'beauty', difficulty: 'intermediate' },
  { id: 'beauty_003', polish: 'tusz do rzęs', english: 'mascara', category: 'appearance', subcategory: 'beauty', difficulty: 'intermediate' },
  { id: 'beauty_004', polish: 'cień do powiek', english: 'eyeshadow', category: 'appearance', subcategory: 'beauty', difficulty: 'intermediate' },
  { id: 'beauty_005', polish: 'podkład', english: 'foundation', category: 'appearance', subcategory: 'beauty', difficulty: 'intermediate' },
  { id: 'beauty_006', polish: 'puder', english: 'powder', category: 'appearance', subcategory: 'beauty', difficulty: 'intermediate' },
  { id: 'beauty_007', polish: 'róż', english: 'blush', category: 'appearance', subcategory: 'beauty', difficulty: 'intermediate' },
  { id: 'beauty_008', polish: 'perfumy', english: 'perfume', category: 'appearance', subcategory: 'beauty', difficulty: 'beginner' },
  { id: 'beauty_009', polish: 'krem', english: 'cream', category: 'appearance', subcategory: 'beauty', difficulty: 'beginner' },
  { id: 'beauty_010', polish: 'lakier do paznokci', english: 'nail polish', category: 'appearance', subcategory: 'beauty', difficulty: 'intermediate' },
  { id: 'beauty_011', polish: 'balsam do ciała', english: 'body lotion', category: 'appearance', subcategory: 'beauty', difficulty: 'intermediate' },
  { id: 'beauty_012', polish: 'dezodorant', english: 'deodorant', category: 'appearance', subcategory: 'beauty', difficulty: 'beginner' },
];

export async function seedAppearanceVocabulary() {
  const { db } = await import('@/utils/database');
  
  try {
    // Get existing appearance vocabulary IDs
    const existingAppearance = await db.vocabulary.where('category').equals('appearance').toArray();
    const existingIds = new Set(existingAppearance.map(w => w.id));
    
    // Filter out words that already exist
    const newWords = appearanceVocabulary.filter(word => !existingIds.has(word.id));
    
    if (newWords.length > 0) {
      await db.vocabulary.bulkAdd(newWords);
      console.log(`✅ Added ${newWords.length} new appearance words`);
    }
    
    // Update total word count
    const totalCount = await db.vocabulary.where('category').equals('appearance').count();
    await db.categories.update('appearance', { totalWords: totalCount });
    console.log(`✅ Appearance vocabulary: ${totalCount} total words (${appearanceVocabulary.length} in file)`);
    return true;
  } catch (error) {
    if (error instanceof Error && error.name === 'ConstraintError') {
      // Some words might already exist, try to add the rest
      const existingAppearance = await db.vocabulary.where('category').equals('appearance').toArray();
      const existingIds = new Set(existingAppearance.map(w => w.id));
      const newWords = appearanceVocabulary.filter(word => !existingIds.has(word.id));
      
      if (newWords.length > 0) {
        try {
          await db.vocabulary.bulkAdd(newWords);
          const totalCount = await db.vocabulary.where('category').equals('appearance').count();
          await db.categories.update('appearance', { totalWords: totalCount });
          console.log(`✅ Added ${newWords.length} new appearance words. Total: ${totalCount}`);
        } catch (e) {
          console.error('Error adding remaining appearance words:', e);
        }
      }
      return true;
    }
    console.error('Error seeding appearance vocabulary:', error);
    return false;
  }
}
