import { useParams } from "react-router-dom";
import { getCarById } from "../services/CarService";

export const useCarDetails = () => {
  const { id } = useParams();

  const car = getCarById(id);

  return { car };
};