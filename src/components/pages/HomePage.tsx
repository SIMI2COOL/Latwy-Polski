import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '@/utils/database';
import { Category } from '@/types';
import { Flame, Award, Target } from 'lucide-react';
import { getLevelTitle } from '@/utils/gamification';
import { useUser } from '@/contexts/UserContext';

function HomePage() {
  const { user, userProgress, refreshProgress } = useUser();
  
  // Load categories from database
  const categories = useLiveQuery(() => db.categories.toArray());

  useEffect(() => {
    refreshProgress();
  }, [refreshProgress]);

  if (!categories || !userProgress || !user) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="spinner" style={{ borderLeftColor: '#0074bd' }}></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24 md:pb-8">
      {/* Stats Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Hello, {user.name}! 👋
        </h1>
        <p className="text-gray-600">
          Continue your Polish learning journey
        </p>
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

      {/* Categories Section */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-1">Categories</h2>
        <p className="text-gray-600">Select a category to start studying</p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            isCompleted={userProgress.completedCategories.includes(category.id)}
          />
        ))}
      </div>

      {/* Quick Action */}
      <div className="mt-8 card p-6 text-white" style={{ background: 'linear-gradient(to right, #0074bd, #004470)' }}>
        <h3 className="text-xl font-bold mb-2">Ready to practice?</h3>
        <p className="mb-4 opacity-90">
          Continue where you left off or start a new lesson
        </p>
        <Link
          to="/category/people"
          className="inline-block bg-white px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          style={{ color: '#0074bd' }}
        >
          Start Now
        </Link>
      </div>
    </div>
  );
}

// Category Card Component
interface CategoryCardProps {
  category: Category;
  isCompleted: boolean;
}

function CategoryCard({ category, isCompleted }: CategoryCardProps) {
  return (
    <Link to={`/category/${category.id}`}>
      <div
        className="card-hover h-full p-6 transition-all duration-200 hover:scale-105"
        style={{
          borderTop: `4px solid ${category.color}`,
        }}
      >
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
            <span className="text-xs text-gray-500">
              {category.totalWords} words
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}

export default HomePage;
