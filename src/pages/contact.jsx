import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import axios from "axios";

const Contact = () => {
  const form = useRef();


const sendEmail = async (e) => {
  e.preventDefault();

  const formData = {
    name: form.current.name.value,
    email: form.current.email.value,
    message: form.current.message.value,
  };

  try {
    const response = await axios.post("http://localhost:5000/send", formData);

    if (response.data.success) {
      toast.success("✅ Message sent successfully!", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
      e.target.reset();
    } else {
      toast.error("❌ Message failed to send!", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
    }
  } catch (error) {
    toast.error("❌ Server error! Try again later.", {
      position: "top-right",
      autoClose: 3000,
      theme: "colored",
    });
    console.error(error);
  }
};


  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white"
      >
        Get In Touch
      </motion.h2>

      <motion.form
        ref={form}
        onSubmit={sendEmail}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="w-full max-w-lg bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8"
      >
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-gray-800 dark:text-white focus:outline-none focus:border-blue-600 transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-gray-800 dark:text-white focus:outline-none focus:border-blue-600 transition"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-gray-800 dark:text-white focus:outline-none focus:border-blue-600 transition"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition"
          >
            Send Message
          </button>
        </div>
      </motion.form>

      <ToastContainer />
    </section>
  );
};

export default Contact;
