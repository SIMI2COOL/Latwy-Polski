import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '@/utils/database';
import { Category, VocabularyWord } from '@/types';
import { ArrowLeft, Play, BookOpen } from 'lucide-react';

function CategoryPage() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  const [category, setCategory] = useState<Category | null>(null);

  // Load words from this category
  const words = useLiveQuery(
    () => categoryId ? db.vocabulary.where('category').equals(categoryId).toArray() : [],
    [categoryId]
  );

  useEffect(() => {
    async function loadCategory() {
      if (categoryId) {
        const cat = await db.categories.get(categoryId);
        if (cat) {
          setCategory(cat);
        }
      }
    }
    loadCategory();
  }, [categoryId]);

  if (!category) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="spinner" style={{ borderLeftColor: '#0074bd' }}></div>
      </div>
    );
  }

  // Group words by subcategory
  const wordsBySubcategory = words?.reduce((acc, word) => {
    if (!acc[word.subcategory]) {
      acc[word.subcategory] = [];
    }
    acc[word.subcategory].push(word);
    return acc;
  }, {} as Record<string, VocabularyWord[]>) || {};

  const subcategories = Object.keys(wordsBySubcategory);
  const totalWords = words?.length || 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24 md:pb-8">
      {/* Header */}
      <div className="mb-8">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-4 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </button>

        <div className="flex items-start space-x-4">
          <span className="text-6xl">{category.icon}</span>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {category.titlePolish}
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              {category.titleEnglish}
            </p>
            <p className="text-gray-500">{category.description}</p>
            
            <div className="mt-4 flex items-center space-x-4">
              <span className="text-sm text-gray-500">
                <BookOpen className="w-4 h-4 inline mr-1" />
                {totalWords} words
              </span>
              <span className="text-sm text-gray-500">
                {subcategories.length} themes
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Start */}
      {totalWords > 0 && (
        <div className="mb-8">
          <Link
            to={`/study/${categoryId}`}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
            style={{ backgroundColor: category.color }}
          >
            <Play className="w-5 h-5 mr-2" />
            Start Studying Entire Category
          </Link>
        </div>
      )}

      {/* Subcategories */}
      {totalWords > 0 ? (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Themes in this Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {subcategories.map((subcategory) => {
              const subcategoryWords = wordsBySubcategory[subcategory];
              const subcategoryName = subcategory
                .split('-')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');

              return (
                <Link
                  key={subcategory}
                  to={`/study/${categoryId}/${subcategory}`}
                >
                  <div className="card-hover p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {subcategoryName}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {subcategoryWords.length} words
                        </p>
                      </div>
                      <Play
                        className="w-5 h-5 text-gray-400"
                        style={{ color: category.color }}
                      />
                    </div>

                    {/* Preview of some words */}
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex flex-wrap gap-2">
                        {subcategoryWords.slice(0, 3).map((word) => (
                          <span
                            key={word.id}
                            className="text-xs px-2 py-1 rounded-full"
                            style={{
                              backgroundColor: `${category.color}15`,
                              color: category.color,
                            }}
                          >
                            {word.polish}
                          </span>
                        ))}
                        {subcategoryWords.length > 3 && (
                          <span className="text-xs text-gray-400 px-2 py-1">
                            +{subcategoryWords.length - 3} más
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            Content in Development
          </h3>
          <p className="text-gray-500">
            This category will be available soon with complete vocabulary.
          </p>
        </div>
      )}
    </div>
  );
}

export default CategoryPage;
