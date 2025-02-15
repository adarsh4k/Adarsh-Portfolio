import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";

import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Freelancing from "./components/Freelancing";
import Hackathons from "./components/Hackathons";
import OpenSource from "./components/OpenSource";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/experience" element={<Experience />} />
        
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/freelancing" element={<Freelancing />} />
        <Route path="/hackathons" element={<Hackathons />} />
        <Route path="/open-source" element={<OpenSource />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;