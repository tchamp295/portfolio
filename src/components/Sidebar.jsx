import { FiLinkedin } from "react-icons/fi";
import SocialLink from "./SocialLinks";
import { SiGithub, SiUpwork } from "react-icons/si";
import Link from "next/link";
import NavLink from "./NavLink";
const navLinks = [
  {
    title: "home",
    path: "#home",
  },
  {
    title: "about",
    path: "#about",
  },
  {
    title: "work",
    path: "#work",
  },
  {
    title: "contact",
    path: "#contact",
  },
];
const Sidebar = () => {
  return (
    <div className=" fixed inset-y-0  py-10 px-5">
      <div className="flex flex-col gap-4 h-screen">
        <Link href={"/"} className="text-white text-2xl font-bold">
          Victor Ndemo
        </Link>
        <ul className="flex flex-col gap-4 ">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink href={link.path} title={link.title} />
            </li>
          ))}
        </ul>
        <div className="flex gap-4 items-center mt-auto">
          <SocialLink href="#" icon={<FiLinkedin />} className="text-white" />
          <SocialLink href="#" icon={<SiGithub />} className="text-white" />
          <SocialLink href="#" icon={<SiUpwork />} className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
