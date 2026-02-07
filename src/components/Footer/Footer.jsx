import React from "react";
import "./Footer.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Atheefa ❤️ | All Rights Reserved</p>
      <div className="social-links">
        <a 
          href="https://www.linkedin.com/feed/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="icon" />
        </a>
        <a 
          href="https://github.com/AtheefaA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="icon" />
        </a>
        <a 
          href="https://profile.indeed.com/?hl=en_IN&co=IN&from=gnav-homepage&from=gnav-util-jobseeker-profile--profile-one-frontend"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiIndeed className="icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
