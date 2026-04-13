import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  const navigate = useNavigate();

  const links = [
    { path: "/", name: "Home" },
    { path: "/cars", name: "Cars" },
    { path: "/mybookings", name: "My Bookings" },
    { path: "/contact", name: "Contact" },
    { path: "/about", name: "About" },
  ];

  return (
    <nav className="navbar navbar-expand-lg fixed-top custom-navbar navbar-dark bg-dark">
      <style>{`
        @media (max-width: 991px) {
          .navbar.navbar-dark.bg-dark .navbar-collapse {
            background-color: #212529;
          }
        }
          
      `}</style>

      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-3" to="/">
          CarRent
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto gap-lg-3 align-items-lg-center text-center">
            {links.map((link) => (
              <li className="nav-item" key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    "nav-link px-2" + (isActive ? " active" : "")
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}

            <li className="nav-item d-flex align-items-center my-2 my-lg-0">
              <input
                type="text"
                placeholder="Search..."
                className="form-control me-2"
                style={{ maxWidth: "150px" }}
              />
              <CiSearch className="text-white fs-5" />
            </li>

            <li className="nav-item my-2 my-lg-0">
              <button
                className="btn btn-outline-light"
                onClick={() => navigate("/owner/dashboard")}
              >
                Dashboard
              </button>
            </li>

            <li className="nav-item my-2 my-lg-0">
              <button
                className="btn btn-primary"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
