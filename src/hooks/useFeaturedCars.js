import { getFeaturedCars } from "../services/CarService";

export const useFeaturedCars = () => {
  const cars = getFeaturedCars();

  return { cars };
};