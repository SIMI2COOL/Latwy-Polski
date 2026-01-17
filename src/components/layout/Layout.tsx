import { Outlet, Link, useLocation } from 'react-router-dom';
import { Home, TrendingUp, Settings } from 'lucide-react';
import { Logo } from '@/components/common/Logo';

function Layout() {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: 'Główna' },
    { path: '/progress', icon: TrendingUp, label: 'Postęp' },
    { path: '/settings', icon: Settings, label: 'Ustawienia' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Logo size={32} />
              <span className="text-xl font-bold text-gradient">Łatwy Hiszpański</span>
            </Link>
            
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                      isActive
                        ? 'font-medium'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                    style={isActive ? { backgroundColor: 'rgba(0, 116, 189, 0.1)', color: '#0074bd' } : {}}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
        <div className="grid grid-cols-3 h-16">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center justify-center space-y-1 ${
                  isActive ? '' : 'text-gray-500'
                }`}
                style={isActive ? { color: '#0074bd' } : {}}
              >
                <Icon className="w-6 h-6" />
                <span className="text-xs">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

export default Layout;
