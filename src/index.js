import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter basename="/youtube_clone">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
