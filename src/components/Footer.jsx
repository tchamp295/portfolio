import SocialLink from "./SocialLinks";
import { SiGithub, SiLinktree, SiUpwork } from "react-icons/si";

import { FiLinkedin } from "react-icons/fi";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className=" max-w-3xl mx-auto ">
      <div className=" p-3 flex justify-between ">
        <div className="flex gap-5 items-center">
          <Image className="text-red-500"  src={"/icons8-v-48-removebg-preview.png"} alt="logo" height={25} width={25}/>
        <p className="text-slate-600  ">© 2024 victor.</p>
        </div>
        <div className="flex gap-4 justify-center">
          <SocialLink href="#" icon={<FiLinkedin />} className=" text-blue-500  rounded-full" />
          <SocialLink href="#" icon={<SiGithub />} className=" " />
          <SocialLink href="#" icon={<SiUpwork />} className=" text-green-500 " />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
