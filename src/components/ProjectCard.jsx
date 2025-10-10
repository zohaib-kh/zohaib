import React from "react";
import { motion } from "framer-motion";
import { Github, Globe } from "lucide-react";

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
    >
      {/* project image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />

      {/* project content */}
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>

        {/* tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="bg-gray-700 text-gray-200 text-xs px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* links */}
        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-white"
            >
              <Github size={20} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-white"
            >
              <Globe size={20} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
