"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiCheckCircle, FiLogIn } from "react-icons/fi";
import { toast } from "react-hot-toast";

const RegistrationForm = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  //   console.log(name);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      // setError("Please ensure  all  fields re filled !");
     
      toast.error("Please ensure  all  fields re filled !");
      return;
    }
    try {
      const resUserExists = await fetch("/api/userExists", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });
      const { user } = await resUserExists.json();
      if (user) {
        // setError("user already exists !");
        toast.error("user already exists !");
        return;
      }
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      if (res.ok) {
        const form = e.target;
        toast.success("user registered successfully !");
        form.reset();
        router.push("/login");
      } else {
        // console.log("user registration failed !");
        toast.error("user registration failed !");
      }
    } catch (error) {
      // console.log("error occurred during registration ", error);
      // setError("An error occurred during registration.");
      toast.error("An error occurred during registration !");
    }
  };
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
        <h2 className="mb-6 text-center text-lg md:text-3xl font-bold text-gray-800  flex items-center justify-center gap-2">
          <FiCheckCircle className="text-indigo-600 text-4xl" /> Sign Up
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <span className="block text-sm font-medium text-gray-700">
              Name
            </span>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <span className="block text-sm font-medium text-gray-700">
              Email
            </span>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <span className="block text-sm font-medium text-gray-700">
              Password
            </span>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your password"
            />
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
  );
};

export default RegistrationForm;
