import React from 'react';
import Navigation from './components/Navigation';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navigation />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
