import React from "react";
import { SlEye } from "react-icons/sl";
import { HiCodeBracket } from "react-icons/hi2";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="flex flex-row md:flex-col justify-between gap-4 w-full">
      <div
        className="flex-none h-36  w-36 md:w-full md:h-42 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center gap-5 absolute top-0 left-0 w-full h-full rounded-lg bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href={gitUrl}
            className="text-blue-500 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
github          </Link>
          <Link
            href={previewUrl}
            className="text-red-500 relative  border-[#ADB7BE] hover:border-white group/link"
          >
preview          </Link>
        </div>
      </div>
      <div className="flex-auto rounded-b-xl mt-1 py-3">
        <h2 className="text-[16px] font-semibold">{title}</h2>
        <p className="text-[#ADB7BE] text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
