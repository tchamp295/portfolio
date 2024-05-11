import { FiCheckCircle, FiLogIn } from "react-icons/fi";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
        <h2 className="mb-6 text-center text-lg md:text-3xl font-bold text-gray-800  flex items-center justify-center gap-2">
          <FiCheckCircle className="text-indigo-600 text-4xl" /> Sign In
        </h2>
        <form>
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
              Password
            </span>
            <input
              type="password"
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

export default LoginPage;
