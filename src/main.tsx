import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import LandingPage from './pages/LandingPage.tsx';
import SignupPage from './pages/SignupPage.tsx';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import HabitPage from './pages/HabitPage';
import SettingsPage from './pages/SettingsPage';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/habit/:habitId" element={<HabitPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
