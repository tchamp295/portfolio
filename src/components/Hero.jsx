"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Download } from "react-feather";
import { IoMdContact, IoMdDownload } from "react-icons/io";

import TypeEffect from "./hepler/TypeWriter";
import Marquee from "react-fast-marquee";
import IconList from "./IconList";
const HeroSection = () => {
  return (
    <div className="px-3 pt-[10vh] flex justify-center items-center h-screen font-text ">
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{
          type: "spring",
          delay: 1.5,
          stiffness: 120,
          duration: 2.5,
        }}
        className="w-full max-w-3xl mx-auto "
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
            <h1 className="text-3xl font-bold ">Victor Ndemo</h1>
            <TypeEffect />
          </div>
        </div>

        <p className="text-[#ADB7BE] text-base sm:text-lg my-7 ">
          Hey, I'm Victor, a full-stack developer with around 2 years of
          hands-on coding. I love building cool stuff on the web! Whether it's
          crafting interactive interfaces or solving coding puzzles, I'm all in.
          Let's create something awesome together!
        </p>

        <div className="flex  items-center  gap-4 ">
          <motion.button
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            className="flex items-center  btn-primary"
          >
            Hire Me
            <ArrowUpRight className="text-white ml-2" />
          </motion.button>
          
            <motion.button
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
          >
            <Link
              href="/Victor_s_Resume.pdf"
              download="cv"
              className="flex items-center   btn-primary"
            >
              Download CV
              <IoMdDownload className="text-white ml-2" />
            </Link>
            </motion.button>
          
        </div>
        <div className=" my-7 ">
          <h1 className="mb-5">Technologies</h1>
          <Marquee
            className=""
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
