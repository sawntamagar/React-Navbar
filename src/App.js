import React from 'react';

import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
// import HeroSection from './components/HeroSection';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      {/* <HeroSection/> */}
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </Router>
     

    </>
  );
}

export default App;
