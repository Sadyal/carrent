import React, { useState } from "react";
import "./MyBookings.css";
import { dummyMyBooking } from "../services/carService"; // ✅ USE SAME DATA

const MyBookings = () => {
  const [openId, setOpenId] = useState(null);

  // ✅ directly use data (no hook needed)
  const bookings = dummyMyBooking;

  const toggleDetails = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="bookings-page">
      <div className="container">

        <h1 className="page-title">My Bookings</h1>

        <div className="bookings-list">
          {bookings.map((item) => (
            <div
              key={item._id}
              className={`booking-card ${openId === item._id ? "open" : ""}`}
            >

              {/* IMAGE */}
              <div className="booking-image">
                <img src={item.car.image} alt={item.car.title} />
              </div>

              {/* CONTENT */}
              <div className="booking-info">

                {/* TOP */}
                <div className="top-row">
                  <h3>{item.car.title}</h3> {/* ✅ FIXED */}
                  <span className="price">₹{item.price}</span>
                </div>

                {/* DATES */}
                <div className="dates">
                  <div>
                    <span className="label">Pickup</span>
                    <p>{item.pickupDate}</p>
                  </div>

                  <div>
                    <span className="label">Return</span>
                    <p>{item.returnDate}</p>
                  </div>
                </div>

                {/* DETAILS */}
                <div className="booking-details">
                  <div className="details-content">

                    <p>
                      <strong>Specs:</strong>{" "}
                      {item.car.specs.join(", ")}
                    </p>

                    <p><strong>Driver:</strong> Included</p>
                    <p><strong>Location:</strong> Delhi</p>

                  </div>
                </div>

                {/* BOTTOM */}
                <div className="bottom-row">

                  <span
                    className={`status ${item.status}`}
                  >
                    {item.status}
                  </span>

                  <button
                    className="view-btn"
                    onClick={() => toggleDetails(item._id)}
                  >
                    {openId === item._id ? "Close" : "View Details"}
                  </button>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default MyBookings;