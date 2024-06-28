import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/home/HomePage';
import { SearchCepPage } from '../pages/search-cep/SearchCepPage';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/cep" element={<SearchCepPage />} />
      </Routes>
    </BrowserRouter>
  );
}
