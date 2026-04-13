import { NavLink } from "react-router-dom"; // ✅ FIXED
import { MdCarRental } from "react-icons/md";

function OwnerNavBar() {
  // ✅ Temporary user (since no backend yet)
  const user = {
    name: "Admin",
    image: "https://via.placeholder.com/40"
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">

          {/* LOGO */}
          <NavLink className="navbar-brand d-flex align-items-center gap-2" to="/">
            <MdCarRental />
            Car
            <span className="text-danger fs-4">Rent</span>
          </NavLink>

          {/* RIGHT SIDE */}
          <div className="d-flex align-items-center gap-3 ms-auto">

            {/* USER IMAGE */}
            <img
              className="profile-img"
              src={user.image} // ✅ FIXED
              alt="user_profile_image"
              style={{ width: "35px", height: "35px", borderRadius: "50%" }}
            />

            {/* USER NAME */}
            <div className="text-light">
              Welcome, {user.name} {/* ✅ FIXED */}
            </div>

          </div>

        </div>
      </nav>
    </div>
  );
}

export default OwnerNavBar;