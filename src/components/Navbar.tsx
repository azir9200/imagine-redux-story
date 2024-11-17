/* eslint-disable @typescript-eslint/no-unused-vars */
import { Moon, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/image/logo.png";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { logout, selectCurrentUser } from "../redux/features/userSlice";

const Header = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((store) => store.cart.products);

  const user = useAppSelector(selectCurrentUser);
  console.log("navnbar user", user);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <header className="bg-green-200 mx-20 text-white">
      <nav className="px-20 mx-6 fixed top-0 left-0 w-[calc(100%-3rem)] z-50 flex items-center justify-between space-x-10 py-2 bg-green-400">
        <Link to={"/"} className="hover:bg-green-900 rounded ">
          <img src={logo} alt="logo" className="w-16  " />
        </Link>

        <div className="hidden md:flex items-center space-x-5 ">
          <ul className="flex items-center space-x-5">
            <li>
              <Link
                className="rounded-lg backdrop-blur-[2px] p-1 inline-block  transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-green-900"
                to={"/"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="rounded-lg backdrop-blur-[2px] p-1 inline-block  transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-green-900"
                to={"/products"}
              >
                Products
              </Link>
            </li>
            <li>
              <a
                className="rounded-lg backdrop-blur-[2px] p-1 inline-block transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-green-900"
                href="/about"
              >
                About
              </a>
            </li>
            <li className="relative">
              <Link
                className="rounded-lg backdrop-blur-[2px] p-1 inline-block transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-green-900"
                to={"/cart"}
              >
                <ShoppingCart size={24} />
              </Link>
              <span className="rounded-full absolute top-[-10px] left-[20px] bg-primary text-white text-center size-[25px]">
                {products.length}
              </span>
            </li>
            {/* Authentication Buttons */}
            {user ? (
              <>
                <button
                  onClick={handleLogout}
                  className="text-white text-xl font-medium hover:text-red  transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-green-900"
                >
                  Logout
                </button>
              </>
            ) : (
              <li>
                <Link
                  className="rounded-lg backdrop-blur-[2px] p-1 inline-block hover:bg-green-900"
                  to={"/login"}
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={handleMenuToggle}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-2 mt-14 w-full ">
          <li>
            <Link
              className="rounded-lg backdrop-blur-[2px] p-1 inline-block hover:bg-green-900"
              to={"/productsPage"}
              onClick={handleMenuToggle}
            >
              Products
            </Link>
          </li>
          <li>
            <a
              className="rounded-lg backdrop-blur-[2px] p-1 inline-block hover:bg-green-900"
              href="#"
              onClick={handleMenuToggle}
            >
              About
            </a>
          </li>
          <li className="relative">
            <Link
              className="rounded-lg backdrop-blur-[2px] p-1 inline-blockhover:bg-green-900 hover:bg-green-900"
              to={"/cart"}
              onClick={handleMenuToggle}
            >
              <ShoppingCart size={24} />
            </Link>
            <span className="rounded-full absolute top-[-10px] left-[20px] bg-primary text-white text-center size-[25px]">
              {products.length}
            </span>
          </li>
          <li>
            <button
              // onClick={handleToggleTheme}
              className="rounded-lg backdrop-blur-[2px] p-1 inline-block hover:bg-green-900"
            >
              <Moon size={24} />
            </button>
          </li>
          {/* Authentication Buttons */}
          {user ? (
            <>
              <button
                onClick={handleLogout}
                className="text-white text-xl font-medium hover:text-red transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-green-900"
              >
                Logout
              </button>
            </>
          ) : (
            <li>
              <Link
                className="rounded-lg backdrop-blur-[2px] p-1 inline-block hover:bg-green-900"
                to={"/login"}
              >
                Login
              </Link>
            </li>
          )}
        </ul>
      )}
    </header>
  );
};

export default Header;
