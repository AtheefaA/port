import React from "react";
import "./Home.css";
import CV from "../../assets/Atheefa final res.pdf";
import Profile from "../../assets/profile.jpeg";


const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-container">
        {/* Left side text */}
        <div className="home-text">
          <h1>
            Hi, I'm <span>Sajarath Atheefa A</span>
          </h1>
          <p>
            Aspiring Web Developer | UI/UX Enthusiast | Data Analytics & Power BI Explorer
          </p>

          <div className="home-buttons">
            {/* ✅ Updated "Hire Me" button to open Gmail compose */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=atheefa1406@gmail.com&su=Job%20Opportunity&body=Hello%20Atheefa%2C%20I’d%20like%20to%20connect%20regarding%20a%20role."
              target="_blank"
              rel="noopener noreferrer"
              className="btn hire-btn"
            >
              Hire Me
            </a>

            {/* Download CV button */}
            <a href={CV} download="Atheefa Resume.pdf" className="btn-outline">
              Download CV
            </a>
          </div>
        </div>

        {/* Right side image */}
        <div className="home-image">
          <img src={Profile} alt="Atheefa" />
        </div>
      </div>
    </section>
  );
};

export default Home;
