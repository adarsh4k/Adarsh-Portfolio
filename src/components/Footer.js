import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-12 mt-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        
        {/* Left Section - Brand Name */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-white tracking-wide">KIRIVIDULA ADARSH</h2>
          <p className="text-sm text-gray-400 mt-2">
            Crafting Digital Experiences with Code.
          </p>
        </div>

        {/* Center Section - Quick Links */}
        <div className="flex flex-wrap justify-center space-x-6">
          <Link to="/" className="hover:text-blue-400 transition duration-300">Home</Link>
          <Link to="/about" className="hover:text-blue-400 transition duration-300">About</Link>
          <Link to="/projects" className="hover:text-blue-400 transition duration-300">Projects</Link>
          <Link to="/contact" className="hover:text-blue-400 transition duration-300">Contact</Link>
        </div>

        {/* Right Section - Social Media Icons */}
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/adarsh4k" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-400 hover:text-white transition duration-300 hover:scale-110">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/kirividula-adarsh-3ba613277/" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-400 hover:text-blue-500 transition duration-300 hover:scale-110">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com/adarsh_dev_360" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-400 hover:text-pink-500 transition duration-300 hover:scale-110">
            <FaInstagram />
          </a>
          <a href="https://youtube.com/channel/UCJSU6vHIb_bjprjVmIG4DFQ" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-400 hover:text-red-500 transition duration-300 hover:scale-110">
            <FaYoutube />
          </a>
          <a href="https://x.com/Adarsh4k?t=sLfrroM-ws5g8wXdgY5Byw&s=09" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-400 hover:text-blue-400 transition duration-300 hover:scale-110">
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Separator Line */}
      <div className="border-t border-gray-700 mt-8 mx-auto w-3/4"></div>

      {/* Bottom Text */}
      <div className="text-center mt-4 text-sm text-gray-500">
        © {new Date().getFullYear()} KIRIVIDULA ADARSH. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
