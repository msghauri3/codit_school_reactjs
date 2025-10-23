// ============================================
// src/components/Header/Logo.jsx
// ============================================
import React from 'react';
import logo from './logo.png';

const Logo = () => {
  return (
    <div className="flex items-center justify-center min-w-[300px] max-w-[380px] px-4 py-2">
      <a href="/" className="block w-full">
        <img
          src={logo}
          
        />
      </a>
    </div>
  );
};

export default Logo;
