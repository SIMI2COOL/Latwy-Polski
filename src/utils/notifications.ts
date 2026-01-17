/**
 * Push notification utilities
 * Handles browser notification permissions and scheduling
 */

/**
 * Request notification permission from the user
 */
export async function requestNotificationPermission(): Promise<'granted' | 'denied' | 'default'> {
  if (!('Notification' in window)) {
    console.warn('This browser does not support notifications');
    return 'denied';
  }

  if (Notification.permission === 'granted') {
    return 'granted';
  }

  if (Notification.permission !== 'denied') {
    const permission = await Notification.requestPermission();
    return permission as 'granted' | 'denied' | 'default';
  }

  return Notification.permission as 'granted' | 'denied' | 'default';
}

/**
 * Check if notifications are supported and permitted
 */
export function canSendNotifications(): boolean {
  if (!('Notification' in window)) {
    return false;
  }
  return Notification.permission === 'granted';
}

/**
 * Send a notification
 */
export async function sendNotification(
  title: string,
  options?: {
    body?: string;
    icon?: string;
    badge?: string;
    tag?: string;
    requireInteraction?: boolean;
  }
): Promise<void> {
  if (!canSendNotifications()) {
    console.warn('Cannot send notification: permission not granted');
    return;
  }

  try {
    const notification = new Notification(title, {
      icon: '/pwa-192x192.png',
      badge: '/pwa-192x192.png',
      tag: 'polish-learning',
      requireInteraction: false,
      ...options,
    });

    // Auto-close after 5 seconds
    setTimeout(() => {
      notification.close();
    }, 5000);

    notification.onclick = () => {
      window.focus();
      notification.close();
    };
  } catch (error) {
    console.error('Error sending notification:', error);
  }
}

/**
 * Schedule daily study reminder
 */
export async function scheduleDailyReminder(
  hour: number = 18,
  minute: number = 0
): Promise<void> {
  if (!canSendNotifications()) {
    return;
  }

  // Clear any existing reminders
  if ('serviceWorker' in navigator && 'sync' in (ServiceWorkerRegistration.prototype)) {
    // Use service worker for background sync if available
    // For now, we'll use a simpler approach with scheduled checks
  }

  // Store reminder time in localStorage
  localStorage.setItem('dailyReminderTime', JSON.stringify({ hour, minute }));
  localStorage.setItem('dailyReminderEnabled', 'true');
}

/**
 * Cancel daily reminder
 */
export function cancelDailyReminder(): void {
  localStorage.removeItem('dailyReminderTime');
  localStorage.removeItem('dailyReminderEnabled');
}

/**
 * Check if daily reminder is enabled
 */
export function isDailyReminderEnabled(): boolean {
  return localStorage.getItem('dailyReminderEnabled') === 'true';
}

/**
 * Get daily reminder time
 */
export function getDailyReminderTime(): { hour: number; minute: number } | null {
  const timeStr = localStorage.getItem('dailyReminderTime');
  if (!timeStr) return null;
  
  try {
    return JSON.parse(timeStr);
  } catch {
    return null;
  }
}

/**
 * Check if it's time to send a reminder
 * This should be called periodically (e.g., every minute)
 */
export async function checkAndSendReminder(
  hasStudiedToday: boolean,
  streak: number
): Promise<void> {
  if (!isDailyReminderEnabled() || !canSendNotifications()) {
    return;
  }

  const reminderTime = getDailyReminderTime();
  if (!reminderTime) {
    return;
  }

  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();

  // Check if it's the reminder time (within 1 minute window)
  if (
    currentHour === reminderTime.hour &&
    currentMinute >= reminderTime.minute &&
    currentMinute < reminderTime.minute + 1
  ) {
    // Check if we've already sent a reminder today
    const lastReminderDate = localStorage.getItem('lastReminderDate');
    const today = new Date().toDateString();

    if (lastReminderDate !== today && !hasStudiedToday) {
      const message = streak > 0
        ? `Don't break your ${streak}-day streak! Study now to keep it going. 🔥`
        : 'Time to study Polish! Start your learning journey today. 📚';

      await sendNotification('Study Reminder', {
        body: message,
        tag: 'daily-reminder',
      });

      localStorage.setItem('lastReminderDate', today);
    }
  }
}

/**
 * Send achievement notification
 */
export async function sendAchievementNotification(
  achievementTitle: string,
  achievementIcon: string
): Promise<void> {
  await sendNotification('Achievement Unlocked! 🎉', {
    body: `${achievementIcon} ${achievementTitle}`,
    tag: 'achievement',
    requireInteraction: true,
  });
}

/**
 * Send streak milestone notification
 */
export async function sendStreakNotification(streak: number): Promise<void> {
  await sendNotification('Streak Milestone! 🔥', {
    body: `You've studied ${streak} days in a row! Keep it up!`,
    tag: 'streak',
  });
}

/**
 * Send daily goal completion notification
 */
export async function sendGoalCompletionNotification(): Promise<void> {
  await sendNotification('Daily Goal Achieved! 🎯', {
    body: 'Congratulations! You\'ve reached your daily word goal!',
    tag: 'goal-completion',
  });
}
