import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';
import './index.css';
import { HeaderShownProvider } from './context/HeaderShownProvider.jsx';
import { AuthProvider } from './context/AuthProvider.jsx';
import { LogProvider } from './context/LogProvider.jsx';
import { FooterShownProvider } from './context/FooterShownProvider.jsx';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <AuthProvider>
    <LogProvider>
      <HeaderShownProvider>
        <FooterShownProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/*" element={<App />} />
          </Routes>
          </BrowserRouter>
        </FooterShownProvider>
      </HeaderShownProvider>
    </LogProvider>
  </AuthProvider>
  // </StrictMode>
);
