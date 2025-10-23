// src/Home_Web/Homepage.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'; // ✅ Import the Footer

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet /> {/* This renders the nested routes */}
      </main>
      <Footer /> {/* Footer at the bottom */}
    </div>
  );
};

export default Homepage;