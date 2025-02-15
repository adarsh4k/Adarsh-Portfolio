import React from "react";
import certificate from "../assets/Internship-Certificate.jpg"; // Adjust the path if needed

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        
        {/* Title with underline */}
        <h2 className="text-4xl font-extrabold mb-6 relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          🚀 Experience
        </h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>

        {/* Internship Info */}
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6 leading-relaxed">
          I completed my internship at 
          <span className="text-blue-400 font-semibold"> CodeClause</span> in Web Development.  
          This experience helped me enhance my skills in  
          <span className="text-purple-400 font-semibold"> React, Node.js, and Tailwind CSS</span>.
        </p>

        {/* Certificate Display with Hover Zoom */}
        <div className="flex justify-center">
          <img 
            src={certificate} 
            alt="Internship Certificate" 
            className="w-80 h-auto rounded-lg shadow-xl border-4 border-blue-500 transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Experience;
