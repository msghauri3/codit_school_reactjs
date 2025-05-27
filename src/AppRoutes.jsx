import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layouts
import ERPLayout from './ERP_Home/Layout';
import HRMLayout from './HRM_Home/Layout';
import RNDLayout from './HRM_Home/Layout';

// Pages
import HomeERP from './ERP_Home/Home';
import HomeHRM from './HRM_Home/Home';
import Employees from './HRM_Home/Employees';
import Payroll from './HRM_Home/GeneratePayroll';
import Leaves from './HRM_Home/Leaves'
import Axios1 from  './RND/Axios1'


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ERPLayout />}>
        <Route index element={<HomeERP />} />
      </Route>

      <Route path="/HRM" element={<HRMLayout />}>
        <Route index element={<HomeHRM />} />
        <Route path="Employees" element={<Employees />} />
        <Route path="Payroll" element={<Payroll />} />
         <Route path="Leaves" element={<Leaves />} />
      </Route>

      <Route path="/RND" element={<RNDLayout />}>
        <Route index element={<Axios1 />} />
        <Route path="Axios1" element={<Axios1 />} />
      </Route>

    </Routes>
  );
}

export default AppRoutes;
