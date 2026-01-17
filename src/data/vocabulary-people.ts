import { VocabularyWord } from '@/types';

/**
 * Vocabulario de la categoría LUDZIE (Gente)
 * Basado en el diccionario visual polaco-español
 */

export const peopleVocabulary: VocabularyWord[] = [
  // CIAŁO (Cuerpo)
  { id: 'body_001', polish: 'głowa', spanish: 'cabeza', category: 'people', subcategory: 'body', difficulty: 'beginner' },
  { id: 'body_002', polish: 'kark', spanish: 'nuca', category: 'people', subcategory: 'body', difficulty: 'intermediate' },
  { id: 'body_003', polish: 'szyja', spanish: 'cuello', category: 'people', subcategory: 'body', difficulty: 'beginner' },
  { id: 'body_004', polish: 'ramię', spanish: 'hombro', category: 'people', subcategory: 'body', difficulty: 'beginner' },
  { id: 'body_005', polish: 'bark', spanish: 'brazo superior', category: 'people', subcategory: 'body', difficulty: 'intermediate' },
  { id: 'body_006', polish: 'łokieć', spanish: 'codo', category: 'people', subcategory: 'body', difficulty: 'beginner' },
  { id: 'body_007', polish: 'przedramię', spanish: 'antebrazo', category: 'people', subcategory: 'body', difficulty: 'intermediate' },
  { id: 'body_008', polish: 'nadgarstek', spanish: 'muñeca', category: 'people', subcategory: 'body', difficulty: 'intermediate' },
  { id: 'body_009', polish: 'ręka', spanish: 'brazo', category: 'people', subcategory: 'body', difficulty: 'beginner' },
  { id: 'body_010', polish: 'dłoń', spanish: 'mano', category: 'people', subcategory: 'body', difficulty: 'beginner' },
  { id: 'body_011', polish: 'klatka piersiowa', spanish: 'pecho', category: 'people', subcategory: 'body', difficulty: 'intermediate' },
  { id: 'body_012', polish: 'brzuch', spanish: 'estómago', category: 'people', subcategory: 'body', difficulty: 'beginner' },
  { id: 'body_013', polish: 'talia', spanish: 'cintura', category: 'people', subcategory: 'body', difficulty: 'intermediate' },
  { id: 'body_014', polish: 'pępek', spanish: 'ombligo', category: 'people', subcategory: 'body', difficulty: 'intermediate' },
  { id: 'body_015', polish: 'biodro', spanish: 'cadera', category: 'people', subcategory: 'body', difficulty: 'intermediate' },
  { id: 'body_016', polish: 'krocze', spanish: 'ingle', category: 'people', subcategory: 'body', difficulty: 'advanced' },
  { id: 'body_017', polish: 'noga', spanish: 'pierna', category: 'people', subcategory: 'body', difficulty: 'beginner' },
  { id: 'body_018', polish: 'udo', spanish: 'muslo', category: 'people', subcategory: 'body', difficulty: 'intermediate' },
  { id: 'body_019', polish: 'kolano', spanish: 'rodilla', category: 'people', subcategory: 'body', difficulty: 'beginner' },
  { id: 'body_020', polish: 'łydka', spanish: 'espinilla', category: 'people', subcategory: 'body', difficulty: 'intermediate' },
  { id: 'body_021', polish: 'kostka', spanish: 'tobillo', category: 'people', subcategory: 'body', difficulty: 'intermediate' },
  { id: 'body_022', polish: 'stopa', spanish: 'pie', category: 'people', subcategory: 'body', difficulty: 'beginner' },
  { id: 'body_023', polish: 'palec', spanish: 'dedo', category: 'people', subcategory: 'body', difficulty: 'beginner' },
  { id: 'body_024', polish: 'kciuk', spanish: 'pulgar', category: 'people', subcategory: 'body', difficulty: 'intermediate' },
  { id: 'body_025', polish: 'paznokieć', spanish: 'uña', category: 'people', subcategory: 'body', difficulty: 'intermediate' },
  { id: 'body_026', polish: 'plecy', spanish: 'espalda', category: 'people', subcategory: 'body', difficulty: 'beginner' },
  { id: 'body_027', polish: 'pośladek', spanish: 'nalga', category: 'people', subcategory: 'body', difficulty: 'intermediate' },

  // TWARZ (Cara)
  { id: 'face_001', polish: 'czoło', spanish: 'frente', category: 'people', subcategory: 'face', difficulty: 'intermediate' },
  { id: 'face_002', polish: 'skroń', spanish: 'sien', category: 'people', subcategory: 'face', difficulty: 'advanced' },
  { id: 'face_003', polish: 'brew', spanish: 'ceja', category: 'people', subcategory: 'face', difficulty: 'intermediate' },
  { id: 'face_004', polish: 'rzęsa', spanish: 'pestaña', category: 'people', subcategory: 'face', difficulty: 'intermediate' },
  { id: 'face_005', polish: 'oko', spanish: 'ojo', category: 'people', subcategory: 'face', difficulty: 'beginner' },
  { id: 'face_006', polish: 'powieka', spanish: 'párpado', category: 'people', subcategory: 'face', difficulty: 'advanced' },
  { id: 'face_007', polish: 'źrenica', spanish: 'pupila', category: 'people', subcategory: 'face', difficulty: 'advanced' },
  { id: 'face_008', polish: 'tęczówka', spanish: 'iris', category: 'people', subcategory: 'face', difficulty: 'advanced' },
  { id: 'face_009', polish: 'nos', spanish: 'nariz', category: 'people', subcategory: 'face', difficulty: 'beginner' },
  { id: 'face_010', polish: 'nozdrze', spanish: 'fosa nasal', category: 'people', subcategory: 'face', difficulty: 'intermediate' },
  { id: 'face_011', polish: 'policzek', spanish: 'mejilla', category: 'people', subcategory: 'face', difficulty: 'intermediate' },
  { id: 'face_012', polish: 'usta', spanish: 'boca', category: 'people', subcategory: 'face', difficulty: 'beginner' },
  { id: 'face_013', polish: 'warga', spanish: 'labio', category: 'people', subcategory: 'face', difficulty: 'intermediate' },
  { id: 'face_014', polish: 'ząb', spanish: 'diente', category: 'people', subcategory: 'face', difficulty: 'beginner' },
  { id: 'face_015', polish: 'język', spanish: 'lengua', category: 'people', subcategory: 'face', difficulty: 'intermediate' },
  { id: 'face_016', polish: 'dziąsło', spanish: 'encía', category: 'people', subcategory: 'face', difficulty: 'advanced' },
  { id: 'face_017', polish: 'szczęka', spanish: 'mandíbula', category: 'people', subcategory: 'face', difficulty: 'intermediate' },
  { id: 'face_018', polish: 'broda', spanish: 'barbilla', category: 'people', subcategory: 'face', difficulty: 'intermediate' },
  { id: 'face_019', polish: 'ucho', spanish: 'oreja', category: 'people', subcategory: 'face', difficulty: 'beginner' },
  { id: 'face_020', polish: 'małżowina uszna', spanish: 'lóbulo', category: 'people', subcategory: 'face', difficulty: 'advanced' },

  // RODZINA (Familia)
  { id: 'family_001', polish: 'babcia', spanish: 'abuela', category: 'people', subcategory: 'family', difficulty: 'beginner' },
  { id: 'family_002', polish: 'dziadek', spanish: 'abuelo', category: 'people', subcategory: 'family', difficulty: 'beginner' },
  { id: 'family_003', polish: 'wujek', spanish: 'tío', category: 'people', subcategory: 'family', difficulty: 'intermediate' },
  { id: 'family_004', polish: 'ciotka', spanish: 'tía', category: 'people', subcategory: 'family', difficulty: 'intermediate' },
  { id: 'family_005', polish: 'ojciec', spanish: 'padre', category: 'people', subcategory: 'family', difficulty: 'beginner' },
  { id: 'family_006', polish: 'matka', spanish: 'madre', category: 'people', subcategory: 'family', difficulty: 'beginner' },
  { id: 'family_007', polish: 'brat', spanish: 'hermano', category: 'people', subcategory: 'family', difficulty: 'beginner' },
  { id: 'family_008', polish: 'siostra', spanish: 'hermana', category: 'people', subcategory: 'family', difficulty: 'beginner' },
  { id: 'family_009', polish: 'syn', spanish: 'hijo', category: 'people', subcategory: 'family', difficulty: 'beginner' },
  { id: 'family_010', polish: 'córka', spanish: 'hija', category: 'people', subcategory: 'family', difficulty: 'beginner' },
  { id: 'family_011', polish: 'wnuk', spanish: 'nieto', category: 'people', subcategory: 'family', difficulty: 'intermediate' },
  { id: 'family_012', polish: 'wnuczka', spanish: 'nieta', category: 'people', subcategory: 'family', difficulty: 'intermediate' },
  { id: 'family_013', polish: 'mąż', spanish: 'esposo', category: 'people', subcategory: 'family', difficulty: 'beginner' },
  { id: 'family_014', polish: 'żona', spanish: 'esposa', category: 'people', subcategory: 'family', difficulty: 'beginner' },
  { id: 'family_015', polish: 'zięć', spanish: 'yerno', category: 'people', subcategory: 'family', difficulty: 'intermediate' },
  { id: 'family_016', polish: 'synowa', spanish: 'nuera', category: 'people', subcategory: 'family', difficulty: 'intermediate' },
  { id: 'family_017', polish: 'teściowa', spanish: 'suegra', category: 'people', subcategory: 'family', difficulty: 'intermediate' },
  { id: 'family_018', polish: 'teść', spanish: 'suegro', category: 'people', subcategory: 'family', difficulty: 'intermediate' },
  { id: 'family_019', polish: 'szwagier', spanish: 'cuñado', category: 'people', subcategory: 'family', difficulty: 'intermediate' },
  { id: 'family_020', polish: 'szwagierka', spanish: 'cuñada', category: 'people', subcategory: 'family', difficulty: 'intermediate' },
  { id: 'family_021', polish: 'kuzyn', spanish: 'primo', category: 'people', subcategory: 'family', difficulty: 'intermediate' },
  { id: 'family_022', polish: 'kuzynka', spanish: 'prima', category: 'people', subcategory: 'family', difficulty: 'intermediate' },
  { id: 'family_023', polish: 'siostrzeniec', spanish: 'sobrino', category: 'people', subcategory: 'family', difficulty: 'intermediate' },
  { id: 'family_024', polish: 'siostrzenica', spanish: 'sobrina', category: 'people', subcategory: 'family', difficulty: 'intermediate' },
];

export async function seedPeopleVocabulary() {
  const { db } = await import('@/utils/database');
  
  try {
    // Get existing people vocabulary IDs
    const existingPeople = await db.vocabulary.where('category').equals('people').toArray();
    const existingIds = new Set(existingPeople.map(w => w.id));
    
    // Filter out words that already exist
    const newWords = peopleVocabulary.filter(word => !existingIds.has(word.id));
    
    if (newWords.length > 0) {
      await db.vocabulary.bulkAdd(newWords);
      console.log(`✅ Added ${newWords.length} new people words`);
    }
    
    // Always update total word count
    const totalCount = await db.vocabulary.where('category').equals('people').count();
    await db.categories.update('people', { totalWords: totalCount });
    console.log(`✅ People vocabulary: ${totalCount} total words (${peopleVocabulary.length} in file)`);
    return true;
  } catch (error) {
    if (error instanceof Error && error.name === 'ConstraintError') {
      // Some words might already exist, try to add the rest
      const existingPeople = await db.vocabulary.where('category').equals('people').toArray();
      const existingIds = new Set(existingPeople.map(w => w.id));
      const newWords = peopleVocabulary.filter(word => !existingIds.has(word.id));
      
      if (newWords.length > 0) {
        try {
          await db.vocabulary.bulkAdd(newWords);
        } catch (e) {
          console.error('Error adding remaining people words:', e);
        }
      }
      
      // Always update total word count
      const totalCount = await db.vocabulary.where('category').equals('people').count();
      await db.categories.update('people', { totalWords: totalCount });
      console.log(`✅ People vocabulary: ${totalCount} total words`);
      return true;
    }
    console.error('Error seeding people vocabulary:', error);
    return false;
  }
}
