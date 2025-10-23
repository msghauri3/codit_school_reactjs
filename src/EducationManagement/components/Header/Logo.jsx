// src/EducationManagement/components/Header/Logo.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/education-management/dashboard" className="no-underline">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">E</span>
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-800">EduManage</h1>
          <p className="text-xs text-gray-600">Management System</p>
        </div>
      </div>
    </Link>
  );
};

export default Logo;