import React from "react";

import Link from "next/link";
import { AiOutlineEye } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, stacks }) => {
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
        <h2 className="text-[16px] font-semibold">{title}</h2>
        <p className="text-[#ADB7BE] text-sm">{description}</p>
        <span>{ stacks}</span>
      </div>
      <div className="flex gap-6">
        <Link className="px-3 py-1 border-2 rounded-lg" href="#">
          <AiOutlineEye className="inline-block mr-1" />
          Live
        </Link>
        <Link className="p-1 border-2 rounded-lg" href={gitUrl}>
          <FaGithub className="inline-block mr-1" />
          GitHub
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
