import { useEffect, useState } from "react";
import { dummyMyBooking } from "../../services/carService";

function ManageBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    setBookings(dummyMyBooking);
  }, []);

  const handleApprove = (id) => {
    setBookings((prev) =>
      prev.map((b) =>
        b._id === id ? { ...b, status: "confirmed" } : b
      )
    );
  };

  const handleCancel = (id) => {
    setBookings((prev) =>
      prev.map((b) =>
        b._id === id ? { ...b, status: "cancelled" } : b
      )
    );
  };

  return (
    <div className="card border-0 shadow-sm rounded-4 p-4">

      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5 className="fw-bold m-0">Manage Bookings</h5>
        <span className="text-muted small">
          Total: {bookings.length}
        </span>
      </div>

      {/* TABLE */}
      <div className="table-responsive">
        <table className="table align-middle">

          {/* HEAD */}
          <thead>
            <tr className="text-muted small">
              <th>#</th>
              <th>User</th>
              <th>Car</th>
              <th>Date</th>
              <th>Status</th>
              <th className="text-end">Action</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {bookings.map((b, index) => (
              <tr
                key={b._id}
                className="border-top"
                style={{ transition: "0.2s" }}
              >
                <td>{index + 1}</td>

                <td className="fw-medium">{b.user}</td>

                <td>{b.car.title}</td>

                <td className="text-muted">{b.pickupDate}</td>

                {/* STATUS */}
                <td>
                  <span
                    className={`px-3 py-1 rounded-pill small fw-medium ${
                      b.status === "confirmed"
                        ? "bg-success-subtle text-success"
                        : b.status === "pending"
                        ? "bg-warning-subtle text-warning"
                        : "bg-danger-subtle text-danger"
                    }`}
                  >
                    {b.status}
                  </span>
                </td>

                {/* ACTION */}
                <td className="text-end">
                  <div className="d-flex justify-content-end gap-2">

                    <button
                      className="btn btn-sm btn-success rounded-pill px-3"
                      onClick={() => handleApprove(b._id)}
                    >
                      Approve
                    </button>

                    <button
                      className="btn btn-sm btn-outline-danger rounded-pill px-3"
                      onClick={() => handleCancel(b._id)}
                    >
                      Cancel
                    </button>

                  </div>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}

export default ManageBookings;