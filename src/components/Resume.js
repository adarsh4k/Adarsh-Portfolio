import React from "react";
import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white relative overflow-hidden">
      {/* Subtle Glassmorphism Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(77,255,255,0.15),_transparent)]"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Animated Heading */}
        <motion.h2
          className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text 
                     bg-gradient-to-r from-[#38bdf8] to-[#9333ea] drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          📄 Download My <span className="text-[#38bdf8]">Resume</span>
        </motion.h2>

        {/* Description */}
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          Want to know more about my skills and experience? Download my **resume** and let's build something amazing! 🚀
        </p>

        {/* Resume Download Button */}
        <motion.a
          href="/resume.pdf"
          download
          className="inline-flex items-center bg-gradient-to-r from-[#2563eb] to-[#9333ea] text-white 
                     font-semibold py-4 px-8 rounded-full text-lg shadow-lg transition-all 
                     hover:scale-105 hover:shadow-[0_0_15px_rgba(56,189,248,0.7)] focus:ring-4 focus:ring-[#38bdf8] focus:outline-none"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaDownload className="mr-3 text-2xl animate-pulse" /> Download Resume
        </motion.a>
      </div>
    </section>
  );
};

export default Resume;
