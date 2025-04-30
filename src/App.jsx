import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import { BackgroundBeamsWithCollision } from "./components/ui/background-beams-with-collision";
import Certificate from "./components/Certificate";

function App() {
  return (
    <div className="overflow-hidden text-stone-300">
        <div className="fixed inset-0 -z-10">
          <div className="relative h-screen w-full bg-white">
            <BackgroundBeamsWithCollision/>
          </div>
        </div>

        <div className="container mx-auto px-3 md:px-8 z-10">
          <Navbar />
          <Hero />
          <Projects />
          <Education />
          <Certificate/>
          <Contact />
        </div>
    
      </div>
  );
}

export default App;
