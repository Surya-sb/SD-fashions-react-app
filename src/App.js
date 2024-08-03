// src/App.js
import React from 'react';
import NavbarComponent from './components/Navbar';
import CarouselComponent from './components/CarouselComponent';
import './App.css';

function App() {
  return (
    <div className="App home-background">
      <NavbarComponent />
      <CarouselComponent />
    </div>
  );
}

export default App;
