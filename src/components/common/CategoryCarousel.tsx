import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from '@/utils/database';
import { Category, VocabularyWord } from '@/types';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

interface CategoryCarouselProps {
  categories: Category[];
}

export function CategoryCarousel({ categories }: CategoryCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [subcategories, setSubcategories] = useState<Record<string, string[]>>({});
  const [isTransitioning, setIsTransitioning] = useState(false);

  const currentCategory = categories[currentIndex];

  // Load subcategories for current category
  useEffect(() => {
    async function loadSubcategories() {
      if (!currentCategory) return;

      const words = await db.vocabulary
        .where('category')
        .equals(currentCategory.id)
        .toArray();

      const wordsBySubcategory = words.reduce((acc, word) => {
        if (!acc[word.subcategory]) {
          acc[word.subcategory] = [];
        }
        acc[word.subcategory].push(word);
        return acc;
      }, {} as Record<string, VocabularyWord[]>);

      const subcategoryNames = Object.keys(wordsBySubcategory).map((sub) => {
        return sub
          .split('-')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
      });

      setSubcategories({
        [currentCategory.id]: subcategoryNames,
      });
    }

    loadSubcategories();
  }, [currentCategory]);

  const handlePrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === 0 ? categories.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === categories.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 300);
  };

  if (!currentCategory) return null;

  const currentSubcategories = subcategories[currentCategory.id] || [];

  return (
    <div className="relative overflow-hidden rounded-xl" style={{ background: 'linear-gradient(to right, #d24141, #a83232)' }}>
      {/* Navigation Arrows */}
      <button
        onClick={handlePrevious}
        disabled={isTransitioning}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
        aria-label="Previous category"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={handleNext}
        disabled={isTransitioning}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
        aria-label="Next category"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Category Content with slide animation */}
      <div 
        className="p-8 text-white transition-all duration-300 ease-in-out"
        style={{
          transform: isTransitioning ? 'translateX(-10px)' : 'translateX(0)',
          opacity: isTransitioning ? 0.7 : 1,
          paddingLeft: '4rem', // Move content away from left arrow
        }}
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-4xl">{currentCategory.icon}</span>
              <div>
                <h3 className="text-2xl font-bold">{currentCategory.titlePolish}</h3>
                <p className="text-lg opacity-90">{currentCategory.titleEnglish}</p>
              </div>
            </div>
            <p className="text-sm opacity-80 mb-4">{currentCategory.description}</p>
          </div>
        </div>

        {/* Subcategories */}
        {currentSubcategories.length > 0 && (
          <div className="mb-6">
            <p className="text-sm font-medium mb-2 opacity-90">Themes:</p>
            <div className="flex flex-wrap gap-2">
              {currentSubcategories.slice(0, 6).map((sub, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm"
                >
                  {sub}
                </span>
              ))}
              {currentSubcategories.length > 6 && (
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                  +{currentSubcategories.length - 6} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Action Button */}
        <Link
          to={`/category/${currentCategory.id}`}
          className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          style={{ color: '#d24141' }}
        >
          <Play className="w-5 h-5" />
          Start Studying
        </Link>
      </div>

      {/* Category Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {categories.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all duration-200 ${
              idx === currentIndex
                ? 'w-8 bg-white'
                : 'w-2 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to category ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
