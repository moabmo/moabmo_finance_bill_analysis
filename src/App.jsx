import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Wins from './components/Wins';
import Losses from './components/Losses';
import Amendments from './components/Amendments';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wins" element={<Wins />} />
          <Route path="/losses" element={<Losses />} />
          <Route path="/amendments" element={<Amendments />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
