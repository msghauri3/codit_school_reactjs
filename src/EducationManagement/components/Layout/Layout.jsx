// src/EducationManagement/components/Layout/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Outlet /> {/* This renders the current page content */}
      </main>
    </div>
  );
};

export default Layout;