import React from "react";
import SocialLink from "./SocialLinks";
import { SiGithub, SiLinktree, SiUpwork } from "react-icons/si";
import { FiLinkedin } from "react-icons/fi";

import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-700 py-6">
      <div className="max-w-3xl mx-auto px-3 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="bg-gray-200 rounded-full p-2">
            <span className="text-lg font-bold text-indigo-600">VN</span>
          </div>
          <p className="text-gray-400 text-sm">&copy; 2024 victorn</p>
        </div>
        <div className="flex items-center space-x-4">
          <SocialLink
            href="#"
            icon={<FaWhatsapp />}
            className="text-green-500"
          />
          <SocialLink
            href="https://www.linkedin.com/in/victor-ndemo/"
            icon={<FiLinkedin />}
            className="text-slate-500"
          />
          <SocialLink href="https://github.com/tchamp295/" icon={<SiGithub />} className="text-slate-500" />
          <SocialLink href="#" icon={<SiUpwork />} className="text-green-500" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
