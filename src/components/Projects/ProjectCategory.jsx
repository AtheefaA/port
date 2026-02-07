import React from "react";
import { useParams } from "react-router-dom";
import projectsData from "../data/projectsData";
import "./ProjectCategory.css";

const ProjectCategory = () => {
  const { category } = useParams();

  // Get projects safely
  const projects = projectsData[category] || [];

  // Format category title nicely
  const formattedTitle = category
    ?.replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <section className="category-page">
      <h2>{formattedTitle} Projects</h2>

      <p className="category-intro">
        These projects showcase my practical skills, creativity, and real-world
        problem-solving experience in this domain.
      </p>

      <div className="category-container">
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <div className="category-card" key={index}>
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              )}

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-btn"
                >
                  View Repository
                </a>
              )}
            </div>
          ))
        ) : (
          <p className="no-projects">
            No projects available in this category yet.
          </p>
        )}
      </div>
    </section>
  );
};

export default ProjectCategory;
