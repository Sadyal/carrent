import { getBookings } from "../services/bookingService";

export const useBookings = () => {
  const bookings = getBookings();

  return { bookings };
};