import React from "react";
import Banner from "./components/Banner";
import About from "./components/About";
import Contact from "./components/Contact";
import Navmenu from "./components/Navmenu";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
// import Testimonials from "./components/Testimonials";

export default function App() {
  return  (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navmenu />
      <Banner />
      <About />
      <Projects />
      <Skills />
      {/* <Testimonials /> */}
      <Contact />
    </main>
  );
}