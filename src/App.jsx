import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Certifications from "./components/Certifications/Certifications";
import CertificatePage from "./components/CertificatePage/CertificatePage";
import Projects from "./components/Projects/Projects";
import ProjectCategory from "./components/Projects/ProjectCategory"; // ⭐ NEW IMPORT
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />

        {/* Certifications */}
        <Route path="/certifications" element={<Certifications />} />
        <Route
          path="/certifications/:category"
          element={<CertificatePage />}
        />

        {/* ⭐ Projects */}
        <Route path="/projects" element={<Projects />} />
        <Route
          path="/projects/:category"
          element={<ProjectCategory />}
        />

        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
