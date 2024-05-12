"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";

import { motion, useInView } from "framer-motion";
import Link from "next/link";

import { IoMdArrowDropright } from "react-icons/io";
const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "TCMP is a platform that provides remote healthcare services. My team and I re-designed TCMP website and dashboard, we implemented new UI and features. We optimized the code and API to ensure an amazing user experience.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Potography Portfolio Website",
    description: "Website for The Saints Gathering Church with exciting features like downloadable sermons and devotionals. ",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Project 4 description",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];
const ProjectsSection = () => {
 
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });


 
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <div  className="  w-full max-w-3xl mx-auto px-3 py-7 my-9   ">
      <div className=" flex  justify-between items-center mb-7">
        <h1 className=" text-lg md:text-3xl font-bold text-gray-600 ">
               Featured Projects
        </h1>
        <div className="">

      
          <Link href="#" className="flex items-center text-sm text-gray-600 hover:text-indigo-600 transition duration-300">
              Explore More<IoMdArrowDropright className="h-5 w-5 ml-1" />
          </Link>
        </div>
      </div>
      
      <ul ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-12">
        { projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsSection;
