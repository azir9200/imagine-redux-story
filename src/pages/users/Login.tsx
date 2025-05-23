import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { setEmail, setPassword } from "../../redux/features/loginSlice";
import { useLoginMutation } from "../../redux/api/authApi/authApi";
import toast from "react-hot-toast";
import { setUser } from "../../redux/features/userSlice";
import { verifyToken } from "../../redux/utils";

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const { name, email, password } = useAppSelector(
    (state: RootState) => state.login
  );

  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const result = await login({ name, email, password }).unwrap();

      const user = verifyToken(result.data.accessToken);

      dispatch(setUser({ user: user, token: result.data.accessToken }));

      if (result.success && result.data?.accessToken) {
        toast.success("Login successful!");
        navigate("/");
      } else {
        toast.error("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Login Error:", error);
      toast.error("An error occurred while logging in.");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-300 p-4">
      <div className="bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 shadow-2xl rounded-lg overflow-hidden w-full max-w-5xl grid grid-cols-1 md:grid-cols-2">
        {/* Image Section */}
        <div className="hidden md:block">
          <img
            src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg"
            alt="Login"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="p-8 mt-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Welcome Back
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => dispatch(setEmail(e.target.value))}
                required
                placeholder="Enter your email"
                defaultValue="user@gmail.com"
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              />
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => dispatch(setPassword(e.target.value))}
                placeholder="Enter your password"
                defaultValue="123456"
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-indigo-600  text-white py-3 font-semibold text-2xl  hover:text-purple-700 rounded-full shadow-lg hover:bg-white hover:shadow-purple-500/30 transition-all duration-300"
              >
                Login
              </button>
            </div>
          </form>

          {/* Bottom Link */}
          <p className="text-center text-xl text-gray-600 mt-6">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-indigo-700 hover:underline hover:text-red-700 font-medium text-2xl"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
