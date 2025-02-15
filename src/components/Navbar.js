import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-xl bg-gradient-to-r from-blue-900 via-purple-800 to-pink-700 bg-opacity-90 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold text-white tracking-wider drop-shadow-md">
          My Portfolio
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {["Home", "About", "Skills", "Projects", "Achievements", "Experience", "Contact"].map((item) => (
            <li key={item}>
              <Link
                to={`/${item.toLowerCase().replace(" ", "-")}`}
                className="text-white font-medium text-lg transition-all duration-300 hover:text-gray-300 hover:underline underline-offset-4"
              >
                {item}
              </Link>
            </li>
          ))}

          {/* More Dropdown */}
          <li className="relative">
            <button
              onClick={() => setShowMore(!showMore)}
              className="text-white font-medium text-lg flex items-center transition-all duration-300 hover:text-gray-300"
            >
              More <ChevronDown size={18} className="ml-1" />
            </button>

            {/* More Dropdown Menu */}
            {showMore && (
              <ul className="absolute top-8 left-0 bg-gray-800 bg-opacity-90 rounded-lg shadow-lg py-2 w-44 transition-all duration-300 transform scale-95 origin-top">
                {["Resume", "Freelancing", "Hackathons", "Open Source"].map((item) => (
                  <li key={item}>
                    <Link
                      to={`/${item.toLowerCase().replace(" ", "-")}`}
                      className="block px-4 py-2 text-white text-base hover:bg-gray-700 transition-all duration-300"
                      onClick={() => setShowMore(false)}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="md:hidden bg-black bg-opacity-90 text-white text-center py-6 space-y-6 shadow-xl rounded-b-lg">
          {["Home", "About", "Skills", "Projects", "Achievements", "Experience", "Contact"].map((item) => (
            <li key={item}>
              <Link
                to={`/${item.toLowerCase().replace(" ", "-")}`}
                className="block text-lg font-medium transition-all duration-300 hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}

          {/* More Dropdown for Mobile */}
          <li className="relative">
            <button
              onClick={() => setShowMore(!showMore)}
              className="block text-lg font-medium w-full text-white py-2 hover:text-gray-300 transition-all duration-300"
            >
              More <ChevronDown size={18} className="inline ml-1" />
            </button>

            {showMore && (
              <ul className="bg-gray-800 bg-opacity-90 rounded-lg py-2 shadow-lg transition-all duration-300">
                {["Resume", "Freelancing", "Hackathons", "Open Source"].map((item) => (
                  <li key={item}>
                    <Link
                      to={`/${item.toLowerCase().replace(" ", "-")}`}
                      className="block text-white py-3 hover:bg-gray-700 transition-all duration-300"
                      onClick={() => {
                        setShowMore(false);
                        setIsOpen(false);
                      }}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
