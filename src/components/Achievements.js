import React from "react";
import { motion } from "framer-motion";
import Codathon from "../assets/Codathon.jpg";

const achievements = [
  {
    title: "🥇 First Prize - Codathon",
    description: "Won first prize in the Codathon event conducted by Jeppiaar University.",
    image: "/images/codathon.jpg", // Your Codathon photo
  },
  {
    title: "🤖 Be10x AI Tools Workshop",
    description: "Completed an advanced AI tools workshop, gaining hands-on experience in AI-driven automation.",
  },
  {
    title: "🛠️ JavaScript Projects - Great Learning",
    description: "Built multiple JavaScript projects, demonstrating strong frontend and problem-solving skills.",
  },
  {
    title: "🏆 L&T IT Primer Certification",
    description: "Earned certification for completing the IT Primer Course, covering key IT industry insights.",
  },
  {
    title: "💻 Google Developer Program",
    description: "Recognized for contributions and participation in the Google Developer Program.",
  },
  {
    title: "🌍 Open Source Contributor",
    description: "Actively contributing to open-source projects and Hacktoberfest.",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        
        {/* Animated Heading */}
        <motion.h2 
          className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text 
                     bg-gradient-to-r from-purple-500 via-blue-400 to-cyan-300 shadow-xl"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Achievements & <span className="text-cyan-300">Certifications</span>
        </motion.h2>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="relative group bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl shadow-lg 
                         border border-gray-700 backdrop-blur-lg transition-all duration-300 
                         hover:scale-105 hover:border-cyan-400 hover:shadow-cyan-500/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Codathon Photo */}
              {achievement.image && (
                <img 
                  src={Codathon} 
                  alt="Codathon Winner"
                  className="w-full h-48 object-cover rounded-lg mb-4 border border-gray-600 
                             shadow-lg transition-all duration-300 group-hover:shadow-cyan-500/50"
                />
              )}

              <h3 className="text-2xl font-bold text-cyan-300">{achievement.title}</h3>
              <p className="text-gray-300 mt-2 leading-relaxed">{achievement.description}</p>

              {/* Subtle neon glow effect */}
              <div className="absolute inset-0 rounded-2xl border border-gray-600 opacity-10 
                              group-hover:opacity-50 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
