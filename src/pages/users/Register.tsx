import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import {
  setEmail,
  setName,
  setPassword,
  setRole,
} from "../../redux/features/RegisterSlice";

const Register: React.FC = () => {
  const dispatch = useAppDispatch();
  const { username, email, password, role } = useAppSelector(
    (state: RootState) => state.register
  );

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from bg-green-800 to bg-red-600">
      <div className=" bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-red-700">
          Register
        </h2>
        <form className="mb-8 space-y-6">
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
              value={username}
              onChange={(e) => dispatch(setName(username))}
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
              onChange={(e) => dispatch(setEmail(email))}
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
              onChange={(e) => dispatch(setRole(role))}
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
                onChange={(e) => dispatch(setPassword(password))}
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
          </div>
        </form>
        <div>
          <p className="bg-slate-200">
            Already register, Switch to
            <span>
              <Link
                to="/login"
                className="w-full bg-gradient-to-r from-green-700 to-red-600 text-white ml-4 px-6  text-xl rounded-lg hover:bg-green-800 transition-colors"
              >
                Login
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
