import React from 'react';
import { Search, Calendar, User, FileText } from 'lucide-react';

const TopNavBar = () => {
  return (
    <div className="flex justify-end items-center gap-6 px-6 py-3 border-b border-gray-200">
      <a href="#" className="flex items-center gap-2 text-sm text-gray-600 hover:text-green-600 transition">
        <Calendar size={16} />
        <span>School Managment System</span>
      </a>
      <a href="#" className="flex items-center gap-2 text-sm text-gray-600 hover:text-green-600 transition">
        <User size={16} />
        <span>CLIENT LOGIN</span>
      </a>
      <a href="#" className="flex items-center gap-2 text-sm text-gray-600 hover:text-green-600 transition">
        <FileText size={16} />
        <span>USCIS CASE STATUS</span>
      </a>
      <button className="p-2 bg-blue-800 text-white rounded hover:bg-blue-900 transition">
        <Search size={16} />
      </button>
    </div>
  );
};

export default TopNavBar;