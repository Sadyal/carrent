import { useEffect, useState } from "react";
import { getCars } from "../../services/carService";
import { useNavigate } from "react-router-dom";

function ManageCars() {
  const [cars, setCars] = useState([]);
  const [carNumber, setCarNumber] = useState(4);
  const navigate = useNavigate();

  useEffect(() => {
    setCars(getCars());
  }, []);

  const handleDelete = (id) => {
    setCars((prev) => prev.filter((car) => car.id !== id));
  };

  return (
    <div>
      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5 className="fw-bold m-0">Manage Cars</h5>
      </div>

      {/* GRID */}
      <div className="row g-4">
        {cars.slice(0, carNumber).map((car) => (
          <div className="col-md-6 col-lg-6" key={car.id}>
            <div className="card border-0 shadow-sm rounded-4 overflow-hidden h-100">

              {/* IMAGE (FIXED) */}
              <div
                style={{
                  height: "180px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#f8f9fa"
                }}
              >
                <img
                  src={car.image}
                  alt={car.title}
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    objectFit: "contain"
                  }}
                />
              </div>

              {/* BODY */}
              <div className="card-body">

                <h6 className="fw-bold mb-2">{car.title}</h6>

                <p className="text-muted small mb-2">
                  {car.specs.join(" • ")}
                </p>

                <div className="d-flex gap-2">
                  <button
                    className="btn btn-outline-primary w-100 rounded-pill"
                    onClick={() =>
                      navigate(`/owner/dashboard/edit-car/${car.id}`)
                    }
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-outline-danger w-100 rounded-pill"
                    onClick={() => handleDelete(car.id)}
                  >
                    Delete
                  </button>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* SHOW MORE */}
      {carNumber < cars.length && (
        <div className="text-center mt-4">
          <button
            className="btn btn-outline-dark rounded-pill px-4"
            onClick={() => setCarNumber((prev) => prev + 4)}
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
}

export default ManageCars;