import Link from "next/link";
import { RiCloseFill } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import Image from "next/image";
import { SiGithub, SiUpwork } from "react-icons/si";
import SocialLink from "./SocialLinks";
import { FiLinkedin } from "react-icons/fi";
const NavMobile = ({ closeNav, showNav }) => {
  const NavOpenStyles = showNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div className="font-text">
      <div
        className={`fixed  top-0 transform ${NavOpenStyles} transition-all duration-500 z-[10000] left-0 right-0 bottom-0 bg-black opacity-70 w-[100vw] h-[100vh] `}
      ></div>

      <ul
        className={`text-white fixed  ${NavOpenStyles} flex px-5 py-20 flex-col    h-[100%] transform transition-all duration-300 delay-300 w-[80%] bg-gray-700 space-y-10 z-[10006] `}
      >
        <div className="font-bold text-3xl text-orange-500 flex items-center border-b border-gray-600 py-4">
          <Link href={"/"} className="flex items-center cursor-pointer">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-3 rounded-full mr-3">
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
            <div>
              <span className=" text-slate-500 uppercase font-extrabold hover:text-purple-500 transition duration-300">
                victor
              </span>
              <p className=" italic text-[10px] text-slate-300 -mt-3  ml">
                Ndemo
              </p>
            </div>
          </Link>
        </div>

        <li className="ml-5 ">
          <Link
            href={"/"}
            className=" text-slate-300 cursor-pointer hover:text-blue-500"
          >
            Home
          </Link>
        </li>
        <li className="ml-5  ">
          <Link
            href={"#"}
            className=" text-slate-300 hover:text-blue-500 cursor-pointer "
          >
           about
          </Link>
        </li>
        <li className="ml-5 ">
          <Link
            href={"/work"}
            className=" text-slate-300 cursor-pointer hover:text-blue-500"
          >
          work
          </Link>
        </li>
        <li className="ml-5 ">
          <Link
            href={"/contact"}
            className=" text-slate-300 cursor-pointer hover:text-blue-500 "
          >
            {" "}
          contact
          </Link>
        </li>

        <div className="border-b p-3 border-gray-600">
          <div className="flex gap-5 items-center ">
            <Link
              className="text-white bg-blue-500 rounded-md py-1 px-6 cursor-pointer"
              href="/login"
            >
              Login
            </Link>
            <Link
              className="text-white bg-blue-500 rounded-md py-1 px-6 cursor-pointer"
              href="/register"
            >
              Sign up
            </Link>
          </div>
        </div>
        <div className="flex mt-4 justify-center space-x-4">
          <SocialLink
            href="#"
            icon={<FiLinkedin />}
            className="text-blue-500"
          />
          <SocialLink href="#" icon={<SiGithub />} className="text-gray-700" />
          <SocialLink href="#" icon={<SiUpwork />} className="text-green-500" />
        </div>
        <RiCloseFill
          onClick={closeNav}
          className="absolute top-[-1.3rem] right-[1.4rem] w-[2.3rem] h-[2.3rem] text-slate-300"
        />
      </ul>
    </div>
  );
};

export default NavMobile;
