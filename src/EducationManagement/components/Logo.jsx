// src/EducationManagement/components/Header/Logo.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/education-management/dashboard" className="no-underline flex items-center space-x-3">
      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
        <span className="text-white font-bold text-lg">E</span>
      </div>
      <div className="flex flex-col">
        <h1 className="text-xl font-bold text-gray-800 leading-tight">EduManage</h1>
        <p className="text-xs text-gray-600 leading-tight">Management System</p>
      </div>
    </Link>
  );
};

export default Logo;