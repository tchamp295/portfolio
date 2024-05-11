import React from "react";
import SocialLink from "./SocialLinks";
import { SiGithub, SiLinktree, SiUpwork } from "react-icons/si";
import { FiLinkedin } from "react-icons/fi";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-4">
      <div className="max-w-3xl mx-auto flex justify-between items-center px-6">
        <div className="flex items-center">
          <Image
            src="/icons8-v-48-removebg-preview.png"
            alt="Logo"
            height={25}
            width={25}
            className="mr-2"
          />
          <p className="text-gray-600 text-sm">&copy; 2024 Victor Ndemo</p>
        </div>
        <div className="flex gap-4">
          <SocialLink href="#" icon={<FiLinkedin />} className="text-blue-500" />
          <SocialLink href="#" icon={<SiGithub />} className="text-gray-700" />
          <SocialLink href="#" icon={<SiUpwork />} className="text-green-500" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
