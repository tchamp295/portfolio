"use client";
import { useEffect, useState } from "react";
import NavLink from "./NavLink";
import { motion } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { SiGithub, SiLinktree, SiUpwork } from "react-icons/si";
import { AiOutlineTwitter } from "react-icons/ai";
import { FiLinkedin } from "react-icons/fi";

import Link from "next/link";
import SocialLink from "./SocialLinks";
const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};
const navLinks = [
  {
    title: "home",
    path: "/",
  },
  {
    title: "about",
    path: "/about",
  },
  {
    title: "work",
    path: "/work",
  },
  {
    title: "contact",
    path: "/contact",
  },
];

const Navbar = ({ openNavbar }) => {
  const [activeItem, setActiveItem] = useState("Home");
  const [cartQuantity, setCartQuantity] = useState(10);
  const [navSticky, setNavSticky] = useState(false);
  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavSticky(true);
      } else {
        setNavSticky(false);
      }
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const stickyStyle = navSticky
    ? "bg-[#ffffff]  shadow-sm "
    : "#ffffff";
  return (
    <div
      className={` fixed font-text top-0 w-full  ${stickyStyle} transition-all font-text duration-300  z-[1006]  `}
    >
      <div className=" flex items-center h-[10vh] justify-between max-w-3xl  mx-auto p-3">
        <div className=" flex items-center gap-4 ">
          <Link href={"/"} className="">
            VN
          </Link>
          <ul className="hidden md:flex gap-4 items-center">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        
            <Link className="hidden md:block" href={"/login"}>
              sign in
            </Link>
         
        </div>
        <div className=" flex gap-4 items-center">
          <SocialLink href="#" icon={<FiLinkedin />} className=" text-red-500" />
          <SocialLink href="#" icon={<SiGithub />} className=" " />
          <SocialLink href="#" icon={<SiUpwork />} className=" text-green-500" />
        <RxHamburgerMenu
          onClick={openNavbar}
          className=" h-10 w-10 md:hidden rotate-180"
        />
        </div>
      </div>
    </div>
  );
};
export default Navbar;