"use client";
import React, { useRef } from "react";

import { FaNode, FaReact } from "react-icons/fa";
import { SiMongodb, SiExpress, SiRedux, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { LiaFigma } from "react-icons/lia";
import { BiLogoTailwindCss } from "react-icons/bi";
import SkillCard from "./SkillCard";
import { motion, useInView } from "framer-motion";
import { RiJavascriptFill } from "react-icons/ri";
import { IoLogoHtml5 } from "react-icons/io5";

const DATA = [
  {
    name: "Typescript",
    img: <SiTypescript />,
    iconColor: "#007ACC", // Example color for TypeScript
  },
  {
    name: "JavaScript",
    img: <RiJavascriptFill />,
    iconColor: "#F0DB4F", // Example color for JavaScript (updated to yellow)
  },
  {
    name: "Node Js",
    img: <FaNode />,
    iconColor: "#68A063", // Example color for Node.js (updated to green)
  },
  {
    name: "React Js",
    img: <FaReact />,
    iconColor: "#61DAFB", // Example color for React.js
  },
  {
    name: "HTML5",
    img: <IoLogoHtml5 />,
    iconColor: "#E34F26", // Example color for HTML5 (updated to orange)
  },
  {
    name: "Express Js",
    img: <SiExpress />,
    iconColor: "#000000", // Example color for Express.js (black)
  },
  {
    name: "Redux",
    img: <SiRedux />,
    iconColor: "#764ABC", // Example color for Redux
  },
  {
    name: "Next Js",
    img: <TbBrandNextjs />,
    iconColor: "#000000", // Example color for Next.js (black)
  },
  {
    name: "Tailwind",
    img: <BiLogoTailwindCss />,
    iconColor: "#06B6D4", // Example color for Tailwind CSS (updated to cyan)
  },
  {
    name: "MongoDB",
    img: <SiMongodb />,
    iconColor: "#4DB33D", // Example color for MongoDB
  },
  {
    name: "Figma",
    img: <LiaFigma />,
    iconColor: "#F24E1E", // Example color for Figma (updated to red)
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
    <div className=" w-full  max-w-3xl mx-auto px-3 py-7 my-9 ">
      <div className="flex flex-col  mb-7">
        <h2 className="text-lg md:text-3xl font-bold text-gray-600 mb-4 ">
          Skills & Expertise
        </h2>
        <p className="text-sm md:text-base text-gray-600 ">
          Here are some of my skills and expertise in various technologies.
        </p>
      </div>

      <div
        ref={ref}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-gray-300 pt-6 "
      >
        {DATA.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <SkillCard
              name={item.name}
              icon={item.img}
              iconColor={item.iconColor}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
