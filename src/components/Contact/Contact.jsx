import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaBriefcase,
} from "react-icons/fa";
import { SiIndeed } from "react-icons/si";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending..." });

    emailjs
      .send(
        "service_x9ehvju",
        "template_qdwving",
        formData,
        "3IUNtLFnpcmURvPJJ"
      )
      .then(
        () => {
          setStatus({
            type: "success",
            message: "Message sent successfully 💌",
          });
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            message: "",
          });
        },
        () => {
          setStatus({
            type: "error",
            message: "Something went wrong. Please try again.",
          });
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* LEFT CONTENT */}
        <div className="contact-left">
          <h2 className="contact-title">Get in Touch</h2>

          <p className="contact-subtext">
            I’d love to hear from you! Whether it’s a question, collaboration, or
            just to say hello — feel free to reach out.
          </p>

          <p className="contact-email">
            <FaEnvelope />
            atheefa1406@gmail.com
          </p>

          <div className="social-icons">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="github"
            >
              <FaGithub />
            </a>

            <a
              href="https://internshala.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="internshala"
            >
              <FaBriefcase />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://indeed.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="indeed"
            >
              <SiIndeed />
            </a>
          </div>
        </div>

        {/* FORM */}
        <form className="contact-form" onSubmit={sendEmail}>
          <div className="form-row">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email *"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={status.type === "loading"}>
            {status.type === "loading" ? "Sending..." : "Send"}
          </button>

          {status.message && (
            <p
              className={`status-message ${
                status.type === "success"
                  ? "success"
                  : status.type === "error"
                  ? "error"
                  : ""
              }`}
            >
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
