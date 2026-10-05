import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './components/App';

const domContainer = document.getElementById('root');
// Création de la racine du DOM généré par React
const root = ReactDOM.createRoot(domContainer);
// Rendu de l'application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);