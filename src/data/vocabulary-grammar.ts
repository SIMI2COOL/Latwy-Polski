import { VocabularyWord } from '@/types';

/**
 * Grammar-focused vocabulary cards.
 *
 * These plug into the existing study engine (flashcards + typing quiz)
 * and exercises engine (multiple choice + arrange-the-words).
 *
 * Content is intentionally "atomic" (small cards) so it's easy to practice.
 * As this grows, we prefer:
 * - Lots of short cards over a few huge “rule cards”
 * - Multi-word Polish entries where possible (so Arrange-the-Words is useful)
 */
function pad3(n: number): string {
  return String(n).padStart(3, '0');
}

function makeCard(params: Omit<VocabularyWord, 'category'> & { category?: string }): VocabularyWord {
  return {
    category: 'grammar',
    ...params,
  };
}

// -------------------------
// Sentence constructions (expanded)
// -------------------------
const sentenceConstructions: VocabularyWord[] = [
  makeCard({
    id: 'grammar_sc_001',
    polish: 'To jest mój brat.',
    english: 'This is my brother.',
    subcategory: 'sentence-constructions',
    difficulty: 'beginner',
    tags: ['to-jest', 'identity'],
  }),
  makeCard({
    id: 'grammar_sc_002',
    polish: 'To są moje klucze.',
    english: 'These are my keys.',
    subcategory: 'sentence-constructions',
    difficulty: 'beginner',
    tags: ['to-sa', 'identity'],
  }),
  makeCard({
    id: 'grammar_sc_003',
    polish: 'Warszawa to stolica Polski.',
    english: 'Warsaw is the capital of Poland.',
    subcategory: 'sentence-constructions',
    difficulty: 'beginner',
    tags: ['to', 'identity'],
  }),
  makeCard({
    id: 'grammar_sc_004',
    polish: 'Jestem studentem.',
    english: 'I am a student.',
    subcategory: 'sentence-constructions',
    difficulty: 'beginner',
    tags: ['byc', 'instrumental'],
  }),
  makeCard({
    id: 'grammar_sc_005',
    polish: 'Ona jest dobrą nauczycielką.',
    english: 'She is a good teacher.',
    subcategory: 'sentence-constructions',
    difficulty: 'intermediate',
    tags: ['byc', 'instrumental'],
  }),
  makeCard({
    id: 'grammar_sc_006',
    polish: 'On jest zmęczony.',
    english: 'He is tired.',
    subcategory: 'sentence-constructions',
    difficulty: 'beginner',
    tags: ['byc', 'predicate-adjective'],
  }),
  makeCard({
    id: 'grammar_sc_007',
    polish: 'Czy to jest dobre?',
    english: 'Is this good?',
    subcategory: 'sentence-constructions',
    difficulty: 'beginner',
    tags: ['czy', 'yes-no-question'],
  }),
  makeCard({
    id: 'grammar_sc_008',
    polish: 'Nie mam czasu.',
    english: "I don't have time.",
    subcategory: 'sentence-constructions',
    difficulty: 'beginner',
    tags: ['nie', 'negation'],
  }),
  makeCard({
    id: 'grammar_sc_009',
    polish: 'Nie ma kawy.',
    english: 'There is no coffee.',
    subcategory: 'sentence-constructions',
    difficulty: 'beginner',
    tags: ['nie-ma', 'genitive'],
  }),
  makeCard({
    id: 'grammar_sc_010',
    polish: 'Nie było mleka.',
    english: 'There was no milk.',
    subcategory: 'sentence-constructions',
    difficulty: 'intermediate',
    tags: ['nie-bylo', 'genitive'],
  }),
  makeCard({
    id: 'grammar_sc_011',
    polish: 'Nie będzie problemu.',
    english: 'There will be no problem.',
    subcategory: 'sentence-constructions',
    difficulty: 'intermediate',
    tags: ['nie-bedzie', 'genitive'],
  }),
  makeCard({
    id: 'grammar_sc_012',
    polish: 'Nic nie mam.',
    english: 'I have nothing.',
    subcategory: 'sentence-constructions',
    difficulty: 'intermediate',
    tags: ['double-negation'],
  }),
  makeCard({
    id: 'grammar_sc_013',
    polish: 'Nie wiem, czy on ma czas.',
    english: "I don't know whether he has time.",
    subcategory: 'sentence-constructions',
    difficulty: 'intermediate',
    tags: ['czy', 'subordinate-clause'],
  }),
  makeCard({
    id: 'grammar_sc_014',
    polish: 'Słyszałem, że masz nową pracę.',
    english: 'I heard that you have a new job.',
    subcategory: 'sentence-constructions',
    difficulty: 'intermediate',
    tags: ['ze', 'subordinate-clause'],
  }),
  makeCard({
    id: 'grammar_sc_015',
    polish: 'Jeśli pada, to zostaję w domu.',
    english: 'If it is raining, then I stay at home.',
    subcategory: 'sentence-constructions',
    difficulty: 'intermediate',
    tags: ['jesli', 'conditional'],
  }),
  makeCard({
    id: 'grammar_sc_016',
    polish: 'Gdybym miał czas, poszedłbym na spacer.',
    english: 'If I had time, I would go for a walk.',
    subcategory: 'sentence-constructions',
    difficulty: 'advanced',
    tags: ['conditional', 'gdyby'],
  }),
  makeCard({
    id: 'grammar_sc_017',
    polish: 'Muszę iść.',
    english: 'I have to go.',
    subcategory: 'sentence-constructions',
    difficulty: 'beginner',
    tags: ['musiec'],
  }),
  makeCard({
    id: 'grammar_sc_018',
    polish: 'Chcę kupić bilet.',
    english: 'I want to buy a ticket.',
    subcategory: 'sentence-constructions',
    difficulty: 'beginner',
    tags: ['chciec', 'infinitive'],
  }),
  makeCard({
    id: 'grammar_sc_019',
    polish: 'Lubię, kiedy jest cicho.',
    english: 'I like it when it is quiet.',
    subcategory: 'sentence-constructions',
    difficulty: 'intermediate',
    tags: ['kiedy', 'subordinate-clause'],
  }),
  makeCard({
    id: 'grammar_sc_020',
    polish: 'Nie mogę teraz.',
    english: "I can't right now.",
    subcategory: 'sentence-constructions',
    difficulty: 'beginner',
    tags: ['moc'],
  }),
];

// -------------------------
// Prepositions (expanded)
// -------------------------
const prepositions: VocabularyWord[] = [
  // Core “single word” cards (meaning + required case)
  makeCard({ id: 'grammar_prep_001', polish: 'do', english: 'to (genitive)', subcategory: 'prepositions', difficulty: 'beginner', tags: ['genitive'] }),
  makeCard({ id: 'grammar_prep_002', polish: 'w', english: 'in (locative) / into (accusative)', subcategory: 'prepositions', difficulty: 'beginner', tags: ['locative', 'accusative'] }),
  makeCard({ id: 'grammar_prep_003', polish: 'na', english: 'on (locative) / onto (accusative)', subcategory: 'prepositions', difficulty: 'beginner', tags: ['locative', 'accusative'] }),
  makeCard({ id: 'grammar_prep_004', polish: 'z', english: 'with (instrumental) / from (genitive)', subcategory: 'prepositions', difficulty: 'beginner', tags: ['instrumental', 'genitive'] }),
  makeCard({ id: 'grammar_prep_005', polish: 'bez', english: 'without (genitive)', subcategory: 'prepositions', difficulty: 'beginner', tags: ['genitive'] }),
  makeCard({ id: 'grammar_prep_006', polish: 'dla', english: 'for (genitive)', subcategory: 'prepositions', difficulty: 'beginner', tags: ['genitive'] }),
  makeCard({ id: 'grammar_prep_007', polish: 'od', english: 'from (genitive)', subcategory: 'prepositions', difficulty: 'beginner', tags: ['genitive'] }),
  makeCard({ id: 'grammar_prep_008', polish: 'u', english: "at someone’s place (genitive)", subcategory: 'prepositions', difficulty: 'beginner', tags: ['genitive'] }),
  makeCard({ id: 'grammar_prep_009', polish: 'przed', english: 'in front of (instrumental)', subcategory: 'prepositions', difficulty: 'intermediate', tags: ['instrumental'] }),
  makeCard({ id: 'grammar_prep_010', polish: 'za', english: 'behind (instrumental) / for (accusative)', subcategory: 'prepositions', difficulty: 'intermediate', tags: ['instrumental', 'accusative'] }),
  makeCard({ id: 'grammar_prep_011', polish: 'o', english: 'about (locative) / (asking for) (accusative)', subcategory: 'prepositions', difficulty: 'beginner', tags: ['locative', 'accusative'] }),
  makeCard({ id: 'grammar_prep_012', polish: 'po', english: 'after (locative) / (for a time) (accusative)', subcategory: 'prepositions', difficulty: 'intermediate', tags: ['locative', 'accusative'] }),
  makeCard({ id: 'grammar_prep_013', polish: 'przy', english: 'at/near (locative)', subcategory: 'prepositions', difficulty: 'beginner', tags: ['locative'] }),
  makeCard({ id: 'grammar_prep_014', polish: 'przez', english: 'through / by means of (accusative)', subcategory: 'prepositions', difficulty: 'intermediate', tags: ['accusative'] }),
  makeCard({ id: 'grammar_prep_015', polish: 'pod', english: 'under (instrumental = location) / (accusative = motion)', subcategory: 'prepositions', difficulty: 'intermediate', tags: ['instrumental', 'accusative'] }),
  makeCard({ id: 'grammar_prep_016', polish: 'nad', english: 'above (instrumental = location) / (accusative = motion)', subcategory: 'prepositions', difficulty: 'intermediate', tags: ['instrumental', 'accusative'] }),
  makeCard({ id: 'grammar_prep_017', polish: 'między', english: 'between (instrumental = location) / (accusative = motion)', subcategory: 'prepositions', difficulty: 'advanced', tags: ['instrumental', 'accusative'] }),
  makeCard({ id: 'grammar_prep_018', polish: 'obok', english: 'next to (genitive)', subcategory: 'prepositions', difficulty: 'beginner', tags: ['genitive'] }),
  makeCard({ id: 'grammar_prep_019', polish: 'wokół', english: 'around (genitive)', subcategory: 'prepositions', difficulty: 'intermediate', tags: ['genitive'] }),
  makeCard({ id: 'grammar_prep_020', polish: 'koło', english: 'near (genitive)', subcategory: 'prepositions', difficulty: 'intermediate', tags: ['genitive'] }),
  makeCard({ id: 'grammar_prep_021', polish: 'oprócz', english: 'besides / except (genitive)', subcategory: 'prepositions', difficulty: 'advanced', tags: ['genitive'] }),
  makeCard({ id: 'grammar_prep_022', polish: 'dzięki', english: 'thanks to (dative)', subcategory: 'prepositions', difficulty: 'advanced', tags: ['dative'] }),
  makeCard({ id: 'grammar_prep_023', polish: 'mimo', english: 'despite (genitive)', subcategory: 'prepositions', difficulty: 'advanced', tags: ['genitive'] }),

  // Phrase practice (multi-word entries)
  makeCard({ id: 'grammar_prep_101', polish: 'do domu', english: 'to home', subcategory: 'prepositions', difficulty: 'beginner', tags: ['genitive'] }),
  makeCard({ id: 'grammar_prep_102', polish: 'w domu', english: 'at home', subcategory: 'prepositions', difficulty: 'beginner', tags: ['locative'] }),
  makeCard({ id: 'grammar_prep_103', polish: 'na stole', english: 'on the table', subcategory: 'prepositions', difficulty: 'beginner', tags: ['locative'] }),
  makeCard({ id: 'grammar_prep_104', polish: 'z przyjacielem', english: 'with a friend', subcategory: 'prepositions', difficulty: 'beginner', tags: ['instrumental'] }),
  makeCard({ id: 'grammar_prep_105', polish: 'bez cukru', english: 'without sugar', subcategory: 'prepositions', difficulty: 'beginner', tags: ['genitive'] }),
  makeCard({ id: 'grammar_prep_106', polish: 'dla mamy', english: 'for mom', subcategory: 'prepositions', difficulty: 'beginner', tags: ['genitive'] }),
  makeCard({ id: 'grammar_prep_107', polish: 'od jutra', english: 'from tomorrow', subcategory: 'prepositions', difficulty: 'intermediate', tags: ['genitive'] }),
  makeCard({ id: 'grammar_prep_108', polish: 'u lekarza', english: "at the doctor's", subcategory: 'prepositions', difficulty: 'intermediate', tags: ['genitive'] }),
  makeCard({ id: 'grammar_prep_109', polish: 'przed szkołą', english: 'in front of the school', subcategory: 'prepositions', difficulty: 'intermediate', tags: ['instrumental'] }),
  makeCard({ id: 'grammar_prep_110', polish: 'za domem', english: 'behind the house', subcategory: 'prepositions', difficulty: 'intermediate', tags: ['instrumental'] }),
  makeCard({ id: 'grammar_prep_111', polish: 'o mnie', english: 'about me', subcategory: 'prepositions', difficulty: 'beginner', tags: ['locative'] }),
  makeCard({ id: 'grammar_prep_112', polish: 'o co chodzi?', english: "what's it about? / what's going on?", subcategory: 'prepositions', difficulty: 'intermediate', tags: ['accusative'] }),
  makeCard({ id: 'grammar_prep_113', polish: 'po pracy', english: 'after work', subcategory: 'prepositions', difficulty: 'intermediate', tags: ['locative'] }),
  makeCard({ id: 'grammar_prep_114', polish: 'przy oknie', english: 'by the window', subcategory: 'prepositions', difficulty: 'beginner', tags: ['locative'] }),
  makeCard({ id: 'grammar_prep_115', polish: 'przez tydzień', english: 'for a week', subcategory: 'prepositions', difficulty: 'intermediate', tags: ['accusative'] }),
  makeCard({ id: 'grammar_prep_116', polish: 'pod stołem', english: 'under the table', subcategory: 'prepositions', difficulty: 'intermediate', tags: ['instrumental'] }),
  makeCard({ id: 'grammar_prep_117', polish: 'nad morzem', english: 'by the sea', subcategory: 'prepositions', difficulty: 'intermediate', tags: ['instrumental'] }),
  makeCard({ id: 'grammar_prep_118', polish: 'między nami', english: 'between us', subcategory: 'prepositions', difficulty: 'advanced', tags: ['instrumental'] }),
  makeCard({ id: 'grammar_prep_119', polish: 'obok domu', english: 'next to the house', subcategory: 'prepositions', difficulty: 'beginner', tags: ['genitive'] }),
  makeCard({ id: 'grammar_prep_120', polish: 'wokół miasta', english: 'around the city', subcategory: 'prepositions', difficulty: 'intermediate', tags: ['genitive'] }),
];

// -------------------------
// Conjunctions (expanded)
// -------------------------
const conjunctions: VocabularyWord[] = [
  makeCard({ id: 'grammar_conj_001', polish: 'ale', english: 'but', subcategory: 'conjunctions', difficulty: 'beginner' }),
  makeCard({ id: 'grammar_conj_002', polish: 'i', english: 'and', subcategory: 'conjunctions', difficulty: 'beginner' }),
  makeCard({ id: 'grammar_conj_003', polish: 'a', english: 'and / but (contrast)', subcategory: 'conjunctions', difficulty: 'beginner' }),
  makeCard({ id: 'grammar_conj_004', polish: 'albo', english: 'or', subcategory: 'conjunctions', difficulty: 'beginner' }),
  makeCard({ id: 'grammar_conj_005', polish: 'ani', english: 'nor (in “ani… ani…”)', subcategory: 'conjunctions', difficulty: 'intermediate' }),
  makeCard({ id: 'grammar_conj_006', polish: 'bo', english: 'because', subcategory: 'conjunctions', difficulty: 'beginner' }),
  makeCard({ id: 'grammar_conj_007', polish: 'ponieważ', english: 'because / since', subcategory: 'conjunctions', difficulty: 'intermediate' }),
  makeCard({ id: 'grammar_conj_008', polish: 'że', english: 'that (subordinate clause)', subcategory: 'conjunctions', difficulty: 'intermediate' }),
  makeCard({ id: 'grammar_conj_009', polish: 'czy', english: 'whether / if (question)', subcategory: 'conjunctions', difficulty: 'beginner' }),
  makeCard({ id: 'grammar_conj_010', polish: 'jeśli', english: 'if', subcategory: 'conjunctions', difficulty: 'intermediate' }),
  makeCard({ id: 'grammar_conj_011', polish: 'chociaż', english: 'although', subcategory: 'conjunctions', difficulty: 'advanced' }),
  makeCard({ id: 'grammar_conj_012', polish: 'kiedy', english: 'when', subcategory: 'conjunctions', difficulty: 'intermediate' }),
  makeCard({ id: 'grammar_conj_013', polish: 'dlatego', english: 'therefore / that’s why', subcategory: 'conjunctions', difficulty: 'advanced' }),
  makeCard({ id: 'grammar_conj_014', polish: 'zanim', english: 'before (not until)', subcategory: 'conjunctions', difficulty: 'advanced' }),

  // short sentence patterns (multi-word)
  makeCard({ id: 'grammar_conj_101', polish: 'Marek jest studentem, a Maria pracuje.', english: 'Marek is a student, but Maria works.', subcategory: 'conjunctions', difficulty: 'intermediate' }),
  makeCard({ id: 'grammar_conj_102', polish: 'Piję kawę i jem ciasto.', english: 'I drink coffee and I eat cake.', subcategory: 'conjunctions', difficulty: 'beginner' }),
  makeCard({ id: 'grammar_conj_103', polish: 'To jest dobre, ale drogie.', english: 'This is good, but expensive.', subcategory: 'conjunctions', difficulty: 'beginner' }),
  makeCard({ id: 'grammar_conj_104', polish: 'Albo dziś, albo jutro.', english: 'Either today or tomorrow.', subcategory: 'conjunctions', difficulty: 'intermediate' }),
  makeCard({ id: 'grammar_conj_105', polish: 'Nie mam ani czasu, ani pieniędzy.', english: 'I have neither time nor money.', subcategory: 'conjunctions', difficulty: 'advanced' }),
];

// -------------------------
// Numerals (expanded)
// -------------------------
const NUM_0_19: Record<number, string> = {
  0: 'zero',
  1: 'jeden',
  2: 'dwa',
  3: 'trzy',
  4: 'cztery',
  5: 'pięć',
  6: 'sześć',
  7: 'siedem',
  8: 'osiem',
  9: 'dziewięć',
  10: 'dziesięć',
  11: 'jedenaście',
  12: 'dwanaście',
  13: 'trzynaście',
  14: 'czternaście',
  15: 'piętnaście',
  16: 'szesnaście',
  17: 'siedemnaście',
  18: 'osiemnaście',
  19: 'dziewiętnaście',
};

const TENS: Record<number, string> = {
  20: 'dwadzieścia',
  30: 'trzydzieści',
  40: 'czterdzieści',
  50: 'pięćdziesiąt',
  60: 'sześćdziesiąt',
  70: 'siedemdziesiąt',
  80: 'osiemdziesiąt',
  90: 'dziewięćdziesiąt',
};

function polishNumber0to99(n: number): string {
  if (n < 0 || n > 99) throw new Error(`Unsupported number: ${n}`);
  if (n <= 19) return NUM_0_19[n];
  const tens = Math.floor(n / 10) * 10;
  const ones = n % 10;
  if (ones === 0) return TENS[tens];
  return `${TENS[tens]} ${NUM_0_19[ones]}`;
}

const numerals: VocabularyWord[] = [
  // 0–99 (core)
  ...Array.from({ length: 100 }, (_, n) =>
    makeCard({
      id: `grammar_num_${pad3(n)}`,
      polish: polishNumber0to99(n),
      english: String(n),
      subcategory: 'numerals',
      difficulty: n <= 20 ? 'beginner' : n <= 60 ? 'intermediate' : 'advanced',
      tags: ['cardinal'],
    })
  ),
  // Hundreds / big numbers (common)
  makeCard({ id: 'grammar_num_100', polish: 'sto', english: '100', subcategory: 'numerals', difficulty: 'beginner', tags: ['cardinal'] }),
  makeCard({ id: 'grammar_num_200', polish: 'dwieście', english: '200', subcategory: 'numerals', difficulty: 'intermediate', tags: ['cardinal'] }),
  makeCard({ id: 'grammar_num_300', polish: 'trzysta', english: '300', subcategory: 'numerals', difficulty: 'intermediate', tags: ['cardinal'] }),
  makeCard({ id: 'grammar_num_400', polish: 'czterysta', english: '400', subcategory: 'numerals', difficulty: 'intermediate', tags: ['cardinal'] }),
  makeCard({ id: 'grammar_num_500', polish: 'pięćset', english: '500', subcategory: 'numerals', difficulty: 'advanced', tags: ['cardinal'] }),
  makeCard({ id: 'grammar_num_600', polish: 'sześćset', english: '600', subcategory: 'numerals', difficulty: 'advanced', tags: ['cardinal'] }),
  makeCard({ id: 'grammar_num_700', polish: 'siedemset', english: '700', subcategory: 'numerals', difficulty: 'advanced', tags: ['cardinal'] }),
  makeCard({ id: 'grammar_num_800', polish: 'osiemset', english: '800', subcategory: 'numerals', difficulty: 'advanced', tags: ['cardinal'] }),
  makeCard({ id: 'grammar_num_900', polish: 'dziewięćset', english: '900', subcategory: 'numerals', difficulty: 'advanced', tags: ['cardinal'] }),
  makeCard({ id: 'grammar_num_1000', polish: 'tysiąc', english: '1,000', subcategory: 'numerals', difficulty: 'intermediate', tags: ['cardinal'] }),
  makeCard({ id: 'grammar_num_1000000', polish: 'milion', english: '1,000,000', subcategory: 'numerals', difficulty: 'advanced', tags: ['cardinal'] }),

  // Useful “numeral phrases”
  makeCard({ id: 'grammar_num_phrase_001', polish: 'Ile masz lat?', english: 'How old are you? (informal)', subcategory: 'numerals', difficulty: 'beginner', tags: ['age'] }),
  makeCard({ id: 'grammar_num_phrase_002', polish: 'Mam osiemnaście lat.', english: 'I am 18 years old.', subcategory: 'numerals', difficulty: 'beginner', tags: ['age'] }),
  makeCard({ id: 'grammar_num_phrase_003', polish: 'Mam trzydzieści lat.', english: 'I am 30 years old.', subcategory: 'numerals', difficulty: 'intermediate', tags: ['age'] }),

  // Ordinals (common)
  makeCard({ id: 'grammar_num_ord_001', polish: 'pierwszy', english: 'first', subcategory: 'numerals', difficulty: 'beginner', tags: ['ordinal'] }),
  makeCard({ id: 'grammar_num_ord_002', polish: 'drugi', english: 'second', subcategory: 'numerals', difficulty: 'beginner', tags: ['ordinal'] }),
  makeCard({ id: 'grammar_num_ord_003', polish: 'trzeci', english: 'third', subcategory: 'numerals', difficulty: 'beginner', tags: ['ordinal'] }),
  makeCard({ id: 'grammar_num_ord_004', polish: 'czwarty', english: 'fourth', subcategory: 'numerals', difficulty: 'beginner', tags: ['ordinal'] }),
  makeCard({ id: 'grammar_num_ord_005', polish: 'piąty', english: 'fifth', subcategory: 'numerals', difficulty: 'beginner', tags: ['ordinal'] }),
  makeCard({ id: 'grammar_num_ord_006', polish: 'szósty', english: 'sixth', subcategory: 'numerals', difficulty: 'intermediate', tags: ['ordinal'] }),
  makeCard({ id: 'grammar_num_ord_007', polish: 'siódmy', english: 'seventh', subcategory: 'numerals', difficulty: 'intermediate', tags: ['ordinal'] }),
  makeCard({ id: 'grammar_num_ord_008', polish: 'ósmy', english: 'eighth', subcategory: 'numerals', difficulty: 'intermediate', tags: ['ordinal'] }),
  makeCard({ id: 'grammar_num_ord_009', polish: 'dziewiąty', english: 'ninth', subcategory: 'numerals', difficulty: 'intermediate', tags: ['ordinal'] }),
  makeCard({ id: 'grammar_num_ord_010', polish: 'dziesiąty', english: 'tenth', subcategory: 'numerals', difficulty: 'intermediate', tags: ['ordinal'] }),
];

// -------------------------
// Verbs (expanded: aspect pairs + key verbs)
// -------------------------
const verbs: VocabularyWord[] = [
  // High utility verbs (infinitive)
  makeCard({ id: 'grammar_v_001', polish: 'być', english: 'to be', subcategory: 'verbs', difficulty: 'beginner', tags: ['infinitive'] }),
  makeCard({ id: 'grammar_v_002', polish: 'mieć', english: 'to have', subcategory: 'verbs', difficulty: 'beginner', tags: ['infinitive'] }),
  makeCard({ id: 'grammar_v_003', polish: 'móc', english: 'to be able to / can', subcategory: 'verbs', difficulty: 'beginner', tags: ['infinitive'] }),
  makeCard({ id: 'grammar_v_004', polish: 'musieć', english: 'to have to / must', subcategory: 'verbs', difficulty: 'beginner', tags: ['infinitive'] }),
  makeCard({ id: 'grammar_v_005', polish: 'chcieć', english: 'to want', subcategory: 'verbs', difficulty: 'beginner', tags: ['infinitive'] }),
  makeCard({ id: 'grammar_v_006', polish: 'lubić', english: 'to like', subcategory: 'verbs', difficulty: 'beginner', tags: ['infinitive'] }),

  // Aspect pairs (impf / pf)
  makeCard({ id: 'grammar_v_101', polish: 'czytać / przeczytać', english: 'to read (impf/pf)', subcategory: 'verbs', difficulty: 'intermediate', tags: ['aspect-pair'] }),
  makeCard({ id: 'grammar_v_102', polish: 'pisać / napisać', english: 'to write (impf/pf)', subcategory: 'verbs', difficulty: 'intermediate', tags: ['aspect-pair'] }),
  makeCard({ id: 'grammar_v_103', polish: 'robić / zrobić', english: 'to do / make (impf/pf)', subcategory: 'verbs', difficulty: 'beginner', tags: ['aspect-pair'] }),
  makeCard({ id: 'grammar_v_104', polish: 'kupować / kupić', english: 'to buy (impf/pf)', subcategory: 'verbs', difficulty: 'beginner', tags: ['aspect-pair'] }),
  makeCard({ id: 'grammar_v_105', polish: 'jeść / zjeść', english: 'to eat (impf/pf)', subcategory: 'verbs', difficulty: 'beginner', tags: ['aspect-pair'] }),
  makeCard({ id: 'grammar_v_106', polish: 'pić / wypić', english: 'to drink (impf/pf)', subcategory: 'verbs', difficulty: 'beginner', tags: ['aspect-pair'] }),
  makeCard({ id: 'grammar_v_107', polish: 'uczyć się / nauczyć się', english: 'to learn (impf/pf)', subcategory: 'verbs', difficulty: 'intermediate', tags: ['aspect-pair'] }),
  makeCard({ id: 'grammar_v_108', polish: 'mówić / powiedzieć', english: 'to say / speak (impf/pf)', subcategory: 'verbs', difficulty: 'intermediate', tags: ['aspect-pair'] }),
  makeCard({ id: 'grammar_v_109', polish: 'pytać / zapytać', english: 'to ask (impf/pf)', subcategory: 'verbs', difficulty: 'intermediate', tags: ['aspect-pair'] }),
  makeCard({ id: 'grammar_v_110', polish: 'szukać / znaleźć', english: 'to look for / find (impf/pf)', subcategory: 'verbs', difficulty: 'advanced', tags: ['aspect-pair'] }),
  makeCard({ id: 'grammar_v_111', polish: 'otwierać / otworzyć', english: 'to open (impf/pf)', subcategory: 'verbs', difficulty: 'intermediate', tags: ['aspect-pair'] }),
  makeCard({ id: 'grammar_v_112', polish: 'zamykać / zamknąć', english: 'to close (impf/pf)', subcategory: 'verbs', difficulty: 'intermediate', tags: ['aspect-pair'] }),
  makeCard({ id: 'grammar_v_113', polish: 'zaczynać / zacząć', english: 'to begin (impf/pf)', subcategory: 'verbs', difficulty: 'intermediate', tags: ['aspect-pair'] }),
  makeCard({ id: 'grammar_v_114', polish: 'kończyć / skończyć', english: 'to finish (impf/pf)', subcategory: 'verbs', difficulty: 'intermediate', tags: ['aspect-pair'] }),
];

// -------------------------
// Most important verbs (expanded)
// -------------------------
const topVerbs: VocabularyWord[] = [
  makeCard({ id: 'grammar_topv_001', polish: 'mieć', english: 'to have', subcategory: 'top-verbs', difficulty: 'beginner' }),
  makeCard({ id: 'grammar_topv_002', polish: 'być', english: 'to be', subcategory: 'top-verbs', difficulty: 'beginner' }),
  makeCard({ id: 'grammar_topv_003', polish: 'robić / zrobić', english: 'to do / make (impf/pf)', subcategory: 'top-verbs', difficulty: 'beginner' }),
  makeCard({ id: 'grammar_topv_004', polish: 'iść / pójść', english: 'to go (on foot) (impf/pf)', subcategory: 'top-verbs', difficulty: 'intermediate' }),
  makeCard({ id: 'grammar_topv_005', polish: 'jechać / pojechać', english: 'to go (by vehicle) (impf/pf)', subcategory: 'top-verbs', difficulty: 'intermediate' }),
  makeCard({ id: 'grammar_topv_006', polish: 'przychodzić / przyjść', english: 'to come (on foot) (impf/pf)', subcategory: 'top-verbs', difficulty: 'advanced' }),
  makeCard({ id: 'grammar_topv_007', polish: 'wracać / wrócić', english: 'to return (impf/pf)', subcategory: 'top-verbs', difficulty: 'advanced' }),
  makeCard({ id: 'grammar_topv_008', polish: 'zostawać / zostać', english: 'to stay / remain (impf/pf)', subcategory: 'top-verbs', difficulty: 'advanced' }),
  makeCard({ id: 'grammar_topv_009', polish: 'mówić / powiedzieć', english: 'to say / speak (impf/pf)', subcategory: 'top-verbs', difficulty: 'intermediate' }),
  makeCard({ id: 'grammar_topv_010', polish: 'pytać / zapytać', english: 'to ask (impf/pf)', subcategory: 'top-verbs', difficulty: 'intermediate' }),
  makeCard({ id: 'grammar_topv_011', polish: 'prosić / poprosić', english: 'to ask for / request (impf/pf)', subcategory: 'top-verbs', difficulty: 'intermediate' }),
  makeCard({ id: 'grammar_topv_012', polish: 'odpowiadać / odpowiedzieć', english: 'to answer (impf/pf)', subcategory: 'top-verbs', difficulty: 'advanced' }),
  makeCard({ id: 'grammar_topv_013', polish: 'rozumieć', english: 'to understand', subcategory: 'top-verbs', difficulty: 'beginner' }),
  makeCard({ id: 'grammar_topv_014', polish: 'wiedzieć', english: 'to know (a fact)', subcategory: 'top-verbs', difficulty: 'beginner' }),
  makeCard({ id: 'grammar_topv_015', polish: 'znać', english: 'to know (a person / be familiar with)', subcategory: 'top-verbs', difficulty: 'intermediate' }),
  makeCard({ id: 'grammar_topv_016', polish: 'widzieć / zobaczyć', english: 'to see (impf/pf)', subcategory: 'top-verbs', difficulty: 'intermediate' }),
  makeCard({ id: 'grammar_topv_017', polish: 'słyszeć', english: 'to hear', subcategory: 'top-verbs', difficulty: 'beginner' }),
  makeCard({ id: 'grammar_topv_018', polish: 'słuchać', english: 'to listen', subcategory: 'top-verbs', difficulty: 'beginner' }),
  makeCard({ id: 'grammar_topv_019', polish: 'patrzeć', english: 'to look', subcategory: 'top-verbs', difficulty: 'beginner' }),
  makeCard({ id: 'grammar_topv_020', polish: 'oglądać / obejrzeć', english: 'to watch (impf/pf)', subcategory: 'top-verbs', difficulty: 'intermediate' }),
  makeCard({ id: 'grammar_topv_021', polish: 'myśleć', english: 'to think', subcategory: 'top-verbs', difficulty: 'intermediate' }),
  makeCard({ id: 'grammar_topv_022', polish: 'pamiętać', english: 'to remember', subcategory: 'top-verbs', difficulty: 'intermediate' }),
  makeCard({ id: 'grammar_topv_023', polish: 'zapominać / zapomnieć', english: 'to forget (impf/pf)', subcategory: 'top-verbs', difficulty: 'advanced' }),
  makeCard({ id: 'grammar_topv_024', polish: 'lubić', english: 'to like', subcategory: 'top-verbs', difficulty: 'beginner' }),
  makeCard({ id: 'grammar_topv_025', polish: 'chcieć', english: 'to want', subcategory: 'top-verbs', difficulty: 'beginner' }),
  makeCard({ id: 'grammar_topv_026', polish: 'musieć', english: 'to have to / must', subcategory: 'top-verbs', difficulty: 'beginner' }),
  makeCard({ id: 'grammar_topv_027', polish: 'móc', english: 'can / be able to', subcategory: 'top-verbs', difficulty: 'beginner' }),
  makeCard({ id: 'grammar_topv_028', polish: 'umieć', english: 'to know how to / be able to', subcategory: 'top-verbs', difficulty: 'intermediate' }),
  makeCard({ id: 'grammar_topv_029', polish: 'jeść / zjeść', english: 'to eat (impf/pf)', subcategory: 'top-verbs', difficulty: 'beginner' }),
  makeCard({ id: 'grammar_topv_030', polish: 'pić / wypić', english: 'to drink (impf/pf)', subcategory: 'top-verbs', difficulty: 'beginner' }),
  makeCard({ id: 'grammar_topv_031', polish: 'spać / zasnąć', english: 'to sleep / fall asleep', subcategory: 'top-verbs', difficulty: 'advanced' }),
  makeCard({ id: 'grammar_topv_032', polish: 'kupować / kupić', english: 'to buy (impf/pf)', subcategory: 'top-verbs', difficulty: 'beginner' }),
  makeCard({ id: 'grammar_topv_033', polish: 'sprzedawać / sprzedać', english: 'to sell (impf/pf)', subcategory: 'top-verbs', difficulty: 'advanced' }),
  makeCard({ id: 'grammar_topv_034', polish: 'płacić / zapłacić', english: 'to pay (impf/pf)', subcategory: 'top-verbs', difficulty: 'intermediate' }),
  makeCard({ id: 'grammar_topv_035', polish: 'brać / wziąć', english: 'to take (impf/pf)', subcategory: 'top-verbs', difficulty: 'intermediate' }),
  makeCard({ id: 'grammar_topv_036', polish: 'dawać / dać', english: 'to give (impf/pf)', subcategory: 'top-verbs', difficulty: 'intermediate' }),
  makeCard({ id: 'grammar_topv_037', polish: 'dostawać / dostać', english: 'to receive / get (impf/pf)', subcategory: 'top-verbs', difficulty: 'advanced' }),
  makeCard({ id: 'grammar_topv_038', polish: 'wysyłać / wysłać', english: 'to send (impf/pf)', subcategory: 'top-verbs', difficulty: 'advanced' }),
  makeCard({ id: 'grammar_topv_039', polish: 'dzwonić / zadzwonić', english: 'to call (phone) (impf/pf)', subcategory: 'top-verbs', difficulty: 'intermediate' }),
  makeCard({ id: 'grammar_topv_040', polish: 'szukać / znaleźć', english: 'to look for / find (impf/pf)', subcategory: 'top-verbs', difficulty: 'advanced' }),
  makeCard({ id: 'grammar_topv_041', polish: 'pracować', english: 'to work', subcategory: 'top-verbs', difficulty: 'beginner' }),
  makeCard({ id: 'grammar_topv_042', polish: 'uczyć się / nauczyć się', english: 'to learn (impf/pf)', subcategory: 'top-verbs', difficulty: 'intermediate' }),
  makeCard({ id: 'grammar_topv_043', polish: 'uczyć', english: 'to teach', subcategory: 'top-verbs', difficulty: 'intermediate' }),
  makeCard({ id: 'grammar_topv_044', polish: 'studiować', english: 'to study', subcategory: 'top-verbs', difficulty: 'beginner' }),
  makeCard({ id: 'grammar_topv_045', polish: 'czytać / przeczytać', english: 'to read (impf/pf)', subcategory: 'top-verbs', difficulty: 'intermediate' }),
  makeCard({ id: 'grammar_topv_046', polish: 'pisać / napisać', english: 'to write (impf/pf)', subcategory: 'top-verbs', difficulty: 'intermediate' }),
  makeCard({ id: 'grammar_topv_047', polish: 'zaczynać / zacząć', english: 'to begin (impf/pf)', subcategory: 'top-verbs', difficulty: 'intermediate' }),
  makeCard({ id: 'grammar_topv_048', polish: 'kończyć / skończyć', english: 'to finish (impf/pf)', subcategory: 'top-verbs', difficulty: 'intermediate' }),
  makeCard({ id: 'grammar_topv_049', polish: 'otwierać / otworzyć', english: 'to open (impf/pf)', subcategory: 'top-verbs', difficulty: 'intermediate' }),
  makeCard({ id: 'grammar_topv_050', polish: 'zamykać / zamknąć', english: 'to close (impf/pf)', subcategory: 'top-verbs', difficulty: 'intermediate' }),
  makeCard({ id: 'grammar_topv_051', polish: 'włączać / włączyć', english: 'to turn on (impf/pf)', subcategory: 'top-verbs', difficulty: 'advanced' }),
  makeCard({ id: 'grammar_topv_052', polish: 'wyłączać / wyłączyć', english: 'to turn off (impf/pf)', subcategory: 'top-verbs', difficulty: 'advanced' }),
  makeCard({ id: 'grammar_topv_053', polish: 'zostawiać / zostawić', english: 'to leave (something) (impf/pf)', subcategory: 'top-verbs', difficulty: 'advanced' }),
  makeCard({ id: 'grammar_topv_054', polish: 'przynosić / przynieść', english: 'to bring (impf/pf)', subcategory: 'top-verbs', difficulty: 'advanced' }),
  makeCard({ id: 'grammar_topv_055', polish: 'zabierać / zabrać', english: 'to take away (impf/pf)', subcategory: 'top-verbs', difficulty: 'advanced' }),
  makeCard({ id: 'grammar_topv_056', polish: 'pomagać / pomóc', english: 'to help (impf/pf)', subcategory: 'top-verbs', difficulty: 'intermediate' }),
  makeCard({ id: 'grammar_topv_057', polish: 'potrzebować', english: 'to need', subcategory: 'top-verbs', difficulty: 'intermediate' }),
  makeCard({ id: 'grammar_topv_058', polish: 'używać', english: 'to use', subcategory: 'top-verbs', difficulty: 'advanced' }),
  makeCard({ id: 'grammar_topv_059', polish: 'spędzać / spędzić', english: 'to spend (time) (impf/pf)', subcategory: 'top-verbs', difficulty: 'advanced' }),
  makeCard({ id: 'grammar_topv_060', polish: 'pokazywać / pokazać', english: 'to show (impf/pf)', subcategory: 'top-verbs', difficulty: 'advanced' }),
  makeCard({ id: 'grammar_topv_061', polish: 'tłumaczyć / wytłumaczyć', english: 'to explain (impf/pf)', subcategory: 'top-verbs', difficulty: 'advanced' }),
  makeCard({ id: 'grammar_topv_062', polish: 'zmieniać / zmienić', english: 'to change (impf/pf)', subcategory: 'top-verbs', difficulty: 'advanced' }),
  makeCard({ id: 'grammar_topv_063', polish: 'spotykać / spotkać', english: 'to meet (impf/pf)', subcategory: 'top-verbs', difficulty: 'intermediate' }),
  makeCard({ id: 'grammar_topv_064', polish: 'mieszkać', english: 'to live (reside)', subcategory: 'top-verbs', difficulty: 'beginner' }),
  makeCard({ id: 'grammar_topv_065', polish: 'czekać', english: 'to wait', subcategory: 'top-verbs', difficulty: 'beginner' }),
  makeCard({ id: 'grammar_topv_066', polish: 'zapraszać / zaprosić', english: 'to invite (impf/pf)', subcategory: 'top-verbs', difficulty: 'advanced' }),
  makeCard({ id: 'grammar_topv_067', polish: 'odwiedzać / odwiedzić', english: 'to visit (impf/pf)', subcategory: 'top-verbs', difficulty: 'advanced' }),
];

export const grammarVocabulary: VocabularyWord[] = [
  ...sentenceConstructions,
  ...prepositions,
  ...conjunctions,
  ...numerals,
  ...verbs,
  ...topVerbs,
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

