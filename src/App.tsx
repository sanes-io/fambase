import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AppLayout from './components/AppLayout';
import Login from './features/auth/Login';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
