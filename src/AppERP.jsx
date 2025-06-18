import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';


function AppERP() {
  return (
    <Router>
           <AppRoutes />   
    </Router>
  );
}

export default AppERP;
