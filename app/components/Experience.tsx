"use client";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            Experience
          </h2>
          
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Front End Developer
                </h3>
                <p className="text-gray-400">TMA Solutions</p>
                <p className="text-gray-500 text-sm mt-1">2024 - May 2025</p>
              </div>
              <div className="mt-2 md:mt-0">
                <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  End
                </span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="text-gray-300 space-y-3">
                <p>
                  As a Front End Developer at TMA Solutions, I specialize in building modern, 
                  responsive web applications using cutting-edge technologies. My role involves:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Developing and maintaining enterprise-level web applications using React, Next.js, and TypeScript</li>
                  <li>Implementing responsive designs and ensuring cross-browser compatibility</li>
                  <li>Collaborating with UX/UI designers to create intuitive and engaging user interfaces</li>
                  <li>Working closely with backend teams to integrate RESTful APIs and GraphQL endpoints</li>
                  <li>Optimizing application performance and implementing best practices for web development</li>
                  <li>Participating in code reviews and contributing to team knowledge sharing</li>
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                  Next.js
                </span>
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                  Tailwind CSS
                </span>
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                  GraphQL
                </span>
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                  REST APIs
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 