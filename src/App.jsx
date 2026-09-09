import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PublicLayout } from './user/layouts/PublicLayout';
import { HomePage } from './user/pages/HomePage';
import { RegistrationPage } from './user/pages/RegistrationPage';
import { SeatsPage } from './user/pages/SeatsPage';
import { NotFoundPage } from './user/pages/NotFoundPage';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<HomePage />} />
        <Route path="register" element={<RegistrationPage />} />
        <Route path="seats" element={<SeatsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
