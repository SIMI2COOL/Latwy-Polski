import { UserProgress } from '@/types';

/**
 * Sistema de puntos y gamificación
 */

// Constantes de puntuación
export const POINTS = {
  CORRECT_ANSWER: 10,
  PERFECT_ANSWER: 15, // Respuesta correcta en menos de 3 segundos
  STREAK_BONUS_MULTIPLIER: 0.5, // +50% por cada racha de 5
  DAILY_GOAL_BONUS: 50,
  CATEGORY_COMPLETION_BONUS: 200,
  LEVEL_UP_BONUS: 100,
};

// Niveles - cada nivel requiere más puntos
const LEVEL_THRESHOLDS = [
  0,     // Nivel 1
  100,   // Nivel 2
  250,   // Nivel 3
  500,   // Nivel 4
  850,   // Nivel 5
  1300,  // Nivel 6
  1850,  // Nivel 7
  2500,  // Nivel 8
  3250,  // Nivel 9
  4100,  // Nivel 10
  5050,  // Nivel 11
  6100,  // Nivel 12
  7250,  // Nivel 13
  8500,  // Nivel 14
  9850,  // Nivel 15
];

// Para niveles superiores a 15, usar fórmula exponencial
function calculateLevelThreshold(level: number): number {
  if (level <= 15) {
    return LEVEL_THRESHOLDS[level - 1];
  }
  // Fórmula: threshold = 9850 + (level - 15) * 1500
  return LEVEL_THRESHOLDS[14] + (level - 15) * 1500;
}

/**
 * Calcula los puntos ganados por una respuesta
 */
export function calculatePoints(
  isCorrect: boolean,
  timeSpent: number,
  currentStreak: number
): number {
  if (!isCorrect) return 0;
  
  let points: number = POINTS.CORRECT_ANSWER;
  
  // Bonus por respuesta perfecta (< 3 segundos)
  if (timeSpent < 3) {
    points = POINTS.PERFECT_ANSWER;
  }
  
  // Bonus por racha (multiplicador cada 5 respuestas)
  const streakMultiplier = Math.floor(currentStreak / 5) * POINTS.STREAK_BONUS_MULTIPLIER;
  points = Math.round(points * (1 + streakMultiplier));
  
  return points;
}

/**
 * Determina el nivel basado en puntos totales
 */
export function calculateLevel(totalPoints: number): number {
  let level = 1;
  
  while (totalPoints >= calculateLevelThreshold(level + 1)) {
    level++;
    if (level > 50) break; // Máximo nivel 50
  }
  
  return level;
}

/**
 * Calcula los puntos necesarios para el siguiente nivel
 */
export function getPointsToNextLevel(totalPoints: number, currentLevel: number): number {
  const nextLevelThreshold = calculateLevelThreshold(currentLevel + 1);
  return nextLevelThreshold - totalPoints;
}

/**
 * Calcula el progreso hacia el siguiente nivel (0-100)
 */
export function getLevelProgress(totalPoints: number, currentLevel: number): number {
  const currentThreshold = calculateLevelThreshold(currentLevel);
  const nextThreshold = calculateLevelThreshold(currentLevel + 1);
  const levelRange = nextThreshold - currentThreshold;
  const pointsInLevel = totalPoints - currentThreshold;
  
  return Math.round((pointsInLevel / levelRange) * 100);
}

/**
 * Verifica si el usuario subió de nivel
 */
export function didLevelUp(oldPoints: number, newPoints: number): boolean {
  const oldLevel = calculateLevel(oldPoints);
  const newLevel = calculateLevel(newPoints);
  return newLevel > oldLevel;
}

/**
 * Actualiza el progreso del usuario después de una sesión de estudio
 */
export function updateProgressAfterSession(
  currentProgress: UserProgress,
  pointsEarned: number,
  correctAnswers: number,
  totalQuestions: number
): {
  newProgress: UserProgress;
  leveledUp: boolean;
  achievements: string[];
} {
  const newTotalPoints = currentProgress.totalPoints + pointsEarned;
  const newLevel = calculateLevel(newTotalPoints);
  const leveledUp = newLevel > currentProgress.level;
  
  // Actualizar racha
  const today = new Date().toDateString();
  const lastStudy = new Date(currentProgress.lastStudyDate).toDateString();
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  
  let newStreak = currentProgress.streak;
  if (lastStudy === today) {
    // Ya estudió hoy, mantener racha
  } else if (lastStudy === yesterday) {
    // Estudió ayer, incrementar racha
    newStreak++;
  } else {
    // Rompió la racha
    newStreak = 1;
  }
  
  // Verificar nuevos logros
  const achievements: string[] = [];
  
  // Logro: Primera sesión perfecta
  if (correctAnswers === totalQuestions && totalQuestions >= 5) {
    if (!currentProgress.achievements.find(a => a.id === 'perfect-session')) {
      achievements.push('perfect-session');
    }
  }
  
  // Logro: Racha de 7 días
  if (newStreak === 7) {
    if (!currentProgress.achievements.find(a => a.id === 'week-streak')) {
      achievements.push('week-streak');
    }
  }
  
  // Logro: Racha de 30 días
  if (newStreak === 30) {
    if (!currentProgress.achievements.find(a => a.id === 'month-streak')) {
      achievements.push('month-streak');
    }
  }
  
  // Logro: Alcanzar nivel 10
  if (newLevel >= 10 && currentProgress.level < 10) {
    achievements.push('level-10');
  }
  
  // Logro: 1000 puntos
  if (newTotalPoints >= 1000 && currentProgress.totalPoints < 1000) {
    achievements.push('points-1000');
  }
  
  const newProgress: UserProgress = {
    ...currentProgress,
    totalPoints: newTotalPoints,
    level: newLevel,
    streak: newStreak,
    lastStudyDate: new Date(),
    achievements: [
      ...currentProgress.achievements,
      ...achievements.map(id => ({
        id,
        title: getAchievementTitle(id),
        description: getAchievementDescription(id),
        icon: getAchievementIcon(id),
        unlockedAt: new Date(),
      })),
    ],
  };
  
  return {
    newProgress,
    leveledUp,
    achievements,
  };
}

// Helper functions para logros
function getAchievementTitle(id: string): string {
  const titles: Record<string, string> = {
    'perfect-session': '¡Perfecto!',
    'week-streak': 'Racha Semanal',
    'month-streak': 'Racha Mensual',
    'level-10': 'Maestro',
    'points-1000': 'Milésimo',
  };
  return titles[id] || 'Logro Desbloqueado';
}

function getAchievementDescription(id: string): string {
  const descriptions: Record<string, string> = {
    'perfect-session': 'Completaste una sesión sin errores',
    'week-streak': '7 días consecutivos estudiando',
    'month-streak': '30 días consecutivos estudiando',
    'level-10': 'Alcanzaste el nivel 10',
    'points-1000': 'Acumulaste 1000 puntos',
  };
  return descriptions[id] || '';
}

function getAchievementIcon(id: string): string {
  const icons: Record<string, string> = {
    'perfect-session': '🎯',
    'week-streak': '🔥',
    'month-streak': '🏆',
    'level-10': '👑',
    'points-1000': '💎',
  };
  return icons[id] || '⭐';
}

/**
 * Obtiene el título del nivel
 */
export function getLevelTitle(level: number): string {
  if (level < 5) return 'Principiante';
  if (level < 10) return 'Aprendiz';
  if (level < 15) return 'Intermedio';
  if (level < 25) return 'Avanzado';
  if (level < 35) return 'Experto';
  if (level < 45) return 'Maestro';
  return 'Gran Maestro';
}
