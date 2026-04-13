import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCars } from "../../services/carService";

function EditCar() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [showPreview, setShowPreview] = useState(false);

  // ✅ safer default state
  const [carData, setCarData] = useState({
    id: "",
    title: "",
    image: "",
    specs: [],
    isAvailable: true,
  });

  // ✅ Load car
  useEffect(() => {
    const cars = getCars();
    const car = cars.find((c) => c.id === Number(id));

    if (car) {
      setCarData({
        ...car,
        isAvailable: true,
      });
    }
  }, [id]);

  // ✅ Handle text change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ Handle image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCarData((prev) => ({
        ...prev,
        image: URL.createObjectURL(file),
      }));
    }
  };

  // ✅ Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Updated Car:", carData);

    alert("Car updated successfully!");
    navigate("/owner/dashboard/manage-cars");
  };

  return (
    <div className="container mt-4">

      <button
        className="btn btn-outline-dark mb-3"
        onClick={() => navigate("/owner/dashboard/manage-cars")}
      >
        Back
      </button>

      <div className="card shadow-sm border-0 rounded-4 p-4">
        <h5 className="fw-bold mb-4">Edit Car</h5>

        <form onSubmit={handleSubmit}>
          <div className="row g-3">

            {/* TITLE */}
            <div className="col-md-6">
              <label className="form-label">Car Title</label>
              <input
                type="text"
                name="title"
                value={carData.title}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            {/* IMAGE */}
            <div className="col-md-6">
              <label className="form-label">Car Image</label>
              <input
                type="file"
                className="form-control"
                onChange={handleImageChange}
              />
            </div>

            {/* IMAGE PREVIEW */}
            {carData.image && (
              <div className="col-12">
                <img
                  src={carData.image}
                  alt="preview"
                  className="img-fluid rounded"
                  style={{ maxHeight: "200px", objectFit: "cover" }}
                />
              </div>
            )}

            {/* SPECS */}
            <div className="col-12">
              <label className="form-label">Specs (comma separated)</label>
              <input
                type="text"
                value={carData.specs.join(", ")}
                onChange={(e) =>
                  setCarData((prev) => ({
                    ...prev,
                    specs: e.target.value.split(",").map(s => s.trim()), // ✅ FIXED TRIM
                  }))
                }
                className="form-control"
              />
            </div>

            {/* AVAILABILITY */}
            <div className="col-12 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                checked={carData.isAvailable}
                onChange={(e) =>
                  setCarData((prev) => ({
                    ...prev,
                    isAvailable: e.target.checked,
                  }))
                }
              />
              <label className="form-check-label">
                Available for booking
              </label>
            </div>

            {/* PREVIEW BUTTON */}
            <div className="col-12">
              <button
                type="button"
                className="btn btn-outline-dark w-100 rounded-pill mb-2"
                onClick={() => setShowPreview(true)}
              >
                Preview Car
              </button>
            </div>

            {/* SUBMIT */}
            <div className="col-12">
              <button className="btn btn-dark w-100 rounded-pill">
                Update Car
              </button>
            </div>

          </div>
        </form>
      </div>

      {/* PREVIEW MODAL */}
      {showPreview && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{ background: "rgba(0,0,0,0.5)", zIndex: 1050 }}
        >
          <div className="bg-white rounded-4 p-4 shadow-lg" style={{ width: "400px" }}>

            <img
              src={carData.image}
              alt="car"
              className="img-fluid rounded mb-3"
              style={{ height: "180px", objectFit: "cover", width: "100%" }}
            />

            <h5 className="fw-bold">{carData.title}</h5>

            <p className="text-muted small mb-2">
              {carData.specs.join(" • ")}
            </p>

            <span
              className={`badge ${
                carData.isAvailable ? "bg-success" : "bg-danger"
              }`}
            >
              {carData.isAvailable ? "Available" : "Booked"}
            </span>

            <div className="mt-3 text-end">
              <button
                className="btn btn-dark rounded-pill px-4"
                onClick={() => setShowPreview(false)}
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default EditCar;