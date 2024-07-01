import { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
import { Header } from './components/header/Header';
import { AppRoutes } from './routes/AppRoutes';

export function MainLayout() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`${theme} bg-neutral-50 dark:bg-zinc-950 text-zinc-950 dark:text-zinc-50 transition-colors duration-300`}
    >
      <div className="w-full max-w-7xl mx-auto min-h-screen flex flex-col gap-6">
        <Header />

        <main className="w-full px-4 flex flex-col">
          <AppRoutes />
        </main>
      </div>
    </div>
  );
}
