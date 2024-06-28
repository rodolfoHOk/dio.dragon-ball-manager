import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/home/HomePage';
import { AddressFormPage } from '../pages/address-form/AddressFormPage';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/cep" element={<AddressFormPage />} />
    </Routes>
  );
}
