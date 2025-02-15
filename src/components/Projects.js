import React from "react";
import { FaCode, FaMusic, FaChartLine, FaTasks, FaGlobe, FaClipboardList } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      name: "Exam Management System",
      description: "A React and Tailwind-based system for managing exams, student performance, and analytics.",
      icon: <FaClipboardList className="text-4xl text-blue-500" />,
      link: "https://66d67d0a7a0869a1a8628356--exma-managment-system.netlify.app/",
    },
    {
      name: "Music-Player",
      description: "Developed a responsive music player with play,pause,next track, and a volume level indicator and the ui is responsive",
      icon: <FaMusic className="text-4xl text-green-500" />,
      link: "https://adarsh4kmusicplayer.netlify.app/",
    },
    {
      name: "Fitness Tracker Dashboard",
      description: "A sleek React-based dashboard to visualize fitness activities & progress.",
      icon: <FaChartLine className="text-4xl text-purple-500" />,
      link: "https://fitness-tracker-by-adarsh.netlify.app/",
    },
    {
      name: "Quiz Application",
      description: "An interactive, responsive quiz app built using HTML, CSS, and JavaScript.",
      icon: <FaTasks className="text-4xl text-yellow-500" />,
      link: "https://adarshkirividulaquiz-application.netlify.app/",
    },
    {
      name: "To-Do Application",
      description: "A fully functional React-based to-do list app with CRUD operations.",
      icon: <FaCode className="text-4xl text-red-500" />,
      link: "https://todoapplication-adarsh.netlify.app/",
    },
    {
      name: "Landing Page",
      description: "A beautifully designed, fully responsive landing page with animations.",
      icon: <FaGlobe className="text-4xl text-indigo-500" />,
      link: "https://responsive-landing-page-adarsh.netlify.app/",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">🚀 My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 text-center"
            >
              <div className="mb-4 flex justify-center">{project.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a 
                href={project.link} 
                className="text-blue-400 font-semibold hover:text-blue-300 transition-colors"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

