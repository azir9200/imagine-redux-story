import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { setEmail, setPassword } from "../../redux/features/loginSlice";
import { useLoginMutation } from "../../redux/api/authApi/authApi";
import toast from "react-hot-toast";
import { jwtDecode } from "jwt-decode";
const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const { email, password } = useAppSelector((state: RootState) => state.login);

  // const { token } = useAppSelector((state: RootState) => state.user);

  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await login({ email, password }).unwrap();
      const accessToken = response?.data?.accessToken;

      if (accessToken) {
        const user = jwtDecode(accessToken); // Decoded user data
        console.log("Decoded User Data:", user);
        toast.success("You are logged in successfully!");
        navigate("/");
      } else {
        toast.error("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Login Error:", error);
      toast.error("An error occurred while logging in.");
    }
    // toast.success(
    //   <div className="justify-center items-center text-white text-3xl p-22  bg-gradient-to-r from-sky-700 to-yellow-600">
    //     {" "}
    //     You are login successfully!{" "}
    //   </div>
    // );
    // console.log("data", data?.message);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-700 to-red-600 ">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-center  text-green-700">
          Login
        </h2>
        <form className="my-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => dispatch(setEmail(e.target.value))}
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
              value={password}
              onChange={(e) => dispatch(setPassword(e.target.value))}
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
                  className="w-full bg-green-300 text-white  px-3 py-4 rounded-lg hover:bg-green-800 transition-colors"
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
