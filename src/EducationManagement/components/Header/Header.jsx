// src/EducationManagement/components/Header/Header.jsx
import React from 'react';
import Logo from './Logo';
import NavBar from './NavBar';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white shadow-sm border-b border-gray-200"> {/* Blue background */}
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          <Logo />
          <NavBar />
        </div>
      </div>
    </header>
  );
};

export default Header;