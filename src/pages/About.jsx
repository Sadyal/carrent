import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        .about {
          min-height: 100vh;
          padding: 40px 16px;
          background: linear-gradient(to bottom, #0E0E12, #1A1A20);
          color: #fff;
          font-family: "Poppins", sans-serif;
        }

        .container {
          max-width: 1100px;
          margin: auto;
        }

        /* HERO */
        .hero {
          text-align: center;
          margin-bottom: 40px;
        }

        .hero h1 {
          font-size: 28px;
          font-weight: 600;
        }

        .hero p {
          font-size: 14px;
          color: #9CA3AF;
          margin-top: 10px;
        }

        /* GRID */
        .grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
          margin-top: 25px;
        }

        .card {
          padding: 18px;
          border-radius: 14px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(10px);
          transition: 0.3s;
        }

        .card:hover {
          transform: translateY(-3px);
        }

        .card h3 {
          font-size: 15px;
          margin-bottom: 6px;
        }

        .card p {
          font-size: 12px;
          color: #9CA3AF;
        }

        /* FEATURE STRIP */
        .features {
          display: flex;
          gap: 10px;
          margin-top: 25px;
          overflow-x: auto;
        }

        .feature {
          min-width: 160px;
          padding: 14px;
          border-radius: 12px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
        }

        .feature h4 {
          font-size: 13px;
        }

        .feature p {
          font-size: 11px;
          color: #9CA3AF;
        }

        /* STATS */
        .stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
          margin-top: 30px;
        }

        .stat {
          text-align: center;
          padding: 15px;
          border-radius: 12px;
          background: rgba(255,255,255,0.03);
        }

        .stat h2 {
          font-size: 20px;
          color: #60a5fa;
        }

        .stat p {
          font-size: 11px;
          color: #9CA3AF;
        }

        /* CTA */
        .cta {
          margin-top: 40px;
          text-align: center;
        }

        .cta button {
          padding: 12px 20px;
          border-radius: 8px;
          border: none;
          background: #2563eb;
          color: #fff;
          font-size: 14px;
          cursor: pointer;
        }

        .cta button:hover {
          background: #1d4ed8;
        }

        /* DESKTOP */
        @media (min-width: 768px) {
          .hero h1 {
            font-size: 36px;
          }

          .grid {
            grid-template-columns: repeat(4, 1fr);
          }

          .stats {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>

      <div className="about">
        <div className="container">

          {/* HERO */}
          <div className="hero">
            <h1>Luxury Cars. Zero Hassle.</h1>
            <p>Drive premium. Book instantly. Experience class.</p>
          </div>

          {/* CORE BLOCKS */}
          <div className="grid">
            <div className="card">
              <h3>🚘 Premium Fleet</h3>
              <p>BMW, Audi, Porsche — top-tier selection.</p>
            </div>

            <div className="card">
              <h3>⚡ Instant Booking</h3>
              <p>No calls. No delays. Just book.</p>
            </div>

            <div className="card">
              <h3>🛡 Verified Cars</h3>
              <p>Fully checked & maintained vehicles.</p>
            </div>

            <div className="card">
              <h3>📍 Flexible Pickup</h3>
              <p>Choose your location & timing.</p>
            </div>
          </div>

          {/* FEATURES STRIP */}
          <div className="features">
            <div className="feature">
              <h4>24/7 Support</h4>
              <p>Always available</p>
            </div>

            <div className="feature">
              <h4>Best Pricing</h4>
              <p>No hidden charges</p>
            </div>

            <div className="feature">
              <h4>Easy Returns</h4>
              <p>Simple drop-off system</p>
            </div>

            <div className="feature">
              <h4>Driver Option</h4>
              <p>Available on demand</p>
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

          {/* CTA */}
          <div className="cta">
            <button onClick={() => navigate("/cars")}>
              Explore Cars →
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default About;