import React from 'react';
import Navigation from './components/Navigation';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import FileUpload from './FileUpload';
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

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center', color: '#ecf0f1' }}>ChronoSphere</h1>
      <FileUpload />
    </div>
  );
};


export default App;
