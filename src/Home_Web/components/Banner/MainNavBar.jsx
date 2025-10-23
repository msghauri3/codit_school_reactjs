// AppRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home_Web from './Home_Web/App';
import About from './Home_Web/pages/About';
import Services from './Home_Web/pages/Services'; // Make sure this exists

function AppRoutes() {
  return (
    <Routes>
      {/* Other routes */}
      
      <Route path="Home" element={
        <PrivateRoute>
          <Home_Web />
        </PrivateRoute>
      }>
        <Route path="about" element={<About />} /> {/* lowercase 'about' */}
        <Route path="services" element={<Services />} /> {/* lowercase 'services' */}
        {/* Add other nested routes */}
      </Route>
    </Routes>
  );
}