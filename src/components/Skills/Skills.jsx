import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiC,
  SiGooglesheets,
  SiGithub,
  SiGit,
  SiFigma,
  SiPython,
  SiMysql,
  SiTableau,
  SiCanva,

} from "react-icons/si";

import { FaJava } from "react-icons/fa";
import { BsBarChartFill } from "react-icons/bs"; // Power BI icon

import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2>My Skills</h2>
      <p className="skills-description">
        Here are some of the technologies and tools I have worked with, which
        help me build responsive, efficient, and user-friendly projects.
      </p>

      <div className="skills-container">
        <div className="skill-card">
          <SiHtml5 className="skill-icon html" />
          <p>HTML</p>
        </div>

        <div className="skill-card">
          <SiCss3 className="skill-icon css" />
          <p>CSS</p>
        </div>

        <div className="skill-card">
          <SiJavascript className="skill-icon js" />
          <p>JavaScript</p>
        </div>

        <div className="skill-card">
          <SiReact className="skill-icon react" />
          <p>React</p>
        </div>

        <div className="skill-card">
          <SiC className="skill-icon c" />
          <p>C</p>
        </div>

        <div className="skill-card">
          <FaJava className="skill-icon java" />
          <p>Java</p>
        </div>

        <div className="skill-card">
          <SiPython className="skill-icon python" />
          <p>Python</p>
        </div>

        {/* <div className="skill-card">
          <SiSQL className="skill-icon sql" />
          <p>SQL</p>
        </div> */}

        <div className="skill-card">
          <SiMysql className="skill-icon sql" />
          <p>SQL</p>
        </div>


        <div className="skill-card">
          <SiGooglesheets className="skill-icon excel" />
          <p>Excel</p>
        </div>

        <div className="skill-card">
          <BsBarChartFill className="skill-icon powerbi" />
          <p>Power BI</p>
        </div>

        <div className="skill-card">
          <SiTableau className="skill-icon tableau" />
          <p>Tableau</p>
        </div>

        <div className="skill-card">
          <SiGit className="skill-icon git" />
          <p>Git</p>
        </div>

        <div className="skill-card">
          <SiGithub className="skill-icon github" />
          <p>GitHub</p>
        </div>

        <div className="skill-card">
          <SiFigma className="skill-icon figma" />
          <p>Figma</p>
        </div>

        <div className="skill-card">
          <SiCanva className="skill-icon canva" />
          <p>Canva</p>
        </div>
        
      </div>
    </section>
  );
};

export default Skills;
