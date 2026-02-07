import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../assets/Athee Logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      {/* === Left: Logo === */}
      <div className="logo-container">
        <img src={Logo} alt="Logo" className="logo-img" />
        <span className="logo-text">Atheefa❤️</span>
      </div>

      {/* === Hamburger Icon (Mobile) === */}
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* === Center: Navigation Links === */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>
        </li>

        <li>
          <NavLink to="/skills" onClick={closeMenu}>
            Skills
          </NavLink>
        </li>

        <li>
          <NavLink to="/experience" onClick={closeMenu}>
            Experience
          </NavLink>
        </li>

        {/* ✅ Certifications Section Added */}
        <li>
          <NavLink to="/certifications" onClick={closeMenu}>
            Certifications
          </NavLink>
        </li>

        <li>
          <NavLink to="/projects" onClick={closeMenu}>
            Projects
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>
        </li>
      </ul>

      {/* === Right: Hire Me Button === */}
      {/* <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=atheefa1406@gmail.com&su=Job%20Opportunity&body=Hello%20Atheefa%2C%20I’d%20like%20to%20connect%20regarding%20a%20role."
        target="_blank"
        rel="noopener noreferrer"
        className="btn hire-btn"
      >
        Hire Me
      </a> */}
    </nav>
  );
};

export default Navbar;
