// src/EducationManagement/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Layout from './components/Layout/Layout';

const EducationManagementApp = () => {
  return (
    <Routes>
      {/* Login route without layout */}
      <Route path="/" element={<Login />} />
      
      {/* All other routes with layout (header) */}
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        {/* Add more routes that need header here */}
      </Route>
    </Routes>
  );
};

export default EducationManagementApp;