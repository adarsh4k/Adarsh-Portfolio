import React from "react";
import FlipkartGrid from "../assets/flipkart-grid.jpg"; // Replace with actual image path
import CollegeHackathon from "../assets/college-hackathon.jpg"; // Replace with actual image path

const Hackathons = () => {
  return (
    <section id="hackathons" className="relative py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      
      {/* Background Overlay Effect */}
      <div className="absolute inset-0 bg-opacity-30 bg-noise"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Heading */}
        <h2 className="text-5xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Hackathons & Competitions
        </h2>
        <p className="text-lg text-gray-300 text-center max-w-2xl mx-auto">
          Here are some major **hackathons and coding competitions** I've participated in.
        </p>

        {/* Hackathons Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          
          {/* Flipkart Grid 6.0 */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
            <img 
              src={FlipkartGrid} 
              alt="Flipkart Grid 6.0" 
              className="w-full h-60 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-center text-blue-400">Flipkart Grid 6.0</h3>
            <p className="text-gray-300 text-center mt-2">
              Participated in Flipkart Grid **6.0**, competing in problem-solving and innovation challenges.
            </p>
          </div>

          {/* College Hackathon */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
            <img 
              src={CollegeHackathon} 
              alt="College Hackathon" 
              className="w-full h-60 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-center text-yellow-400">College Hackathon</h3>
            <p className="text-gray-300 text-center mt-2">
              Participated in a  hackathon** conducted by my college, solving real-world problems.
            </p>
          </div>

        </div>

        {/* Call to Action */}
        <div className="mt-12 flex justify-center">
          <a 
            href="/contact" 
            className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-yellow-500 to-red-500 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
          >
            Want to Collaborate? 🚀
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hackathons;
