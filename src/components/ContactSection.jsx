"use client";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { InlineWidget } from "react-calendly";
import { FiCalendar, FiCheckCircle } from "react-icons/fi";
const ContactSection = () => {
  const [showCalendly, setShowCalendly] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log("name: ", name);
    // console.log("Email: ", email);
    // console.log("Message: ", message);

    try {
      const res = await fetch("api/contact", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (res.ok) {
        setName("");
        setEmail("");
        setMessage("");
        toast.success("Message sent successfully!");
      } else {
        toast.error("failed to send message !");
      }
    } catch (error) {
      toast.error("An error occurred while sending the message.");
    }
  };
  const handleScheduleMeeting = () => {
    setShowCalendly(true); // Set the state to true to show Calendly
  };
  const handleCloseCalendly = () => {
    setShowCalendly(false); // Set the state to false to hide Calendly
  };

  return (
    <div className="w-full  max-w-3xl mx-auto px-3 py-7  mb-9">
      <div className=" my-7">
        <h2 className="text-lg md:text-3xl font-bold text-gray-600 mb-4">
          Get in Touch!
        </h2>
        <p className="text-base md:text-lg text-gray-600 mb-6">
          Have a project in mind or just want to chat? Drop me a message below.
        </p>
      </div>
      <div className="my-7 grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <div className="">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <span className="block  font-medium text-base md:text-lg text-gray-600">
                Name
              </span>
              <input
                value={name}
                type="name"
                id="name"
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-base"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <span className="block  font-medium text-base md:text-lg text-gray-600">
                Email
              </span>
              <input
                value={email}
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-base"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <span className="block  font-medium text-base md:text-lg text-gray-600">
                Subject
              </span>
              <textarea
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-base"
                name="message"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                placeholder="Message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="flex flex-col">
          <div className="pl-6 mb-3 text-base md:text-lg text-gray-600">
            <div className="flex items-center mb-2">
              <FiCheckCircle className="text-indigo-600 mr-2" />
              <span>3+ Years of experience</span>
            </div>
            <div className="flex items-center mb-2">
              <FiCheckCircle className="text-indigo-600 mr-2" />
              <span>Professional Web Development</span>
            </div>
            <div className="flex items-center mb-2">
              <FiCheckCircle className="text-indigo-600 mr-2" />
              <span>UI/UX Design</span>
            </div>{" "}
            <div className="flex items-center mb-2">
              <FiCheckCircle className="text-indigo-600 mr-2" />
              <span>API Development</span>
            </div>
            <div className="flex items-center mb-2">
              <FiCheckCircle className="text-indigo-600 mr-2" />
              <span>Payment Integration</span>
            </div>
            <div className="flex items-center mb-2">
              <FiCheckCircle className="text-indigo-600 mr-2" />
              <span>Consultation</span>
            </div>
          </div>
          <p className="text-base md:text-lg text-gray-600 mb-6">
            Let&apos;s discuss your ideas in detail. Schedule a meeting at your
            convenience.
          </p>
          <button
            onClick={handleScheduleMeeting}
            className=" w-full md:w-2/3 animate-pulse bg-transparent border border-indigo-600 text-indigo-600 font-bold py-2 px-4 rounded-md flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105"
          >
            <FiCalendar className="mr-2" />
            Schedule Now
          </button>
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
              className="absolute top-4 right-4 z-[10002] text-white text-lg bg-indigo-500 rounded-full p-2 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 19a9 9 0 100-18 9 9 0 000 18zm0-2a7 7 0 110-14 7 7 0 010 14zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm0 4a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                  clipRule="evenodd"
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
