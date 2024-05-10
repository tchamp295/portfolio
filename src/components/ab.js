"use client";
import React, { useRef, useState, useTransition } from "react";
import TabButton from "./TabButton";
import TabContent from "./TabContent";
import { FaNode, FaReact } from "react-icons/fa";
import { SiMongodb, SiExpress, SiRedux, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import SkillCard from "./SkillCard";
import { motion, useInView } from "framer-motion";

import { IoMdArrowDropright } from "react-icons/io";
import Link from "next/link";

const DATA = [
  {
    category: "Languages",
    items: [
      {
        name: "Typescript",
        img: <SiTypescript />,
        proficiency: 85,
      },
      {
        name: "Node.js",
        img: <FaNode />,
      },
      {
        name: "React.js",
        img: <FaReact />,
      },
      {
        name: "MongoDB",
        img: <SiMongodb />,
      },
      {
        name: "Express.js",
        img: <SiExpress />,
      },
      {
        name: "Redux",
        img: <SiRedux />,
      },
      {
        name: "Next.js",
        img: <TbBrandNextjs />,
      },
    ],
  },
  {
    category: "Libraries and Frameworks",
    items: [
      { name: "React.js", img: <FaReact />, proficiency: 95 },
      { name: "Node.js", img: <FaNode />, proficiency: 90 },
      { name: "Express.js", img: <SiExpress />, proficiency: 85 },
      // Add more libraries and frameworks as needed
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Redux", img: <SiRedux />, proficiency: 80 },
      { name: "Next.js", img: <TbBrandNextjs />, proficiency: 85 },
      // Add more tools as needed
    ],
  },
  {
    category: "Platforms",
    items: [
      // Add platforms as needed
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MongoDB", img: <SiMongodb />, proficiency: 85 },
      // Add more databases as needed
    ],
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [tab, setTab] = useState("Languages");
  const [isPending, startTransition] = useTransition();
  if (isPending) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div
          className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  const handleTabChange = (category) => {
    startTransition(() => {
      setTab(category);
    });
  };

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <div  className="pt-[10vh] w-full min-h-screen max-w-3xl mx-auto px-3">
      <div className="flex justify-between items-center my-7">
        <h2 className="font-bold text-[16px] font-textt">
          MERN Stack Proficiency
        </h2>
        <div>
          <Link href={"#"} className="flex gap-2 items-center text-xs">
            <IoMdArrowDropright className="animate-pulse h-5 w-5" />
          </Link>
        </div>
      </div>
      <div className="flex flex-row gap-5 justify-start mt-8">
        {DATA.map((category, index) => (
          <TabButton
            key={index}
            selectTab={() => handleTabChange(category.category)}
          >
            {category.category}
          </TabButton>
        ))}
      </div>
      <div ref={ref} className="flex flex-wrap gap-2 items-center justify-center">
        {DATA.find((data) => data.category === tab)?.items.map(
          (item, index) => (
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
                proficiency={item.proficiency}
              />
            </motion.div>
          )
        )}
      </div>
    </div>
  );
};

export default About;
