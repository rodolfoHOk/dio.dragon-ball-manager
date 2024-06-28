import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/AppRoutes';
import { Header } from './components/header/Header';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />

        <main>
          <AppRoutes />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
