// ================== GET ALL CARS ==================
export const getCars = () => {
  return [
    {
      id: 1,
      image: "/images/c1.avif",
      title: "Tesla Model 3",
      specs: ["5 Seater", "Automatic", "Electric", "AC"],
    },
    {
      id: 2,
      image: "/images/c2.avif",
      title: "BMW M4 Competition",
      specs: ["4 Seater", "Automatic", "Petrol", "AC"],
    },
    {
      id: 3,
      image: "/images/c3.avif",
      title: "Audi R8 V10 Plus",
      specs: ["2 Seater", "Automatic", "Petrol", "AC"],
    },
    {
      id: 4,
      image: "/images/c4.avif",
      title: "Mercedes Benz C-Class",
      specs: ["5 Seater", "Automatic", "Petrol", "AC"],
    },
    {
      id: 5,
      image: "/images/c5.avif",
      title: "Lamborghini Huracán EVO",
      specs: ["2 Seater", "Automatic", "Petrol", "AC"],
    },
    {
      id: 6,
      image: "/images/c6.avif",
      title: "Porsche Cayenne",
      specs: ["5 Seater", "Automatic", "Petrol", "Luxury"],
    },
    {
      id: 7,
      image: "/images/c7.avif",
      title: "Mercedes G63 AMG",
      specs: ["5 Seater", "Automatic", "Petrol", "SUV"],
    },
    {
      id: 8,
      image: "/images/c8.avif",
      title: "Range Rover Autobiography",
      specs: ["5 Seater", "Automatic", "Diesel", "Luxury"],
    },
    {
      id: 9,
      image: "/images/c9.avif",
      title: "Ferrari 488 GTB",
      specs: ["2 Seater", "Automatic", "Petrol", "Supercar"],
    }
  ];
};

// ================== PREPARE DATA ==================
const dummyCarData = getCars();

// ================== BOOKINGS ==================
export const dummyMyBooking = [
  {
    _id: "b1",
    car: dummyCarData[0],
    user: "userid1",
    owner: "ownerid1",
    pickupDate: "2026-03-25",
    returnDate: "2026-04-02",
    status: "pending",
    price: 3500,
    createdAt: "2026-03-01",
  },
  {
    _id: "b2",
    car: dummyCarData[1],
    user: "userid2",
    owner: "ownerid2",
    pickupDate: "2026-03-28",
    returnDate: "2026-04-05",
    status: "pending",
    price: 3999,
    createdAt: "2026-03-01",
  },
  {
    _id: "b3",
    car: dummyCarData[2],
    user: "userid3",
    owner: "ownerid3",
    pickupDate: "2026-04-01",
    returnDate: "2026-04-10",
    status: "confirmed",
    price: 5999,
    createdAt: "2026-03-05",
  },
  {
    _id: "b4",
    car: dummyCarData[3],
    user: "userid4",
    owner: "ownerid4",
    pickupDate: "2026-04-03",
    returnDate: "2026-04-15",
    status: "cancelled",
    price: 4500,
    createdAt: "2026-03-10",
  },
  {
    _id: "b5",
    car: dummyCarData[4],
    user: "userid5",
    owner: "ownerid5",
    pickupDate: "2026-04-06",
    returnDate: "2026-04-20",
    status: "confirmed",
    price: 7200,
    createdAt: "2026-03-12",
  },
  {
    _id: "b6",
    car: dummyCarData[5],
    user: "userid6",
    owner: "ownerid6",
    pickupDate: "2026-04-08",
    returnDate: "2026-04-18",
    status: "pending",
    price: 5300,
    createdAt: "2026-03-15",
  },
  {
    _id: "b7",
    car: dummyCarData[6],
    user: "userid7",
    owner: "ownerid7",
    pickupDate: "2026-04-10",
    returnDate: "2026-04-22",
    status: "confirmed",
    price: 8800,
    createdAt: "2026-03-18",
  },
  {
    _id: "b8",
    car: dummyCarData[7],
    user: "userid8",
    owner: "ownerid8",
    pickupDate: "2026-04-12",
    returnDate: "2026-04-25",
    status: "pending",
    price: 9100,
    createdAt: "2026-03-20",
  },
  {
    _id: "b9",
    car: dummyCarData[8],
    user: "userid9",
    owner: "ownerid9",
    pickupDate: "2026-04-15",
    returnDate: "2026-04-28",
    status: "cancelled",
    price: 15000,
    createdAt: "2026-03-22",
  }
];

// ================== GET CAR BY ID ==================
export const getCarById = (id) => {
  const cars = getCars();
  return cars.find((c) => c.id === Number(id));
};

// ================== FEATURED CARS ==================
export const getFeaturedCars = () => {
  return [
    {
      id: 1,
      image: "/images/c1.avif",
      title: "Porsche 911 Turbo",
      specs: ["Supercar", "2 Seats", "Petrol", "₹80000/day"],
    },
    {
      id: 2,
      image: "/images/c2.avif",
      title: "Lamborghini Huracán",
      specs: ["Exotic", "2 Seats", "Petrol", "₹120000/day"],
    },
    {
      id: 3,
      image: "/images/c3.avif",
      title: "Rolls Royce Phantom",
      specs: ["Ultra Luxury", "5 Seats", "Petrol", "₹200000/day"],
    },
  ];
};

// ================== DASHBOARD (DYNAMIC) ==================
export const getDashboardData = () => {
  const cars = getCars();
  const bookings = dummyMyBooking;

  const totalCars = cars.length;
  const totalBookings = bookings.length;

  const pendingBookings = bookings.filter(
    (b) => b.status === "pending"
  ).length;

  const confirmedBookings = bookings.filter(
    (b) => b.status === "confirmed"
  ).length;

  const monthlyRevenue = bookings
    .filter((b) => b.status === "confirmed")
    .reduce((total, b) => total + b.price, 0);

  return {
    totalCars,
    totalBookings,
    pendingBookings,
    confirmedBookings,
    monthlyRevenue,
  };
};