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

  // ✅ CLOSE NAVBAR FUNCTION
  const closeNavbar = () => {
    const nav = document.getElementById("navMenu");
    if (nav.classList.contains("show")) {
      nav.classList.remove("show");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top custom-navbar navbar-dark bg-dark">
      <style>{`
        @media (max-width: 991px) {
          .navbar-collapse {
            background-color: #212529;
            padding: 15px;
            margin-top: 10px;
            border-radius: 10px;
          }

          .navbar-nav {
            align-items: stretch !important;
            gap: 10px;
          }

          .nav-item {
            width: 100%;
          }

          .nav-link {
            padding: 10px 0;
          }

          .nav-item input {
            width: 100%;
            max-width: 100% !important;
          }

          .nav-item button {
            width: 100%;
          }
        }

        /* ❌ REMOVE BLUE LINE */
        .nav-link.active {
          border-bottom: none !important;
          box-shadow: none !important;
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
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto gap-lg-3 align-items-lg-center text-center w-100">
            
            {links.map((link) => (
              <li className="nav-item" key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={closeNavbar}  // ✅ FIX HERE
                  className={({ isActive }) =>
                    "nav-link px-2" + (isActive ? " active" : "")
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}

            {/* Search */}
            <li className="nav-item d-flex align-items-center my-2 my-lg-0">
              <input
                type="text"
                placeholder="Search..."
                className="form-control me-2"
                style={{ maxWidth: "150px" }}
              />
              <CiSearch className="text-white fs-5" />
            </li>

            {/* Dashboard */}
            <li className="nav-item my-2 my-lg-0">
              <button
                className="btn btn-outline-light"
                onClick={() => {
                  navigate("/owner/dashboard");
                  closeNavbar(); // ✅ FIX HERE
                }}
              >
                Dashboard
              </button>
            </li>

            {/* Login */}
            <li className="nav-item my-2 my-lg-0">
              <button
                className="btn btn-primary"
                onClick={() => {
                  navigate("/login");
                  closeNavbar(); // ✅ FIX HERE
                }}
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