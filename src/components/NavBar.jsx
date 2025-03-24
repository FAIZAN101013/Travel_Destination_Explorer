import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h1 className="text-2xl font-bold tracking-wider text-blue-600">
            Travel Explorer
          </h1>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden rounded-lg p-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`absolute md:relative top-16 md:top-0 left-0 md:left-auto w-full md:w-auto bg-white md:bg-transparent border-t md:border-t-0 shadow-lg md:shadow-none z-50 transition-all duration-300 ease-in-out transform ${
            isOpen
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          } md:opacity-100 md:scale-100 md:pointer-events-auto`}
        >
          <ul className="flex flex-col md:flex-row md:items-center md:space-x-8 p-4 md:p-0">
            <li className="py-2 md:py-0">
              <Link
                to="/"
                className="block transition duration-200 hover:text-blue-600 font-medium"
              >
                Home
              </Link>
            </li>
            <li className="py-2 md:py-0">
              <Link
                to="/destinations"
                className="block transition duration-200 hover:text-blue-600 font-medium"
              >
                Destinations
              </Link>
            </li>
            <li className="py-2 md:py-0">
              <Link
                to="/about"
                className="block transition duration-200 hover:text-blue-600 font-medium"
              >
                About
              </Link>
            </li>
            <li className="py-2 md:py-0">
              <Link
                to="/contact"
                className="block transition duration-200 text-white font-medium bg-blue-600 px-4 py-2 rounded-full hover:bg-blue-500"
              >
                Contact
              </Link>
            </li>

            {/* Favorites Link with Heart Icon */}
            <li className="py-2 md:py-0">
              <Link
                to="/favorites"
                className="flex items-center transition duration-200 hover:text-red-500 font-medium"
              >
                ❤️ Favorites
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
