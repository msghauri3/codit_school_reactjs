import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layouts
import ERPLayout from './ERP_Home/Layout'; // Create Layout file that includes TopBar, NavBar, Sidebar
import HRMLayout from './HRM_Home/Layout';

// Pages
import HomeERP from './ERP_Home/Home';
import HomeHRM from './HRM_Home/Home';
import Employees from './HRM_Home/Employees'; // Example
import Payroll from './HRM_Home/GeneratePayroll'; // Example

function AppRoutes() {
  return (
    <Routes>
      {/* ERP Layout */}
      <Route path="/" element={<ERPLayout />}>
        <Route index element={<HomeERP />} />
        {/* Add other ERP routes here */}
      </Route>

      {/* HRM Layout */}
      <Route path="/HRM" element={<HRMLayout />}>
        <Route index element={<HomeHRM />} />
        <Route path="Employees" element={<Employees />} />
        <Route path="GeneratePayroll" element={<Payroll />} />
        {/* Add more HRM routes here */}
      </Route>
    </Routes>
  );
}

export default AppRoutes;
