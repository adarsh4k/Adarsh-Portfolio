import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const technicalSkills = ["DSA", "MySQL", "MERN Stack", "Java", "Python"];
  const tools = ["Git", "Docker", "Postman", "VS Code", "Linux"];
  const softSkills = ["Problem Solving", "Teamwork", "Critical Thinking", "Adaptability"];

  return (
    <section id="skills" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
          Skills & Technologies
        </h2>

        {/* Technical Skills Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-center mb-4 text-indigo-600">Technical Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technicalSkills.map((skill, index) => (
              <motion.div 
                key={index} 
                className="bg-white shadow-lg px-6 py-3 rounded-lg text-lg font-medium text-gray-800 hover:bg-indigo-500 hover:text-white transition duration-300"
                whileHover={{ scale: 1.1 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tools & Technologies Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-center mb-4 text-indigo-600">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <motion.div 
                key={index} 
                className="bg-white shadow-lg px-6 py-3 rounded-lg text-lg font-medium text-gray-800 hover:bg-green-500 hover:text-white transition duration-300"
                whileHover={{ scale: 1.1 }}
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Soft Skills Section */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-4 text-indigo-600">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill, index) => (
              <motion.div 
                key={index} 
                className="bg-white shadow-lg px-6 py-3 rounded-lg text-lg font-medium text-gray-800 hover:bg-orange-500 hover:text-white transition duration-300"
                whileHover={{ scale: 1.1 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;




/*import React from "react";

const Skills = () => {
  const skills = ["React", "Tailwind CSS", "Node.js", "Python", "Git", "Docker"];

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Skills & Technologies</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-200 px-4 py-2 rounded-lg">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;*/