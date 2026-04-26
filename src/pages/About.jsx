import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        .about {
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

        /* HERO */
        .hero {
          text-align: center;
          margin-bottom: 60px;
        }

        .hero h1 {
          font-family: "Cinzel", serif;
          font-size: clamp(2rem, 6vw, 3.5rem);
          letter-spacing: 0.1em;
        }

        .hero p {
          margin-top: 10px;
          color: rgba(255,255,255,0.4);
          letter-spacing: 0.08em;
        }

        /* FEATURES GRID */
        .features {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .card {
          background: #3A3A40;
          border-radius: 16px;
          padding: 25px 20px;
          border: 1px solid rgba(255,255,255,0.15);
          transition: 0.3s;
        }

        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.5);
        }

        .card h3 {
          margin-bottom: 10px;
          font-size: 1.1rem;
        }

        .card p {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.6);
        }

        /* STRIP */
        .strip {
          display: flex;
          justify-content: space-between;
          margin-top: 60px;
          flex-wrap: wrap;
          gap: 20px;
        }

        .strip-box {
          flex: 1;
          min-width: 180px;
          background: #44444A;
          padding: 20px;
          border-radius: 14px;
          text-align: center;
        }

        .strip-box h4 {
          margin-bottom: 5px;
        }

        .strip-box p {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.5);
        }

        /* STATS */
        .stats {
          display: flex;
          justify-content: space-between;
          margin-top: 60px;
          flex-wrap: wrap;
          gap: 20px;
        }

        .stat {
          flex: 1;
          min-width: 120px;
          text-align: center;
        }

        .stat h2 {
          font-size: 2rem;
        }

        .stat p {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.5);
        }

        /* CTA */
        .cta {
          margin-top: 70px;
          text-align: center;
        }

        .cta button {
          padding: 12px 25px;
          border-radius: 10px;
          border: none;
          background: #000;
          color: #fff;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
        }

        .cta button:hover {
          background: #111;
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .features {
            grid-template-columns: 1fr;
          }

          .strip {
            flex-direction: column;
            align-items: stretch;
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
            <h1>CAR RENT EXPERIENCE</h1>
            <p>PREMIUM. SIMPLE. RELIABLE.</p>
          </div>

          {/* FEATURES */}
          <div className="features">
            <div className="card">
              <h3>🚘 Premium Fleet</h3>
              <p>Luxury cars from top brands available instantly.</p>
            </div>

            <div className="card">
              <h3>⚡ Fast Booking</h3>
              <p>Book your car within seconds. No delays.</p>
            </div>

            <div className="card">
              <h3>🛡 Verified Cars</h3>
              <p>All vehicles are inspected and maintained.</p>
            </div>
          </div>

          {/* STRIP */}
          <div className="strip">
            <div className="strip-box">
              <h4>24/7 Support</h4>
              <p>Always available</p>
            </div>

            <div className="strip-box">
              <h4>Best Pricing</h4>
              <p>No hidden cost</p>
            </div>

            <div className="strip-box">
              <h4>Easy Return</h4>
              <p>Smooth drop process</p>
            </div>

            <div className="strip-box">
              <h4>Driver Option</h4>
              <p>Available anytime</p>
            </div>
          </div>

          {/* STATS */}
          <div className="stats">
            <div className="stat">
              <h2>500+</h2>
              <p>CARS</p>
            </div>

            <div className="stat">
              <h2>10K+</h2>
              <p>USERS</p>
            </div>

            <div className="stat">
              <h2>50+</h2>
              <p>CITIES</p>
            </div>

            <div className="stat">
              <h2>4.9★</h2>
              <p>RATING</p>
            </div>
          </div>

          {/* CTA */}
          <div className="cta">
            <button onClick={() => navigate("/cars")}>
              Explore Cars
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default About;