import React from 'react';
import { Outlet } from 'react-router-dom';
import TopBarHRM from './TopBar';
import NavBarHRM from './NavBar';
import SideBarHRM from './SideBar';

export default function HRMLayout() {
  return (
    <>
      <TopBarHRM />
      <NavBarHRM />
      <div className="d-flex">
        <SideBarHRM />
        <div className="flex-grow-1 p-3">
          <Outlet />
        </div>
      </div>
    </>
  );
}
