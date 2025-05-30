import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layouts
import ERPLayout from './ERP_Home/Layout';
import HRMLayout from './HRM_Home/Layout';
import RNDLayout from './HRM_Home/Layout';
import FinanceLayout from './Finance_Home/Layout'
import CRMLayout from './CRM_Home/Layout'

import InventoryLayout from './Inventory_Home/Layout'
import SupplyChainLayout from './SupplyChain_Home/Layout'
import ProcurmentLayout from './Procurment_Home/Layout'


// Pages
import HomeERP from './ERP_Home/Home';
import HomeHRM from './HRM_Home/Home';
import Employees from './HRM_Home/Employees';
import Payroll from './HRM_Home/Payroll';
import Leaves from './HRM_Home/Leaves'
import TaxSetup from './HRM_Home/TaxSetup'
import Reports from './HRM_Home/Reports'
import ChartOfAccount from './Finance_Home/ChartOfAccount'

import GeneralLedger from './Finance_Home/GeneralLedger';

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
        <Route path="GeneratePayroll" element={<Payroll />} />
        <Route path="Leaves" element={<Leaves />} />
        <Route path="TaxSetup" element={<TaxSetup />} />
        <Route path="Leaves" element={<Leaves />} />
        <Route path="Payroll" element={<Payroll />} />
        <Route path="Reports" element={<Reports />} />
      </Route>

 
      <Route path="/Finance" element={<FinanceLayout />}>
        <Route index element={<HomeHRM />} />
        <Route path="GeneralLedger" element={<GeneralLedger />} />
        <Route path="ChartOfAccount" element={<ChartOfAccount />} />
         <Route path="Leaves" element={<Leaves />} />
      </Route>

      <Route path="/CRM" element={<CRMLayout />}>
        <Route index element={<HomeHRM />} />
        <Route path="Employees" element={<Employees />} />
        <Route path="Payroll" element={<Payroll />} />
         <Route path="Leaves" element={<Leaves />} />
      </Route>



 <Route path="/Inventory" element={<InventoryLayout />}>
        <Route index element={<HomeHRM />} />
        <Route path="Employees" element={<Employees />} />
        <Route path="Payroll" element={<Payroll />} />
         <Route path="Leaves" element={<Leaves />} />
      </Route>


 <Route path="/SupplyChain" element={<SupplyChainLayout />}>
        <Route index element={<HomeHRM />} />
        <Route path="Employees" element={<Employees />} />
        <Route path="Payroll" element={<Payroll />} />
         <Route path="Leaves" element={<Leaves />} />
      </Route>


      <Route path="/Procurement" element={<ProcurmentLayout />}>
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
