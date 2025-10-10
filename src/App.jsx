import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; // optional: keeps routing ready
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
 import About from "./pages/about";

function App() {
  return (
    // <Router>
    //   <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
    //     <Navbar />
    //     <main className="flex-1">
    //       <Home />
    //       <About />
    //       <Services />
    //       <Projects />
    //       <Skills />
    //       <Experience />
    //       <Contact />
    //     </main>
    //     <Footer />
    //   </div>
    // </Router>
   <About  />

    
      
  );
}

export default App;

// test commit 
 