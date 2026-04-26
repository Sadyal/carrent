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
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <style>{`
        .contact {
          min-height: 100vh;
          padding: 80px 20px;

          background: linear-gradient(
            to bottom,
            #0E0E12 0%,
            #1A1A20 60%,
            #2A2A30 75%,
            #3A3A40 90%,
            #44444A 100%
          );

          color: #fff;
          font-family: "Poppins", sans-serif;
        }

        .container {
          max-width: 1100px;
          margin: auto;
        }

        /* HEADER */
        .header {
          text-align: center;
          margin-bottom: 50px;
        }

        .header h1 {
          font-family: "Cinzel", serif;
          letter-spacing: 0.1em;
        }

        .header p {
          color: rgba(255,255,255,0.5);
          margin-top: 8px;
        }

        /* LAYOUT */
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }

        /* INFO BOX */
        .info-box {
          background: #3A3A40;
          padding: 30px;
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.15);
        }

        .info-item {
          margin-bottom: 25px;
        }

        .info-item h4 {
          margin-bottom: 5px;
        }

        .info-item p {
          color: rgba(255,255,255,0.6);
        }

        /* FORM */
        .form-box {
          background: #3A3A40;
          padding: 30px;
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.15);
        }

        .form-box input,
        .form-box textarea {
          width: 100%;
          margin-bottom: 15px;
          padding: 12px;
          border-radius: 10px;
          border: none;
          background: #2A2A30;
          color: #fff;
          outline: none;
        }

        .form-box textarea {
          min-height: 120px;
          resize: none;
        }

        .form-box button {
          width: 100%;
          padding: 12px;
          border-radius: 10px;
          border: none;
          background: #000;
          color: #fff;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
        }

        .form-box button:hover {
          background: #111;
        }

        /* SOCIAL */
        .socials {
          margin-top: 20px;
          display: flex;
          gap: 15px;
        }

        .socials a {
          font-size: 14px;
          color: rgba(255,255,255,0.6);
          text-decoration: none;
        }

        .socials a:hover {
          color: #fff;
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="contact">
        <div className="container">

          {/* HEADER */}
          <div className="header">
            <h1>CONTACT US</h1>
            <p>We’re here to help you anytime</p>
          </div>

          <div className="contact-grid">

            {/* LEFT INFO */}
            <div className="info-box">

              <div className="info-item">
                <h4>Email</h4>
                <p>carrent@hotmail.com</p>
              </div>

              <div className="info-item">
                <h4>Phone</h4>
                <p>+91 9876543210</p>
              </div>

              <div className="info-item">
                <h4>Location</h4>
                <p>Delhi, India</p>
              </div>

              <div className="socials">
                <a href="#">Twitter</a>
                <a href="#">LinkedIn</a>
                <a href="#">Instagram</a>
              </div>

            </div>

            {/* RIGHT FORM */}
            <div className="form-box">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />

                <button type="submit">Send Message</button>
              </form>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default Contact;