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

  // ODZIEŻ GÓRNA (Upper Body Clothing)
  { id: 'upper_clothing_001', polish: 'koszula', english: 'shirt', category: 'appearance', subcategory: 'upper-clothing', difficulty: 'beginner' },
  { id: 'upper_clothing_002', polish: 'bluzka', english: 'blouse', category: 'appearance', subcategory: 'upper-clothing', difficulty: 'beginner' },
  { id: 'upper_clothing_003', polish: 'sweter', english: 'sweater', category: 'appearance', subcategory: 'upper-clothing', difficulty: 'beginner' },
  { id: 'upper_clothing_004', polish: 'kurtka', english: 'jacket', category: 'appearance', subcategory: 'upper-clothing', difficulty: 'beginner' },
  { id: 'upper_clothing_005', polish: 'płaszcz', english: 'coat', category: 'appearance', subcategory: 'upper-clothing', difficulty: 'intermediate' },
  { id: 'upper_clothing_006', polish: 'kamizelka', english: 'vest', category: 'appearance', subcategory: 'upper-clothing', difficulty: 'intermediate' },
  { id: 'upper_clothing_007', polish: 'szalik', english: 'scarf', category: 'appearance', subcategory: 'upper-clothing', difficulty: 'beginner' },
  { id: 'upper_clothing_008', polish: 'koszulka', english: 't-shirt', category: 'appearance', subcategory: 'upper-clothing', difficulty: 'beginner' },
  { id: 'upper_clothing_009', polish: 'bluza', english: 'hoodie', category: 'appearance', subcategory: 'upper-clothing', difficulty: 'beginner' },
  { id: 'upper_clothing_010', polish: 'kardigan', english: 'cardigan', category: 'appearance', subcategory: 'upper-clothing', difficulty: 'intermediate' },
  { id: 'upper_clothing_011', polish: 'golf', english: 'polo shirt', category: 'appearance', subcategory: 'upper-clothing', difficulty: 'intermediate' },
  { id: 'upper_clothing_012', polish: 'koszula bez rękawów', english: 'tank top', category: 'appearance', subcategory: 'upper-clothing', difficulty: 'intermediate' },
  { id: 'upper_clothing_013', polish: 'marynarka', english: 'blazer', category: 'appearance', subcategory: 'upper-clothing', difficulty: 'intermediate' },
  { id: 'upper_clothing_014', polish: 'płaszcz przeciwdeszczowy', english: 'raincoat', category: 'appearance', subcategory: 'upper-clothing', difficulty: 'intermediate' },
  { id: 'upper_clothing_015', polish: 'kurtka zimowa', english: 'winter jacket', category: 'appearance', subcategory: 'upper-clothing', difficulty: 'intermediate' },

  // ODZIEŻ DOLNA (Lower Body Clothing)
  { id: 'lower_clothing_001', polish: 'spodnie', english: 'pants', category: 'appearance', subcategory: 'lower-clothing', difficulty: 'beginner' },
  { id: 'lower_clothing_002', polish: 'spódnica', english: 'skirt', category: 'appearance', subcategory: 'lower-clothing', difficulty: 'beginner' },
  { id: 'lower_clothing_003', polish: 'sukienka', english: 'dress', category: 'appearance', subcategory: 'lower-clothing', difficulty: 'beginner' },
  { id: 'lower_clothing_004', polish: 'szorty', english: 'shorts', category: 'appearance', subcategory: 'lower-clothing', difficulty: 'beginner' },
  { id: 'lower_clothing_005', polish: 'dżinsy', english: 'jeans', category: 'appearance', subcategory: 'lower-clothing', difficulty: 'beginner' },
  { id: 'lower_clothing_006', polish: 'spodnie dresowe', english: 'sweatpants', category: 'appearance', subcategory: 'lower-clothing', difficulty: 'intermediate' },
  { id: 'lower_clothing_007', polish: 'spodnie sportowe', english: 'track pants', category: 'appearance', subcategory: 'lower-clothing', difficulty: 'intermediate' },
  { id: 'lower_clothing_008', polish: 'spodnie eleganckie', english: 'dress pants', category: 'appearance', subcategory: 'lower-clothing', difficulty: 'intermediate' },
  { id: 'lower_clothing_009', polish: 'spódnica mini', english: 'mini skirt', category: 'appearance', subcategory: 'lower-clothing', difficulty: 'intermediate' },
  { id: 'lower_clothing_010', polish: 'spódnica długa', english: 'long skirt', category: 'appearance', subcategory: 'lower-clothing', difficulty: 'intermediate' },
  { id: 'lower_clothing_011', polish: 'sukienka wieczorowa', english: 'evening dress', category: 'appearance', subcategory: 'lower-clothing', difficulty: 'intermediate' },
  { id: 'lower_clothing_012', polish: 'sukienka koktajlowa', english: 'cocktail dress', category: 'appearance', subcategory: 'lower-clothing', difficulty: 'intermediate' },

  // OBUWIE (Footwear)
  { id: 'footwear_001', polish: 'buty', english: 'shoes', category: 'appearance', subcategory: 'footwear', difficulty: 'beginner' },
  { id: 'footwear_002', polish: 'kozaki', english: 'boots', category: 'appearance', subcategory: 'footwear', difficulty: 'intermediate' },
  { id: 'footwear_003', polish: 'sandały', english: 'sandals', category: 'appearance', subcategory: 'footwear', difficulty: 'beginner' },
  { id: 'footwear_004', polish: 'klapki', english: 'flip-flops', category: 'appearance', subcategory: 'footwear', difficulty: 'intermediate' },
  { id: 'footwear_005', polish: 'tenisówki', english: 'sneakers', category: 'appearance', subcategory: 'footwear', difficulty: 'beginner' },
  { id: 'footwear_006', polish: 'szpilki', english: 'heels', category: 'appearance', subcategory: 'footwear', difficulty: 'intermediate' },
  { id: 'footwear_007', polish: 'kapcie', english: 'slippers', category: 'appearance', subcategory: 'footwear', difficulty: 'intermediate' },
  { id: 'footwear_008', polish: 'półbuty', english: 'dress shoes', category: 'appearance', subcategory: 'footwear', difficulty: 'intermediate' },
  { id: 'footwear_009', polish: 'baleriny', english: 'flats', category: 'appearance', subcategory: 'footwear', difficulty: 'intermediate' },
  { id: 'footwear_010', polish: 'buty sportowe', english: 'athletic shoes', category: 'appearance', subcategory: 'footwear', difficulty: 'intermediate' },
  { id: 'footwear_011', polish: 'kalosze', english: 'rubber boots', category: 'appearance', subcategory: 'footwear', difficulty: 'intermediate' },
  { id: 'footwear_012', polish: 'buty zimowe', english: 'winter boots', category: 'appearance', subcategory: 'footwear', difficulty: 'intermediate' },

  // PRZYDATNE ZWROTY (Useful Phrases - Appearance)
  { id: 'appearance_phrases_001', polish: 'jak mi wyglądam?', english: 'how do I look?', category: 'appearance', subcategory: 'useful-phrases', difficulty: 'beginner' },
  { id: 'appearance_phrases_002', polish: 'wyglądasz świetnie', english: 'you look great', category: 'appearance', subcategory: 'useful-phrases', difficulty: 'beginner' },
  { id: 'appearance_phrases_003', polish: 'pasuje mi', english: 'it fits me', category: 'appearance', subcategory: 'useful-phrases', difficulty: 'beginner' },
  { id: 'appearance_phrases_004', polish: 'możębym przymierzyć?', english: 'can I try it on?', category: 'appearance', subcategory: 'useful-phrases', difficulty: 'intermediate' },
  { id: 'appearance_phrases_005', polish: 'jakiej rozmiaru?', english: 'what size?', category: 'appearance', subcategory: 'useful-phrases', difficulty: 'beginner' },
  { id: 'appearance_phrases_006', polish: 'za małe', english: 'too small', category: 'appearance', subcategory: 'useful-phrases', difficulty: 'beginner' },
  { id: 'appearance_phrases_007', polish: 'za duże', english: 'too big', category: 'appearance', subcategory: 'useful-phrases', difficulty: 'beginner' },
  { id: 'appearance_phrases_008', polish: 'idealnie pasuje', english: 'fits perfectly', category: 'appearance', subcategory: 'useful-phrases', difficulty: 'intermediate' },
  { id: 'appearance_phrases_009', polish: 'w jakim kolorze?', english: 'what color?', category: 'appearance', subcategory: 'useful-phrases', difficulty: 'beginner' },
  { id: 'appearance_phrases_010', polish: 'to mi się podoba', english: 'I like this', category: 'appearance', subcategory: 'useful-phrases', difficulty: 'beginner' },

  // OPIS CIAŁA (Body Description)
  { id: 'body_desc_001', polish: 'wysoki', english: 'tall', category: 'appearance', subcategory: 'body-description', difficulty: 'beginner' },
  { id: 'body_desc_002', polish: 'niski', english: 'short', category: 'appearance', subcategory: 'body-description', difficulty: 'beginner' },
  { id: 'body_desc_003', polish: 'szczupły', english: 'slim', category: 'appearance', subcategory: 'body-description', difficulty: 'intermediate' },
  { id: 'body_desc_004', polish: 'gruby', english: 'fat', category: 'appearance', subcategory: 'body-description', difficulty: 'beginner' },
  { id: 'body_desc_005', polish: 'młody', english: 'young', category: 'appearance', subcategory: 'body-description', difficulty: 'beginner' },
  { id: 'body_desc_006', polish: 'stary', english: 'old', category: 'appearance', subcategory: 'body-description', difficulty: 'beginner' },
  { id: 'body_desc_007', polish: 'atrakcyjny', english: 'attractive', category: 'appearance', subcategory: 'body-description', difficulty: 'intermediate' },
  { id: 'body_desc_008', polish: 'przystojny', english: 'handsome', category: 'appearance', subcategory: 'body-description', difficulty: 'intermediate' },
  { id: 'body_desc_009', polish: 'piękna', english: 'beautiful', category: 'appearance', subcategory: 'body-description', difficulty: 'beginner' },
  { id: 'body_desc_010', polish: 'chudy', english: 'thin', category: 'appearance', subcategory: 'body-description', difficulty: 'intermediate' },
  { id: 'body_desc_011', polish: 'muskularny', english: 'muscular', category: 'appearance', subcategory: 'body-description', difficulty: 'intermediate' },
  { id: 'body_desc_012', polish: 'krępy', english: 'stocky', category: 'appearance', subcategory: 'body-description', difficulty: 'intermediate' },
  { id: 'body_desc_013', polish: 'smukły', english: 'slender', category: 'appearance', subcategory: 'body-description', difficulty: 'intermediate' },
  { id: 'body_desc_014', polish: 'postawny', english: 'well-built', category: 'appearance', subcategory: 'body-description', difficulty: 'intermediate' },
  { id: 'body_desc_015', polish: 'szczupła sylwetka', english: 'slim figure', category: 'appearance', subcategory: 'body-description', difficulty: 'intermediate' },
];

export async function seedAppearanceVocabulary() {
  const { db } = await import('@/utils/database');
  
  try {
    // Get existing appearance vocabulary IDs
    const existingAppearance = await db.vocabulary.where('category').equals('appearance').toArray();
    const existingIds = new Set(existingAppearance.map(w => w.id));
    
    // Separate new words and words that need updating
    const newWords = appearanceVocabulary.filter(word => !existingIds.has(word.id));
    const wordsToUpdate = appearanceVocabulary.filter(word => existingIds.has(word.id));
    
    // Add new words
    if (newWords.length > 0) {
      await db.vocabulary.bulkAdd(newWords);
      console.log(`✅ Added ${newWords.length} new appearance words`);
    }
    
    // Update existing words (in case their data changed)
    if (wordsToUpdate.length > 0) {
      await db.vocabulary.bulkPut(wordsToUpdate);
      console.log(`✅ Updated ${wordsToUpdate.length} existing appearance words`);
    }
    
    // Update total word count
    const totalCount = await db.vocabulary.where('category').equals('appearance').count();
    await db.categories.update('appearance', { totalWords: totalCount });
    console.log(`✅ Appearance vocabulary: ${totalCount} total words (${appearanceVocabulary.length} in file)`);
    return true;
  } catch (error) {
    if (error instanceof Error && error.name === 'ConstraintError') {
      // Some words might already exist, try to add/update the rest
      const existingAppearance = await db.vocabulary.where('category').equals('appearance').toArray();
      const existingIds = new Set(existingAppearance.map(w => w.id));
      const newWords = appearanceVocabulary.filter(word => !existingIds.has(word.id));
      const wordsToUpdate = appearanceVocabulary.filter(word => existingIds.has(word.id));
      
      if (newWords.length > 0) {
        try {
          await db.vocabulary.bulkAdd(newWords);
        } catch (e) {
          console.error('Error adding remaining appearance words:', e);
        }
      }
      
      if (wordsToUpdate.length > 0) {
        try {
          await db.vocabulary.bulkPut(wordsToUpdate);
        } catch (e) {
          console.error('Error updating appearance words:', e);
        }
      }
      
      const totalCount = await db.vocabulary.where('category').equals('appearance').count();
      await db.categories.update('appearance', { totalWords: totalCount });
      console.log(`✅ Added ${newWords.length} new appearance words. Total: ${totalCount}`);
      return true;
    }
    console.error('Error seeding appearance vocabulary:', error);
    return false;
  }
}
