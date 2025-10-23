// src/EducationManagement/components/Header/NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="flex items-center space-x-6">
      <Link 
        to="/education-management" 
        className="text-gray-600 hover:text-blue-600 font-medium no-underline"
      >
        Home
      </Link>
      <Link 
        to="/education-management/about" 
        className="text-gray-600 hover:text-blue-600 font-medium no-underline"
      >
        About
      </Link>
      <Link 
        to="/education-management/contact" 
        className="text-gray-600 hover:text-blue-600 font-medium no-underline"
      >
        Contact
      </Link>
    </nav>
  );
};

export default NavBar;