import Dexie, { Table } from 'dexie';
import {
  VocabularyWord,
  Category,
  Subcategory,
  UserProgress,
  StudySession,
  FlashcardState,
  UserSettings,
  User,
} from '@/types';

export class PolishAppDatabase extends Dexie {
  vocabulary!: Table<VocabularyWord, string>;
  categories!: Table<Category, string>;
  subcategories!: Table<Subcategory, string>;
  users!: Table<User, string>;
  userProgress!: Table<UserProgress, string>;
  studySessions!: Table<StudySession, string>;
  flashcardStates!: Table<FlashcardState, string>;
  settings!: Table<UserSettings, number>;

  constructor() {
    super('PolishAppDB');
    
    this.version(1).stores({
      vocabulary: 'id, polish, english, category, subcategory, difficulty',
      categories: 'id, titlePolish, titleEnglish',
      subcategories: 'id, categoryId, titlePolish',
      userProgress: 'userId, level, totalPoints',
      studySessions: 'id, categoryId, startedAt, completedAt',
      flashcardStates: 'wordId, nextReview, interval',
      settings: '++id',
    });
    
    this.version(2).stores({
      vocabulary: 'id, polish, english, category, subcategory, difficulty, [category+subcategory]',
      categories: 'id, titlePolish, titleEnglish',
      subcategories: 'id, categoryId, titlePolish',
      users: 'id, name, createdAt',
      userProgress: 'userId, level, totalPoints',
      studySessions: 'id, categoryId, startedAt, completedAt',
      flashcardStates: 'wordId, nextReview, interval',
      settings: '++id',
    }).upgrade(async () => {
      // Migration: No data migration needed, just adding users table
      console.log('Database upgraded to version 2');
    });
    
    // Version 3: Add compound index for category+subcategory queries
    this.version(3).stores({
      vocabulary: 'id, polish, english, category, subcategory, difficulty, [category+subcategory]',
      categories: 'id, titlePolish, titleEnglish',
      subcategories: 'id, categoryId, titlePolish',
      users: 'id, name, createdAt',
      userProgress: 'userId, level, totalPoints',
      studySessions: 'id, categoryId, startedAt, completedAt',
      flashcardStates: 'wordId, nextReview, interval',
      settings: '++id',
    }).upgrade(async () => {
      console.log('Database upgraded to version 3 - added compound index');
    });
    
    // Version 4: Update category descriptions from Spanish to English
    this.version(4).stores({
      vocabulary: 'id, polish, english, category, subcategory, difficulty, [category+subcategory]',
      categories: 'id, titlePolish, titleEnglish',
      subcategories: 'id, categoryId, titlePolish',
      users: 'id, name, createdAt',
      userProgress: 'userId, level, totalPoints',
      studySessions: 'id, categoryId, startedAt, completedAt',
      flashcardStates: 'wordId, nextReview, interval',
      settings: '++id',
    }).upgrade(async (trans) => {
      console.log('Database upgraded to version 4 - updating category descriptions to English');
      
      // Update all category descriptions to English
      const descriptionUpdates: Record<string, string> = {
        'people': 'Body, family, emotions',
        'appearance': 'Clothing, accessories, beauty',
        'health': 'Medicine, hospital, therapies',
        'home': 'House, kitchen, garden',
        'services': 'Emergency, bank, hotel',
        'shopping': 'Stores, supermarket',
        'food': 'Food and drinks',
        'eating-out': 'Restaurants, cafes',
        'study': 'School, sciences',
        'work': 'Office, professions',
        'transport': 'Vehicles, travel',
        'sports': 'Sports and fitness',
        'leisure': 'Theater, music, art',
        'environment': 'Nature, animals',
        'reference': 'Time, numbers, maps',
      };
      
      for (const [categoryId, description] of Object.entries(descriptionUpdates)) {
        try {
          await trans.table('categories').update(categoryId, { description });
        } catch (error) {
          console.warn(`Failed to update description for category ${categoryId}:`, error);
        }
      }
    });
    
    // Version 5: Add email and passwordHash to users table for authentication
    this.version(5).stores({
      vocabulary: 'id, polish, english, category, subcategory, difficulty, [category+subcategory]',
      categories: 'id, titlePolish, titleEnglish',
      subcategories: 'id, categoryId, titlePolish',
      users: 'id, name, email, createdAt',
      userProgress: 'userId, level, totalPoints',
      studySessions: 'id, categoryId, startedAt, completedAt',
      flashcardStates: 'wordId, nextReview, interval',
      settings: '++id',
    }).upgrade(async () => {
      console.log('Database upgraded to version 5 - added email/password authentication support');
      // No data migration needed - email and passwordHash are optional fields
    });
    
    // Version 6: Add profilePicture to users table
    this.version(6).stores({
      vocabulary: 'id, polish, english, category, subcategory, difficulty, [category+subcategory]',
      categories: 'id, titlePolish, titleEnglish',
      subcategories: 'id, categoryId, titlePolish',
      users: 'id, name, email, createdAt',
      userProgress: 'userId, level, totalPoints',
      studySessions: 'id, categoryId, startedAt, completedAt',
      flashcardStates: 'wordId, nextReview, interval',
      settings: '++id',
    }).upgrade(async () => {
      console.log('Database upgraded to version 6 - added profilePicture support');
      // No data migration needed - profilePicture is optional
    });
  }
}

export const db = new PolishAppDatabase();

// Funciones helper para inicializar la base de datos
export async function initializeDatabase() {
  try {
    // Verificar si ya hay datos
    const categoryCount = await db.categories.count();
    
    if (categoryCount === 0) {
      // Inicializar con datos base
      await seedInitialData();
    }
    
    // Verificar si hay configuración de usuario
    const settingsCount = await db.settings.count();
    if (settingsCount === 0) {
      await db.settings.add({
        soundEnabled: true,
        autoPlayAudio: true,
        dailyGoal: 20,
        theme: 'system',
        notifications: true,
      });
    }
    
    // No crear progreso por defecto - se creará cuando el usuario se registre
    
    console.log('Database initialized successfully');
    return true;
  } catch (error) {
    console.error('Error initializing database:', error);
    return false;
  }
}

// Función para poblar datos iniciales
async function seedInitialData() {
  // Estas son las 16 categorías del diccionario
  const categories: Category[] = [
    {
      id: 'people',
      titlePolish: 'LUDZIE',
      titleEnglish: 'People',
      description: 'Body, family, emotions',
      icon: '👥',
      color: '#3B82F6',
      subcategories: [],
      totalWords: 0,
    },
    {
      id: 'appearance',
      titlePolish: 'WYGLĄD',
      titleEnglish: 'Appearance',
      description: 'Clothing, accessories, beauty',
      icon: '👔',
      color: '#8B5CF6',
      subcategories: [],
      totalWords: 0,
    },
    {
      id: 'health',
      titlePolish: 'ZDROWIE',
      titleEnglish: 'Health',
      description: 'Medicine, hospital, therapies',
      icon: '🏥',
      color: '#EF4444',
      subcategories: [],
      totalWords: 0,
    },
    {
      id: 'home',
      titlePolish: 'DOM',
      titleEnglish: 'Home',
      description: 'House, kitchen, garden',
      icon: '🏠',
      color: '#F59E0B',
      subcategories: [],
      totalWords: 0,
    },
    {
      id: 'services',
      titlePolish: 'USŁUGI',
      titleEnglish: 'Services',
      description: 'Emergency, bank, hotel',
      icon: '🔧',
      color: '#10B981',
      subcategories: [],
      totalWords: 0,
    },
    {
      id: 'shopping',
      titlePolish: 'ZAKUPY',
      titleEnglish: 'Shopping',
      description: 'Stores, supermarket',
      icon: '🛒',
      color: '#EC4899',
      subcategories: [],
      totalWords: 0,
    },
    {
      id: 'food',
      titlePolish: 'ŻYWNOŚĆ',
      titleEnglish: 'Food',
      description: 'Food and drinks',
      icon: '🍎',
      color: '#F97316',
      subcategories: [],
      totalWords: 0,
    },
    {
      id: 'eating-out',
      titlePolish: 'JADANIE POZA DOMEM',
      titleEnglish: 'Eating Out',
      description: 'Restaurants, cafes',
      icon: '🍽️',
      color: '#06B6D4',
      subcategories: [],
      totalWords: 0,
    },
    {
      id: 'study',
      titlePolish: 'NAUKA',
      titleEnglish: 'Study',
      description: 'School, sciences',
      icon: '📚',
      color: '#6366F1',
      subcategories: [],
      totalWords: 0,
    },
    {
      id: 'work',
      titlePolish: 'PRACA',
      titleEnglish: 'Work',
      description: 'Office, professions',
      icon: '💼',
      color: '#14B8A6',
      subcategories: [],
      totalWords: 0,
    },
    {
      id: 'transport',
      titlePolish: 'TRANSPORT',
      titleEnglish: 'Transport',
      description: 'Vehicles, travel',
      icon: '🚗',
      color: '#84CC16',
      subcategories: [],
      totalWords: 0,
    },
    {
      id: 'sports',
      titlePolish: 'SPORT',
      titleEnglish: 'Sports',
      description: 'Sports and fitness',
      icon: '⚽',
      color: '#22C55E',
      subcategories: [],
      totalWords: 0,
    },
    {
      id: 'leisure',
      titlePolish: 'CZAS WOLNY',
      titleEnglish: 'Leisure',
      description: 'Theater, music, art',
      icon: '🎭',
      color: '#A855F7',
      subcategories: [],
      totalWords: 0,
    },
    {
      id: 'environment',
      titlePolish: 'ŚRODOWISKO',
      titleEnglish: 'Environment',
      description: 'Nature, animals',
      icon: '🌍',
      color: '#059669',
      subcategories: [],
      totalWords: 0,
    },
    {
      id: 'reference',
      titlePolish: 'INFORMACJE',
      titleEnglish: 'Reference',
      description: 'Time, numbers, maps',
      icon: '📋',
      color: '#64748B',
      subcategories: [],
      totalWords: 0,
    },
  ];
  
  await db.categories.bulkAdd(categories);
  
  console.log('Initial data seeded');
}

// Funciones de utilidad para trabajar con la base de datos

export async function getCurrentUser(): Promise<User | null> {
  try {
    const users = await db.users.toArray();
    if (users.length === 0) return null;
    
    // Prioritize authenticated users (with email) over quick-start users
    const authenticatedUser = users.find(u => u.email);
    return authenticatedUser || users[0];
  } catch (error) {
    console.error('Error getting current user:', error);
    return null;
  }
}

/**
 * Logout current user (delete user data)
 */
export async function logoutUser(userId: string): Promise<void> {
  try {
    // Delete user and all associated data
    await db.users.where('id').equals(userId).delete();
    await db.userProgress.where('userId').equals(userId).delete();
    await db.studySessions.clear();
    await db.flashcardStates.clear();
    await db.settings.clear();
  } catch (error) {
    console.error('Error logging out user:', error);
    throw error;
  }
}

export async function createUser(name: string): Promise<User> {
  const userId = `user_${Date.now()}`;
  const user: User = {
    id: userId,
    name: name.trim(),
    createdAt: new Date(),
  };
  await db.users.add(user);
  
  // Crear progreso inicial para el usuario
  await db.userProgress.add({
    userId: userId,
    totalPoints: 0,
    level: 1,
    streak: 0,
    lastStudyDate: new Date(),
    completedCategories: [],
    achievements: [],
  });
  
  return user;
}

/**
 * Register a new user with email and password
 */
export async function registerUser(
  name: string,
  email: string,
  password: string
): Promise<User> {
  // Check if email already exists
  const existingUser = await db.users.where('email').equals(email.toLowerCase().trim()).first();
  if (existingUser) {
    throw new Error('An account with this email already exists');
  }

  const { hashPassword } = await import('@/utils/auth');
  const passwordHash = await hashPassword(password);
  
  const userId = `user_${Date.now()}`;
  const user: User = {
    id: userId,
    name: name.trim(),
    email: email.toLowerCase().trim(),
    passwordHash,
    createdAt: new Date(),
  };
  
  await db.users.add(user);
  
  // Create initial progress for the user
  await db.userProgress.add({
    userId: userId,
    totalPoints: 0,
    level: 1,
    streak: 0,
    lastStudyDate: new Date(),
    completedCategories: [],
    achievements: [],
  });
  
  return user;
}

/**
 * Login with email and password
 */
export async function loginUser(email: string, password: string): Promise<User> {
  const user = await db.users.where('email').equals(email.toLowerCase().trim()).first();
  
  if (!user || !user.passwordHash) {
    throw new Error('Invalid email or password');
  }

  const { verifyPassword } = await import('@/utils/auth');
  const isValid = await verifyPassword(password, user.passwordHash);
  
  if (!isValid) {
    throw new Error('Invalid email or password');
  }
  
  return user;
}

/**
 * Check if email exists
 */
export async function emailExists(email: string): Promise<boolean> {
  const user = await db.users.where('email').equals(email.toLowerCase().trim()).first();
  return !!user;
}

export async function getUserProgress(userId?: string): Promise<UserProgress | undefined> {
  if (!userId) {
    const user = await getCurrentUser();
    if (!user) return undefined;
    userId = user.id;
  }
  return await db.userProgress.get(userId);
}

export async function updateUserProgress(updates: Partial<UserProgress>, userId?: string) {
  if (!userId) {
    const user = await getCurrentUser();
    if (!user) return;
    userId = user.id;
  }
  await db.userProgress.update(userId, updates);
}

export async function getUserSettings(): Promise<UserSettings | undefined> {
  let settings = await db.settings.toCollection().first();
  
  // If no settings exist, create default settings
  if (!settings) {
    const defaultSettings: UserSettings = {
      soundEnabled: true,
      autoPlayAudio: true,
      dailyGoal: 20,
      theme: 'light',
      notifications: false,
    };
    await db.settings.add(defaultSettings);
    settings = await db.settings.toCollection().first();
  }
  
  return settings;
}

export async function updateSettings(updates: Partial<UserSettings>) {
  let settings = await getUserSettings();
  
  if (!settings) {
    // Create settings if they don't exist
    const defaultSettings: UserSettings = {
      soundEnabled: true,
      autoPlayAudio: true,
      dailyGoal: 20,
      theme: 'light',
      notifications: false,
      ...updates,
    };
    await db.settings.add(defaultSettings);
  } else {
    // Update existing settings - get the first (and only) settings record
    const settingsRecord = await db.settings.toCollection().first();
    if (settingsRecord) {
      // Use the auto-increment id from the record
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const recordId = (settingsRecord as any).id;
      await db.settings.update(recordId, updates);
    } else {
      // If somehow no record exists, create it
      const defaultSettings: UserSettings = {
        soundEnabled: true,
        autoPlayAudio: true,
        dailyGoal: 20,
        theme: 'light',
        notifications: false,
        ...updates,
      };
      await db.settings.add(defaultSettings);
    }
  }
}

export async function addStudySession(session: Omit<StudySession, 'id'>) {
  const id = `session_${Date.now()}`;
  await db.studySessions.add({ ...session, id });
  return id;
}

export async function getWordsByCategory(categoryId: string): Promise<VocabularyWord[]> {
  return await db.vocabulary.where('category').equals(categoryId).toArray();
}

export async function getWordsBySubcategory(
  categoryId: string,
  subcategoryId: string
): Promise<VocabularyWord[]> {
  return await db.vocabulary
    .where('[category+subcategory]')
    .equals([categoryId, subcategoryId])
    .toArray();
}

export async function updateFlashcardState(wordId: string, state: Partial<FlashcardState>) {
  const existing = await db.flashcardStates.get(wordId);
  
  if (existing) {
    await db.flashcardStates.update(wordId, state);
  } else {
    await db.flashcardStates.add({
      wordId,
      easeFactor: 2.5,
      interval: 1,
      repetitions: 0,
      nextReview: new Date(),
      ...state,
    });
  }
}

export async function getDueFlashcards(): Promise<FlashcardState[]> {
  const now = new Date();
  return await db.flashcardStates.where('nextReview').belowOrEqual(now).toArray();
}

/**
 * Removes duplicate vocabulary entries within the same subcategory
 * Keeps the first occurrence of each unique Polish word per subcategory
 * @returns Number of duplicates removed
 */
export async function removeDuplicateVocabulary(): Promise<number> {
  try {
    const allWords = await db.vocabulary.toArray();
    const seen = new Map<string, VocabularyWord>(); // key: category_subcategory_polish (lowercase)
    const duplicatesToDelete: string[] = [];

    for (const word of allWords) {
      // Create a unique key: category_subcategory_polish (normalized to lowercase)
      const key = `${word.category}_${word.subcategory}_${word.polish.toLowerCase().trim()}`;
      
      if (seen.has(key)) {
        // This is a duplicate - mark for deletion
        duplicatesToDelete.push(word.id);
        console.log(`Found duplicate: "${word.polish}" in ${word.category}/${word.subcategory} (ID: ${word.id})`);
      } else {
        // First occurrence - keep it
        seen.set(key, word);
      }
    }

    if (duplicatesToDelete.length > 0) {
      // Delete all duplicates
      await db.vocabulary.bulkDelete(duplicatesToDelete);
      console.log(`✅ Removed ${duplicatesToDelete.length} duplicate vocabulary entries`);
      
      // Also clean up any flashcard states for deleted words
      await db.flashcardStates.where('wordId').anyOf(duplicatesToDelete).delete();
      console.log(`✅ Cleaned up flashcard states for ${duplicatesToDelete.length} deleted words`);
    }

    return duplicatesToDelete.length;
  } catch (error) {
    console.error('Error removing duplicate vocabulary:', error);
    return 0;
  }
}
