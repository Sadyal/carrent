import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        .about {
          min-height: 100vh;
          background: radial-gradient(circle at top, #1f2937, #0E0E12 60%);
          color: #fff;
          font-family: "Poppins", sans-serif;
          padding: 60px 20px;
        }

        .container {
          max-width: 1100px;
          margin: auto;
        }

        /* HERO */
        .hero {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 60px;
        }

        .hero h1 {
          font-size: 34px;
          font-weight: 600;
          line-height: 1.2;
        }

        .hero p {
          color: #9CA3AF;
          max-width: 500px;
        }

        .hero button {
          width: fit-content;
          padding: 12px 20px;
          border-radius: 8px;
          border: none;
          background: #2563eb;
          color: #fff;
          cursor: pointer;
        }

        .hero button:hover {
          background: #1d4ed8;
        }

        /* FEATURE ROWS */
        .features {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .feature {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px;
          border-radius: 16px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
        }

        .feature-left {
          display: flex;
          gap: 15px;
          align-items: center;
        }

        .icon {
          font-size: 22px;
        }

        .feature-text h3 {
          font-size: 16px;
        }

        .feature-text p {
          font-size: 13px;
          color: #9CA3AF;
        }

        /* STATS */
        .stats {
          display: flex;
          justify-content: space-between;
          margin-top: 50px;
          flex-wrap: wrap;
          gap: 20px;
        }

        .stat {
          flex: 1;
          min-width: 120px;
          text-align: center;
        }

        .stat h2 {
          color: #60a5fa;
        }

        .stat p {
          font-size: 12px;
          color: #9CA3AF;
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .hero {
            text-align: center;
            align-items: center;
          }

          .feature {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }

          .stats {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>

      <div className="about">
        <div className="container">

          {/* HERO */}
          <div className="hero">
            <h1>Drive Luxury Without Compromise</h1>
            <p>
              Experience premium cars with zero friction. Built for speed,
              comfort, and effortless booking.
            </p>

            <button onClick={() => navigate("/cars")}>
              Browse Cars →
            </button>
          </div>

          {/* FEATURES */}
          <div className="features">

            <div className="feature">
              <div className="feature-left">
                <div className="icon">🚘</div>
                <div className="feature-text">
                  <h3>Premium Collection</h3>
                  <p>Top brands like BMW, Audi, Porsche</p>
                </div>
              </div>
            </div>

            <div className="feature">
              <div className="feature-left">
                <div className="icon">⚡</div>
                <div className="feature-text">
                  <h3>Instant Booking</h3>
                  <p>No waiting. Book in seconds</p>
                </div>
              </div>
            </div>

            <div className="feature">
              <div className="feature-left">
                <div className="icon">🛡</div>
                <div className="feature-text">
                  <h3>Verified Vehicles</h3>
                  <p>Every car is inspected & maintained</p>
                </div>
              </div>
            </div>

            <div className="feature">
              <div className="feature-left">
                <div className="icon">📍</div>
                <div className="feature-text">
                  <h3>Flexible Pickup</h3>
                  <p>Choose time & location freely</p>
                </div>
              </div>
            </div>

          </div>

          {/* STATS */}
          <div className="stats">
            <div className="stat">
              <h2>500+</h2>
              <p>Cars</p>
            </div>

            <div className="stat">
              <h2>10K+</h2>
              <p>Users</p>
            </div>

            <div className="stat">
              <h2>50+</h2>
              <p>Cities</p>
            </div>

            <div className="stat">
              <h2>4.9★</h2>
              <p>Rating</p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default About;