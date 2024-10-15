import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';
import './index.css';
import { HeaderShownProvider } from './context/HeaderShownProvider.jsx';
import { AuthProvider } from './context/AuthProvider.jsx';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <AuthProvider>
    <HeaderShownProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </HeaderShownProvider>
  </AuthProvider>
  // </StrictMode>
);
