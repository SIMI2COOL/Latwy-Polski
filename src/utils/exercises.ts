import type { VocabularyWord } from '@/types';

export type ExerciseType = 'multiple-choice' | 'arrange-words';

export type ExerciseQuestion =
  | {
      id: string;
      type: 'multiple-choice';
      word: VocabularyWord;
      prompt: string; // what we show as the question
      choices: string[]; // button labels
      correctChoice: string;
    }
  | {
      id: string;
      type: 'arrange-words';
      word: VocabularyWord;
      tokens: string[]; // shuffled tokens for the user to pick
      correctTokens: string[];
    };

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

function uniqueStrings(values: string[]): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const v of values) {
    const key = v.trim();
    if (!key) continue;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(v);
  }
  return out;
}

export function getExerciseTitle(type: ExerciseType): string {
  switch (type) {
    case 'multiple-choice':
      return 'Multiple Choice';
    case 'arrange-words':
      return 'Arrange the Words';
  }
}

export function getExerciseDescription(type: ExerciseType): string {
  switch (type) {
    case 'multiple-choice':
      return 'Pick the correct Polish word.';
    case 'arrange-words':
      return 'Tap the words to build the phrase.';
  }
}

export function isValidExerciseType(value: string | undefined): value is ExerciseType {
  return value === 'multiple-choice' || value === 'arrange-words';
}

export function buildMultipleChoiceQuestion(params: {
  word: VocabularyWord;
  pool: VocabularyWord[];
  choiceCount?: number;
}): ExerciseQuestion {
  const { word, pool, choiceCount = 4 } = params;

  // Prompt: English -> choose Polish
  const prompt = word.english;
  const correctChoice = word.polish;

  // Distractors from same pool, excluding identical Polish string.
  const distractors = uniqueStrings(
    shuffle(pool)
      .filter((w) => w.id !== word.id)
      .map((w) => w.polish)
      .filter((p) => p.trim().toLowerCase() !== correctChoice.trim().toLowerCase())
  ).slice(0, Math.max(0, choiceCount - 1));

  const choices = shuffle(uniqueStrings([correctChoice, ...distractors])).slice(0, choiceCount);

  // If the pool is tiny, ensure correct choice exists.
  if (!choices.includes(correctChoice)) {
    choices[0] = correctChoice;
  }

  return {
    id: `mc_${word.id}_${Date.now()}`,
    type: 'multiple-choice',
    word,
    prompt,
    choices,
    correctChoice,
  };
}

export function isMultiWordPolish(word: VocabularyWord): boolean {
  return word.polish.trim().split(/\s+/).length >= 2;
}

export function buildArrangeWordsQuestion(word: VocabularyWord): ExerciseQuestion | null {
  const correctTokens = word.polish
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  if (correctTokens.length < 2) return null;

  const tokens = shuffle(correctTokens);

  return {
    id: `aw_${word.id}_${Date.now()}`,
    type: 'arrange-words',
    word,
    tokens,
    correctTokens,
  };
}

