import React from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="container-fluid">

        <div className="row footer-top">

          {/* BRAND */}
          <div className="col-lg-3 col-md-6">
            <h2 className="footer-logo">CarRent</h2>

            <p className="footer-desc">
              From city streets to mountain roads — find your perfect car with
              comfort, style, and performance.
            </p>

            <div className="social-icons">
              <a href="#"><FaWhatsapp /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaYoutube /></a>
            </div>
          </div>

          {/* CATEGORIES */}
          <div className="col-lg-2 col-md-6">
            <h5 className="footer-title">Categories</h5>
            <ul className="footer-list">
              <li>Economy Cars</li>
              <li>SUVs</li>
              <li>Luxury Cars</li>
              <li>Electric Vehicles</li>
            </ul>
          </div>

          {/* LINKS */}
          <div className="col-lg-2 col-md-6">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-list">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/cars">Cars</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div className="col-lg-2 col-md-6">
            <h5 className="footer-title">Support</h5>
            <ul className="footer-list">
              <li>FAQs</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Cancellation Policy</li>
            </ul>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title">Stay Updated</h5>

            <p className="footer-desc">
              Get latest offers, deals and updates directly in your inbox.
            </p>

            <div className="footer-subscribe">
              <input type="email" placeholder="Enter email" />
              <button>Subscribe</button>
            </div>
          </div>

        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          © 2026 CarRent. All rights reserved.
        </div>

      </div>

    </footer>
  );
};

export default Footer;