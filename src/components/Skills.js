import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaTools, FaUserTie } from "react-icons/fa";

const Skills = () => {
  const technicalSkills = ["DSA", "MySQL", "MERN Stack", "Java", "Python"];
  const tools = ["Git", "Docker", "Postman", "VS Code"];
  const softSkills = ["Problem Solving", "Teamwork", "Critical Thinking", "Adaptability"];

  return (
    <section id="skills" className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-300">
          Skills & Technologies
        </h2>

        {/* Skills Sections */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Technical Skills */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
            <div className="flex items-center gap-4 mb-4">
              <FaCode className="text-4xl text-blue-400" />
              <h3 className="text-2xl font-semibold text-blue-300">Technical Skills</h3>
            </div>
            <div className="flex flex-wrap gap-4">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-700 px-5 py-2 rounded-lg text-lg font-medium text-white hover:bg-blue-500 transition duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
            <div className="flex items-center gap-4 mb-4">
              <FaTools className="text-4xl text-green-400" />
              <h3 className="text-2xl font-semibold text-green-300">Tools & Technologies</h3>
            </div>
            <div className="flex flex-wrap gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-700 px-5 py-2 rounded-lg text-lg font-medium text-white hover:bg-green-500 transition duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
            <div className="flex items-center gap-4 mb-4">
              <FaUserTie className="text-4xl text-orange-400" />
              <h3 className="text-2xl font-semibold text-orange-300">Soft Skills</h3>
            </div>
            <div className="flex flex-wrap gap-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-700 px-5 py-2 rounded-lg text-lg font-medium text-white hover:bg-orange-500 transition duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
