import React from 'react';
import Logo from './Logo';
import TopNavBar from './TopNavBar';
import MainNavBar from './MainNavBar';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto">
        <div className="flex">
          <Logo />
          <div className="w-3/4 flex flex-col">
            <TopNavBar />
            <MainNavBar />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;