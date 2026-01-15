import { BookOpen } from 'lucide-react';

function LoadingScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-purple-50">
      <div className="text-center">
        <div className="relative mb-8">
          <BookOpen className="w-16 h-16 text-primary-600 mx-auto animate-bounce" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Cargando Polski</h2>
        <p className="text-gray-600">Preparando tu experiencia de aprendizaje...</p>
      </div>
    </div>
  );
}

export default LoadingScreen;
