// src/EducationManagement/pages/Dashboard.jsx
import React from 'react';
import Header from '../components/Header/Header'; // ✅ Make sure this path is correct

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Education Management Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-700">Total Students</h3>
            <p className="text-3xl font-bold text-blue-600 mt-2">1,247</p>
          </div>
          {/* ... other cards */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;