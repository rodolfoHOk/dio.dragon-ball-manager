import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/home/HomePage';
import { AddressFormPage } from '../pages/address-form/AddressFormPage';
import { Header } from '../components/header/Header';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/address-form" element={<AddressFormPage />} />
      </Routes>
    </BrowserRouter>
  );
}
