"use client"
import React, { useState } from 'react';
import NavMobile from '@/components/NavMobile';
import Navbar from "@/components/Nav";


const Navigation = () => {
  const [showNav, setShowNav] = useState(false);

  const showNavHandler = () => {
    setShowNav(true);
  };

  const closeNavHandler = () => {
    setShowNav(false);
  };

  return (
    <>
      <NavMobile showNav={showNav} closeNav={closeNavHandler} />
      <Navbar openNav={showNavHandler} />
    </>
  );
};

export default Navigation;
