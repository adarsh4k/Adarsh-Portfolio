import React, { useState } from "react";
import { FaInstagram, FaYoutube, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);

  const GOOGLE_FORM_ACTION_URL = ""; // Replace with actual Google Form action URL

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors", 
      });
      setMessageSent(true);
      setTimeout(() => setMessageSent(false), 3000); 
      e.target.reset(); 
    } catch (error) {
      alert("Failed to send message. Try again!");
    }
  };

  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        
      
        <motion.h2 
          className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text 
                     bg-gradient-to-r from-cyan-400 to-purple-500 shadow-xl"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get in <span className="text-cyan-300">Touch</span>
        </motion.h2>

    
        <div className="flex justify-center space-x-6 mb-10">
          {[
            { icon: <FaInstagram />, href: "https://instagram.com/adarsh_dev_360", color: "text-pink-500" },
            { icon: <FaYoutube />, href: "https://youtube.com/channel/UCJSU6vHIb_bjprjVmIG4DFQ", color: "text-red-500" },
            { icon: <FaLinkedin />, href: "https://linkedin.com/in/kirividula-adarsh-3ba613277/", color: "text-blue-500" },
            { icon: <FaGithub />, href: "https://github.com/adarsh4k", color: "text-gray-300" },
            { icon: <FaTwitter />, href: "https://x.com/Adarsh4k?t=sLfrroM-ws5g8wXdgY5Byw&s=09", color: "text-blue-400" },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-4xl transition transform hover:scale-110 ${item.color} hover:text-opacity-80`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

        
        <div className="max-w-2xl mx-auto bg-opacity-20 bg-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-700 
                        backdrop-blur-lg transition-all hover:border-cyan-400">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-gray-300 font-semibold mb-2">Name</label>
              <input name="entry.YOUR_NAME_FIELD_ID" type="text" className="w-full px-4 py-3 bg-gray-800 border border-gray-600 
                         rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white" 
                     placeholder="Your Name" required />
            </div>
            <div className="mb-6">
              <label className="block text-gray-300 font-semibold mb-2">Email</label>
              <input name="entry.YOUR_EMAIL_FIELD_ID" type="email" className="w-full px-4 py-3 bg-gray-800 border border-gray-600 
                         rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white" 
                     placeholder="Your Email" required />
            </div>
            <div className="mb-6">
              <label className="block text-gray-300 font-semibold mb-2">Message</label>
              <textarea name="entry.YOUR_MESSAGE_FIELD_ID" rows="4" className="w-full px-4 py-3 bg-gray-800 border border-gray-600 
                            rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white" 
                        placeholder="Your Message" required></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 
                         rounded-lg shadow-lg hover:opacity-90 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message 🚀
            </motion.button>
          </form>
          
        
          {messageSent && (
            <motion.div 
              className="mt-4 text-green-400 font-semibold text-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              ✅ Message Sent Successfully!
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;




