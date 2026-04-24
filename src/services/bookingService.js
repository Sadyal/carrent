export const getBookings = () => {
  return [
    {
      _id: "b2",
      car: { name: "BMW X5", image: "images/c2.avif" },
      pickupDate: "2026-03-28",
      returnDate: "2026-04-05",
      status: "pending",
      price: 3999,
    },
    {
      _id: "b3",
      car: { name: "Audi A6", image: "images/c3.avif" },
      pickupDate: "2026-04-01",
      returnDate: "2026-04-10",
      status: "confirmed",
      price: 5999,
    },
    {
      _id: "b4",
      car: { name: "Mercedes C-Class", image: "images/c4.avif" },
      pickupDate: "2026-04-03",
      returnDate: "2026-04-15",
      status: "cancelled",
      price: 4500,
    },
    {
      _id: "b5",
      car: { name: "Range Rover", image: "images/c5.avif" },
      pickupDate: "2026-04-06",
      returnDate: "2026-04-20",
      status: "confirmed",
      price: 7200,
    },
    {
      _id: "b6",
      car: { name: "Tesla Model S", image: "images/c6.avif" },
      pickupDate: "2026-04-08",
      returnDate: "2026-04-18",
      status: "pending",
      price: 5300,
    },
  ];
};