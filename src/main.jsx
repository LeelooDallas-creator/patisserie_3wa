// main.jsx (ou index.jsx dans certains projets)
import React from 'react';
import ReactDOM from 'react-dom/client'; // Utilisation de React 18 (version actuelle)
import App from './App'; // Assurez-vous que le chemin d'importation est correct
import './index.css'; // Inclure votre fichier CSS/SCSS pour la mise en page globale

// Sélectionner l'élément root dans le HTML pour y insérer l'application React
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendre l'application dans l'élément root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
