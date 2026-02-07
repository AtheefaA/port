import React from "react";
import { useParams } from "react-router-dom";
import "./CertificatePage.css";

/* ===== IMPORT CERTIFICATE IMAGES ===== */
import frontend1 from "../../assets/frontend1.png";
import frontend2 from "../../assets/frontend2.png";
import frontend3 from "../../assets/frontend3.png";
import frontend4 from "../../assets/frontend4.png";

import data1 from "../../assets/Data1.png";
import microsoftDA from "../../assets/data Analysts microsoft.jpeg";
import jobSim1 from "../../assets/Data Analytics Job Simulation (1).png";
import jobSimDeloitte from "../../assets/Data Analytics Job Simulation Deloitte.png";
import genAI from "../../assets/GenAI Powered Data Analytics Job Simulation (1).png";

import java1 from "../../assets/java1.png";
import java2 from "../../assets/java2.png";

import python1 from "../../assets/python1.jpeg";
import python2 from "../../assets/python2.png";

import genAIApp from "../../assets/genai.png";
import roboticsAI from "../../assets/robotics.png";

import uiuxMaster from "../../assets/UIUX1.png";
import uiuxBeginner from "../../assets/UI_UX2.png";

import codeArena from "../../assets/codeArena.jpeg";
import codeWar from "../../assets/codeWar.jpeg";

import nptelIndustry from "../../assets/IOT1.jpeg";
import nptelIoT from "../../assets/IOT2.jpeg";


const CertificatePage = () => {
  const { category } = useParams();

  /* ===== CERTIFICATES DATA ===== */
  const certificates = {
    Frontend: [
      { img: frontend1, title: "React Development" },
      { img: frontend2, title: "HTML & CSS" },
      { img: frontend3, title: "JavaScript" },
      { img: frontend4, title: "Getting Start with Frontend and Web development" },
    ],

    Java: [
      { img: java1, title: "JAva Application" },
      { img: java2, title: "Advanced Java" },
    ],

    Python: [
      { img: python1, title: "30 Python Projects" },
      { img: python2, title: "Python Essential" },
    ],

    "Data Analyst": [
            { img: data1, title: "Data Analytics Certificate" },
            { img: microsoftDA, title: "Microsoft Data Analyst Certificate" },
            { img: jobSim1, title: "Data Analytics Job Simulation" },
            { img: jobSimDeloitte, title: "Deloitte Data Analytics Simulation" },
            { img: genAI, title: "GenAI Powered Data Analytics Simulation" },
            ],


    AI: [
    {
        img: genAIApp,
        title: "Building Apps Powered by GenAI",
        type: "pdf",
    },
    {
        img: roboticsAI,
        title: "Robotics and Artificial Intelligence",
        type: "pdf",
    },
    ],

    "UI-UX": [
    {
        img: uiuxMaster,
        title: "UI/UX Master Class",
        type: "pdf",
    },
    {
        img: uiuxBeginner,
        title: "UI/UX for Beginners",
        type: "pdf",
    },
    ],

    PCI: [
    {
        img: codeArena,   // import image/pdf above
        title: "CodeArena Certification",
    },
    {
        img: codeWar,     // import image/pdf above
        title: "CodeWar Certification",
    },
    ],

    NPTEL: [
    {
        img: nptelIndustry,
        title: "Introduction To Industry 4.0 & Industrial IoT",
        type: "pdf",
    },
    {
        img: nptelIoT,
        title: "Introduction To Internet Of Things",
        type: "pdf",
    },
    ],

    // Udemy: [],
  };

  /* ===== CATEGORY EXPLANATIONS ===== */
  const explanations = {
    Frontend:
      "These certifications showcase my expertise in frontend development including React, HTML, CSS, and JavaScript. They highlight my ability to create responsive and modern web interfaces.",

    "Data Analyst":
      "These certifications demonstrate my knowledge in data analytics, visualization, and interpretation using tools like Python, Excel, and analytics platforms.",

    Java:
      "Java certifications reflect my understanding of object-oriented programming, core Java concepts, and backend development fundamentals.",

    Python:
      "Python certifications showcase my skills in programming, scripting, automation, and problem-solving using Python.",

    AI:
      "Artificial Intelligence certifications represent my learning in machine learning, AI concepts, and emerging intelligent technologies.",

    "UI-UX":
      "UI/UX certifications highlight my design thinking, wireframing, prototyping, and user experience optimization skills.",

    PCI:
      "PCI certifications demonstrate participation in coding programs, workshops, and technical learning events.",

    NPTEL:
      "NPTEL certifications reflect academic and industry-recognized courses completed through India's premier online learning platform.",

    Udemy:
      "Udemy certifications showcase my continuous learning through industry-focused online courses and professional skill development.",
  };

  const selectedCertificates = certificates[category] || [];

  return (
    <section className="certificate-page">
      <h2>{category} Certificates</h2>

      {/* Explanation */}
      <p className="certificate-description">
        {explanations[category]}
      </p>

      {/* Certificates Grid */}
      <div className="certificate-grid">
        {selectedCertificates.length > 0 ? (
          selectedCertificates.map((cert, index) => (
            <div key={index} className="certificate-card">
              <img src={cert.img} alt={cert.title} />

              <h4>{cert.title}</h4>

              <a href={cert.img} download className="download-btn">
                Download Certificate
              </a>
            </div>
          ))
        ) : (
          <p>No certificates added yet.</p>
        )}
      </div>
    </section>
  );
};

export default CertificatePage;
