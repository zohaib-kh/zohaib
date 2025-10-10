import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Github, Linkedin, Mail } from "lucide-react"; // <-- added icons

export default function Home() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-24 text-center"
    >
      {/* Background blur shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-80 h-80 bg-blue-500/20 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-80 h-80 bg-purple-500/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>
      </div>

      {/* Name */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Zohaib Aman Khan
      </motion.h1>

      {/* Typewriter Role */}
      <motion.h2
        className="text-lg sm:text-xl md:text-2xl mt-6 text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Typewriter
          options={{
            strings: [
              "MERN Stack Developer",
              "Frontend Enthusiast",
              "Backend Explorer",
              "Creative Coder 💻",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </motion.h2>

      {/* Short Description */}
      <motion.p
        className="max-w-lg sm:max-w-xl text-base sm:text-lg md:text-xl mt-8 text-gray-600 dark:text-gray-300 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        I build modern, responsive, and high-performance web applications using{" "}
        <span className="font-semibold text-blue-600">React</span>,{" "}
        <span className="font-semibold text-green-600">Node.js</span>, and{" "}
        <span className="font-semibold text-purple-600">Tailwind CSS</span>.
      </motion.p>

      {/* Buttons with Icons */}
      <motion.div
        className="flex flex-wrap justify-center gap-6 mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <a
          href="https://github.com/zohaib-kh/zohaib"
          target="_blank"
          rel="noreferrer"
          className="p-4 bg-fuchsia-500 text-white rounded-full hover:bg-fuchsia-600 transition transform hover:scale-110"
        >
          <Github className="w-6 h-6" />
        </a>

        <a
          href="https://www.linkedin.com/in/zohaib-aman-khan-b81a2b377/"
          target="_blank"
          rel="noreferrer"
          className="p-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition transform hover:scale-110"
        >
          <Linkedin className="w-6 h-6" />
        </a>

        <a
          href="mailto:zohaibkh2004@yahoo.com"
          className="p-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition transform hover:scale-110"
        >
          <Mail className="w-6 h-6" />
        </a>
      </motion.div>
    </section>
  );
}
