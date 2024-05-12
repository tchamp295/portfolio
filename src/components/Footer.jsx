import React from "react";
import SocialLink from "./SocialLinks";
import { SiGithub, SiLinktree, SiUpwork } from "react-icons/si";
import { FiLinkedin } from "react-icons/fi";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-700 py-4">
      <div className="max-w-3xl mx-auto flex justify-between items-center px-6">
        <div className="flex  items-center space-x-6 ">
           <div className="bg-gray-200 text-white  rounded-full ">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current text-indigo-600"
              >
                <path d="M0 0h40v40H0z" fill="none" />
                <text
                  x="5"
                  y="28"
                  fontSize="18"
                  fontFamily="Arial"
                  fontWeight="bold"
                >
                  VN
                </text>
              </svg>
            </div>
          <p className="text-slate-400 text-lg">&copy; 2024 </p>
        </div>
        <div className="flex gap-4">
          <SocialLink href="#" icon={<FiLinkedin />} className="text-blue-500" />
          <SocialLink href="#" icon={<SiGithub />} className="text-slate-400" />
          <SocialLink href="#" icon={<SiUpwork />} className="text-green-500" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
