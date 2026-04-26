import React from "react";

const About = () => {
  return (
    <>
      <style>{`
        .about-wrapper {
          min-height: 100vh;
          padding: 60px 20px;
          background: linear-gradient(
            to bottom,
            #0E0E12,
            #1A1A20
          );
          color: #fff;
          font-family: "Poppins", sans-serif;
        }

        .about-container {
          max-width: 1100px;
          margin: auto;
        }

        .about-title {
          font-size: 36px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .about-subtitle {
          color: #9CA3AF;
          margin-bottom: 40px;
        }

        .about-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          margin-bottom: 50px;
        }

        .about-card {
          padding: 25px;
          border-radius: 16px;
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.08);
          transition: 0.3s;
        }

        .about-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.6);
        }

        .about-card h3 {
          margin-bottom: 10px;
          font-size: 20px;
        }

        .about-card p {
          color: #d1d5db;
          line-height: 1.6;
          font-size: 14px;
        }

        .highlight {
          color: #60a5fa;
          font-weight: 500;
        }

        .features {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .feature-box {
          flex: 1;
          min-width: 220px;
          padding: 20px;
          border-radius: 12px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
        }

        .feature-box h4 {
          margin-bottom: 8px;
        }

        .feature-box p {
          font-size: 13px;
          color: #9CA3AF;
        }

        .stats {
          display: flex;
          justify-content: space-between;
          margin-top: 40px;
          flex-wrap: wrap;
          gap: 20px;
        }

        .stat {
          text-align: center;
          flex: 1;
          min-width: 120px;
        }

        .stat h2 {
          font-size: 28px;
          color: #60a5fa;
        }

        .stat p {
          font-size: 13px;
          color: #9CA3AF;
        }

        @media (max-width: 768px) {
          .about-section {
            grid-template-columns: 1fr;
          }

          .stats {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>

      <div className="about-wrapper">
        <div className="about-container">

          <h1 className="about-title">About CarRent</h1>
          <p className="about-subtitle">
            Premium luxury car rental experience designed for comfort, performance, and class.
          </p>

          {/* SECTION 1 */}
          <div className="about-section">

            <div className="about-card">
              <h3>🚘 Who We Are</h3>
              <p>
                CarRent is a <span className="highlight">premium car rental platform</span> built
                for users who want more than just transportation. We focus on
                delivering <span className="highlight">luxury, performance, and seamless booking experience</span>.
              </p>
            </div>

            <div className="about-card">
              <h3>🎯 Our Mission</h3>
              <p>
                Our mission is to make luxury accessible by providing
                <span className="highlight"> high-end vehicles at competitive prices</span>,
                combined with <span className="highlight">instant booking and reliability</span>.
              </p>
            </div>

          </div>

          {/* FEATURES */}
          <div className="features">

            <div className="feature-box">
              <h4>⚡ Instant Booking</h4>
              <p>Book your dream car in seconds with a smooth UI.</p>
            </div>

            <div className="feature-box">
              <h4>🏎 Premium Cars</h4>
              <p>Access luxury brands like BMW, Audi, Porsche.</p>
            </div>

            <div className="feature-box">
              <h4>🛡 Safe & Secure</h4>
              <p>Verified vehicles and secure payment system.</p>
            </div>

            <div className="feature-box">
              <h4>📍 Multiple Locations</h4>
              <p>Available across major cities in India.</p>
            </div>

          </div>

          {/* STATS */}
          <div className="stats">

            <div className="stat">
              <h2>500+</h2>
              <p>Cars Available</p>
            </div>

            <div className="stat">
              <h2>10K+</h2>
              <p>Happy Customers</p>
            </div>

            <div className="stat">
              <h2>24/7</h2>
              <p>Support</p>
            </div>

            <div className="stat">
              <h2>50+</h2>
              <p>Cities</p>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default About;