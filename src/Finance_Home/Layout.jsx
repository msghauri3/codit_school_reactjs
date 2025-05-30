import React from 'react';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import TopBarHRM from './TopBar';
import NavBarHRM from './NavBar';
import SideBarGL from './SideBarGL';
import SideBarPayroll from './SideBarPayroll';
import SideBarLeaves from './SideBarLeaves'

export default function HRMLayout() {

  const location = useLocation();
  const path = location.pathname;

  let SidebarComponent;

  if (path.startsWith('/Finance/SideBarGL')) {
    SidebarComponent = <SideBarLeaves />;
  } else if (path.startsWith('/HRM/Payroll')) {
    SidebarComponent = <SideBarPayroll />;
  } else {
    SidebarComponent = <SideBarGL />;
  }

  return (
    <>
      <TopBarHRM />
      <NavBarHRM />
      <div className="d-flex" style={{ minHeight: '100vh' }}>
        {/* <SideBarHRM /> */}
               {SidebarComponent}



        <div className="flex-grow-1 p-4" style={{ backgroundColor: '#f0f0f0' }}>
          <Outlet />
        </div>
      </div>
    </>
  );
}
