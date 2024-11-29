import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import {
  setAddress,
  setEmail,
  setName,
  setPassword,
  setRole,
} from "../../redux/features/RegisterSlice";
import { useSignUpMutation } from "../../redux/api/authApi/authApi";
import toast from "react-hot-toast";

const Register: React.FC = () => {
  const dispatch = useAppDispatch();
  const { name, email, password, role, address } = useAppSelector(
    (state: RootState) => state.register
  );
  const [signUp] = useSignUpMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const register = await signUp({ name, email, password, role, address });
      console.log("user Register", register);
      toast.success("You are logged in successfully!");
      navigate("/login");
    } catch (error) {
      console.error("Login Error:", error);
      toast.error("An error occurred while logging in.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-800 to bg-red-600">
      <div className=" bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-red-700">
          Register
        </h2>
        <form className="mb-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm text-gray-700 font-medium mb-2"
            >
              name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => dispatch(setName(e.target.value))}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-md"
            />
          </div>
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

          <div>
            <label
              htmlFor="role"
              className="block text-sm text-gray-700 font-medium mb-2"
            >
              Role
            </label>
            <input
              type="role"
              id="role"
              value={role}
              onChange={(e) => dispatch(setRole(e.target.value))}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-md"
            />
          </div>
          <div>
            <label
              htmlFor="address"
              className="block text-sm text-gray-700 font-medium mb-2"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => dispatch(setAddress(e.target.value))}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-md"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <div>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => dispatch(setPassword(e.target.value))}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-md"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md bg-green-500 text-white  hover:bg-green-900 transition-colors"
            >
              Register
            </button>
            <p className="bg-slate-200 ">
              Already register, Switch to
              <span>
                <Link
                  to="/login"
                  className="w-full text-red-700 font-bold px-4   text-xl rounded-lg hover:bg-green-800 transition-colors "
                >
                  Login
                </Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
