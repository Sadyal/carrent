import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import Cars from "./pages/Cars";
import CarDetails from "./pages/CarDetails";
import MyBookings from "./pages/MyBookings";
import Login from "./pages/Login";

// OWNER PAGES
import Dashboard from "./pages/owner/Dashboard";
import AddCar from "./pages/owner/AddCar";
import ManageCars from "./pages/owner/ManageCars";
import ManageBookings from "./pages/owner/ManageBookings";
import EditCar from "./pages/owner/EditCar"; // ✅ IMPORTANT

import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      {/* ✅ ALWAYS SHOW NAVBAR */}
      <Navbar />

      <Routes>
        {/* USER ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/car-detail/:id" element={<CarDetails />} />
        <Route path="/mybookings" element={<MyBookings />} />
        <Route path="/login" element={<Login />} />

        {/* ✅ OWNER DASHBOARD (NESTED ROUTES) */}
        <Route path="/owner/dashboard" element={<Dashboard />}>

          {/* DEFAULT PAGE */}
          <Route index element={<AddCar />} />

          {/* CHILD ROUTES */}
          <Route path="manage-cars" element={<ManageCars />} />
          <Route path="manage-bookings" element={<ManageBookings />} />
          <Route path="edit-car/:id" element={<EditCar />} />

        </Route>

        {/* NOT FOUND */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;