// src/components/Navigation.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Accueil</Link>
      </li>
      <li>
        <Link to="/patisseries">Pâtisseries</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/play">Jouer</Link>
      </li>
      <li>
          <Link to="/login">Login</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
