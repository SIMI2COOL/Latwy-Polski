import { VocabularyWord } from '@/types';

export const sportsVocabulary: VocabularyWord[] = [
  // PIŁKA NOŻNA (Soccer/Football)
  { id: 'soccer_001', polish: 'piłka nożna', english: 'soccer', category: 'sports', subcategory: 'soccer', difficulty: 'beginner' },
  { id: 'soccer_002', polish: 'boisko', english: 'field', category: 'sports', subcategory: 'soccer', difficulty: 'beginner' },
  { id: 'soccer_003', polish: 'bramka', english: 'goal', category: 'sports', subcategory: 'soccer', difficulty: 'beginner' },
  { id: 'soccer_004', polish: 'piłka', english: 'ball', category: 'sports', subcategory: 'soccer', difficulty: 'beginner' },
  { id: 'soccer_005', polish: 'bramkarz', english: 'goalkeeper', category: 'sports', subcategory: 'soccer', difficulty: 'intermediate' },
  { id: 'soccer_006', polish: 'obrońca', english: 'defender', category: 'sports', subcategory: 'soccer', difficulty: 'intermediate' },
  { id: 'soccer_007', polish: 'napastnik', english: 'forward', category: 'sports', subcategory: 'soccer', difficulty: 'intermediate' },
  { id: 'soccer_008', polish: 'pomocnik', english: 'midfielder', category: 'sports', subcategory: 'soccer', difficulty: 'intermediate' },
  { id: 'soccer_009', polish: 'rzut rożny', english: 'corner kick', category: 'sports', subcategory: 'soccer', difficulty: 'advanced' },
  { id: 'soccer_010', polish: 'rzut karny', english: 'penalty kick', category: 'sports', subcategory: 'soccer', difficulty: 'intermediate' },
  { id: 'soccer_011', polish: 'spalony', english: 'offside', category: 'sports', subcategory: 'soccer', difficulty: 'advanced' },
  { id: 'soccer_012', polish: 'sędzia', english: 'referee', category: 'sports', subcategory: 'soccer', difficulty: 'intermediate' },
  { id: 'soccer_013', polish: 'gwizdek', english: 'whistle', category: 'sports', subcategory: 'soccer', difficulty: 'intermediate' },
  { id: 'soccer_014', polish: 'żółta kartka', english: 'yellow card', category: 'sports', subcategory: 'soccer', difficulty: 'intermediate' },
  { id: 'soccer_015', polish: 'czerwona kartka', english: 'red card', category: 'sports', subcategory: 'soccer', difficulty: 'intermediate' },

  // KOSZYKÓWKA (Basketball)
  { id: 'basketball_001', polish: 'koszykówka', english: 'basketball', category: 'sports', subcategory: 'basketball', difficulty: 'beginner' },
  { id: 'basketball_002', polish: 'kosz', english: 'basket', category: 'sports', subcategory: 'basketball', difficulty: 'beginner' },
  { id: 'basketball_003', polish: 'tablica', english: 'backboard', category: 'sports', subcategory: 'basketball', difficulty: 'intermediate' },
  { id: 'basketball_004', polish: 'rzut wolny', english: 'free throw', category: 'sports', subcategory: 'basketball', difficulty: 'intermediate' },
  { id: 'basketball_005', polish: 'wsad', english: 'dunk', category: 'sports', subcategory: 'basketball', difficulty: 'intermediate' },
  { id: 'basketball_006', polish: 'podanie', english: 'pass', category: 'sports', subcategory: 'basketball', difficulty: 'intermediate' },
  { id: 'basketball_007', polish: 'kozłowanie', english: 'dribbling', category: 'sports', subcategory: 'basketball', difficulty: 'advanced' },
  { id: 'basketball_008', polish: 'trójka', english: 'three-pointer', category: 'sports', subcategory: 'basketball', difficulty: 'intermediate' },
  { id: 'basketball_009', polish: 'zbiórkę', english: 'rebound', category: 'sports', subcategory: 'basketball', difficulty: 'advanced' },
  { id: 'basketball_010', polish: 'blok', english: 'block', category: 'sports', subcategory: 'basketball', difficulty: 'intermediate' },

  // TENIS (Tennis)
  { id: 'tennis_001', polish: 'tenis', english: 'tennis', category: 'sports', subcategory: 'tennis', difficulty: 'beginner' },
  { id: 'tennis_002', polish: 'kort', english: 'court', category: 'sports', subcategory: 'tennis', difficulty: 'intermediate' },
  { id: 'tennis_003', polish: 'rakieta', english: 'racket', category: 'sports', subcategory: 'tennis', difficulty: 'intermediate' },
  { id: 'tennis_004', polish: 'piłka tenisowa', english: 'tennis ball', category: 'sports', subcategory: 'tennis', difficulty: 'intermediate' },
  { id: 'tennis_005', polish: 'siatka', english: 'net', category: 'sports', subcategory: 'tennis', difficulty: 'beginner' },
  { id: 'tennis_006', polish: 'serwis', english: 'serve', category: 'sports', subcategory: 'tennis', difficulty: 'intermediate' },
  { id: 'tennis_007', polish: 'as', english: 'ace', category: 'sports', subcategory: 'tennis', difficulty: 'intermediate' },
  { id: 'tennis_008', polish: 'gem', english: 'game', category: 'sports', subcategory: 'tennis', difficulty: 'intermediate' },
  { id: 'tennis_009', polish: 'set', english: 'set', category: 'sports', subcategory: 'tennis', difficulty: 'intermediate' },
  { id: 'tennis_010', polish: 'mecz', english: 'match', category: 'sports', subcategory: 'tennis', difficulty: 'beginner' },

  // PŁYWANIE (Swimming)
  { id: 'swimming_001', polish: 'pływanie', english: 'swimming', category: 'sports', subcategory: 'swimming', difficulty: 'beginner' },
  { id: 'swimming_002', polish: 'basen', english: 'pool', category: 'sports', subcategory: 'swimming', difficulty: 'beginner' },
  { id: 'swimming_003', polish: 'tor', english: 'lane', category: 'sports', subcategory: 'swimming', difficulty: 'intermediate' },
  { id: 'swimming_004', polish: 'kraul', english: 'freestyle', category: 'sports', subcategory: 'swimming', difficulty: 'intermediate' },
  { id: 'swimming_005', polish: 'żabka', english: 'breaststroke', category: 'sports', subcategory: 'swimming', difficulty: 'intermediate' },
  { id: 'swimming_006', polish: 'grzbiet', english: 'backstroke', category: 'sports', subcategory: 'swimming', difficulty: 'intermediate' },
  { id: 'swimming_007', polish: 'motylek', english: 'butterfly', category: 'sports', subcategory: 'swimming', difficulty: 'advanced' },
  { id: 'swimming_008', polish: 'nurkować', english: 'to dive', category: 'sports', subcategory: 'swimming', difficulty: 'intermediate' },
  { id: 'swimming_009', polish: 'pływak', english: 'swimmer', category: 'sports', subcategory: 'swimming', difficulty: 'beginner' },
  { id: 'swimming_010', polish: 'okularki', english: 'goggles', category: 'sports', subcategory: 'swimming', difficulty: 'intermediate' },
  { id: 'swimming_011', polish: 'czepek', english: 'swim cap', category: 'sports', subcategory: 'swimming', difficulty: 'intermediate' },
  { id: 'swimming_012', polish: 'deska do pływania', english: 'kickboard', category: 'sports', subcategory: 'swimming', difficulty: 'advanced' },

  // SIŁOWNIA (Gym)
  { id: 'gym_001', polish: 'siłownia', english: 'gym', category: 'sports', subcategory: 'gym', difficulty: 'beginner' },
  { id: 'gym_002', polish: 'trening', english: 'workout', category: 'sports', subcategory: 'gym', difficulty: 'intermediate' },
  { id: 'gym_003', polish: 'ciężary', english: 'weights', category: 'sports', subcategory: 'gym', difficulty: 'intermediate' },
  { id: 'gym_004', polish: 'hantle', english: 'dumbbells', category: 'sports', subcategory: 'gym', difficulty: 'intermediate' },
  { id: 'gym_005', polish: 'sztanga', english: 'barbell', category: 'sports', subcategory: 'gym', difficulty: 'intermediate' },
  { id: 'gym_006', polish: 'bieżnia', english: 'treadmill', category: 'sports', subcategory: 'gym', difficulty: 'intermediate' },
  { id: 'gym_007', polish: 'rower stacjonarny', english: 'stationary bike', category: 'sports', subcategory: 'gym', difficulty: 'intermediate' },
  { id: 'gym_008', polish: 'orbitrek', english: 'elliptical', category: 'sports', subcategory: 'gym', difficulty: 'advanced' },
  { id: 'gym_009', polish: 'mata', english: 'mat', category: 'sports', subcategory: 'gym', difficulty: 'beginner' },
  { id: 'gym_010', polish: 'pompki', english: 'push-ups', category: 'sports', subcategory: 'gym', difficulty: 'intermediate' },
  { id: 'gym_011', polish: 'przysiady', english: 'squats', category: 'sports', subcategory: 'gym', difficulty: 'intermediate' },
  { id: 'gym_012', polish: 'rozciąganie', english: 'stretching', category: 'sports', subcategory: 'gym', difficulty: 'intermediate' },

  // BIEGANIE (Running)
  { id: 'running_001', polish: 'bieganie', english: 'running', category: 'sports', subcategory: 'running', difficulty: 'beginner' },
  { id: 'running_002', polish: 'jogging', english: 'jogging', category: 'sports', subcategory: 'running', difficulty: 'beginner' },
  { id: 'running_003', polish: 'maraton', english: 'marathon', category: 'sports', subcategory: 'running', difficulty: 'intermediate' },
  { id: 'running_004', polish: 'sprint', english: 'sprint', category: 'sports', subcategory: 'running', difficulty: 'intermediate' },
  { id: 'running_005', polish: 'biegacz', english: 'runner', category: 'sports', subcategory: 'running', difficulty: 'beginner' },
  { id: 'running_006', polish: 'ścieżka', english: 'track', category: 'sports', subcategory: 'running', difficulty: 'intermediate' },
  { id: 'running_007', polish: 'start', english: 'start', category: 'sports', subcategory: 'running', difficulty: 'beginner' },
  { id: 'running_008', polish: 'meta', english: 'finish line', category: 'sports', subcategory: 'running', difficulty: 'intermediate' },
  { id: 'running_009', polish: 'rozgrzewka', english: 'warm-up', category: 'sports', subcategory: 'running', difficulty: 'intermediate' },
  { id: 'running_010', polish: 'tempo', english: 'pace', category: 'sports', subcategory: 'running', difficulty: 'intermediate' },

  // SPORTY ZIMOWE (Winter Sports)
  { id: 'winter_001', polish: 'narciarstwo', english: 'skiing', category: 'sports', subcategory: 'winter-sports', difficulty: 'intermediate' },
  { id: 'winter_002', polish: 'narty', english: 'skis', category: 'sports', subcategory: 'winter-sports', difficulty: 'intermediate' },
  { id: 'winter_003', polish: 'snowboard', english: 'snowboard', category: 'sports', subcategory: 'winter-sports', difficulty: 'intermediate' },
  { id: 'winter_004', polish: 'stok', english: 'slope', category: 'sports', subcategory: 'winter-sports', difficulty: 'intermediate' },
  { id: 'winter_005', polish: 'wyciąg', english: 'ski lift', category: 'sports', subcategory: 'winter-sports', difficulty: 'intermediate' },
  { id: 'winter_006', polish: 'kask', english: 'helmet', category: 'sports', subcategory: 'winter-sports', difficulty: 'intermediate' },
  { id: 'winter_007', polish: 'gogle', english: 'goggles', category: 'sports', subcategory: 'winter-sports', difficulty: 'intermediate' },
  { id: 'winter_008', polish: 'łyżwy', english: 'ice skates', category: 'sports', subcategory: 'winter-sports', difficulty: 'intermediate' },
  { id: 'winter_009', polish: 'lodowisko', english: 'ice rink', category: 'sports', subcategory: 'winter-sports', difficulty: 'intermediate' },
  { id: 'winter_010', polish: 'hokej', english: 'hockey', category: 'sports', subcategory: 'winter-sports', difficulty: 'intermediate' },

  // SPORTY OGÓLNE (General Sports)
  { id: 'general_001', polish: 'sport', english: 'sport', category: 'sports', subcategory: 'general', difficulty: 'beginner' },
  { id: 'general_002', polish: 'drużyna', english: 'team', category: 'sports', subcategory: 'general', difficulty: 'beginner' },
  { id: 'general_003', polish: 'zawodnik', english: 'player', category: 'sports', subcategory: 'general', difficulty: 'beginner' },
  { id: 'general_004', polish: 'trener', english: 'coach', category: 'sports', subcategory: 'general', difficulty: 'beginner' },
  { id: 'general_005', polish: 'kibic', english: 'fan', category: 'sports', subcategory: 'general', difficulty: 'intermediate' },
  { id: 'general_006', polish: 'stadion', english: 'stadium', category: 'sports', subcategory: 'general', difficulty: 'beginner' },
  { id: 'general_007', polish: 'mistrzostwa', english: 'championship', category: 'sports', subcategory: 'general', difficulty: 'intermediate' },
  { id: 'general_008', polish: 'medal', english: 'medal', category: 'sports', subcategory: 'general', difficulty: 'beginner' },
  { id: 'general_009', polish: 'zwycięzca', english: 'winner', category: 'sports', subcategory: 'general', difficulty: 'intermediate' },
  { id: 'general_010', polish: 'przegrany', english: 'loser', category: 'sports', subcategory: 'general', difficulty: 'intermediate' },
  { id: 'general_011', polish: 'wynik', english: 'score', category: 'sports', subcategory: 'general', difficulty: 'beginner' },
  { id: 'general_012', polish: 'remis', english: 'tie', category: 'sports', subcategory: 'general', difficulty: 'intermediate' },
];

export async function seedSportsVocabulary() {
  const { db } = await import('@/utils/database');
  
  try {
    // Get existing sports vocabulary IDs
    const existingSports = await db.vocabulary.where('category').equals('sports').toArray();
    const existingIds = new Set(existingSports.map(w => w.id));
    
    // Filter out words that already exist
    const newWords = sportsVocabulary.filter(word => !existingIds.has(word.id));
    
    if (newWords.length > 0) {
      await db.vocabulary.bulkAdd(newWords);
      console.log(`✅ Added ${newWords.length} new sports words`);
    }
    
    // Always update total word count
    const totalCount = await db.vocabulary.where('category').equals('sports').count();
    await db.categories.update('sports', { totalWords: totalCount });
    console.log(`✅ Sports vocabulary: ${totalCount} total words (${sportsVocabulary.length} in file)`);
    return true;
  } catch (error) {
    if (error instanceof Error && error.name === 'ConstraintError') {
      // Some words might already exist, try to add the rest
      const existingSports = await db.vocabulary.where('category').equals('sports').toArray();
      const existingIds = new Set(existingSports.map(w => w.id));
      const newWords = sportsVocabulary.filter(word => !existingIds.has(word.id));
      
      if (newWords.length > 0) {
        try {
          await db.vocabulary.bulkAdd(newWords);
        } catch (e) {
          console.error('Error adding remaining sports words:', e);
        }
      }
      
      // Always update total word count
      const totalCount = await db.vocabulary.where('category').equals('sports').count();
      await db.categories.update('sports', { totalWords: totalCount });
      console.log(`✅ Sports vocabulary: ${totalCount} total words`);
      return true;
    }
    console.error('Error seeding sports vocabulary:', error);
    return false;
  }
}
