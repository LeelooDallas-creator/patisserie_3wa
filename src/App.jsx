import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Play from './pages/Play';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Patisseries from './pages/Patisseries';  // Ajouter une nouvelle page pour /patisseries
import Admin from './pages/Admin'
import Navigation from './components/Navigation'
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './index.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
          <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/play" element={<Play />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/patisseries" element={<Patisseries />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
