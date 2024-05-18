import React from "react";

import Link from "next/link";
import { AiOutlineEye } from "react-icons/ai";
import { FaAngleRight, FaCode, FaGithub } from "react-icons/fa";

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  stacks,
}) => {
  return (
    <div className="flex flex-col justify-between gap-4 w-full">
      <div
        className="flex-none h-36  w-full md:w-full md:h-42 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center gap-5 absolute top-0 left-0 w-full h-full rounded-lg bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href={gitUrl}
            className="text-blue-500 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            github{" "}
          </Link>
          <Link
            href={previewUrl}
            className="text-red-500 relative  border-[#ADB7BE] hover:border-white group/link"
          >
            preview{" "}
          </Link>
        </div>
      </div>
      <div className="flex-auto rounded-b-xl mt-1 py-3">
        <h2 className="text-base md:text-lg font-semibold">{title}</h2>
       <div className="flex items-center gap-2 my-3">
          <FaCode className="text-indigo-500 mr-1" /> 
          <div className="text-slate-400 font-textt font-semibold text-base">{stacks.join(", ")}</div>
        </div>
        
        <p className="text-[#ADB7BE] text-base md:text-lg line-clamp-2">{description}</p>
        <Link className="flex items-center mt-2 text-indigo-500 hover:text-indigo-700 transition-colors duration-300" href={"/work/1"}>
         Learn more... <FaAngleRight className="ml-1" />
        </Link>
      </div>
      
     
    </div>
  );
};

export default ProjectCard;
