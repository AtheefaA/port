import React, { useState } from "react";
import "./Experience.css";
import {
  FaLaptopCode,
  FaDatabase,
  FaReact,
  FaProjectDiagram,
  FaChevronDown,
} from "react-icons/fa";

const Experience = () => {
  const [openRole, setOpenRole] = useState(null);

  const toggleRole = (role) => {
    setOpenRole(openRole === role ? null : role);
  };

  return (
    <section className="experience" id="experience">
      <h2>My Experience</h2>

      <p className="experience-summary">
        My journey as a budding developer and data enthusiast has given me
        opportunities to explore both <strong>frontend development</strong> and{" "}
        <strong>data analysis</strong>. Here are some highlights of my growth so
        far:
      </p>

      {/* ================= FRONTEND DEVELOPMENT ================= */}
      <div className="role-card">
        <div className="role-header" onClick={() => toggleRole("frontend")}>
          <FaReact className="role-icon" />
          <div>
            <h3>Frontend Development</h3>
            <p className="role-short">
              Building responsive and user-friendly web interfaces.
            </p>
          </div>
          <FaChevronDown
            className={`arrow ${openRole === "frontend" ? "rotate" : ""}`}
          />
        </div>

        {openRole === "frontend" && (
          <div className="role-content">
            <div className="exp-item">
              <h4>Frontend Development Intern — Alfaj Code Breeze</h4>
              <span>June 2024 – July 2024</span>
              <p>
                Worked on modern UI development with a focus on responsiveness
                and usability.
              </p>
              <ul>
                <li>Built reusable React components</li>
                <li>Improved UI responsiveness</li>
                <li>Collaborated with designers and developers</li>
              </ul>
              <strong>Tech Stack:</strong> React, HTML, CSS, JavaScript
            </div>
          </div>
        )}
      </div>

      {/* ================= JAVA DEVELOPMENT ================= */}
      <div className="role-card">
        <div className="role-header" onClick={() => toggleRole("java")}>
          <FaLaptopCode className="role-icon" />
          <div>
            <h3>Java Development</h3>
            <p className="role-short">
              Strong foundation in object-oriented programming concepts.
            </p>
          </div>
          <FaChevronDown
            className={`arrow ${openRole === "java" ? "rotate" : ""}`}
          />
        </div>

        {openRole === "java" && (
          <div className="role-content">
            <div className="exp-item">
              <h4>Java Development Intern — Cognifyz</h4>
              <span>November 2024 – December 2024</span>
              <p>
                Focused on implementing Java concepts through hands-on tasks.
              </p>
              <ul>
                <li>Applied OOP principles</li>
                <li>Worked with collections and exception handling</li>
              </ul>
              <strong>Tech Stack:</strong> Java
            </div>
          </div>
        )}
      </div>

      {/* ================= PYTHON DEVELOPMENT ================= */}
      <div className="role-card">
        <div className="role-header" onClick={() => toggleRole("python")}>
          <FaLaptopCode className="role-icon" />
          <div>
            <h3>Python Development</h3>
            <p className="role-short">
              Writing efficient Python programs for problem-solving.
            </p>
          </div>
          <FaChevronDown
            className={`arrow ${openRole === "python" ? "rotate" : ""}`}
          />
        </div>

        {openRole === "python" && (
          <div className="role-content">
            <div className="exp-item">
              <h4>Python Development Intern — Cognifyz</h4>
              <span>June 2024 – July 2024</span>
              <p>
                Developed Python scripts and logic-based applications.
              </p>
              <ul>
                <li>Improved debugging and analytical skills</li>
                <li>Worked on real-time problem statements</li>
              </ul>
              <strong>Tech Stack:</strong> Python
            </div>
          </div>
        )}
      </div>

      {/* ================= WEB DEVELOPMENT ================= */}
      <div className="role-card">
        <div className="role-header" onClick={() => toggleRole("web")}>
          <FaLaptopCode className="role-icon" />
          <div>
            <h3>Web Development</h3>
            <p className="role-short">
              Designing and developing functional web applications.
            </p>
          </div>
          <FaChevronDown
            className={`arrow ${openRole === "web" ? "rotate" : ""}`}
          />
        </div>

        {openRole === "web" && (
  <div className="role-content">
    <div className="exp-item">
      {/* InternPe */}
      <h4>Web Development Intern — InternPe</h4>
      <span>January 2025 – February 2025</span>
      <ul>
        <li>Built responsive web pages using HTML, CSS, and JavaScript</li>
        <li>Implemented clean layouts and improved UI consistency</li>
        <li>Enhanced website responsiveness across devices</li>
      </ul>
      <strong>Tech Stack:</strong> HTML, CSS, JavaScript
    </div>

    <div className="exp-item" style={{ marginTop: "20px" }}>
      {/* Pinnacle */}
      <h4>Web Development Intern — Pinnacle</h4>
      <span>January 2025 – February 2025</span>
      <ul>
        <li>Designed and developed interactive web components</li>
        <li>Optimized UI elements for better user experience</li>
        <li>Worked on real-time frontend tasks and improvements</li>
      </ul>
      <strong>Tech Stack:</strong> HTML, CSS, JavaScript
    </div>
  </div>
)}

      </div>

      {/* ================= DATA ANALYTICS ================= */}
      <div className="role-card">
        <div className="role-header" onClick={() => toggleRole("data")}>
          <FaDatabase className="role-icon" />
          <div>
            <h3>Data Analytics</h3>
            <p className="role-short">
              Transforming raw data into meaningful insights.
            </p>
          </div>
          <FaChevronDown
            className={`arrow ${openRole === "data" ? "rotate" : ""}`}
          />
        </div>

        {openRole === "data" && (
          <div className="role-content">
            <div className="exp-item">
              <h4>Data Analytics Intern — Cognifyz</h4>
              <span>January 2026 – February 2026</span>
              <ul>
                <li>Performed Excel-based data analysis</li>
                <li>Created visual reports</li>
              </ul>
              <strong>Tech Stack:</strong> Excel, Data Analysis
            </div>
          </div>
        )}
      </div>

      {/* ================= SAME AS PREVIOUS CARD STYLE ================= */}
      <div className="experience-cards">
        <div className="exp-card">
          <FaReact className="exp-icon" />
          <h3>Learning Journey</h3>
          <p>
            Actively strengthening my skills in <strong>React development</strong>, 
            <strong>UI/UX design</strong>, and <strong>data analytics</strong> by building 
            real-world projects, refining best practices, and continuously learning 
            modern tools and workflows.
          </p>

        </div>

        <div className="exp-card">
          <FaProjectDiagram className="exp-icon" />
          <h3>Open to Opportunities</h3>
          <p>
            Eager to apply my skills in <strong>real-world projects</strong>,
            internships, and collaborative environments to grow further.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
