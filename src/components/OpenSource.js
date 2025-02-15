import React from "react";
import { FaGithub, FaCodeBranch } from "react-icons/fa";

const OpenSource = () => {
  return (
    <section id="open-source" className="relative py-20 bg-gradient-to-r from-cyan-900 to-violet-800 text-white">
      
      {/* Background Overlay Effect */}
      <div className="absolute inset-0 bg-opacity-40 bg-noise"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Heading */}
        <h2 className="text-5xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-violet-400">
          Open Source Contributions
        </h2>
        <p className="text-lg text-gray-200 text-center max-w-2xl mx-auto">
          I contributed to <span className="text-cyan-300 font-semibold">Hacktoberfest 2024</span> with a **URL Shortener project** and look forward to **more contributions** in the future.
        </p>

        {/* Contribution Card */}
        <div className="mt-12 flex justify-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-xl shadow-lg w-full max-w-lg transform transition duration-300 hover:scale-105 border border-cyan-300/30">
            <div className="flex items-center gap-4 mb-4">
              <FaCodeBranch className="text-4xl text-cyan-300" />
              <h3 className="text-2xl font-bold text-cyan-300">Hacktoberfest 2024 - URL Shortener</h3>
            </div>
            <p className="text-gray-300">
              Contributed to an open-source **URL Shortener project** during Hacktoberfest 2024, focusing on enhancing the backend with **MongoDB and Flask**.
            </p>
            <a 
              href="https://github.com/adarsh4k/project-osus" 
              className="mt-4 inline-block text-violet-400 font-semibold hover:underline"
              target="_blank" 
              rel="noopener noreferrer"
            >
              View Contribution →
            </a>
          </div>
        </div>

        {/* Future Contributions Statement */}
        <p className="text-lg text-gray-200 text-center mt-12">
          I'm **interested in contributing to more open-source projects** in the future.
        </p>

        {/* GitHub Button */}
        <div className="mt-8 flex justify-center">
          <a 
            href="https://github.com/adarsh4k/" 
            className="flex items-center gap-3 px-8 py-4 text-lg font-semibold bg-gradient-to-r from-violet-500 to-cyan-500 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl" /> Check My GitHub
          </a>
        </div>

      </div>
    </section>
  );
};

export default OpenSource;
