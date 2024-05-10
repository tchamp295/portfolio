"use client";
import React, { useState } from "react";
import Calendly from "@/utils/Calendly";
import { InlineWidget } from "react-calendly";

const ContactSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);

  const handleScheduleMeeting = () => {
    setShowCalendly(true); // Set the state to true to show Calendly
  };
  const handleCloseCalendly = () => {
    setShowCalendly(false); // Set the state to false to hide Calendly
  };

  return (
    <div className="pt-[10vh] w-full min-h-screen max-w-3xl mx-auto px-3">
      <div className="my-7 grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <div className="flex flex-col -center">
          <div className="flex flex-col">
            <p className="text-lg text-gray-600 mb-6">
             Let&apos;s discuss your ideas in detail. Schedule a meeting at your
              convenience.
            </p>
            <button
              onClick={handleScheduleMeeting}
              className="w-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold py-1.5 px-6 rounded-md "
            >
              Schedule Now
            </button>
          </div>
          {/* "or" text between the two sections */}
          <div className="flex items-center justify-center text-gray-600 my-4">
            <span className="mx-2 text-lg">or</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Say Hi!</h2>
          <p className="text-lg text-gray-600 mb-6">
            Ready to collaborate on something amazing? Got any questions or
            ideas? Feel free to shoot me an email or connect with me through my
            social channels. I&apos;d love to hear from you!
          </p>
        </div>

        <div className="">
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
                placeholder="Message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>

      {showCalendly && (
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden flex items-center justify-center z-[10001] bg-black bg-opacity-50">
          {/* Apply custom styles directly to the InlineWidget */}

          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              //   overflow: "hidden",
            }}
          >
            <button
              onClick={handleCloseCalendly}
              className=" left-32 top-80 absolute z-[10002]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white hover:text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <InlineWidget
              url="https://calendly.com/speedsys530/30min"
              styles={{ width: "100%", height: "100%", position: "relative" }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactSection;
