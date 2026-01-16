// Tipos principales de la aplicación

export interface VocabularyWord {
  id: string;
  polish: string;
  english: string;
  category: string;
  subcategory: string;
  imageUrl?: string;
  audioUrl?: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  tags?: string[];
}

export interface Category {
  id: string;
  titlePolish: string;
  titleEnglish: string;
  description: string;
  icon: string;
  color: string;
  subcategories: Subcategory[];
  totalWords: number;
}

export interface Subcategory {
  id: string;
  titlePolish: string;
  titleEnglish: string;
  categoryId: string;
  wordCount: number;
}

export interface User {
  id: string;
  name: string;
  email?: string; // Optional for backward compatibility
  passwordHash?: string; // Optional for backward compatibility
  createdAt: Date;
}

export interface UserProgress {
  userId: string;
  totalPoints: number;
  level: number;
  streak: number;
  lastStudyDate: Date;
  completedCategories: string[];
  achievements: Achievement[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt: Date;
}

export interface StudySession {
  id: string;
  categoryId: string;
  subcategoryId?: string;
  startedAt: Date;
  completedAt?: Date;
  wordsStudied: number;
  correctAnswers: number;
  totalQuestions: number;
  pointsEarned: number;
}

export interface FlashcardState {
  wordId: string;
  easeFactor: number; // Factor de facilidad (SRS)
  interval: number; // Intervalo en días
  repetitions: number; // Número de repeticiones
  nextReview: Date; // Próxima fecha de revisión
  lastReviewed?: Date;
}

export interface QuizQuestion {
  id: string;
  word: VocabularyWord;
  type: 'multiple-choice' | 'typing' | 'listening' | 'matching';
  options?: string[]; // Para multiple choice
  correctAnswer: string;
}

export interface QuizResult {
  questionId: string;
  wordId: string;
  isCorrect: boolean;
  timeSpent: number; // En segundos
  attempts: number;
}

export type StudyMode = 'flashcards' | 'quiz' | 'listening' | 'review';

export interface UserSettings {
  soundEnabled: boolean;
  autoPlayAudio: boolean;
  dailyGoal: number; // Palabras por día
  theme: 'light' | 'dark' | 'system';
  notifications: boolean;
}

export interface LeaderboardEntry {
  userId: string;
  username: string;
  totalPoints: number;
  level: number;
  rank: number;
}
