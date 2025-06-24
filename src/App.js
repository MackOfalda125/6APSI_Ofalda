import React from 'react';
import LoginPage from './LoginPage'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Added imports for Routes
import LandingPage from './LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/landingpage" element={<LandingPage/>} />
      </Routes>
    </BrowserRouter> // Added BrowserRouter and Routes for navigation
    
    // <div>
      // <LoginPage />
    // </div>
  );
}

export default App;
