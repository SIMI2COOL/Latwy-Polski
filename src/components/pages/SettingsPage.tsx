import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserSettings, updateSettings, db, logoutUser } from '@/utils/database';
import { UserSettings } from '@/types';
import { useUser } from '@/contexts/UserContext';
import { Volume2, Bell, Target, Trash2, Download, User, Image as ImageIcon, LogOut } from 'lucide-react';

function SettingsPage() {
  const navigate = useNavigate();
  const { user, setUser } = useUser();
  const [settings, setSettings] = useState<UserSettings | null>(null);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  useEffect(() => {
    async function loadSettings() {
      const userSettings = await getUserSettings();
      if (userSettings) {
        setSettings(userSettings);
      }
    }
    loadSettings();
  }, []);

  const handleToggle = async (key: keyof UserSettings) => {
    if (!settings) return;

    const newSettings = {
      ...settings,
      [key]: !settings[key],
    };

    setSettings(newSettings);
    await updateSettings({ [key]: newSettings[key] });
  };

  const handleDailyGoalChange = async (value: number) => {
    if (!settings) return;

    const newSettings = {
      ...settings,
      dailyGoal: value,
    };

    setSettings(newSettings);
    await updateSettings({ dailyGoal: value });
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
        user: {
          id: user.id,
          name: user.name,
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
    } catch (error) {
      console.error('Error exporting data:', error);
      alert('Error exporting data');
    }
  };

  const handleUpdateName = async (newName: string) => {
    try {
      if (!user || !newName.trim()) return;
      
      await db.users.update(user.id, { name: newName.trim() });
      const updatedUser = await db.users.get(user.id);
      if (updatedUser) {
        setUser(updatedUser);
      }
    } catch (error) {
      console.error('Error updating name:', error);
      alert('Error updating name');
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
              <div className="flex gap-2">
                <input
                  type="text"
                  defaultValue={user.name}
                  onBlur={(e) => {
                    const newName = e.target.value.trim();
                    if (newName && newName !== user.name && newName.length >= 2) {
                      handleUpdateName(newName);
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.currentTarget.blur();
                    }
                  }}
                  className="input flex-1"
                  maxLength={50}
                />
              </div>
              <p className="mt-1 text-sm text-gray-500">
                Press Enter or click outside to save
              </p>
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
                <div className="w-20 h-20 rounded-full bg-primary-100 flex items-center justify-center text-2xl font-bold text-primary-600">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-2">
                    Profile picture feature coming soon
                  </p>
                  <button
                    disabled
                    className="btn-secondary text-sm opacity-50 cursor-not-allowed"
                  >
                    <ImageIcon className="w-4 h-4 inline mr-2" />
                    Change Picture
                  </button>
                </div>
              </div>
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
            description="Play sound effects"
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
              onChange={(e) => handleDailyGoalChange(parseInt(e.target.value))}
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
          <SettingToggle
            label="Study reminders"
            description="Receive notifications to maintain your streak"
            checked={settings.notifications}
            onChange={() => handleToggle('notifications')}
          />
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
            <button
              onClick={handleExportData}
              className="btn-secondary w-full sm:w-auto"
            >
              <Download className="w-4 h-4 inline mr-2" />
              Export My Data
            </button>
            <p className="mt-2 text-sm text-gray-500">
              Download a copy of your progress and settings
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
}

function SettingToggle({ label, description, checked, onChange }: SettingToggleProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex-1">
        <h3 className="font-medium text-gray-900">{label}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <button
        onClick={onChange}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
          checked ? 'bg-primary-600' : 'bg-gray-300'
        }`}
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
