import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './page/Home';
import './assets/css/Colors.css';
import './assets/css/Body.css';
import './assets/css/Index.css';
import './assets/css/Topbar.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
