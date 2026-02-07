import React from "react";
import { useNavigate } from "react-router-dom";
import "./Certifications.css";

import {
  FaReact,
  FaJava,
  FaPython,
  FaRobot,
  FaPalette,
  FaDatabase,
} from "react-icons/fa";

const Certifications = () => {
  const navigate = useNavigate();

  const categories = [
    { name: "Frontend", icon: <FaReact /> },
    { name: "Data Analyst", icon: <FaDatabase /> },
    { name: "Java", icon: <FaJava /> },
    { name: "Python", icon: <FaPython /> },
    { name: "AI", icon: <FaRobot /> },
    { name: "UI-UX", icon: <FaPalette /> },

    // Custom letter logos
    { name: "PCI", icon: <span className="custom-letter">P</span> },
    { name: "NPTEL", icon: <span className="custom-letter">N</span> },
  ];

  return (
    <section className="certifications-section">
      <h2>My Certifications</h2>
      <p>Click any category to view certificates</p>

      <div className="cert-grid">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="cert-card"
            onClick={() => navigate(`/certifications/${cat.name}`)}
          >
            <div className="cert-icon">{cat.icon}</div>
            <h3>{cat.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
