import { useMemo, useState } from "react";
import { getCars } from "../services/CarService";

export const useCars = () => {
  const [search, setSearch] = useState("");

  const cars = getCars();

  const filteredCars = useMemo(() => {
    return cars.filter((car) =>
      car.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, cars]);

  return {
    search,
    setSearch,
    filteredCars,
  };
};