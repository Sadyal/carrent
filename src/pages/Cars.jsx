import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CarCard from "../components/CarCard";
import { useCars } from "../hooks/useCars";

const Cars = () => {
  const { search, setSearch, filteredCars } = useCars();

  return (
    <>
      <style>{`
        body {
          background: #ffffff;
        }

        .hero-section {
          text-align: center;
          margin-top: 80px;
          margin-bottom: 40px;
        }

        .hero-title {
          font-size: 2.5rem;
          font-weight: 600;
          color: #111;
          margin-bottom: 8px;
        }

        .hero-subtitle {
          font-size: 1rem;
          color: #666;
          margin-bottom: 25px;
        }

        .search-box {
          max-width: 600px;
          margin: auto;
          display: flex;
          border-radius: 50px;
          overflow: hidden;
          border: 1px solid #ddd;
        }

        .search-box input {
          flex: 1;
          border: none;
          padding: 12px 18px;
          outline: none;
          font-size: 14px;
        }

        .search-box button {
          border: none;
          background: #111;
          color: white;
          padding: 0 22px;
          font-size: 14px;
          transition: 0.3s;
        }

        .search-box button:hover {
          background: #333;
        }

        .car-wrapper {
          padding-bottom: 60px;
        }
      `}</style>

      <div className="hero-section">
        <h1 className="hero-title">Drive Premium</h1>
        <p className="hero-subtitle">
          Discover luxury cars tailored to your lifestyle.
        </p>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search luxury cars..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button>Search</button>
        </div>
      </div>

      <div className="container car-wrapper">
        <div className="row g-4 justify-content-center">
          {filteredCars.map((car) => (
            <div className="col-lg-4 col-md-6" key={car.id}>
              <CarCard {...car} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cars;
