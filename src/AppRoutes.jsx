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


// Employees
import HomeERP from './ERP_Home/Home';
import HomeHRM from './HRM_Home/Home';
import DashboardHRM from './HRM_Home/DashboardHRM';
import EmployeesDetail from './HRM_Home/EmployeesDetail'
import EmployeeDetail from './HRM_Home/EmployeeDetail'
import EmployeesSelection from './HRM_Home/EmployeesSelection'

// Leaves
import Leaves from './HRM_Home/Leaves'
import DashboardLeaves from './HRM_Home/DashboardLeaves'
import LeavesCasual from './HRM_Home/LeavesCasual'
import LeavesCompensation from './HRM_Home/LeavesCompensation';
import LeavesEarned from './HRM_Home/LeavesEarned';
import LeavesMaternity from './HRM_Home/LeavesMaternity';
import LeavesSick from './HRM_Home/LeavesSick';
import LeavesSetup from './HRM_Home/LeavesSetup';
import LeavesReports from './HRM_Home/LeavesReports';
import TaxSetup from './HRM_Home/TaxSetup'
import EmployeesReports from './HRM_Home/EmployeesReports'
import ChartOfAccount from './Finance_Home/ChartOfAccount'
import GeneralLedger from './Finance_Home/GeneralLedger';

// Payroll
import Payroll from './HRM_Home/Payroll';
import UploadExcel from './Upload/UploadExcel'
import PayrollEmp from './HRM_Home/PayrollEmp'
import PayrollDept from './HRM_Home/PayrollDept'
import DashboardPayroll from './HRM_Home/DashboardPayroll'



// Login
import Login from './Login/Login'
import PrivateRoute from './Components/PrivateRouts'

import Axios1 from  './RND/Axios1'


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={
    
         <PrivateRoute>
              <ERPLayout />
             </PrivateRoute>
        }>
       
      </Route>

     <Route path="/Login" element={<Login />}>
               
     </Route>

      <Route path="/HRM" element={        
             <PrivateRoute>
             <HRMLayout />
             </PrivateRoute>
      }>

        <Route index element={<HomeHRM />} />
        <Route path="DashboardHRM" element={<DashboardHRM />} />
         <Route path="DashboardPayroll" element={<DashboardPayroll />} />
        <Route path="EmployeesDetail" element={<EmployeesDetail />} />     
          <Route path="EmployeesSelection" element={<EmployeesSelection />} />     
        <Route path="GeneratePayroll" element={<Payroll />} />
        <Route path="Leaves" element={<Leaves />} />
         <Route path="DashboardLeaves" element={<DashboardLeaves />} />
        <Route path="TaxSetup" element={<TaxSetup />} />
        <Route path="Leaves" element={<Leaves />} />
         <Route path="LeavesCasual" element={<LeavesCasual />} />
         <Route path="LeavesCompensation" element={<LeavesCompensation />} />
         <Route path="LeavesEarned" element={<LeavesEarned />} />
         <Route path="LeavesMaternity" element={<LeavesMaternity />} />
         <Route path="LeavesSick" element={<LeavesSick />} />
         <Route path="LeavesSetup" element={<LeavesSetup />} />
         <Route path="LeavesReports" element={<LeavesReports />} />
        <Route path="Payroll" element={<Payroll />} />
        <Route path="EmployeesReports" element={<EmployeesReports />} />
        <Route path="UploadExcel" element={<UploadExcel />} />
        <Route path="EmployeeDetail/:id" element={<EmployeeDetail />} />
        <Route path="PayrollEmp" element={<PayrollEmp />} />    
        <Route path="PayrollDept" element={<PayrollDept />} />    

      </Route>

 
      <Route path="/Finance" element={
         <PrivateRoute>
             <FinanceLayout />
             </PrivateRoute>        
        }>
        <Route index element={<HomeHRM />} />
        <Route path="GeneralLedger" element={<GeneralLedger />} />
        <Route path="ChartOfAccount" element={<ChartOfAccount />} />
         <Route path="Leaves" element={<Leaves />} />
      </Route>

      <Route path="/CRM" element={<CRMLayout />}>
        <Route index element={<HomeHRM />} />
        <Route path="DashboardHRM" element={<DashboardHRM />} />
        <Route path="Payroll" element={<Payroll />} />
         <Route path="Leaves" element={<Leaves />} />
      </Route>



     <Route path="/Inventory" element={<InventoryLayout />}>
        <Route index element={<HomeHRM />} />
        <Route path="DashboardHRM" element={<DashboardHRM />} />
        <Route path="Payroll" element={<Payroll />} />
         <Route path="Leaves" element={<Leaves />} />
      </Route>


    <Route path="/SupplyChain" element={<SupplyChainLayout />}>
        <Route index element={<HomeHRM />} />
        <Route path="DashboardHRM" element={<DashboardHRM />} />
        <Route path="Payroll" element={<Payroll />} />
         <Route path="Leaves" element={<Leaves />} />
      </Route>


      <Route path="/Procurement" element={<ProcurmentLayout />}>
        <Route index element={<HomeHRM />} />
        <Route path="DashboardHRM" element={<DashboardHRM />} />
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
