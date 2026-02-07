import React from "react";
import { Link } from "react-router-dom";
import {
  FaLaptopCode,
  FaJava,
  FaPython,
  FaPaintBrush,
  FaChartBar,
  FaFileExcel,
  FaPalette,
} from "react-icons/fa";
import "./Projects.css";

const categories = [
  {
    name: "Web Development Projects",
    path: "web",
    icon: <FaLaptopCode />,
  },
  {
    name: "Java Projects",
    path: "java",
    icon: <FaJava />,
  },
  {
    name: "Python Projects",
    path: "python",
    icon: <FaPython />,
  },
  {
    name: "UI/UX Design Projects",
    path: "uiux",
    icon: <FaPaintBrush />,
  },
  {
    name: "Power BI Projects",
    path: "powerbi",
    icon: <FaChartBar />,
  },
  {
    name: "Excel Projects",
    path: "excel",
    icon: <FaFileExcel />,
  },
  {
    name: "Canva Designs",
    path: "canva",
    icon: <FaPalette />,
  },
];

const Projects = () => {
  return (
    <section className="projects">
      <h2>My Projects</h2>

      {/* ⭐ Intro Description */}
      <p className="projects-intro">
        Explore my project portfolio showcasing experience in 
        <strong> web development, programming, data analytics, </strong>
        and <strong>UI/UX design</strong>. Each category highlights 
        practical projects demonstrating my technical skills, creativity, 
        and problem-solving abilities.
      </p>

      <div className="projects-container">
        {categories.map((cat, index) => (
          <Link to={`/projects/${cat.path}`} key={index}>
            <div className="project-card">
              <div className="project-icon">{cat.icon}</div>
              <h3>{cat.name}</h3>
              <p>Click to view projects →</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;
