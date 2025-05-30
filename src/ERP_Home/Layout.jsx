import React from 'react';
import { Outlet } from 'react-router-dom';
import TopBarERP from './TopBar';
import NavBarERP from './Navbar';
import SideBarERP from './Sidebar';
import TopTopBarERP from './TopTopBar'

export default function ERPLayout() {
  return (
    <>
      <TopBarERP />
      <NavBarERP />
      <div className="d-flex">
        <SideBarERP />
        <div className="flex-grow-1 p-3">
          <Outlet />
        </div>
      </div>
    </>
  );
}
