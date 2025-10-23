// ============================================
// src/components/Header/TopNavBar.jsx
// ============================================
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, FileText } from 'lucide-react';

const TopNavBar = () => {
  return (
    <div className="flex justify-end items-center gap-6 px-6 py-3 w-full">
      <Link 
        to="/education-management" 
        className="flex items-center gap-2 text-sm text-gray-600 hover:text-green-600 transition no-underline"
      >
        <Calendar size={16} />
        <span>Education Management System</span>
      </Link>
      <Link 
        to="/education-online" 
        className="flex items-center gap-2 text-sm text-gray-600 hover:text-green-600 transition no-underline"
      >
        <User size={16} />
        <span>Education Online</span>
      </Link>
     
      <button className="p-2 bg-blue-800 text-white rounded hover:bg-blue-900 transition">
        <Search size={16} />
      </button>
    </div>
  );
};

export default TopNavBar;