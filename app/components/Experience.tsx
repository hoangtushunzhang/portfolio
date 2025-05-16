"use client";
import { Experiences } from "@/constant/constant";
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

          {Experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 shadow-lg mb-8"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {exp.title}
                  </h3>
                  <p className="text-gray-400">{exp.company}</p>
                  <p className="text-gray-500 text-sm mt-1">{exp.duration}</p>
                </div>
                {exp.status && (
                  <div className="mt-2 md:mt-0">
                    <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                      {exp.status}
                    </span>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <div className="text-gray-300 space-y-3">
                  <p>{exp.description}</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    {exp.responsibilities.map((task, i) => (
                      <li key={i}>{task}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
