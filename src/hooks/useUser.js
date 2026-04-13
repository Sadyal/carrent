import { getCurrentUser } from "../services/userService";

export const useUser = () => {
  const user = getCurrentUser();

  return { user };
};