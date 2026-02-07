import React from "react";
import "./About.css";
import aboutImg from "../../assets/profile.jpeg"; // replace with your image

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-image">
          <img src={aboutImg} alt="About Atheefa" />
        </div>

        <div className="about-text">
          <h2>About Me</h2>
          <p>
  Hi, I’m <strong>Atheefa ❤️</strong>, an aspiring <strong>Frontend Developer</strong> with a strong
  interest in building clean, responsive, and user-focused web applications.
  I work primarily with <strong>React</strong> and enjoy transforming ideas into
  intuitive digital experiences through thoughtful <strong>UI/UX design</strong>.
</p>

<p>
  In addition to frontend development, I have a growing passion for
  <strong> data analytics</strong>. I actively explore tools such as
  <strong> Power BI</strong> to analyze data, create meaningful visualizations,
  and derive insights that support better decision-making.
  I believe combining development skills with data-driven thinking
  leads to more impactful and efficient solutions.
</p>

<p>
  I am continuously learning modern technologies, improving my problem-solving
  abilities, and building real-world projects to strengthen my skills.
  This portfolio represents my journey, my dedication to growth,
  and my enthusiasm for contributing to innovative and meaningful projects
  as a developer. 🚀
</p>

        </div>
      </div>
    </section>
  );
};

export default About;
