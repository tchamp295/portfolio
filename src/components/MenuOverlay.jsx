import React from "react";
import NavLink from "./NavLink";
import SocialLinks from "./SocialLinks";


const MenuOverlay = ({ links }) => {
  return (
    <div className="flex flex-col items-center bg-white space-y-4 py-20 top-16 absolute z-50 shadow-lg w-3/4">
      <SocialLinks />
      <h1>hello</h1>
    <ul className="flex flex-col  text-red-600  ">
      {links.map((link, index) => {
        return (
          <li key={index} className="transform transition duration-300 ease-in-out hover:scale-105">
            <NavLink href={link.path} title={link.title} className="text-lg font-semibold hover:text-yellow-300" />
          </li>
        );
      })}
    </ul>
    </div>
  );
};

export default MenuOverlay;
