import React from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.png";

function Navbar() {
  let location = useLocation();
  let navigate = useNavigate();
  const handleLogout = () => {
    navigate("/login");
    localStorage.removeItem("token");
  };
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="flex items-center">
          <img
            src={Logo}
            className="h-6 my-1 lg:h-14 sm:h-9"
            alt="Travelogue Logo"
          />
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:text-gray-400 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className={`${
                  location.pathname === "/" ? "text-blue-700" : "text-white"
                } block py-2 pl-3 pr-4 rounded md:border-0 md:p-0`}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`${
                  location.pathname === "/about"
                    ? "text-blue-700"
                    : "text-white"
                } block py-2 pl-3 pr-4 rounded hover:text-gray-400 md:border-0 md:p-0`}
              >
                About
              </Link>
            </li>
            {!localStorage.getItem("token") ? (
              <div className="lg:flex-row lg:flex md:flex">
                <li className="mr-6">
                  <Link
                    to="/login"
                    className={`${
                      location.pathname === "/login"
                        ? "text-blue-700"
                        : "text-white"
                    } block py-2 pl-3 pr-4  rounded hover:text-gray-400 md:border-0  md:p-0`}
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signup"
                    className={`${
                      location.pathname === "/signup"
                        ? "text-blue-700"
                        : "text-white"
                    } block py-2 pl-3 pr-4 rounded hover:text-gray-400 md:border-0 md:p-0`}
                  >
                    Sign Up
                  </Link>
                </li>
              </div>
            ) : (
              <button
                onClick={handleLogout}
                className="block py-2 pl-3 pr-4 text-white rounded hover:text-gray-400 md:border-0 md:p-0"
              >
                Sign Out
              </button>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
