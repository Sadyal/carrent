import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., API call)
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <style>{`
        .contact-wrapper {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;

          background: linear-gradient(
            to top,
            #44444A 0%,
            #3A3A40 15%,
            #2A2A30 30%,
            #1A1A20 55%,
            #0E0E12 100%
          );
          padding: 20px;
        }

        .contact-wrapper::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at bottom center,
            rgba(255,255,255,0.04),
            transparent 60%
          );
          pointer-events: none;
        }

        .contact-card {
          width: 100%;
          max-width: 480px;
          padding: 40px;
          border-radius: 16px;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 20px 60px rgba(0,0,0,0.6);
          color: #fff;
          position: relative;
          z-index: 2;
        }

        .contact-title {
          font-size: 28px;
          font-weight: 600;
          text-align: center;
          margin-bottom: 5px;
        }

        .contact-subtitle {
          text-align: center;
          font-size: 14px;
          color: #9ca3af;
          margin-bottom: 25px;
        }

        .contact-info-block {
          display: flex;
          justify-content: space-around;
          margin-bottom: 30px;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .info-item {
          text-align: center;
        }

        .info-label {
          display: block;
          font-size: 12px;
          color: #60a5fa;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 6px;
          font-weight: 600;
        }

        .info-value {
          font-size: 14px;
          color: #e5e7eb;
        }

        .contact-input {
          width: 100%;
          padding: 12px 14px;
          margin-bottom: 15px;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(0,0,0,0.4);
          color: #fff;
          outline: none;
          transition: 0.3s;
          font-family: inherit;
        }

        .contact-textarea {
          resize: vertical;
          min-height: 100px;
        }

        .contact-input:focus {
          border-color: rgba(255,255,255,0.2);
          background: rgba(0,0,0,0.6);
        }

        .contact-btn {
          width: 100%;
          padding: 12px;
          border-radius: 8px;
          border: none;
          background: linear-gradient(to right, #2563eb, #1d4ed8);
          color: #fff;
          font-weight: 500;
          transition: 0.3s;
          cursor: pointer;
          margin-top: 5px;
        }

        .contact-btn:hover {
          background: linear-gradient(to right, #1d4ed8, #1e40af);
        }
        
        .contact-socials {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 25px;
        }

        .social-link {
          color: #9ca3af;
          font-size: 14px;
          text-decoration: none;
          transition: color 0.3s;
        }

        .social-link:hover {
          color: #fff;
        }
      `}</style>

      <div className="contact-wrapper">
        <div className="contact-card">
          <div className="contact-title">Get in Touch</div>
          <div className="contact-subtitle">We would love to hear from you</div>

          {/* Contact Details Section */}
          <div className="contact-info-block">
            <div className="info-item">
              <span className="info-label">Email Us</span>
              <span className="info-value">carrent@hotmail.com</span>
            </div>
            <div className="info-item">
              <span className="info-label">Call Us</span>
              <span className="info-value">+91 9876543210</span>
            </div>
          </div>

          {/* Contact Form Session */}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              className="contact-input"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              className="contact-input"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="How can we help you?"
              className="contact-input contact-textarea"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit" className="contact-btn">
              Send Message
            </button>
          </form>

          {/* Social Links */}
          <div className="contact-socials">
            <a href="#" className="social-link">Twitter</a>
            <a href="#" className="social-link">LinkedIn</a>
            <a href="#" className="social-link">Instagram</a>
          </div>

        </div>
      </div>
    </>
  );
};

export default Contact;
