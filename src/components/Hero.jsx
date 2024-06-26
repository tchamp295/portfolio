"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";


import TypeEffect from "./hepler/TypeWriter";
import Marquee from "react-fast-marquee";
import IconList from "./IconList";
import {
 
  IoDownloadOutline,
  IoMailOutline,
} from "react-icons/io5";
const HeroSection = () => {
  return (
    <div className="px-3 pt-[10vh] flex justify-center items-center   font-text  ">
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{
          type: "spring",
          delay: 1.5,
          stiffness: 120,
          duration: 2.5,
        }}
        className="w-full max-w-3xl mx-auto my-9  py-7  "
      >
        <div className="flex items-center  ">
          <Image
            src="/images/victor.jpeg"
            alt="hero image"
            className="rounded-full border-2 border-white"
            width={100}
            height={100}
          />
          <div className=" flex flex-col ml-4 ">
            <h1 className="text-lg md:text-3xl font-bold text-gray-600 ">
              Victor Ndemo
            </h1>
            <TypeEffect />
          </div>
        </div>

        <p className="text-base md:text-lg text-gray-600 my-7 ">
          Hey, I&apos;m Victor, a full-stack developer with around 2 years of
          hands-on coding. I love building cool stuff on the web! Whether
          it&apos;s crafting interactive interfaces or solving coding puzzles,
          I&apos;m all in. Let&apos;s create something awesome together!
        </p>

        <div className="flex  items-center  gap-4 w-full  md:w-2/4">
          <motion.button
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            className="flex   btn-primary w-full"
          >
            send message
            <IoMailOutline className="text-white  text-2xl" />
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            className="w-full "
          >
            <Link
              href="/Victor_s_Resume.pdf"
              download="cv"
              className="flex    btn-primary  "
            >
              Download CV
              <IoDownloadOutline className="text-white  text-2xl" />
            </Link>
          </motion.button>
        </div>
        <div className=" mt-7  ">
          <h1 className="mb-5 text-lg italic font-semibold text-slate-400">Featured Technologies</h1>
          <Marquee
            className=" "
            speed={50}
            direction="left"
            autoFill={true}
            gradient={true}
            gradientWidth="200px"
            gradientColor="rgb(248,251,253)"
            delay={10}
            pauseOnHover={true}
          >
            <IconList />
          </Marquee>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
