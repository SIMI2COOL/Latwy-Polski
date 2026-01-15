import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '@/utils/database';
import { useUser } from '@/contexts/UserContext';
import { BookOpen } from 'lucide-react';

function LoginPage() {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useUser();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!name.trim()) {
      setError('Por favor, ingresa tu nombre');
      return;
    }

    if (name.trim().length < 2) {
      setError('El nombre debe tener al menos 2 caracteres');
      return;
    }

    setLoading(true);
    try {
      const user = await createUser(name.trim());
      setUser(user);
      navigate('/');
    } catch (err) {
      setError('Error al crear el usuario. Por favor, intenta de nuevo.');
      console.error('Error creating user:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: 'linear-gradient(to bottom right, rgba(0, 116, 189, 0.1), rgba(0, 116, 189, 0.05))' }}>
      <div className="max-w-md w-full">
        <div className="card p-8 shadow-xl">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <BookOpen className="w-16 h-16" style={{ color: '#0074bd' }} />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Łatwy Polski
            </h1>
            <p className="text-gray-600">
              Bienvenido a tu viaje de aprendizaje del polaco
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                ¿Cuál es tu nombre?
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ingresa tu nombre"
                className="input"
                autoFocus
                disabled={loading}
                maxLength={50}
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading || !name.trim()}
              className="w-full btn-primary"
            >
              {loading ? 'Creando cuenta...' : 'Comenzar'}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            Tu progreso se guardará localmente en tu dispositivo
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
