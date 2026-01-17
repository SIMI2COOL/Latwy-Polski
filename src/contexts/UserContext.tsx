import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, UserProgress } from '@/types';
import { getCurrentUser, getUserProgress } from '@/utils/database';

interface UserContextType {
  user: User | null;
  userProgress: UserProgress | null;
  setUser: (user: User | null) => void;
  refreshProgress: () => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [userProgress, setUserProgress] = useState<UserProgress | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      try {
        console.log('UserContext: Loading user...');
        const currentUser = await getCurrentUser();
        console.log('UserContext: Current user:', currentUser);
        setUser(currentUser);
        
        if (currentUser) {
          console.log('UserContext: Loading progress for user:', currentUser.id);
          const progress = await getUserProgress(currentUser.id);
          console.log('UserContext: Progress loaded:', progress);
          setUserProgress(progress || null);
        } else {
          console.log('UserContext: No user found, will show login page');
        }
      } catch (error) {
        console.error('Error loading user:', error);
      } finally {
        console.log('UserContext: Setting loading to false');
        setLoading(false);
      }
    }
    
    loadUser();
  }, []);

  const refreshProgress = async () => {
    if (user) {
      const progress = await getUserProgress(user.id);
      setUserProgress(progress || null);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="spinner" style={{ borderLeftColor: '#0074bd' }}></div>
      </div>
    );
  }

  return (
    <UserContext.Provider value={{ user, userProgress, setUser, refreshProgress }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
