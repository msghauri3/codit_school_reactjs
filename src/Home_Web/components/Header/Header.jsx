// ============================================
// src/components/Header/Header.jsx
// ============================================
import React from 'react';
import Logo from './Logo';
import TopNavBar from './TopNavBar';
import MainNavBar from './MainNavBar';

const Header = () => {
  return (
    <header className="bg-white shadow-sm w-full">
<div className="flex w-full">
  <div className="flex-shrink-0"> {/* Logo only takes needed space */}
    <Logo />
  </div>
  <div className="flex-1 flex flex-col"> {/* Navigation takes remaining space */}
    <TopNavBar />
    <MainNavBar />
  </div>
</div>
    </header>
  );
};

export default Header;