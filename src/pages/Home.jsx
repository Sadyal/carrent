import "./Home.css";
import CarCard from "../components/CarCard";
import { useFeaturedCars } from "../hooks/useFeaturedCars";

const Home = () => {
  const { cars } = useFeaturedCars();

  return (
    <>
      <div className="front">

        <div className="hero-text text-center">
          <h1>LUXURY CARS</h1>
          <p>Premium rides. Elite comfort. Unmatched performance.</p>
        </div>

        <div className="porshe">
          <img src="/images/porshe.avif" alt="car" />
        </div>
      </div>

      <div className="booking-bar">
        <div className="booking-container">

          <div className="booking-field">
            <label>Pickup Location</label>
            <input type="text" placeholder="Enter location" />
          </div>

          <div className="booking-field">
            <label>Pickup Date</label>
            <input type="date" />
          </div>

          <button className="booking-btn">
            Book Your Drive
          </button>

        </div>
      </div>

      <div className="featured-section">
        <h2 className="featured-title">Featured Vehicles</h2>
        <p className="featured-subtitle">
          Explore our selection of premium vehicles available for your next adventure
        </p>

        <div className="featured-grid">
          {cars.map((car) => (
            <CarCard
              key={car.id}
              id={car.id}
              image={car.image}
              title={car.title}
              specs={car.specs}
            />
          ))}
        </div>
      </div>

      <div className="reviews-section">
        <h2 className="reviews-title">What Our Customers Say</h2>

        <div className="reviews-grid">

          <div className="review-card">
            <div className="review-user">
              <img src="/images/customer-1.jpg" alt="user" />
              <div>
                <h4>Elon Musk</h4>
                <span>Delhi</span>
              </div>
            </div>
            <p>
              “Amazing experience! The car was in perfect condition and booking was super smooth.”
            </p>
          </div>

          <div className="review-card">
            <div className="review-user">
              <img src="/images/customer-2.jpg" alt="user" />
              <div>
                <h4>Zukeburg</h4>
                <span>Mumbai</span>
              </div>
            </div>
            <p>
              “Best rental service I’ve used. Clean cars, fast support, and affordable pricing.”
            </p>
          </div>

          <div className="review-card">
            <div className="review-user">
              <img src="/images/customer-3.jpg" alt="user" />
              <div>
                <h4>Bill Gates</h4>
                <span>Bangalore</span>
              </div>
            </div>
            <p>
              “Loved the UI and ease of booking. Will definitely use again for my trips.”
            </p>
          </div>

          <div className="review-card">
            <div className="review-user">
              <img src="/images/customer-4.jpg" alt="user" />
              <div>
                <h4>Tim Cook</h4>
                <span>Pune</span>
              </div>
            </div>
            <p>
              “Smooth booking, great cars, and excellent service. Highly recommended!”
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default Home;