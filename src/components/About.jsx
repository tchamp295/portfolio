"use client";
import React, { useRef, useState, useTransition } from "react";

import { FaNode, FaReact } from "react-icons/fa";
import { SiMongodb, SiExpress, SiRedux, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import SkillCard from "./SkillCard";
import { color, motion, useInView } from "framer-motion";

import { IoMdArrowDropright } from "react-icons/io";
import Link from "next/link";

const DATA = [
  {
    name: "Typescript",
    img: <SiTypescript />,
    iconColor: "#007ACC", // Example color for TypeScript
  },
  {
    name: "Node.js",
    img: <FaNode />,
    iconColor: "#8CC84B", // Example color for Node.js
  },
  {
    name: "React.js",
    img: <FaReact />,
    iconColor: "#61DAFB", // Example color for React.js
  },
  {
    name: "MongoDB",
    img: <SiMongodb />,
    iconColor: "#4DB33D", // Example color for MongoDB
  },
  {
    name: "Express.js",
    img: <SiExpress />,
    iconColor: "#000000", // Example color for Express.js
  },
  {
    name: "Redux",
    img: <SiRedux />,
    iconColor: "#764ABC", // Example color for Redux
  },
  {
    name: "Next.js",
    img: <TbBrandNextjs />,
    iconColor: "#000000", // Example color for Next.js
  },
];
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <div className=" w-full  max-w-3xl mx-auto px-3 py-7 ">
      <div className="flex justify-between items-center mb-7">
        <h2 className="text-lg md:text-3xl font-bold text-gray-600 ">
          Skills & Expertise
        </h2>
        {/* <div>
          <Link href={"#"} className="flex gap-2 items-center text-xs">
            <IoMdArrowDropright className="animate-pulse h-5 w-5" />
          </Link>
        </div> */}
      </div>

      <div
        ref={ref}
        className="flex flex-wrap gap-20 items-center  "
      >
        {DATA.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <SkillCard name={item.name} icon={item.img} iconColor={item.iconColor}/>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
