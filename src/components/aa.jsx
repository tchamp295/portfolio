import React from "react";
import { motion } from "framer-motion";
const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? " text-gray-600"
    : "text-[#ADB7BE]";
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 uppercase font-semibold  hove r:text-slate-500 ${buttonClasses}`} >
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        
        className="h-0.5 bg-orange-500 mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;
