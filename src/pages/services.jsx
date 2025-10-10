import React from "react";
import { motion } from "framer-motion";

const services = [
  { title: "Frontend Development", desc: "Building responsive and interactive UIs with React and Tailwind CSS." },
  { title: "Backend & APIs", desc: "Creating robust REST APIs using Node.js, Express, and MongoDB." },
  { title: "E-commerce Solutions", desc: "Developing scalable product flows, carts, and secure payment systems." },
  { title: "UI/UX Optimization", desc: "Improving performance, accessibility, and overall user experience." },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-16 px-6 sm:px-12 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Services
        </motion.h2>

        {/* Services Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-2">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="p-6 sm:p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-100">
                {service.title}
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
