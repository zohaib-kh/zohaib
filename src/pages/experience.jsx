import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Front-End Web Developer",
    company: "Swati Tech, Lahore",
    date: "Aug 2025 – Present",
    type: "Full-time",
    desc: "Working as a Front-End Developer responsible for designing and building modern, responsive web interfaces. Collaborating with backend teams to integrate REST APIs and ensure seamless user experiences across platforms.",
    tech: ["React", "Tailwind CSS", "JavaScript", "Framer Motion"],
  },
  {
    role: "Full Stack Web Development Trainee",
    company: "Corvit Network, Lahore",
    date: "Sept 2025 – Present",
    type: "Part-time (Training)",
    desc: "Enrolled in a professional full stack development course to strengthen backend expertise. Learning advanced concepts in Node.js, Express, MongoDB, and API integration alongside practical project work.",
    tech: ["Node.js", "Express", "MongoDB", "React"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-20 px-6 sm:px-12 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold mb-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        {/* Experience Cards */}
        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 hover:shadow-xl transition"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-blue-600">
                    {exp.role}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl mt-2">
                    {exp.company} • <span className="text-sm">{exp.type}</span>
                  </p>
                </div>
                <span className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-3 md:mt-0">
                  {exp.date}
                </span>
              </div>

              <p className="mt-6 text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
                {exp.desc}
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                {exp.tech.map((t, j) => (
                  <span
                    key={j}
                    className="text-sm bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 px-4 py-1.5 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
