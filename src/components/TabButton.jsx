import React from "react";
import { motion } from "framer-motion";
const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ selectTab, children }) => {

  return (
    <button onClick={selectTab}>
      {children}

      <motion.div variants={variants}></motion.div>
    </button>
  );
};

export default TabButton;
