"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";

import { motion, useInView } from "framer-motion";
import Link from "next/link";

import { IoMdArrowDropright } from "react-icons/io";
import {projectsData} from "@/utils/data"
const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <div className="  w-full max-w-3xl mx-auto px-3 py-7 my-9   ">
      <div className=" flex  justify-between items-center mb-7">
        <h1 className=" text-lg md:text-3xl font-bold text-gray-600 ">
          Featured Projects
        </h1>
        <div className="">
          <Link
            href="#"
            className="flex items-center text-sm text-gray-600 hover:text-indigo-600 transition duration-300"
          >
            Explore More
            <IoMdArrowDropright className="h-5 w-5 ml-1" />
          </Link>
        </div>
      </div>

      <ul ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
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
             stacks={project.stacks}
            />
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsSection;
