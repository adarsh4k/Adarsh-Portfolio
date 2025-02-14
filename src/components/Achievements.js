import React from "react";
import { motion } from "framer-motion"; // For animations

const achievements = [
  {
    title: "🥇 First Prize - Codathon",
    description: "Won first prize in the Codathon event conducted by Jeppiaar University.",
  },
  {
    title: "🏆 Class Topper",
    description: "Secured the top position in my class with excellent academic performance.",
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
    <section id="achievements" className="py-20 bg-gradient-to-br from-gray-100 to-gray-300">
      <div className="container mx-auto px-6">
        
        {/* Animated Heading */}
        <motion.h2 
          className="text-4xl font-extrabold text-center text-gray-900 mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Achievements & <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">Certifications</span>
        </motion.h2>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-indigo-500 hover:shadow-2xl transition duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-bold text-indigo-700">{achievement.title}</h3>
              <p className="text-gray-700 mt-2">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;



/*import React from "react";

const Achievements = () => {
  return (
    <section id="achievements" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Achievements & Certifications</h2>
        <p className="text-lg text-gray-700 text-center">
          Here are some of my achievements and certifications.
        </p>
      </div>
    </section>
  );
};

export default Achievements;*/