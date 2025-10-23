// src/EducationManagement/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">About EduManage</h1>
      
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-gray-600 leading-relaxed">
          EduManage is a comprehensive education management system designed to streamline 
          administrative tasks, enhance communication, and improve the overall educational 
          experience for students, teachers, and administrators.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Features</h3>
          <ul className="text-gray-600 space-y-2">
            <li>• Student Management</li>
            <li>• Course Scheduling</li>
            <li>• Attendance Tracking</li>
            <li>• Grade Management</li>
            <li>• Communication Tools</li>
            <li>• Reporting & Analytics</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Contact Information</h3>
          <div className="text-gray-600 space-y-2">
            <p><strong>Email:</strong> support@edumanage.com</p>
            <p><strong>Phone:</strong> +1 (555) 123-EDU</p>
            <p><strong>Address:</strong> 123 Education Ave, Learning City</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;