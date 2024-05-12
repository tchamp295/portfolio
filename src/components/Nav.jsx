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
    title: "about",
    path: "/about",
  },
  {
    title: "work",
    path: "/work",
  },
  {
    title: "blog",
    path: "/blog",
  },
  {
    title: "contact",
    path: "/contact",
  },
];

const Navbar = ({ openNav }) => {
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

  const stickyStyle = navSticky ? "bg-[#ffffff]  shadow-sm " : "#ffffff";
  return (
    <div
      className={` fixed font-text top-0 w-full  ${stickyStyle} transition-all font-text duration-300  z-[10002]  `}
    >
      <div className=" flex items-center h-[10vh] justify-between max-w-3xl  mx-auto p-3">
        <div className=" flex items-center gap-4  ">
          <Link
            href="/"
            className="flex items-center bg-gray-200 rounded-full "
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current text-indigo-600"
            >
              <path d="M0 0h40v40H0z" fill="none" />
              <text
                x="5"
                y="28"
                fontSize="18"
                fontFamily="Arial"
                fontWeight="bold"
              >
                VN
              </text>
            </svg>
          </Link>
          <ul className="hidden md:flex gap-4 items-center">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>

          <Link
            className="hidden text-base md:text-lg text-gray-600 md:block"
            href={"/login"}
          >
            signIn
          </Link>
        </div>
        <div className=" flex gap-4 items-center">
          <div className="hidden md:flex gap-4">
            <SocialLink
              href="#"
              icon={<FiLinkedin />}
              className="text-blue-600"
            />
            <SocialLink
              href="#"
              icon={<SiGithub />}
              className="text-gray-600"
            />
            <SocialLink
              href="#"
              icon={<SiUpwork />}
              className="text-green-600"
            />
          </div>
          <RxHamburgerMenu
            onClick={openNav}
            className="h-10 w-10 md:hidden rotate-180"
          />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
