import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

// const root = ReactDOM.createRoot(document.getElementById("root"));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/youtube_clone">
      <App sx={{ backgroundColor: '#000' }} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
