import { useEffect } from 'react';
import { Award, TrendingUp, Target, Calendar, Flame } from 'lucide-react';
import { getLevelTitle, getLevelProgress, getPointsToNextLevel } from '@/utils/gamification';
import { useUser } from '@/contexts/UserContext';

function ProgressPage() {
  const { userProgress, refreshProgress } = useUser();

  useEffect(() => {
    refreshProgress();
  }, [refreshProgress]);

  if (!userProgress) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="spinner" style={{ borderLeftColor: '#0074bd' }}></div>
      </div>
    );
  }

  const progress = userProgress;

  const levelProgress = getLevelProgress(progress.totalPoints, progress.level);
  const pointsToNext = getPointsToNextLevel(progress.totalPoints, progress.level);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24 md:pb-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Tu Progreso</h1>

      {/* Level Card */}
      <div className="card p-8 mb-6 text-white" style={{ background: 'linear-gradient(to bottom right, #0074bd, #004470)' }}>
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="text-sm opacity-90 mb-1">Nivel Actual</div>
            <div className="text-5xl font-bold">{progress.level}</div>
            <div className="text-xl opacity-90 mt-1">
              {getLevelTitle(progress.level)}
            </div>
          </div>
          <Award className="w-20 h-20 opacity-75" />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span>Progreso al nivel {progress.level + 1}</span>
            <span className="font-semibold">{levelProgress}%</span>
          </div>
          <div className="h-3 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-white rounded-full transition-all duration-500"
              style={{ width: `${levelProgress}%` }}
            ></div>
          </div>
          <div className="text-sm opacity-75">
            {pointsToNext} puntos hasta el siguiente nivel
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard
          icon={<TrendingUp className="w-8 h-8" style={{ color: '#0074bd' }} />}
          value={progress.totalPoints.toLocaleString()}
          label="Puntos Totales"
          color="primary"
        />
        <StatCard
          icon={<Flame className="w-8 h-8" style={{ color: '#ffcc00' }} />}
          value={progress.streak}
          label="Días de Racha"
          color="yellow"
        />
        <StatCard
          icon={<Target className="w-8 h-8" style={{ color: '#0074bd' }} />}
          value={progress.completedCategories.length}
          label="Categorías Completadas"
          color="primary"
        />
        <StatCard
          icon={<Award className="w-8 h-8" style={{ color: '#ffcc00' }} />}
          value={progress.achievements.length}
          label="Logros Desbloqueados"
          color="yellow"
        />
      </div>

      {/* Achievements */}
      {progress.achievements.length > 0 && (
        <div className="card p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <Award className="w-6 h-6 mr-2 text-yellow-500" />
            Logros Desbloqueados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {progress.achievements.map((achievement) => (
              <div
                key={achievement.id}
                className="p-4 border-2 border-yellow-200 bg-yellow-50 rounded-lg"
              >
                <div className="text-4xl mb-2">{achievement.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">
                  {achievement.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  {achievement.description}
                </p>
                <p className="text-xs text-gray-500">
                  {new Date(achievement.unlockedAt).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Activity Calendar */}
      <div className="card p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <Calendar className="w-6 h-6 mr-2" style={{ color: '#0074bd' }} />
          Actividad Reciente
        </h2>
        <div className="text-center py-8 text-gray-500">
          <Calendar className="w-12 h-12 mx-auto mb-2 opacity-50" />
          <p>El calendario de actividad estará disponible próximamente</p>
        </div>
      </div>

      {/* Motivational Message */}
      <div className="mt-6 card p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200">
        <div className="flex items-start space-x-4">
          <div className="text-4xl">💪</div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">
              ¡Sigue así!
            </h3>
            <p className="text-gray-700">
              {progress.streak > 0
                ? `Llevas ${progress.streak} días seguidos estudiando. ¡No rompas la racha!`
                : 'Comienza hoy tu racha de estudio diario.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  value: string | number;
  label: string;
  color: 'primary' | 'yellow';
}

function StatCard({ icon, value, label, color }: StatCardProps) {
  const bgColors = {
    primary: { backgroundColor: 'rgba(0, 116, 189, 0.1)' },
    yellow: { backgroundColor: 'rgba(255, 204, 0, 0.1)' },
  };

  return (
    <div className="card p-6" style={bgColors[color]}>
      <div className="flex items-center justify-between mb-3">
        {icon}
        <span className="text-3xl font-bold text-gray-900">{value}</span>
      </div>
      <p className="text-sm text-gray-600">{label}</p>
    </div>
  );
}

export default ProgressPage;
