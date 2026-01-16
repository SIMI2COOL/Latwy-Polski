import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { initializeDatabase, removeDuplicateVocabulary } from '@/utils/database';
import { seedPeopleVocabulary } from '@/data/vocabulary-people';
import { seedFoodVocabulary } from '@/data/vocabulary-food';
import { seedHomeVocabulary } from '@/data/vocabulary-home';
import { seedAppearanceVocabulary } from '@/data/vocabulary-appearance';
import { seedEatingOutVocabulary } from '@/data/vocabulary-eating-out';
import { seedEnvironmentVocabulary } from '@/data/vocabulary-environment';
import { seedHealthVocabulary } from '@/data/vocabulary-health';
import { seedLeisureVocabulary } from '@/data/vocabulary-leisure';
import { seedReferenceVocabulary } from '@/data/vocabulary-reference';
import { seedServicesVocabulary } from '@/data/vocabulary-services';
import { seedShoppingVocabulary } from '@/data/vocabulary-shopping';
import { seedSportsVocabulary } from '@/data/vocabulary-sports';
import { seedStudyVocabulary } from '@/data/vocabulary-study';
import { seedTransportVocabulary } from '@/data/vocabulary-transport';
import { seedWorkVocabulary } from '@/data/vocabulary-work';
import { seedAllVocabulary } from '@/data/vocabulary-all';
import { UserProvider, useUser } from '@/contexts/UserContext';

// Páginas
import HomePage from '@/components/pages/HomePage';
import CategoryPage from '@/components/pages/CategoryPage';
import StudyPage from '@/components/pages/StudyPage';
import ProgressPage from '@/components/pages/ProgressPage';
import SettingsPage from '@/components/pages/SettingsPage';
import LoginPage from '@/components/pages/LoginPage';

// Layout
import Layout from '@/components/layout/Layout';
import LoadingScreen from '@/components/common/LoadingScreen';

function AppRoutes() {
  const { user } = useUser();

  return (
    <Router>
      <Routes>
        {!user ? (
          <>
            <Route path="*" element={<LoginPage />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="category/:categoryId" element={<CategoryPage />} />
              <Route path="study/:categoryId/:subcategoryId?" element={<StudyPage />} />
              <Route path="progress" element={<ProgressPage />} />
              <Route path="settings" element={<SettingsPage />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

function App() {
  const [isInitialized, setIsInitialized] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function initialize() {
      try {
        console.log('Starting database initialization...');
        const dbInitialized = await initializeDatabase();
        
        if (!dbInitialized) {
          console.warn('Database initialization returned false, but continuing...');
        }

        console.log('Database initialized, removing duplicates and seeding vocabulary...');
        // Remove any duplicate vocabulary entries first
        await removeDuplicateVocabulary();
        
        // Poblar vocabulario (solo la primera vez) - non-blocking
        seedPeopleVocabulary().catch(err => {
          console.warn('People vocabulary seeding failed (non-critical):', err);
        });
        seedFoodVocabulary().catch(err => {
          console.warn('Food vocabulary seeding failed (non-critical):', err);
        });
        seedHomeVocabulary().catch(err => {
          console.warn('Home vocabulary seeding failed (non-critical):', err);
        });
        seedAppearanceVocabulary().catch(err => {
          console.warn('Appearance vocabulary seeding failed (non-critical):', err);
        });
        seedEatingOutVocabulary().catch(err => {
          console.warn('Eating Out vocabulary seeding failed (non-critical):', err);
        });
        seedEnvironmentVocabulary().catch(err => {
          console.warn('Environment vocabulary seeding failed (non-critical):', err);
        });
        seedHealthVocabulary().catch(err => {
          console.warn('Health vocabulary seeding failed (non-critical):', err);
        });
        seedLeisureVocabulary().catch(err => {
          console.warn('Leisure vocabulary seeding failed (non-critical):', err);
        });
        seedReferenceVocabulary().catch(err => {
          console.warn('Reference vocabulary seeding failed (non-critical):', err);
        });
        seedServicesVocabulary().catch(err => {
          console.warn('Services vocabulary seeding failed (non-critical):', err);
        });
        seedShoppingVocabulary().catch(err => {
          console.warn('Shopping vocabulary seeding failed (non-critical):', err);
        });
        seedSportsVocabulary().catch(err => {
          console.warn('Sports vocabulary seeding failed (non-critical):', err);
        });
        seedStudyVocabulary().catch(err => {
          console.warn('Study vocabulary seeding failed (non-critical):', err);
        });
        seedTransportVocabulary().catch(err => {
          console.warn('Transport vocabulary seeding failed (non-critical):', err);
        });
        seedWorkVocabulary().catch(err => {
          console.warn('Work vocabulary seeding failed (non-critical):', err);
        });
        seedAllVocabulary().catch(err => {
          console.warn('Other vocabulary seeding failed (non-critical):', err);
        });
        
        console.log('Initialization complete');
        setIsInitialized(true);
      } catch (err) {
        console.error('Initialization error:', err);
        // Always set initialized to true so app can load
        setIsInitialized(true);
        setError(err instanceof Error ? err.message : 'Unknown error');
      }
    }

    // Start initialization immediately
    initialize();
  }, []);

  if (!isInitialized) {
    return <LoadingScreen />;
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error de Inicialización</h1>
          <p className="text-gray-700 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors"
          >
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  return (
    <UserProvider>
      <AppRoutes />
    </UserProvider>
  );
}

export default App;
