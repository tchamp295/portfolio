"use client"

import NavMobile from '@/components/NavMobile';
import Navbar from "@/components/Nav";
import { useState } from 'react';


const Navigation = () => {

 
const [showNav, setShowNav] = useState(false);
  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);
  return (
    <>
      <NavMobile showNav={showNav} closeNav={closeNavHandler} />
      <Navbar openNav={showNavHandler} />
    </>
  );
};

export default Navigation;
