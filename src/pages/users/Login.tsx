import { Link } from "react-router-dom";
import React from "react";

const Login: React.FC = () => {
  const handleSubmit = ({ email, password }) => {
    console.log("user", email, password);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-700 to-red-600 ">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-center  text-green-700">
          Login
        </h2>
        <form className="my-8 space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm text-gray-700 font-medium mb-2"
            >
              User Email
            </label>
            <input
              type="text"
              id="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-md"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-700 text-white p-3 rounded-lg hover:bg-green-800 transition-colors"
          >
            Login
          </button>
          <div>
            <p>
              Need to Register, Click{" "}
              <span>
                <Link
                  to="/register"
                  className="w-full bg-green-300 text-white  px-3 rounded-lg hover:bg-green-800 transition-colors"
                >
                  Register
                </Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
