import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLiveQuery } from 'dexie-react-hooks';
import { db, getUserSettings } from '@/utils/database';
import { Category } from '@/types';
import { Flame, Award, Target, CheckCircle } from 'lucide-react';
import { getLevelTitle } from '@/utils/gamification';
import { useUser } from '@/contexts/UserContext';
import { CategoryCarousel } from '@/components/common/CategoryCarousel';
import { calculateCategoryProgress } from '@/utils/categoryProgress';
import { getWordsStudiedToday, getDailyProgress } from '@/utils/dailyLimit';

function HomePage() {
  const { user, userProgress, refreshProgress } = useUser();
  
  // Load categories from database
  const categories = useLiveQuery(() => db.categories.toArray());
  const [categoryProgress, setCategoryProgress] = useState<Record<string, number>>({});
  const [dailyWords, setDailyWords] = useState(0);
  const [dailyGoal, setDailyGoal] = useState(20);
  const [dailyProgress, setDailyProgress] = useState(0);

  useEffect(() => {
    refreshProgress();
  }, [refreshProgress]);

  // Load daily progress - use useLiveQuery to reactively update when settings change
  const settings = useLiveQuery(() => db.settings.toCollection().first());
  
  useEffect(() => {
    async function loadDailyProgress() {
      if (!user) return;
      
      const words = await getWordsStudiedToday(user.id);
      const currentSettings = settings || await getUserSettings();
      const goal = currentSettings?.dailyGoal || 20;
      const progress = await getDailyProgress(user.id);
      
      setDailyWords(words);
      setDailyGoal(goal);
      setDailyProgress(progress);
    }
    
    loadDailyProgress();
    // Refresh every minute to update daily progress
    const interval = setInterval(loadDailyProgress, 60000);
    return () => clearInterval(interval);
  }, [user, settings]);

  // Calculate progress for all categories
  useEffect(() => {
    async function loadProgress() {
      if (!categories) return;

      const progressMap: Record<string, number> = {};
      for (const category of categories) {
        const progress = await calculateCategoryProgress(category.id);
        progressMap[category.id] = progress;
      }
      setCategoryProgress(progressMap);
    }

    loadProgress();
  }, [categories]);

  if (!categories || !userProgress || !user) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="spinner" style={{ borderLeftColor: '#0074bd' }}></div>
      </div>
    );
  }

  const vocabularyCategories = categories.filter((c) => c.id !== 'grammar');
  const grammarCategory = categories.find((c) => c.id === 'grammar') || null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24 md:pb-8">
      {/* Stats Header */}
      <div className="mb-8 flex items-center gap-4">
        {user.profilePicture ? (
          <img
            src={user.profilePicture}
            alt={user.name}
            className="w-16 h-16 rounded-full object-cover border-2 border-primary-200"
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center text-2xl font-bold text-primary-600 border-2 border-primary-200">
            {user.name.charAt(0).toUpperCase()}
          </div>
        )}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Hello, {user.name}! 👋
          </h1>
          <p className="text-gray-600">
            Continue your Polish learning journey
          </p>
        </div>
      </div>

      {/* Daily Goal Progress */}
      <div className="card p-6 mb-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-1">Daily Goal</h2>
            <p className="text-sm text-gray-600">
              {dailyWords} of {dailyGoal} words studied today
            </p>
          </div>
          {dailyProgress >= 100 && (
            <CheckCircle className="w-8 h-8 text-green-600" />
          )}
        </div>
        <div className="space-y-2">
          <div className="h-4 bg-blue-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-500"
              style={{ width: `${Math.min(dailyProgress, 100)}%` }}
            ></div>
          </div>
          {dailyProgress >= 100 ? (
            <p className="text-sm font-semibold text-green-700">
              🎉 Congratulations! You've reached your daily goal!
            </p>
          ) : (
            <p className="text-sm text-gray-600">
              {dailyGoal - dailyWords} more words to reach your goal
            </p>
          )}
        </div>
      </div>

      {/* User Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {/* Streak */}
        <div className="card p-6">
          <div className="flex items-center justify-between mb-2">
            <Flame className="w-8 h-8 text-orange-500" />
            <span className="text-3xl font-bold text-gray-900">
              {userProgress.streak}
            </span>
          </div>
          <p className="text-sm text-gray-600">Day Streak</p>
          {userProgress.streak > 0 && (
            <div className="mt-2 h-2 bg-orange-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full transition-all duration-500"
                style={{ width: `${Math.min((userProgress.streak / 30) * 100, 100)}%` }}
              ></div>
            </div>
          )}
        </div>

        {/* Level */}
        <div className="card p-6">
          <div className="flex items-center justify-between mb-2">
            <Award className="w-8 h-8" style={{ color: '#0074bd' }} />
            <span className="text-3xl font-bold text-gray-900">
              {userProgress.level}
            </span>
          </div>
          <p className="text-sm text-gray-600">
            {getLevelTitle(userProgress.level)}
          </p>
          <div className="mt-2">
            <span className="text-xs text-gray-500">
              {userProgress.totalPoints} points
            </span>
          </div>
        </div>

        {/* Achievements */}
        <div className="card p-6">
          <div className="flex items-center justify-between mb-2">
            <Target className="w-8 h-8 text-green-600" />
            <span className="text-3xl font-bold text-gray-900">
              {userProgress.achievements.length}
            </span>
          </div>
          <p className="text-sm text-gray-600">Achievements Unlocked</p>
          {userProgress.achievements.length > 0 && (
            <div className="mt-2 flex -space-x-2">
              {userProgress.achievements.slice(0, 3).map((achievement) => (
                <div
                  key={achievement.id}
                  className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center border-2 border-white"
                  title={achievement.title}
                >
                  <span className="text-sm">{achievement.icon}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Vocabulary Categories Section */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-1">Vocabulary</h2>
        <p className="text-gray-600">Learn themed vocabulary with flashcards and quizzes</p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {vocabularyCategories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            isCompleted={userProgress.completedCategories.includes(category.id)}
            progress={categoryProgress[category.id] || 0}
          />
        ))}
      </div>

      {/* Category Carousel */}
      {vocabularyCategories.length > 0 && (
        <div className="mt-8">
          <CategoryCarousel categories={vocabularyCategories} />
        </div>
      )}

      {/* Grammar Section (standalone) */}
      {grammarCategory && (
        <div className="mt-12">
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Grammar</h2>
            <p className="text-gray-600">Standalone modules: sentence building, prepositions, verbs</p>
          </div>

          <Link to="/grammar">
            <div
              className="card-hover p-6 transition-all duration-200 hover:scale-[1.01] relative overflow-hidden"
              style={{ borderTop: `4px solid ${grammarCategory.color}` }}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{grammarCategory.icon}</span>
                  <div>
                    <div className="text-lg font-bold text-gray-900">{grammarCategory.titlePolish}</div>
                    <div className="text-sm text-gray-600">{grammarCategory.titleEnglish}</div>
                    <div className="mt-2 text-sm text-gray-500">{grammarCategory.description}</div>
                  </div>
                </div>
                <div className="text-sm font-medium" style={{ color: grammarCategory.color }}>
                  Open →
                </div>
              </div>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}

// Category Card Component
interface CategoryCardProps {
  category: Category;
  isCompleted: boolean;
  progress: number;
}

function CategoryCard({ category, isCompleted, progress }: CategoryCardProps) {
  // Determine progress color
  const isFullyComplete = progress >= 100;
  const progressColor = isFullyComplete 
    ? '#86efac' // light green
    : category.color;

  return (
    <Link to={`/category/${category.id}`}>
      <div
        className="card-hover h-full p-6 transition-all duration-200 hover:scale-105 relative overflow-hidden"
        style={{
          borderTop: `4px solid ${category.color}`,
        }}
      >
        {/* Progress Bar - fills from bottom to top */}
        <div
          className="absolute bottom-0 left-0 right-0 transition-all duration-500 ease-out"
          style={{
            height: `${progress}%`,
            backgroundColor: isFullyComplete 
              ? '#86efac' 
              : `${progressColor}20`, // 20% opacity
            opacity: progress > 0 ? 1 : 0,
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-3">
            <span className="text-4xl">{category.icon}</span>
            {isCompleted && (
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                ✓ Completed
              </span>
            )}
          </div>
          
          <h3 className="text-lg font-bold text-gray-900 mb-1">
            {category.titlePolish}
          </h3>
          <p className="text-sm text-gray-600 mb-3">
            {category.titleEnglish}
          </p>
          <p className="text-sm text-gray-500">
            {category.description}
          </p>
          
          {category.totalWords > 0 && (
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">
                  {category.totalWords} words
                </span>
                {progress > 0 && (
                  <span className="text-xs font-medium" style={{ color: progressColor }}>
                    {progress}%
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

export default HomePage;
