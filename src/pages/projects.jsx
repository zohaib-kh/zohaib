import React from "react";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Commerce Website",
    description:
      "A full-stack MERN app with authentication, product management, shopping cart, and Stripe payments integration. Designed with a modern, responsive UI.",
    image:
      "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tech: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    github: "https://github.com/",
    demo: "https://your-demo-link.com",
  },

  {
    title: "Business Showcase Platform",
    description:
      "A dynamic platform developed to display partner companies and their services with modern UI, responsive layout, and organized navigation.",
    image:
      "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=800&q=80",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "Private Repository",
    demo: "https://yourcompanywebsite.com",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          className="text-2xl sm:text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
