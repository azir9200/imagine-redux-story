import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import {
  setAddress,
  setEmail,
  setName,
  setPassword,
} from "../../redux/features/RegisterSlice";
import { useSignUpMutation } from "../../redux/api/authApi/authApi";
import toast from "react-hot-toast";

const Register: React.FC = () => {
  const dispatch = useAppDispatch();
  const { name, email, password, address } = useAppSelector(
    (state: RootState) => state.register
  );
  const [signUp] = useSignUpMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const register = await signUp({ name, email, password, address });
      console.log("user Register", register);
      toast.success("You are logged in successfully!");
      navigate("/login");
    } catch (error) {
      console.error("Login Error:", error);
      toast.error("An error occurred while logging in.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 p-4">
      <div className="bg-indigo-300 shadow-2xl rounded-lg overflow-hidden w-full max-w-5xl grid grid-cols-1 md:grid-cols-2">
        {/* Image Section */}
        <div className="hidden md:block">
          <img
            src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?t=st=1710081713~exp=1710085313~hmac=f637c194f1f143e63a84950cbf978997453777c872adf4aebbbecdaa445601a1&w=740"
            alt="Register page"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Form Section */}
        <div className="p-8 mt-10">
          <h1 className="text-center text-purple-600 font-bold text-4xl mb-5">
            Register <span className="text-indigo-700 font-semibold">Now</span>
          </h1>
          <form className="mb-8 space-y-6" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => dispatch(setName(e.target.value))}
                required
                placeholder="Enter Your Name"
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              />
            </div>
            {/* Email field*/}
            <div>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => dispatch(setEmail(e.target.value))}
                required
                placeholder="Enter your Email"
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              />
            </div>
            {/* Address field*/}
            <div>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => dispatch(setAddress(e.target.value))}
                required
                placeholder="Enter your Address"
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              />
            </div>
            {/* password field */}

            <div>
              <input
                placeholder="Password"
                type="password"
                id="password"
                value={password}
                onChange={(e) => dispatch(setPassword(e.target.value))}
                required
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              />
            </div>
            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-indigo-600  text-white py-3 font-semibold text-2xl  hover:text-purple-700 rounded-full shadow-lg hover:bg-white hover:shadow-purple-500/30 transition-all duration-300"
              >
                Register
              </button>
            </div>
          </form>
          <p className="text-center text-xl text-gray-600 mt-6">
            Already have an account?{" "}
            <Link
              className="text-indigo-700 hover:underline hover:text-red-700 text-xl font-medium"
              to="/login"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
