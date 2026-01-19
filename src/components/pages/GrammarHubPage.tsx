import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLiveQuery } from 'dexie-react-hooks';
import { ArrowLeft, BookOpen, Gamepad2, Play } from 'lucide-react';

import { db } from '@/utils/database';
import type { Category, VocabularyWord } from '@/types';
import { getSubcategoryName } from '@/utils/subcategoryNames';
import { calculateSubcategoryProgress, isSubcategoryComplete } from '@/utils/subcategoryProgress';

type GrammarModule = {
  id: string;
  icon: string;
  summary: string;
  recommended?: boolean;
};

const GRAMMAR_MODULES: GrammarModule[] = [
  {
    id: 'sentence-constructions',
    icon: '🧱',
    summary: 'Sentence building: questions, negation, “there is/there isn’t”, conditionals',
    recommended: true,
  },
  {
    id: 'prepositions',
    icon: '🧭',
    summary: 'Prepositions + required case, with short phrase drills',
  },
  {
    id: 'conjunctions',
    icon: '🔗',
    summary: 'Connectors: and/but/or + subordinate clause markers',
  },
  {
    id: 'numerals',
    icon: '🔢',
    summary: 'Cardinals, ordinals, and useful number phrases',
  },
  {
    id: 'verbs',
    icon: '⚙️',
    summary: 'Verb fundamentals and aspect pairs',
  },
  {
    id: 'top-verbs',
    icon: '⭐',
    summary: 'High-frequency verb list (with aspect pairs where relevant)',
  },
];

function GrammarHubPage() {
  const navigate = useNavigate();

  const grammarCategory = useLiveQuery(() => db.categories.get('grammar'));
  const words = useLiveQuery(() => db.vocabulary.where('category').equals('grammar').toArray(), []);
  const flashcardStates = useLiveQuery(() => db.flashcardStates.toArray(), []);

  const [completedSubcategories, setCompletedSubcategories] = useState<Set<string>>(new Set());
  const [moduleProgress, setModuleProgress] = useState<Record<string, number>>({});

  const wordsBySubcategory = useMemo(() => {
    const list = words ?? [];
    return list.reduce((acc, word) => {
      (acc[word.subcategory] ||= []).push(word);
      return acc;
    }, {} as Record<string, VocabularyWord[]>);
  }, [words]);

  const subcategories = useMemo(() => Object.keys(wordsBySubcategory), [wordsBySubcategory]);
  const orderedModules = useMemo(() => {
    const available = new Set(subcategories);
    return GRAMMAR_MODULES.filter((m) => available.has(m.id));
  }, [subcategories]);
  const totalWords = words?.length ?? 0;

  useEffect(() => {
    async function checkCompletion() {
      const completed = new Set<string>();
      const progressMap: Record<string, number> = {};

      for (const subId of subcategories) {
        const isComplete = await isSubcategoryComplete('grammar', subId);
        if (isComplete) completed.add(subId);

        // Percent progress for nicer UX on the hub page
        progressMap[subId] = await calculateSubcategoryProgress('grammar', subId);
      }
      setCompletedSubcategories(completed);
      setModuleProgress(progressMap);
    }

    void checkCompletion();
  }, [subcategories, flashcardStates]);

  if (!grammarCategory || !words) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="spinner" style={{ borderLeftColor: '#0074bd' }}></div>
      </div>
    );
  }

  const category: Category = grammarCategory;

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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{category.titlePolish}</h1>
            <p className="text-xl text-gray-600 mb-2">{category.titleEnglish}</p>
            <p className="text-gray-500">{category.description}</p>

            <div className="mt-4 flex items-center space-x-4">
              <span className="text-sm text-gray-500">
                <BookOpen className="w-4 h-4 inline mr-1" />
                {totalWords} cards
              </span>
              <span className="text-sm text-gray-500">{subcategories.length} modules</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Start */}
      {totalWords > 0 && (
        <div className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              to="/study/grammar"
              className="card-hover p-6 rounded-xl text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              style={{ backgroundColor: category.color }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="text-lg font-bold">Start Grammar</div>
                <Play className="w-5 h-5" />
              </div>
              <div className="text-sm opacity-90">Study all grammar cards (flashcards + quiz).</div>
            </Link>

            <Link to="/exercise/grammar/multiple-choice" className="card-hover p-6 rounded-xl bg-white">
              <div className="flex items-center gap-2 text-gray-900 font-bold mb-1">
                <Gamepad2 className="w-5 h-5" style={{ color: category.color }} />
                Multiple Choice
              </div>
              <div className="text-sm text-gray-600">Quick recall practice.</div>
            </Link>

            <Link to="/exercise/grammar/arrange-words" className="card-hover p-6 rounded-xl bg-white">
              <div className="flex items-center gap-2 text-gray-900 font-bold mb-1">
                <Gamepad2 className="w-5 h-5" style={{ color: category.color }} />
                Arrange the Words
              </div>
              <div className="text-sm text-gray-600">Build Polish phrases and sentences.</div>
            </Link>
          </div>
        </div>
      )}

      {/* Modules */}
      {totalWords > 0 ? (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Grammar Modules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {orderedModules.map((module) => {
              const subId = module.id;
              const subWords = wordsBySubcategory[subId] ?? [];
              const subName = getSubcategoryName(subId);
              const isComplete = completedSubcategories.has(subId);
              const progress = moduleProgress[subId] ?? 0;

              return (
                <div
                  key={subId}
                  className="card-hover p-6 relative overflow-hidden h-full flex flex-col"
                  style={{
                    backgroundColor: isComplete ? '#dcfce7' : undefined,
                    minHeight: '180px',
                  }}
                >
                  <div className="flex items-start justify-between mb-3 flex-shrink-0">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xl">{module.icon}</span>
                        <h3 className="text-lg font-bold text-gray-900">{subName.polish}</h3>
                        {module.recommended && (
                          <span className="ml-1 badge-primary" title="Recommended starting module">
                            Start here
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{subName.english}</p>
                      <p className="text-xs text-gray-500">{module.summary}</p>
                      <div className="mt-3 flex items-center justify-between">
                        <p className="text-xs text-gray-500">{subWords.length} cards</p>
                        <p className="text-xs font-medium text-gray-700">{progress}%</p>
                      </div>
                      <div className="mt-2 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full transition-all duration-500"
                          style={{ width: `${Math.min(progress, 100)}%`, backgroundColor: category.color }}
                        ></div>
                      </div>
                    </div>
                    {isComplete && (
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                        ✓ Completed
                      </span>
                    )}
                  </div>

                  {/* Preview chips */}
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {subWords.slice(0, 3).map((w) => (
                        <span
                          key={w.id}
                          className="text-xs px-2 py-1 rounded-full"
                          style={{ backgroundColor: `${category.color}15`, color: category.color }}
                        >
                          {w.polish}
                        </span>
                      ))}
                      {subWords.length > 3 && <span className="text-xs text-gray-400 px-2 py-1">+{subWords.length - 3} more</span>}
                    </div>

                    <div className="flex gap-2">
                      <Link to={`/study/grammar/${subId}`} className="btn-primary w-full text-center">
                        Study
                      </Link>
                      <Link to={`/exercise/grammar/multiple-choice/${subId}`} className="btn-secondary w-full text-center">
                        Quiz
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Grammar content is being prepared</h3>
          <p className="text-gray-500">Come back soon for structured grammar modules.</p>
        </div>
      )}
    </div>
  );
}

export default GrammarHubPage;

