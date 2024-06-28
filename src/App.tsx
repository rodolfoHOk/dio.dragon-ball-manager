import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/AppRoutes';
import { Header } from './components/header/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="w-full max-w-7xl mx-auto min-h-screen bg-zinc-950 flex flex-col gap-6">
        <Header />

        <main className="w-full px-4 flex flex-col">
          <AppRoutes />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
