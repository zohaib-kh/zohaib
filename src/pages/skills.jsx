import React from "react";
import { motion } from "framer-motion";

const skills = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind CSS",
  "Git",
  "REST APIs",
  "Framer Motion",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-6 sm:px-12 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold mb-12 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>

        {/* Skills Badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 sm:gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          {skills.map((skill, i) => (
            <motion.span
              key={i}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-base sm:text-lg px-5 py-2 bg-white dark:bg-gray-800 rounded-full shadow-md dark:shadow-gray-700 font-semibold text-gray-800 dark:text-gray-100"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
