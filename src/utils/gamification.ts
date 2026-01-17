import { UserProgress } from '@/types';

/**
 * Points and gamification system
 */

// Scoring constants
export const POINTS = {
  CORRECT_ANSWER: 10,
  PERFECT_ANSWER: 15, // Correct answer in less than 3 seconds
  STREAK_BONUS_MULTIPLIER: 0.5, // +50% for every streak of 5
  DAILY_GOAL_BONUS: 50,
  CATEGORY_COMPLETION_BONUS: 200,
  LEVEL_UP_BONUS: 100,
};

// Levels - each level requires more points
const LEVEL_THRESHOLDS = [
  0,     // Level 1
  100,   // Level 2
  250,   // Level 3
  500,   // Level 4
  850,   // Level 5
  1300,  // Level 6
  1850,  // Level 7
  2500,  // Level 8
  3250,  // Level 9
  4100,  // Level 10
  5050,  // Level 11
  6100,  // Level 12
  7250,  // Level 13
  8500,  // Level 14
  9850,  // Level 15
];

// For levels above 15, use exponential formula
function calculateLevelThreshold(level: number): number {
  if (level <= 15) {
    return LEVEL_THRESHOLDS[level - 1];
  }
  // Formula: threshold = 9850 + (level - 15) * 1500
  return LEVEL_THRESHOLDS[14] + (level - 15) * 1500;
}

/**
 * Calculates points earned for an answer
 */
export function calculatePoints(
  isCorrect: boolean,
  timeSpent: number,
  currentStreak: number
): number {
  if (!isCorrect) return 0;
  
  let points: number = POINTS.CORRECT_ANSWER;
  
  // Bonus for perfect answer (< 3 seconds)
  if (timeSpent < 3) {
    points = POINTS.PERFECT_ANSWER;
  }
  
  // Bonus for streak (multiplier every 5 answers)
  const streakMultiplier = Math.floor(currentStreak / 5) * POINTS.STREAK_BONUS_MULTIPLIER;
  points = Math.round(points * (1 + streakMultiplier));
  
  return points;
}

/**
 * Determines level based on total points
 */
export function calculateLevel(totalPoints: number): number {
  let level = 1;
  
  while (totalPoints >= calculateLevelThreshold(level + 1)) {
    level++;
    if (level > 50) break; // Maximum level 50
  }
  
  return level;
}

/**
 * Calculates points needed for next level
 */
export function getPointsToNextLevel(totalPoints: number, currentLevel: number): number {
  const nextLevelThreshold = calculateLevelThreshold(currentLevel + 1);
  return nextLevelThreshold - totalPoints;
}

/**
 * Calculates progress toward next level (0-100)
 */
export function getLevelProgress(totalPoints: number, currentLevel: number): number {
  const currentThreshold = calculateLevelThreshold(currentLevel);
  const nextThreshold = calculateLevelThreshold(currentLevel + 1);
  const levelRange = nextThreshold - currentThreshold;
  const pointsInLevel = totalPoints - currentThreshold;
  
  return Math.round((pointsInLevel / levelRange) * 100);
}

/**
 * Checks if user leveled up
 */
export function didLevelUp(oldPoints: number, newPoints: number): boolean {
  const oldLevel = calculateLevel(oldPoints);
  const newLevel = calculateLevel(newPoints);
  return newLevel > oldLevel;
}

/**
 * Updates user progress after a study session
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
  
  // Update streak
  const today = new Date().toDateString();
  const lastStudy = new Date(currentProgress.lastStudyDate).toDateString();
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  
  let newStreak = currentProgress.streak;
  if (lastStudy === today) {
    // Already studied today, maintain streak
  } else if (lastStudy === yesterday) {
    // Studied yesterday, increment streak
    newStreak++;
  } else {
    // Broke the streak
    newStreak = 1;
  }
  
  // Check for new achievements
  const achievements: string[] = [];
  
  // Achievement: Perfect session
  if (correctAnswers === totalQuestions && totalQuestions >= 5) {
    if (!currentProgress.achievements.find(a => a.id === 'perfect-session')) {
      achievements.push('perfect-session');
    }
  }
  
  // Achievement: 7 day streak
  if (newStreak === 7) {
    if (!currentProgress.achievements.find(a => a.id === 'week-streak')) {
      achievements.push('week-streak');
    }
  }
  
  // Achievement: 30 day streak
  if (newStreak === 30) {
    if (!currentProgress.achievements.find(a => a.id === 'month-streak')) {
      achievements.push('month-streak');
    }
  }
  
  // Achievement: Reach level 10
  if (newLevel >= 10 && currentProgress.level < 10) {
    achievements.push('level-10');
  }
  
  // Achievement: 1000 points
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

// Helper functions for achievements
function getAchievementTitle(id: string): string {
  const titles: Record<string, string> = {
    'perfect-session': 'Perfect!',
    'week-streak': 'Weekly Streak',
    'month-streak': 'Monthly Streak',
    'level-10': 'Master',
    'points-1000': 'Thousand',
  };
  return titles[id] || 'Achievement Unlocked';
}

function getAchievementDescription(id: string): string {
  const descriptions: Record<string, string> = {
    'perfect-session': 'Completed a session without errors',
    'week-streak': '7 consecutive days studying',
    'month-streak': '30 consecutive days studying',
    'level-10': 'Reached level 10',
    'points-1000': 'Accumulated 1000 points',
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
 * Gets the level title
 */
export function getLevelTitle(level: number): string {
  if (level < 5) return 'Początkujący';
  if (level < 10) return 'Uczący się';
  if (level < 15) return 'Średnio zaawansowany';
  if (level < 25) return 'Zaawansowany';
  if (level < 35) return 'Ekspert';
  if (level < 45) return 'Mistrz';
  return 'Wielki Mistrz';
}
