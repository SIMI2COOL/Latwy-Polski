import { VocabularyWord } from '@/types';

export const sportsVocabulary: VocabularyWord[] = [
  // PIŁKA NOŻNA (Soccer/Football)
  { id: 'soccer_001', polish: 'piłka nożna', spanish: 'soccer', category: 'sports', subcategory: 'soccer', difficulty: 'beginner' },
  { id: 'soccer_002', polish: 'boisko', spanish: 'field', category: 'sports', subcategory: 'soccer', difficulty: 'beginner' },
  { id: 'soccer_003', polish: 'bramka', spanish: 'goal', category: 'sports', subcategory: 'soccer', difficulty: 'beginner' },
  { id: 'soccer_004', polish: 'piłka', spanish: 'ball', category: 'sports', subcategory: 'soccer', difficulty: 'beginner' },
  { id: 'soccer_005', polish: 'bramkarz', spanish: 'goalkeeper', category: 'sports', subcategory: 'soccer', difficulty: 'intermediate' },
  { id: 'soccer_006', polish: 'obrońca', spanish: 'defender', category: 'sports', subcategory: 'soccer', difficulty: 'intermediate' },
  { id: 'soccer_007', polish: 'napastnik', spanish: 'forward', category: 'sports', subcategory: 'soccer', difficulty: 'intermediate' },
  { id: 'soccer_008', polish: 'pomocnik', spanish: 'midfielder', category: 'sports', subcategory: 'soccer', difficulty: 'intermediate' },
  { id: 'soccer_009', polish: 'rzut rożny', spanish: 'corner kick', category: 'sports', subcategory: 'soccer', difficulty: 'advanced' },
  { id: 'soccer_010', polish: 'rzut karny', spanish: 'penalty kick', category: 'sports', subcategory: 'soccer', difficulty: 'intermediate' },
  { id: 'soccer_011', polish: 'spalony', spanish: 'offside', category: 'sports', subcategory: 'soccer', difficulty: 'advanced' },
  { id: 'soccer_012', polish: 'sędzia', spanish: 'referee', category: 'sports', subcategory: 'soccer', difficulty: 'intermediate' },
  { id: 'soccer_013', polish: 'gwizdek', spanish: 'whistle', category: 'sports', subcategory: 'soccer', difficulty: 'intermediate' },
  { id: 'soccer_014', polish: 'żółta kartka', spanish: 'yellow card', category: 'sports', subcategory: 'soccer', difficulty: 'intermediate' },
  { id: 'soccer_015', polish: 'czerwona kartka', spanish: 'red card', category: 'sports', subcategory: 'soccer', difficulty: 'intermediate' },

  // KOSZYKÓWKA (Basketball)
  { id: 'basketball_001', polish: 'koszykówka', spanish: 'basketball', category: 'sports', subcategory: 'basketball', difficulty: 'beginner' },
  { id: 'basketball_002', polish: 'kosz', spanish: 'basket', category: 'sports', subcategory: 'basketball', difficulty: 'beginner' },
  { id: 'basketball_003', polish: 'tablica', spanish: 'backboard', category: 'sports', subcategory: 'basketball', difficulty: 'intermediate' },
  { id: 'basketball_004', polish: 'rzut wolny', spanish: 'free throw', category: 'sports', subcategory: 'basketball', difficulty: 'intermediate' },
  { id: 'basketball_005', polish: 'wsad', spanish: 'dunk', category: 'sports', subcategory: 'basketball', difficulty: 'intermediate' },
  { id: 'basketball_006', polish: 'podanie', spanish: 'pass', category: 'sports', subcategory: 'basketball', difficulty: 'intermediate' },
  { id: 'basketball_007', polish: 'kozłowanie', spanish: 'dribbling', category: 'sports', subcategory: 'basketball', difficulty: 'advanced' },
  { id: 'basketball_008', polish: 'trójka', spanish: 'three-pointer', category: 'sports', subcategory: 'basketball', difficulty: 'intermediate' },
  { id: 'basketball_009', polish: 'zbiórkę', spanish: 'rebound', category: 'sports', subcategory: 'basketball', difficulty: 'advanced' },
  { id: 'basketball_010', polish: 'blok', spanish: 'block', category: 'sports', subcategory: 'basketball', difficulty: 'intermediate' },

  // TENIS (Tennis)
  { id: 'tennis_001', polish: 'tenis', spanish: 'tennis', category: 'sports', subcategory: 'tennis', difficulty: 'beginner' },
  { id: 'tennis_002', polish: 'kort', spanish: 'court', category: 'sports', subcategory: 'tennis', difficulty: 'intermediate' },
  { id: 'tennis_003', polish: 'rakieta', spanish: 'racket', category: 'sports', subcategory: 'tennis', difficulty: 'intermediate' },
  { id: 'tennis_004', polish: 'piłka tenisowa', spanish: 'tennis ball', category: 'sports', subcategory: 'tennis', difficulty: 'intermediate' },
  { id: 'tennis_005', polish: 'siatka', spanish: 'net', category: 'sports', subcategory: 'tennis', difficulty: 'beginner' },
  { id: 'tennis_006', polish: 'serwis', spanish: 'serve', category: 'sports', subcategory: 'tennis', difficulty: 'intermediate' },
  { id: 'tennis_007', polish: 'as', spanish: 'ace', category: 'sports', subcategory: 'tennis', difficulty: 'intermediate' },
  { id: 'tennis_008', polish: 'gem', spanish: 'game', category: 'sports', subcategory: 'tennis', difficulty: 'intermediate' },
  { id: 'tennis_009', polish: 'set', spanish: 'set', category: 'sports', subcategory: 'tennis', difficulty: 'intermediate' },
  { id: 'tennis_010', polish: 'mecz', spanish: 'match', category: 'sports', subcategory: 'tennis', difficulty: 'beginner' },

  // PŁYWANIE (Swimming)
  { id: 'swimming_001', polish: 'pływanie', spanish: 'swimming', category: 'sports', subcategory: 'swimming', difficulty: 'beginner' },
  { id: 'swimming_002', polish: 'basen', spanish: 'pool', category: 'sports', subcategory: 'swimming', difficulty: 'beginner' },
  { id: 'swimming_003', polish: 'tor', spanish: 'lane', category: 'sports', subcategory: 'swimming', difficulty: 'intermediate' },
  { id: 'swimming_004', polish: 'kraul', spanish: 'freestyle', category: 'sports', subcategory: 'swimming', difficulty: 'intermediate' },
  { id: 'swimming_005', polish: 'żabka', spanish: 'breaststroke', category: 'sports', subcategory: 'swimming', difficulty: 'intermediate' },
  { id: 'swimming_006', polish: 'grzbiet', spanish: 'backstroke', category: 'sports', subcategory: 'swimming', difficulty: 'intermediate' },
  { id: 'swimming_007', polish: 'motylek', spanish: 'butterfly', category: 'sports', subcategory: 'swimming', difficulty: 'advanced' },
  { id: 'swimming_008', polish: 'nurkować', spanish: 'to dive', category: 'sports', subcategory: 'swimming', difficulty: 'intermediate' },
  { id: 'swimming_009', polish: 'pływak', spanish: 'swimmer', category: 'sports', subcategory: 'swimming', difficulty: 'beginner' },
  { id: 'swimming_010', polish: 'okularki', spanish: 'goggles', category: 'sports', subcategory: 'swimming', difficulty: 'intermediate' },
  { id: 'swimming_011', polish: 'czepek', spanish: 'swim cap', category: 'sports', subcategory: 'swimming', difficulty: 'intermediate' },
  { id: 'swimming_012', polish: 'deska do pływania', spanish: 'kickboard', category: 'sports', subcategory: 'swimming', difficulty: 'advanced' },

  // SIŁOWNIA (Gym)
  { id: 'gym_001', polish: 'siłownia', spanish: 'gym', category: 'sports', subcategory: 'gym', difficulty: 'beginner' },
  { id: 'gym_002', polish: 'trening', spanish: 'workout', category: 'sports', subcategory: 'gym', difficulty: 'intermediate' },
  { id: 'gym_003', polish: 'ciężary', spanish: 'weights', category: 'sports', subcategory: 'gym', difficulty: 'intermediate' },
  { id: 'gym_004', polish: 'hantle', spanish: 'dumbbells', category: 'sports', subcategory: 'gym', difficulty: 'intermediate' },
  { id: 'gym_005', polish: 'sztanga', spanish: 'barbell', category: 'sports', subcategory: 'gym', difficulty: 'intermediate' },
  { id: 'gym_006', polish: 'bieżnia', spanish: 'treadmill', category: 'sports', subcategory: 'gym', difficulty: 'intermediate' },
  { id: 'gym_007', polish: 'rower stacjonarny', spanish: 'stationary bike', category: 'sports', subcategory: 'gym', difficulty: 'intermediate' },
  { id: 'gym_008', polish: 'orbitrek', spanish: 'elliptical', category: 'sports', subcategory: 'gym', difficulty: 'advanced' },
  { id: 'gym_009', polish: 'mata', spanish: 'mat', category: 'sports', subcategory: 'gym', difficulty: 'beginner' },
  { id: 'gym_010', polish: 'pompki', spanish: 'push-ups', category: 'sports', subcategory: 'gym', difficulty: 'intermediate' },
  { id: 'gym_011', polish: 'przysiady', spanish: 'squats', category: 'sports', subcategory: 'gym', difficulty: 'intermediate' },
  { id: 'gym_012', polish: 'rozciąganie', spanish: 'stretching', category: 'sports', subcategory: 'gym', difficulty: 'intermediate' },

  // BIEGANIE (Running)
  { id: 'running_001', polish: 'bieganie', spanish: 'running', category: 'sports', subcategory: 'running', difficulty: 'beginner' },
  { id: 'running_002', polish: 'jogging', spanish: 'jogging', category: 'sports', subcategory: 'running', difficulty: 'beginner' },
  { id: 'running_003', polish: 'maraton', spanish: 'marathon', category: 'sports', subcategory: 'running', difficulty: 'intermediate' },
  { id: 'running_004', polish: 'sprint', spanish: 'sprint', category: 'sports', subcategory: 'running', difficulty: 'intermediate' },
  { id: 'running_005', polish: 'biegacz', spanish: 'runner', category: 'sports', subcategory: 'running', difficulty: 'beginner' },
  { id: 'running_006', polish: 'ścieżka', spanish: 'track', category: 'sports', subcategory: 'running', difficulty: 'intermediate' },
  { id: 'running_007', polish: 'start', spanish: 'start', category: 'sports', subcategory: 'running', difficulty: 'beginner' },
  { id: 'running_008', polish: 'meta', spanish: 'finish line', category: 'sports', subcategory: 'running', difficulty: 'intermediate' },
  { id: 'running_009', polish: 'rozgrzewka', spanish: 'warm-up', category: 'sports', subcategory: 'running', difficulty: 'intermediate' },
  { id: 'running_010', polish: 'tempo', spanish: 'pace', category: 'sports', subcategory: 'running', difficulty: 'intermediate' },

  // SPORTY ZIMOWE (Winter Sports)
  { id: 'winter_001', polish: 'narciarstwo', spanish: 'skiing', category: 'sports', subcategory: 'winter-sports', difficulty: 'intermediate' },
  { id: 'winter_002', polish: 'narty', spanish: 'skis', category: 'sports', subcategory: 'winter-sports', difficulty: 'intermediate' },
  { id: 'winter_003', polish: 'snowboard', spanish: 'snowboard', category: 'sports', subcategory: 'winter-sports', difficulty: 'intermediate' },
  { id: 'winter_004', polish: 'stok', spanish: 'slope', category: 'sports', subcategory: 'winter-sports', difficulty: 'intermediate' },
  { id: 'winter_005', polish: 'wyciąg', spanish: 'ski lift', category: 'sports', subcategory: 'winter-sports', difficulty: 'intermediate' },
  { id: 'winter_006', polish: 'kask', spanish: 'helmet', category: 'sports', subcategory: 'winter-sports', difficulty: 'intermediate' },
  { id: 'winter_007', polish: 'gogle', spanish: 'goggles', category: 'sports', subcategory: 'winter-sports', difficulty: 'intermediate' },
  { id: 'winter_008', polish: 'łyżwy', spanish: 'ice skates', category: 'sports', subcategory: 'winter-sports', difficulty: 'intermediate' },
  { id: 'winter_009', polish: 'lodowisko', spanish: 'ice rink', category: 'sports', subcategory: 'winter-sports', difficulty: 'intermediate' },
  { id: 'winter_010', polish: 'hokej', spanish: 'hockey', category: 'sports', subcategory: 'winter-sports', difficulty: 'intermediate' },

  // SPORTY OGÓLNE (General Sports)
  { id: 'general_001', polish: 'sport', spanish: 'sport', category: 'sports', subcategory: 'general', difficulty: 'beginner' },
  { id: 'general_002', polish: 'drużyna', spanish: 'team', category: 'sports', subcategory: 'general', difficulty: 'beginner' },
  { id: 'general_003', polish: 'zawodnik', spanish: 'player', category: 'sports', subcategory: 'general', difficulty: 'beginner' },
  { id: 'general_004', polish: 'trener', spanish: 'coach', category: 'sports', subcategory: 'general', difficulty: 'beginner' },
  { id: 'general_005', polish: 'kibic', spanish: 'fan', category: 'sports', subcategory: 'general', difficulty: 'intermediate' },
  { id: 'general_006', polish: 'stadion', spanish: 'stadium', category: 'sports', subcategory: 'general', difficulty: 'beginner' },
  { id: 'general_007', polish: 'mistrzostwa', spanish: 'championship', category: 'sports', subcategory: 'general', difficulty: 'intermediate' },
  { id: 'general_008', polish: 'medal', spanish: 'medal', category: 'sports', subcategory: 'general', difficulty: 'beginner' },
  { id: 'general_009', polish: 'zwycięzca', spanish: 'winner', category: 'sports', subcategory: 'general', difficulty: 'intermediate' },
  { id: 'general_010', polish: 'przegrany', spanish: 'loser', category: 'sports', subcategory: 'general', difficulty: 'intermediate' },
  { id: 'general_011', polish: 'wynik', spanish: 'score', category: 'sports', subcategory: 'general', difficulty: 'beginner' },
  { id: 'general_012', polish: 'remis', spanish: 'tie', category: 'sports', subcategory: 'general', difficulty: 'intermediate' },
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
