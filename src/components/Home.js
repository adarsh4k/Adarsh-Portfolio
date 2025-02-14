import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-6">
        
        {/* Profile Image Section */}
        <motion.div 
          className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-indigo-500 shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img src="https://res.cloudinary.com/dlmwoabwe/image/upload/v1710003825/padz2tdw1gsqf4xbajjo.jpg" alt="Your Profile" className="w-full h-full object-cover" />
        </motion.div>

        {/* Text Section */}
        <motion.div 
          className="text-center md:text-left md:ml-10 mt-6 md:mt-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Hello, I'm <span className="bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">KIRIVIDULA ADARSH</span>
          </h1>
          <p className="mt-4 text-xl text-gray-300">
            A passionate developer building awesome things.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Home;



/*import React from "react";

const Home = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Hello, I'm KIRIVIDULA ADARSH</h1>
        <p className="mt-4 text-xl">A passionate developer building awesome things.</p>
      </div>
    </section>
  );
};

export default Home;*/