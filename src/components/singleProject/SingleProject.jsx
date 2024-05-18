import {projectsData} from "@/utils/data"
import { FaAngleRight, FaCode, FaGithub } from "react-icons/fa";

const SingleProject = () => {
  return (
    <div className="w-full  max-w-3xl mx-auto px-3 py-7  mb-9">
      <div className=" grid grid-cols-1 md:grid-cols-2 my-7  gap-8 md:gap-10">
        <div className="">
          <h2 className="text-lg md:text-xl font-bold text-gray-600 mb-4">
            Full Stack E-commerce Application
          </h2>
          <div className="">
                      <h1 className="mb-5 text-lg italic font-semibold text-slate-400">Featured Technologies</h1>
                    <div className="flex items-center gap-2 my-3">
          <FaCode className="text-indigo-500 mr-1" /> 
          <div className="text-slate-400 font-textt font-semibold text-base">{projectsData.project.stacks.join(", ")}</div>
        </div>
        
          </div>
        </div>

        <div className="">
          <div
            className=" h-36  w-full h  md:h-56 rounded-t-xl relative group"
            style={{
              background: `url("/images/projects/3.png")`,
              backgroundSize: "cover",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
