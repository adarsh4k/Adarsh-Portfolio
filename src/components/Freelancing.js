import React from "react";
import { FaLaptopCode, FaPalette, FaServer } from "react-icons/fa";

const Freelancing = () => {
  return (
    <section id="freelancing" className="relative py-20 bg-gradient-to-r from-blue-900 to-gray-900 text-white">
      
      {/* Background Overlay Effect */}
      <div className="absolute inset-0 bg-opacity-30 bg-noise"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Heading */}
        <h2 className="text-5xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">
          Freelancing Services
        </h2>
        <p className="text-lg text-gray-300 text-center max-w-2xl mx-auto">
          I create **high-performance websites & full-stack apps** that are **modern, responsive, and visually stunning**. Let's build something amazing! 🚀
        </p>

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          
          {/* Card 1: Website Development */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105">
            <FaLaptopCode className="text-4xl mx-auto text-yellow-400" />
            <h3 className="text-2xl font-bold mt-4 text-center">Website Development</h3>
            <p className="text-gray-300 mt-2 text-center">
              I build **fast, responsive, and interactive websites** using **MERN stack, React, and Tailwind CSS**.
            </p>
          </div>

          {/* Card 2: UI/UX Design */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105">
            <FaPalette className="text-4xl mx-auto text-purple-400" />
            <h3 className="text-2xl font-bold mt-4 text-center">UI/UX Design</h3>
            <p className="text-gray-300 mt-2 text-center">
              **Modern, user-friendly designs** with smooth animations, clean layouts, and a futuristic feel.
            </p>
          </div>

          {/* Card 3: Full-Stack Web Apps */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105">
            <FaServer className="text-4xl mx-auto text-green-400" />
            <h3 className="text-2xl font-bold mt-4 text-center">Full-Stack Web Apps</h3>
            <p className="text-gray-300 mt-2 text-center">
              **Secure, scalable, and high-performance applications** built using **Node.js, Express, and MongoDB**.
            </p>
          </div>

        </div>

        {/* Call to Action */}
        <div className="mt-12 flex justify-center">
          <a 
            href="/contact" 
            className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-red-500 to-yellow-500 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
          >
            Get a Website Built 🚀
          </a>
        </div>

      </div>
    </section>
  );
};

export default Freelancing;
