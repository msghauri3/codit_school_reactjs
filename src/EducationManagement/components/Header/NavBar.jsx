// src/EducationManagement/components/Header/NavBar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home } from 'lucide-react'; // Import home icon

const NavBar = () => {
  const location = useLocation();
  
  return (
    <nav className="flex items-center space-x-6">
      <Link 
        to="/education-management/dashboard" 
        className={`font-medium no-underline transition-colors ${
          location.pathname === '/education-management/dashboard' 
            ? 'text-blue-600 font-semibold' 
            : 'text-gray-600 hover:text-blue-600'
        }`}
      >
        Dashboard
      </Link>
      <Link 
        to="/education-management/about" 
        className={`font-medium no-underline transition-colors ${
          location.pathname === '/education-management/about' 
            ? 'text-blue-600 font-semibold' 
            : 'text-gray-600 hover:text-blue-600'
        }`}
      >
        About
      </Link>
      
      {/* Back to Main Portal Link */}
      <Link 
        to="/" 
        className="flex items-center space-x-2 text-gray-600 hover:text-green-600 font-medium no-underline transition-colors border-l border-gray-300 pl-6 ml-2"
      >
        <Home size={16} />
        <span>Back to Main Portal</span>
      </Link>
    </nav>
  );
};

export default NavBar;