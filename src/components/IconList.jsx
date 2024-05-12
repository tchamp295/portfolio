import React from "react";
import { FaNode, FaReact } from "react-icons/fa";
import { SiMongodb, SiExpress, SiRedux, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
const icons = [
  { name: "React", icon: <FaReact />, color: "#61DAFB" }, // Specify color for React icon
  { name: "Next.js", icon: <TbBrandNextjs />, color: "#000000" }, // Specify color for Next.js icon
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" }, // Specify color for TypeScript icon
  { name: "MongoDB", icon: <SiMongodb />, color: "#13AA52" }, // Specify color for MongoDB icon
];
const IconList = () => {
  return (
    <div className="flex space-x-8">
      {icons.map((item, index) => (
        <div key={index} className="flex space-x-2 items-center">
          {React.cloneElement(item.icon, { color: item.color })}
          {/* Pass color to icon */}
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default IconList;
