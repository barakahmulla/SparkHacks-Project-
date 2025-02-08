// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('app')); // This targets the <div id="app"></div> in index.html
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
