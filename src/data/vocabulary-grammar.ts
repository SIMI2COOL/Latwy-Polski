import { VocabularyWord } from '@/types';

/**
 * Grammar-focused vocabulary cards.
 *
 * These plug into the existing study engine (flashcards + typing quiz)
 * and exercises engine (multiple choice + arrange-the-words).
 *
 * Content is intentionally short and "atomic" so it's easy to practice.
 */
export const grammarVocabulary: VocabularyWord[] = [
  // =========================
  // 10. Important Sentence Constructions (starter)
  // =========================
  {
    id: 'grammar_sc_001',
    polish: 'To jest mój brat.',
    english: 'This is my brother.',
    category: 'grammar',
    subcategory: 'sentence-constructions',
    difficulty: 'beginner',
    tags: ['to-jest', 'identity'],
  },
  {
    id: 'grammar_sc_002',
    polish: 'To są moje klucze.',
    english: 'These are my keys.',
    category: 'grammar',
    subcategory: 'sentence-constructions',
    difficulty: 'beginner',
    tags: ['to-sa', 'identity'],
  },
  {
    id: 'grammar_sc_003',
    polish: 'Warszawa to stolica Polski.',
    english: 'Warsaw is the capital of Poland.',
    category: 'grammar',
    subcategory: 'sentence-constructions',
    difficulty: 'beginner',
    tags: ['to', 'identity'],
  },
  {
    id: 'grammar_sc_004',
    polish: 'Jestem studentem.',
    english: 'I am a student.',
    category: 'grammar',
    subcategory: 'sentence-constructions',
    difficulty: 'beginner',
    tags: ['byc', 'instrumental'],
  },
  {
    id: 'grammar_sc_005',
    polish: 'Ona jest dobrą nauczycielką.',
    english: 'She is a good teacher.',
    category: 'grammar',
    subcategory: 'sentence-constructions',
    difficulty: 'intermediate',
    tags: ['byc', 'instrumental'],
  },
  {
    id: 'grammar_sc_006',
    polish: 'On jest zmęczony.',
    english: 'He is tired.',
    category: 'grammar',
    subcategory: 'sentence-constructions',
    difficulty: 'beginner',
    tags: ['byc', 'predicate-adjective'],
  },
  {
    id: 'grammar_sc_007',
    polish: 'Czy to jest dobre?',
    english: 'Is this good?',
    category: 'grammar',
    subcategory: 'sentence-constructions',
    difficulty: 'beginner',
    tags: ['czy', 'yes-no-question'],
  },
  {
    id: 'grammar_sc_008',
    polish: 'Nie mam czasu.',
    english: "I don't have time.",
    category: 'grammar',
    subcategory: 'sentence-constructions',
    difficulty: 'beginner',
    tags: ['nie', 'negation'],
  },
  {
    id: 'grammar_sc_009',
    polish: 'Nie ma kawy.',
    english: 'There is no coffee.',
    category: 'grammar',
    subcategory: 'sentence-constructions',
    difficulty: 'beginner',
    tags: ['nie-ma', 'genitive'],
  },
  {
    id: 'grammar_sc_010',
    polish: 'Nie było mleka.',
    english: 'There was no milk.',
    category: 'grammar',
    subcategory: 'sentence-constructions',
    difficulty: 'intermediate',
    tags: ['nie-bylo', 'genitive'],
  },
  {
    id: 'grammar_sc_011',
    polish: 'Nie będzie problemu.',
    english: 'There will be no problem.',
    category: 'grammar',
    subcategory: 'sentence-constructions',
    difficulty: 'intermediate',
    tags: ['nie-bedzie', 'genitive'],
  },
  {
    id: 'grammar_sc_012',
    polish: 'Nic nie mam.',
    english: 'I have nothing.',
    category: 'grammar',
    subcategory: 'sentence-constructions',
    difficulty: 'intermediate',
    tags: ['double-negation'],
  },

  // =========================
  // 7. Prepositions (core set + simple phrases)
  // =========================
  {
    id: 'grammar_prep_001',
    polish: 'do',
    english: 'to (genitive)',
    category: 'grammar',
    subcategory: 'prepositions',
    difficulty: 'beginner',
    tags: ['genitive'],
  },
  {
    id: 'grammar_prep_002',
    polish: 'w',
    english: 'in (locative) / into (accusative)',
    category: 'grammar',
    subcategory: 'prepositions',
    difficulty: 'beginner',
    tags: ['locative', 'accusative'],
  },
  {
    id: 'grammar_prep_003',
    polish: 'na',
    english: 'on (locative) / onto (accusative)',
    category: 'grammar',
    subcategory: 'prepositions',
    difficulty: 'beginner',
    tags: ['locative', 'accusative'],
  },
  {
    id: 'grammar_prep_004',
    polish: 'z',
    english: 'with (instrumental) / from (genitive)',
    category: 'grammar',
    subcategory: 'prepositions',
    difficulty: 'beginner',
    tags: ['instrumental', 'genitive'],
  },
  {
    id: 'grammar_prep_005',
    polish: 'bez',
    english: 'without (genitive)',
    category: 'grammar',
    subcategory: 'prepositions',
    difficulty: 'beginner',
    tags: ['genitive'],
  },
  {
    id: 'grammar_prep_006',
    polish: 'dla',
    english: 'for (genitive)',
    category: 'grammar',
    subcategory: 'prepositions',
    difficulty: 'beginner',
    tags: ['genitive'],
  },
  {
    id: 'grammar_prep_007',
    polish: 'od',
    english: 'from (genitive)',
    category: 'grammar',
    subcategory: 'prepositions',
    difficulty: 'beginner',
    tags: ['genitive'],
  },
  {
    id: 'grammar_prep_008',
    polish: 'u',
    english: "at someone’s place (genitive)",
    category: 'grammar',
    subcategory: 'prepositions',
    difficulty: 'beginner',
    tags: ['genitive'],
  },
  {
    id: 'grammar_prep_009',
    polish: 'przed',
    english: 'in front of (instrumental)',
    category: 'grammar',
    subcategory: 'prepositions',
    difficulty: 'intermediate',
    tags: ['instrumental'],
  },
  {
    id: 'grammar_prep_010',
    polish: 'za',
    english: 'behind (instrumental) / for (accusative)',
    category: 'grammar',
    subcategory: 'prepositions',
    difficulty: 'intermediate',
    tags: ['instrumental', 'accusative'],
  },
  // Phrases (multi-word so Arrange-the-Words can be used)
  {
    id: 'grammar_prep_101',
    polish: 'do domu',
    english: 'to home',
    category: 'grammar',
    subcategory: 'prepositions',
    difficulty: 'beginner',
    tags: ['genitive'],
  },
  {
    id: 'grammar_prep_102',
    polish: 'w domu',
    english: 'at home',
    category: 'grammar',
    subcategory: 'prepositions',
    difficulty: 'beginner',
    tags: ['locative'],
  },
  {
    id: 'grammar_prep_103',
    polish: 'na stole',
    english: 'on the table',
    category: 'grammar',
    subcategory: 'prepositions',
    difficulty: 'beginner',
    tags: ['locative'],
  },
  {
    id: 'grammar_prep_104',
    polish: 'z przyjacielem',
    english: 'with a friend',
    category: 'grammar',
    subcategory: 'prepositions',
    difficulty: 'beginner',
    tags: ['instrumental'],
  },
  {
    id: 'grammar_prep_105',
    polish: 'bez cukru',
    english: 'without sugar',
    category: 'grammar',
    subcategory: 'prepositions',
    difficulty: 'beginner',
    tags: ['genitive'],
  },
  {
    id: 'grammar_prep_106',
    polish: 'dla mamy',
    english: 'for mom',
    category: 'grammar',
    subcategory: 'prepositions',
    difficulty: 'beginner',
    tags: ['genitive'],
  },
  {
    id: 'grammar_prep_107',
    polish: 'od jutra',
    english: 'from tomorrow',
    category: 'grammar',
    subcategory: 'prepositions',
    difficulty: 'intermediate',
    tags: ['genitive'],
  },
  {
    id: 'grammar_prep_108',
    polish: 'u lekarza',
    english: "at the doctor's",
    category: 'grammar',
    subcategory: 'prepositions',
    difficulty: 'intermediate',
    tags: ['genitive'],
  },
  {
    id: 'grammar_prep_109',
    polish: 'przed szkołą',
    english: 'in front of the school',
    category: 'grammar',
    subcategory: 'prepositions',
    difficulty: 'intermediate',
    tags: ['instrumental'],
  },
  {
    id: 'grammar_prep_110',
    polish: 'za domem',
    english: 'behind the house',
    category: 'grammar',
    subcategory: 'prepositions',
    difficulty: 'intermediate',
    tags: ['instrumental'],
  },

  // =========================
  // “Placeholders” so the other chapters show up as subcategories
  // (we’ll expand these next)
  // =========================
  { id: 'grammar_num_001', polish: 'jeden', english: '1', category: 'grammar', subcategory: 'numerals', difficulty: 'beginner' },
  { id: 'grammar_conj_001', polish: 'ale', english: 'but', category: 'grammar', subcategory: 'conjunctions', difficulty: 'beginner' },
  { id: 'grammar_v_001', polish: 'być', english: 'to be', category: 'grammar', subcategory: 'verbs', difficulty: 'beginner' },
  { id: 'grammar_topv_001', polish: 'mieć', english: 'to have', category: 'grammar', subcategory: 'top-verbs', difficulty: 'beginner' },
];

export async function seedGrammarVocabulary() {
  const { db } = await import('@/utils/database');

  try {
    const existing = await db.vocabulary.where('category').equals('grammar').toArray();
    const existingIds = new Set(existing.map((w) => w.id));
    const existingById = new Map(existing.map((w) => [w.id, w]));

    const newWords = grammarVocabulary.filter((w) => !existingIds.has(w.id));
    const updatedWords = grammarVocabulary.filter((word) => {
      const old = existingById.get(word.id);
      if (!old) return false;
      return (
        old.polish !== word.polish ||
        old.english !== word.english ||
        old.subcategory !== word.subcategory ||
        old.difficulty !== word.difficulty ||
        old.category !== word.category
      );
    });

    if (newWords.length > 0) {
      await db.vocabulary.bulkAdd(newWords);
      console.log(`✅ Added ${newWords.length} new grammar cards`);
    }

    if (updatedWords.length > 0) {
      await db.vocabulary.bulkPut(updatedWords);
      console.log(`✅ Updated ${updatedWords.length} grammar cards`);
    }

    const totalCount = await db.vocabulary.where('category').equals('grammar').count();
    await db.categories.update('grammar', { totalWords: totalCount });
    console.log(`✅ Grammar vocabulary: ${totalCount} total cards`);
    return true;
  } catch (error) {
    console.error('Error seeding grammar vocabulary:', error);
    return false;
  }
}

