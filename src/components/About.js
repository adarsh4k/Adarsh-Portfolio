import React from "react";
import { motion } from "framer-motion"; // For animations

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="container mx-auto px-6">
        {/* Animated Heading */}
        <motion.h2 
          className="text-4xl font-extrabold text-center text-gray-800 mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About <span className="bg-gradient-to-r from-indigo-600 to-purple-500 text-transparent bg-clip-text">Me</span>
        </motion.h2>

        {/* About Content */}
        <motion.p 
          className="text-lg text-gray-700 text-center max-w-3xl mx-auto leading-relaxed bg-white bg-opacity-50 p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          I'm an aspiring developer with expertise in <span className="font-semibold text-indigo-700">web development</span>, 
          backend technologies, and a strong interest in <span className="font-semibold text-indigo-700">AI</span>. 
          Passionate about building <span className="font-semibold text-indigo-700">responsive</span> and 
          <span className="font-semibold text-indigo-700"> user-friendly applications</span>. 
          I enjoy working on projects that merge creativity and functionality.  
          Currently, I am expanding my knowledge in <span className="font-semibold text-indigo-700">Data Structures & Algorithms (DSA)</span>.  
          Always eager to learn new things every day and collaborate on <span className="font-semibold text-indigo-700">innovative ideas</span> that make an impact.
        </motion.p>
      </div>
    </section>
  );
};

export default About;



/*import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto">
          I'm an aspiring developer with expertise in web development,
          backend technologies and a strong interest in Ai passionate
          about building responsive, user friendly applications. I enjoy 
          working on projects that merge creativity and functionality, Currently 
          i am expanding my Knowledge in DSA. Always eager to learn New things Everyday
          and collaborate on innovative ideas that make an impact

        </p>
      </div>
    </section>
  );
};

export default About;*/