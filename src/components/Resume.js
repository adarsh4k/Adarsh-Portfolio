import React from "react";

const Resume = () => {
  return (
    <section id="resume" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Resume Download</h2>
        <p className="text-lg text-gray-700 text-center">
          Download my resume <a href="/resume.pdf" download className="text-blue-500 hover:underline">here</a>.
        </p>
      </div>
    </section>
  );
};

export default Resume;