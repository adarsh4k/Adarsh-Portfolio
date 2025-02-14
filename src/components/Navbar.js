import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons for menu toggle

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 shadow-lg backdrop-blur-md bg-opacity-90">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold text-white tracking-wide">
          My Portfolio
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {[
            "Home",
            "About",
            "Skills",
            "Projects",
            "Achievements",
            "Contact",
            "Resume",
            "Freelancing",
            "Hackathons",
            "Open Source",
          ].map((item) => (
            <li key={item}>
              <Link
                to={`/${item.toLowerCase().replace(" ", "-")}`}
                className="text-white font-medium text-lg transition duration-300 hover:text-gray-200 hover:underline underline-offset-4"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="md:hidden bg-gray-900 bg-opacity-90 text-white text-center py-4 space-y-4">
          {[
            "Home",
            "About",
            "Skills",
            "Projects",
            "Achievements",
            "Contact",
            "Resume",
            "Freelancing",
            "Hackathons",
            "Open Source",
          ].map((item) => (
            <li key={item}>
              <Link
                to={`/${item.toLowerCase().replace(" ", "-")}`}
                className="block text-lg font-medium transition duration-300 hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;



/*import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
          <li><Link to="/about" className="hover:text-gray-400">About</Link></li>
          <li><Link to="/skills" className="hover:text-gray-400">Skills</Link></li>
          <li><Link to="/projects" className="hover:text-gray-400">Projects</Link></li>
          <li><Link to="/achievements" className="hover:text-gray-400">Achievements</Link></li>
        
          <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
          <li><Link to="/resume" className="hover:text-gray-400">Resume</Link></li>
          <li><Link to="/freelancing" className="hover:text-gray-400">Freelancing</Link></li>
          <li><Link to="/hackathons" className="hover:text-gray-400">Hackathons</Link></li>
          <li><Link to="/open-source" className="hover:text-gray-400">Open Source</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;*/