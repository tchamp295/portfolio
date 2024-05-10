"use client";
import Link from "next/link";
import NavLink from "./NavLink";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import MenuOverlay from "./MenuOverlay";
import { motion } from "framer-motion";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};
const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="fixed w-full z-[1000] bg-gray-800">
        <div className=" max-w-5xl mx-auto flex justify-between items-center h-[60px] p-3">
          <Link
            href={"/"}
            className="text-2xl md:text-2xl text-white font-semibold flex items-center"
          >
            <div className="bg-gradient-to-r from-orange-500 to-teal-500 text-white p-3 rounded-full mr-3">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </div>
            <div className="font-logo text-2xl text-white ">
              <span className="   uppercase font-bold text-orange-500 hover:text-purple-500 transition duration-300">
                t
              </span>
              champ
            </div>
          </Link>

          <div className="mobile-menu block md:hidden">
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className=" px-3 py-2 border rounded border-orange-200 text-slate-200 hover:text-white hover:border-white"
              >
                <RxHamburgerMenu className="h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className=" px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                <IoClose className="h-5 w-5" />
              </button>
            )}
          </div>
          <div className="menu  hidden md:block " id="navbar">
            <ul className="flex gap-8">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </>
  );
}
