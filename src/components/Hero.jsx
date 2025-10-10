import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-white to-gray-100">
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 animate-bounce">
        Zohaib Aman Khan
      </h1>
      <h2 className="mt-4 text-xl md:text-2xl text-gray-600">
        MERN Stack Developer
      </h2>
      <p className="mt-6 text-lg text-gray-600 max-w-2xl">
        I’m a passionate developer building cool projects 🚀 and always eager to learn new technologies.
      </p>

      {/* Social Icons */}
      <div className="flex gap-6 mt-8">
        <a
          href="https://github.com/zohaib-kh"
          target="_blank"
          rel="noreferrer"
          className="p-3 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition duration-300"
        >
          <Github className="w-6 h-6" />
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-800 transition duration-300"
        >
          <Linkedin className="w-6 h-6" />
        </a>

        <a
          href="mailto:zk86443@gmail.com"
          className="p-3 bg-green-600 text-white rounded-full hover:bg-green-800 transition duration-300"
        >
          <Mail className="w-6 h-6" />
        </a>
      </div>

      <div className="mt-10">
        <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium shadow-md">
          ✅ Available for Work
        </span>
      </div>
    </div>
  );
};

export default Hero;
