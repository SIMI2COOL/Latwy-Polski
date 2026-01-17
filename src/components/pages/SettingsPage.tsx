import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserSettings, updateSettings, db, logoutUser } from '@/utils/database';
import type { UserSettings } from '@/types';
import { useUser } from '@/contexts/UserContext';
import { Volume2, Bell, Target, Trash2, Download, User, LogOut, Save, Upload, Upload as UploadIcon } from 'lucide-react';
import {
  requestNotificationPermission,
  canSendNotifications,
  scheduleDailyReminder,
  cancelDailyReminder,
  getDailyReminderTime,
  sendNotification,
} from '@/utils/notifications';

function SettingsPage() {
  const navigate = useNavigate();
  const { user, setUser } = useUser();
  const [settings, setSettings] = useState<UserSettings | null>(null);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [notificationPermission, setNotificationPermission] = useState<'granted' | 'denied' | 'default'>('default');
  const [reminderTime, setReminderTime] = useState<{ hour: number; minute: number } | null>(null);

  useEffect(() => {
    async function loadSettings() {
      const userSettings = await getUserSettings();
      if (userSettings) {
        setSettings(userSettings);
      }

      // Check notification permission
      if ('Notification' in window) {
        setNotificationPermission(Notification.permission);
      }

      // Load reminder time
      const time = getDailyReminderTime();
      setReminderTime(time);
    }
    loadSettings();
  }, []);

  const handleToggle = (key: keyof UserSettings) => {
    if (!settings) return;

    // Special handling for notifications
    if (key === 'notifications') {
      const newValue = !settings.notifications;
      const newSettings = {
        ...settings,
        notifications: newValue,
      };
      setSettings(newSettings);
      // Don't save immediately - wait for save button
      return;
    }

    const newSettings = {
      ...settings,
      [key]: !settings[key],
    };

    setSettings(newSettings);
    // Don't save immediately - wait for save button
  };

  const handleNotificationToggle = async () => {
    if (!settings) return;

    if (!settings.notifications) {
      // Enabling notifications - request permission
      const permission = await requestNotificationPermission();
      setNotificationPermission(permission);

      if (permission === 'granted') {
        const newSettings = {
          ...settings,
          notifications: true,
        };
        setSettings(newSettings);
        
        // Schedule default reminder (6 PM)
        await scheduleDailyReminder(18, 0);
        setReminderTime({ hour: 18, minute: 0 });
      } else {
        alert('Notification permission is required to enable study reminders. Please allow notifications in your browser settings.');
        return;
      }
    } else {
      // Disabling notifications
      cancelDailyReminder();
      const newSettings = {
        ...settings,
        notifications: false,
      };
      setSettings(newSettings);
      setReminderTime(null);
    }
  };

  const handleRequestPermission = async () => {
    const permission = await requestNotificationPermission();
    setNotificationPermission(permission);

    if (permission === 'granted') {
      if (settings && !settings.notifications) {
        await handleToggle('notifications');
      }
      
      // Test notification
      await sendNotification('Notifications enabled!', {
        body: 'You will now receive study reminders.',
      });
    } else if (permission === 'denied') {
      alert('Notification permission was denied. Please enable it in your browser settings to receive study reminders.');
    }
  };

  const handleTestNotification = async () => {
    if (!canSendNotifications()) {
      await handleRequestPermission();
      return;
    }

    await sendNotification('Test Notification', {
      body: 'If you see this, notifications are working correctly!',
    });
  };

  const handleDailyGoalChange = (value: string) => {
    if (!settings) return;
    const numValue = parseInt(value, 10);
    if (isNaN(numValue) || numValue < 5 || numValue > 100) return;

    const newSettings = {
      ...settings,
      dailyGoal: numValue,
    };

    setSettings(newSettings);
    // Don't save immediately - wait for save button
  };

  const handleSaveSettings = async () => {
    if (!settings) return;
    try {
      console.log('Saving settings:', settings);
      
      // Save all settings - explicitly pass all fields
      await updateSettings({
        soundEnabled: settings.soundEnabled,
        autoPlayAudio: settings.autoPlayAudio,
        dailyGoal: settings.dailyGoal,
        theme: settings.theme,
        notifications: settings.notifications,
      });
      
      // Reload settings to ensure they're saved
      const updatedSettings = await getUserSettings();
      console.log('Reloaded settings:', updatedSettings);
      if (updatedSettings) {
        setSettings(updatedSettings);
      }
      
      // Handle notifications separately if changed
      if (settings.notifications && notificationPermission !== 'granted') {
        await handleNotificationToggle();
      }
      
      alert(`Settings saved successfully! Daily goal: ${settings.dailyGoal}`);
    } catch (error) {
      console.error('Error saving settings:', error);
      alert('Error saving settings');
    }
  };

  const handleResetProgress = async () => {
    try {
      if (!user) return;
      
      // Delete all progress for current user
      await db.userProgress.where('userId').equals(user.id).delete();
      await db.studySessions.clear();
      await db.flashcardStates.clear();

      // Recreate initial progress
      await db.userProgress.add({
        userId: user.id,
        totalPoints: 0,
        level: 1,
        streak: 0,
        lastStudyDate: new Date(),
        completedCategories: [],
        achievements: [],
      });

      setShowResetConfirm(false);
      alert('Progress reset successfully');
      // Refresh the page to update all progress displays
      window.location.reload();
    } catch (error) {
      console.error('Error resetting progress:', error);
      alert('Error resetting progress');
    }
  };

  const handleDeleteAllData = async () => {
    try {
      if (!user) return;
      
      // Delete all user data
      await logoutUser(user.id);

      // Clear user context and redirect to login
      setUser(null);
      setShowDeleteConfirm(false);
      navigate('/login', { replace: true });
    } catch (error) {
      console.error('Error deleting data:', error);
      alert('Error deleting data');
    }
  };

  const handleLogout = async () => {
    try {
      if (!user) return;
      
      // Only logout if user has email (authenticated user)
      if (user.email) {
        // For authenticated users, just clear the session (don't delete data)
        setUser(null);
        navigate('/login', { replace: true });
      } else {
        // For quick-start users, delete all data
        await logoutUser(user.id);
        setUser(null);
        navigate('/login', { replace: true });
      }
    } catch (error) {
      console.error('Error logging out:', error);
      alert('Error logging out');
    }
  };

  const handleExportData = async () => {
    try {
      if (!user) return;
      
      const allData = {
        exportDate: new Date().toISOString(),
        version: '1.0.0',
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          profilePicture: user.profilePicture,
          createdAt: user.createdAt,
        },
        progress: await db.userProgress.where('userId').equals(user.id).toArray(),
        sessions: await db.studySessions.toArray(),
        flashcards: await db.flashcardStates.toArray(),
        settings: await db.settings.toArray(),
      };

      const dataStr = JSON.stringify(allData, null, 2);
      const dataBlob = new Blob([dataStr], { type: 'application/json' });
      const url = URL.createObjectURL(dataBlob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = `polish-app-data-${new Date().toISOString().split('T')[0]}.json`;
      link.click();
      
      URL.revokeObjectURL(url);
      alert('Data exported successfully! You can import this file on another device.');
    } catch (error) {
      console.error('Error exporting data:', error);
      alert('Error exporting data');
    }
  };

  const handleImportData = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    
    const file = e.target.files[0];
    const reader = new FileReader();
    
    reader.onload = async (event) => {
      try {
        const text = event.target?.result as string;
        const importedData = JSON.parse(text);
        
        if (!importedData.user || !importedData.progress) {
          alert('Invalid data file. Please export data from the app first.');
          return;
        }

        // Confirm import
        const confirmed = window.confirm(
          'This will replace all your current data with the imported data. This cannot be undone. Continue?'
        );
        
        if (!confirmed) return;

        // Import user data (update current user or create new)
        if (user && user.email === importedData.user.email) {
          // Same user - update data
          await db.users.update(user.id, {
            name: importedData.user.name,
            profilePicture: importedData.user.profilePicture,
          });
          
          // Update progress
          if (importedData.progress && importedData.progress.length > 0) {
            await db.userProgress.put(importedData.progress[0]);
          }
        } else {
          // Different user or no email - create new user
          const newUser = await db.users.add({
            id: importedData.user.id || `user_${Date.now()}`,
            name: importedData.user.name,
            email: importedData.user.email,
            profilePicture: importedData.user.profilePicture,
            createdAt: new Date(importedData.user.createdAt),
          });
          
          if (importedData.progress && importedData.progress.length > 0) {
            await db.userProgress.put(importedData.progress[0]);
          }
          
          const importedUser = await db.users.get(newUser);
          if (importedUser) {
            setUser(importedUser);
          }
        }

        // Import sessions
        if (importedData.sessions && Array.isArray(importedData.sessions)) {
          await db.studySessions.clear();
          await db.studySessions.bulkAdd(importedData.sessions);
        }

        // Import flashcards
        if (importedData.flashcards && Array.isArray(importedData.flashcards)) {
          await db.flashcardStates.clear();
          await db.flashcardStates.bulkAdd(importedData.flashcards);
        }

        // Import settings
        if (importedData.settings && Array.isArray(importedData.settings) && importedData.settings.length > 0) {
          await db.settings.clear();
          await db.settings.add(importedData.settings[0]);
          const newSettings = await getUserSettings();
          if (newSettings) {
            setSettings(newSettings);
          }
        }

        alert('Data imported successfully! The page will reload.');
        window.location.reload();
      } catch (error) {
        console.error('Error importing data:', error);
        alert('Error importing data. Please check the file format.');
      }
    };
    
    reader.readAsText(file);
    // Reset input
    e.target.value = '';
  };

  const handleUpdateName = (newName: string) => {
    if (!user || !newName.trim()) return;
    // Update local state, save on save button click
    const updatedUser = { ...user, name: newName.trim() };
    setUser(updatedUser);
  };

  const handleProfilePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!user || !e.target.files || e.target.files.length === 0) return;

    const file = e.target.files[0];
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file');
      return;
    }

    if (file.size > 2 * 1024 * 1024) { // 2MB limit
      alert('Image size must be less than 2MB');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result;
      if (typeof result === 'string') {
        const updatedUser = { ...user, profilePicture: result };
        setUser(updatedUser);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSaveProfile = async () => {
    if (!user) return;
    try {
      await db.users.update(user.id, {
        name: user.name,
        profilePicture: user.profilePicture,
      });
      alert('Profile saved successfully!');
    } catch (error) {
      console.error('Error saving profile:', error);
      alert('Error saving profile');
    }
  };

  if (!settings) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="spinner text-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24 md:pb-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Settings</h1>

      {/* User Profile */}
      {user && (
        <div className="card p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900 flex items-center">
              <User className="w-6 h-6 mr-2 text-purple-600" />
              Profile
            </h2>
            {user.email && (
              <button
                onClick={handleLogout}
                className="btn-secondary text-sm"
              >
                <LogOut className="w-4 h-4 inline mr-2" />
                Logout
              </button>
            )}
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                value={user.name}
                onChange={(e) => handleUpdateName(e.target.value)}
                className="input"
                maxLength={50}
              />
            </div>

            {user.email && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={user.email}
                  disabled
                  className="input bg-gray-50 cursor-not-allowed"
                />
                <p className="mt-1 text-sm text-gray-500">
                  Email cannot be changed
                </p>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Profile Picture
              </label>
              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-gray-200">
                  {user.profilePicture ? (
                    <img
                      src={user.profilePicture}
                      alt={user.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-primary-100 flex items-center justify-center text-2xl font-bold text-primary-600">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <input
                    type="file"
                    id="profile-picture-input"
                    accept="image/*"
                    onChange={handleProfilePictureChange}
                    className="hidden"
                  />
                  <label
                    htmlFor="profile-picture-input"
                    className="btn-secondary text-sm cursor-pointer inline-flex items-center"
                  >
                    <Upload className="w-4 h-4 inline mr-2" />
                    {user.profilePicture ? 'Change Picture' : 'Upload Picture'}
                  </label>
                  {user.profilePicture && (
                    <button
                      onClick={() => {
                        const updatedUser = { ...user };
                        delete updatedUser.profilePicture;
                        setUser(updatedUser);
                      }}
                      className="btn-secondary text-sm ml-2"
                    >
                      Remove
                    </button>
                  )}
                  <p className="mt-1 text-xs text-gray-500">
                    Max 2MB. JPG, PNG, or GIF
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <button
                onClick={handleSaveProfile}
                className="btn-primary"
              >
                <Save className="w-4 h-4 inline mr-2" />
                Save Profile
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Audio Settings */}
      <div className="card p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <Volume2 className="w-6 h-6 mr-2 text-primary-600" />
          Audio
        </h2>

        <div className="space-y-4">
          <SettingToggle
            label="Sound enabled"
            description="Play sound effects for correct/incorrect answers"
            checked={settings.soundEnabled}
            onChange={() => handleToggle('soundEnabled')}
          />

          <SettingToggle
            label="Auto-play audio"
            description="Automatically play word audio"
            checked={settings.autoPlayAudio}
            onChange={() => handleToggle('autoPlayAudio')}
          />
        </div>
      </div>

      {/* Study Settings */}
      <div className="card p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <Target className="w-6 h-6 mr-2 text-green-600" />
          Study Goals
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Daily word goal
            </label>
            <input
              type="number"
              min="5"
              max="100"
              step="5"
              value={settings.dailyGoal}
              onChange={(e) => handleDailyGoalChange(e.target.value)}
              className="input max-w-xs"
            />
            <p className="mt-1 text-sm text-gray-500">
              Number of new words per day (5-100)
            </p>
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="card p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <Bell className="w-6 h-6 mr-2 text-yellow-600" />
          Notifications
        </h2>

        <div className="space-y-4">
          {notificationPermission !== 'granted' && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
              <p className="text-sm text-yellow-800 mb-3">
                Enable browser notifications to receive study reminders and achievement alerts.
              </p>
              <button
                onClick={handleRequestPermission}
                className="btn-primary text-sm"
              >
                Enable Notifications
              </button>
            </div>
          )}

          <SettingToggle
            label="Study reminders"
            description="Receive daily notifications to maintain your streak"
            checked={settings.notifications && notificationPermission === 'granted'}
            onChange={handleNotificationToggle}
            disabled={notificationPermission !== 'granted'}
          />

          {settings.notifications && notificationPermission === 'granted' && reminderTime && (
            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-2">
                Daily reminder scheduled for {reminderTime.hour.toString().padStart(2, '0')}:
                {reminderTime.minute.toString().padStart(2, '0')}
              </p>
              <button
                onClick={handleTestNotification}
                className="btn-secondary text-sm"
              >
                Test Notification
              </button>
            </div>
          )}

          {notificationPermission === 'denied' && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-sm text-red-800">
                Notifications are blocked. Please enable them in your browser settings to receive study reminders.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Data Management */}
      <div className="card p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <Download className="w-6 h-6 mr-2 text-blue-600" />
          Data Management
        </h2>

        <div className="space-y-4">
          <div>
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={handleExportData}
                className="btn-secondary"
              >
                <Download className="w-4 h-4 inline mr-2" />
                Export My Data
              </button>
              <label className="btn-secondary cursor-pointer">
                <UploadIcon className="w-4 h-4 inline mr-2" />
                Import Data
                <input
                  type="file"
                  accept=".json"
                  onChange={handleImportData}
                  className="hidden"
                />
              </label>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Export your data to continue on another device, or import previously exported data
            </p>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <button
              onClick={() => setShowResetConfirm(true)}
              className="btn-danger w-full sm:w-auto mb-4"
            >
              <Trash2 className="w-4 h-4 inline mr-2" />
              Reset Progress
            </button>
            <p className="mt-2 text-sm text-gray-500 mb-4">
              Delete all your progress and start from scratch
            </p>
            
            <button
              onClick={() => setShowDeleteConfirm(true)}
              className="btn-danger w-full sm:w-auto"
            >
              <Trash2 className="w-4 h-4 inline mr-2" />
              Delete All Data
            </button>
            <p className="mt-2 text-sm text-gray-500">
              Permanently delete your account and all data. You will be logged out.
            </p>
          </div>
        </div>
      </div>

      {/* Save All Settings Button */}
      <div className="card p-6 mb-6 bg-blue-50 border-2 border-blue-200">
        <button
          onClick={handleSaveSettings}
          className="w-full btn-primary flex items-center justify-center"
        >
          <Save className="w-5 h-5 mr-2" />
          Save All Settings
        </button>
        <p className="text-sm text-gray-600 text-center mt-2">
          Save all changes including daily goal and profile updates
        </p>
      </div>

      {/* About */}
      <div className="card p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          About
        </h2>
        <div className="text-sm text-gray-600 space-y-2">
          <p>
            <strong>Polish Learning App</strong> v1.0.0
          </p>
          <p>
            Polish learning app based on visual dictionary
          </p>
          <p>
            Vocabulary based on <em>Polish-English Bilingual Visual Dictionary</em> (Dorling Kindersley, 2008)
          </p>
        </div>
      </div>

      {/* Reset Progress Confirmation Modal */}
      {showResetConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Reset Progress?
            </h3>
            <p className="text-gray-600 mb-6">
              This action will delete all your progress, points, achievements, and streak.
              Your account and settings will remain. This cannot be undone.
            </p>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowResetConfirm(false)}
                className="flex-1 btn-secondary"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowResetConfirm(false);
                  handleResetProgress();
                }}
                className="flex-1 btn-danger"
              >
                Yes, Reset
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete All Data Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-red-600 mb-4">
              ⚠️ Delete All Data?
            </h3>
            <p className="text-gray-600 mb-4">
              This will permanently delete:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
              <li>Your account</li>
              <li>All progress and achievements</li>
              <li>All study sessions</li>
              <li>All flashcard states</li>
              <li>All settings</li>
            </ul>
            <p className="text-red-600 font-semibold mb-6">
              This action cannot be undone. You will be logged out immediately.
            </p>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="flex-1 btn-secondary"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteAllData}
                className="flex-1 btn-danger"
              >
                Yes, Delete Everything
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

interface SettingToggleProps {
  label: string;
  description: string;
  checked: boolean;
  onChange: () => void;
  disabled?: boolean;
}

function SettingToggle({ label, description, checked, onChange, disabled }: SettingToggleProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex-1">
        <h3 className="font-medium text-gray-900">{label}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <button
        onClick={onChange}
        disabled={disabled}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
          checked ? 'bg-primary-600' : 'bg-gray-300'
        } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            checked ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );
}

export default SettingsPage;
