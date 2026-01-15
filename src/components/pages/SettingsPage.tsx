import { useEffect, useState } from 'react';
import { getUserSettings, updateSettings, db } from '@/utils/database';
import { UserSettings } from '@/types';
import { Volume2, Bell, Target, Trash2, Download } from 'lucide-react';

function SettingsPage() {
  const [settings, setSettings] = useState<UserSettings | null>(null);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

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
      // Delete all progress
      await db.userProgress.clear();
      await db.studySessions.clear();
      await db.flashcardStates.clear();

      // Recreate initial progress
      await db.userProgress.add({
        userId: 'default-user',
        totalPoints: 0,
        level: 1,
        streak: 0,
        lastStudyDate: new Date(),
        completedCategories: [],
        achievements: [],
      });

      alert('Progress reset successfully');
      window.location.reload();
    } catch (error) {
      console.error('Error resetting progress:', error);
      alert('Error resetting progress');
    }
  };

  const handleExportData = async () => {
    try {
      const allData = {
        progress: await db.userProgress.toArray(),
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
          Notificaciones
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
              className="btn-danger w-full sm:w-auto"
            >
              <Trash2 className="w-4 h-4 inline mr-2" />
              Reset Progress
            </button>
            <p className="mt-2 text-sm text-gray-500">
              Delete all your progress and start from scratch
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

      {/* Reset Confirmation Modal */}
      {showResetConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Reset Progress?
            </h3>
            <p className="text-gray-600 mb-6">
              This action will delete all your progress, points, achievements, and streak.
              This cannot be undone.
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
