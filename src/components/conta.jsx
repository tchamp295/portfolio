"use client";

import React, { useState } from "react";
import SocialLink from "./SocialLinks";
import { SiGithub, SiLinktree, SiUpwork } from "react-icons/si";
import { AiOutlineTwitter } from "react-icons/ai";
import { FiLinkedin } from "react-icons/fi";
import Image from "next/image";
import Calendly from "@/utils/Calendly";

const ContactSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options);

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      const resData = await response.json();
      console.log(resData);

      if (response.status === 200) {
        console.log("Message sent.");
        setEmailSubmitted(true);
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };
  return (
    <div className="pt-[10vh] w-full min-h-screen max-w-3xl mx-auto px-3">
      <div className=" my-7 grid grid-cols-2 gap-8">
        <div className="flex flex-col justify-between  ">
          <h5 className="text-3xl font-boldtext-white mb-4">Say hi!</h5>
         
          <p className=" text-lg mb-6">
            Ready to collaborate on something amazing? Got any questions or
            ideas? Feel free to shoot me an email or connect with me through my
            social channels. I'd love to hear from you!
          </p>
          <Calendly/>

          <div className="flex flex-col gap-4">
            <button  className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold py-2 px-4  rounded">
              Schedule a Meeting
            </button>
          </div>
        </div>
        <div className=" ">
          <form>
            <div className="mb-4">
              <span className="block text-sm font-medium text-gray-700">
                Name
              </span>
              <input
                type="name"
                id="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <span className="block text-sm font-medium text-gray-700">
                Email
              </span>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
               <span className="block text-sm font-medium text-gray-700">
               Subject
              </span>
              <textarea
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                name="message"
                id="message"
                rows={5}
                placeholder="message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold py-2 px-4   rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
