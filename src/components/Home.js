import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section 
      id="home" 
      className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-6">
        
        {/* Profile Image Section with Hover Effect */}
        <motion.div 
          className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#4F46E5] shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_20px_#4F46E5]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img 
            src="https://res.cloudinary.com/dlmwoabwe/image/upload/v1710003825/padz2tdw1gsqf4xbajjo.jpg"
            alt="Your Profile" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div 
          className="text-center md:text-left md:ml-12 mt-6 md:mt-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Hello, I'm 
            <span className="bg-gradient-to-r from-[#4F46E5] to-[#9333EA] text-transparent bg-clip-text">
              {" "}KIRIVIDULA ADARSH
            </span>
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-lg">
            A passionate <span className="text-[#38BDF8] font-semibold">developer</span> crafting amazing digital experiences.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Home;
