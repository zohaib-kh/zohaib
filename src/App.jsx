import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; // optional: keeps routing ready
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
 import About from "./pages/about";
import Home from "./pages/home";
import Services from "./pages/services";
import Projects from "./pages/projects";
import Skills from "./pages/skills";
import Experience from "./pages/experience";
import Contact from "./pages/contact";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
        <Navbar />
        <main className="flex-1">
          <Home />
          <About />
          <Services />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  

    
      
  );
}

export default App;
 