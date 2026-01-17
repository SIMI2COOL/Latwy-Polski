import { useEffect } from 'react';
import { useUser } from '@/contexts/UserContext';
import { checkAndSendReminder, canSendNotifications } from '@/utils/notifications';
import { getWordsStudiedToday } from '@/utils/dailyLimit';

/**
 * Component that manages notifications in the background
 * Checks periodically for reminder times and sends notifications
 */
export function NotificationManager() {
  const { user, userProgress } = useUser();

  useEffect(() => {
    if (!user || !userProgress || !canSendNotifications()) {
      return;
    }

    // Check every minute for reminder time
    const interval = setInterval(async () => {
      try {
        const wordsStudied = await getWordsStudiedToday(user.id);
        await checkAndSendReminder(wordsStudied > 0, userProgress.streak);
      } catch (error) {
        console.error('Error checking reminder:', error);
      }
    }, 60000); // Check every minute

    // Also check immediately
    (async () => {
      try {
        const wordsStudied = await getWordsStudiedToday(user.id);
        await checkAndSendReminder(wordsStudied > 0, userProgress.streak);
      } catch (error) {
        console.error('Error checking reminder:', error);
      }
    })();

    return () => clearInterval(interval);
  }, [user, userProgress]);

  return null; // This component doesn't render anything
}
