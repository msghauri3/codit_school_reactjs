// ============================================
// src/components/Header/MainNavBar.jsx
// ============================================
import React from 'react';
import { Link } from 'react-router-dom';

const MainNavBar = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'ABOUT US', path: '/about' },    
    { name: 'SERVICES', path: '/services' },
    { name: 'RESOURCES', path: '/resources' },
    { name: 'NEWS', path: '/news' },
    { name: 'CAREERS', path: '/careers' },
    { name: 'CONTACT', path: '/contact' }
  ];

  return (
    <nav className="flex justify-end items-center gap-3 px-6 py-4 w-full">
      {navItems.map((item, index) => (
        <React.Fragment key={index}>
          <Link
            to={item.path}
            className="text-sm font-bold text-gray-700 hover:text-green-600 transition no-underline"
          >
            {item.name}
          </Link>
          {/* Add vertical line except after the last item */}
          {index < navItems.length - 1 && (
            <div className="h-4 border-r border-gray-300"></div>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default MainNavBar;