import React from "react";
import { motion } from "framer-motion"; // For animations

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6 flex flex-col items-center">
        
        {/* Animated Heading */}
        <motion.h2 
          className="text-5xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-300"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About <span className="text-green-300">Me</span>
        </motion.h2>

        {/* About Content - Glassmorphism Card */}
        <motion.div 
          className="max-w-3xl bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl shadow-xl text-lg text-center border border-gray-700"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="leading-relaxed text-gray-300">
            🚀 I’m a passionate <span className="text-blue-400 font-semibold">developer</span> skilled in  
            <span className="text-green-400 font-semibold"> web development</span> & backend technologies.  
            My curiosity drives me to explore <span className="text-blue-400 font-semibold">AI</span> &  
            <span className="text-green-400 font-semibold"> cloud computing</span>.  
          </p>

          <p className="mt-4 leading-relaxed text-gray-300">
            🛠️ Currently mastering <span className="text-yellow-400 font-semibold">Data Structures & Algorithms</span>  
            while crafting <span className="text-yellow-400 font-semibold">scalable</span> and <span className="text-yellow-400 font-semibold">responsive</span> applications.  
            I thrive on solving problems and **turning ideas into reality**.
          </p>

          <p className="mt-4 leading-relaxed text-gray-300">
            ✨ I believe in <span className="text-pink-400 font-semibold">continuous learning</span>  
            and collaborating on projects that bring real-world impact.  
            Excited to contribute, build, and innovate!  
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
