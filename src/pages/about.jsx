import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-16 px-6 sm:px-12 bg-white dark:bg-gray-900"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          className="text-gray-700 dark:text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed md:leading-loose"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          I’m a passionate{" "}
          <strong className="text-blue-600 dark:text-blue-400">
            MERN Stack Developer
          </strong>{" "}
          who loves building clean, responsive, and high-performance web
          applications. During my internship, I developed a{" "}
          <strong className="text-purple-600 dark:text-purple-400">
            Business Showcase Platform
          </strong>{" "}
          — a multi-business website showcasing products and services.
          <br />
          <br />
          I also built a{" "}
          <strong className="text-green-600 dark:text-green-400">
            Full-Stack E-Commerce Website
          </strong>{" "}
          with authentication, product management, and online payments,
          improving my frontend–backend integration skills.
          <br />
          <br />
          I’m currently completing my{" "}
          <strong className="text-pink-600 dark:text-pink-400">
            Bachelor’s in Computer Science
          </strong>{" "}
          and focused on becoming a full-stack web developer passionate about
          user-friendly, scalable applications.
        </motion.p>
      </div>
    </section>
  );
}
