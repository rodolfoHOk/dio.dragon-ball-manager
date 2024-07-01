import { BrowserRouter } from 'react-router-dom';
import * as Toast from '@radix-ui/react-toast';
import { ThemeProvider } from './contexts/ThemeContext';
import { MainLayout } from './MainLayout';

function App() {
  return (
    <ThemeProvider>
      <Toast.Provider>
        <BrowserRouter>
          <MainLayout />
        </BrowserRouter>
      </Toast.Provider>
    </ThemeProvider>
  );
}

export default App;
