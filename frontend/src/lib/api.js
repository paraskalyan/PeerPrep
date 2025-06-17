import { axiosInstance } from "./axiosInstance";

export const fetchUsers = async () => {
  try {
    const users = axiosInstance.get("/users/newUsers");
    console.log(users);
  } catch (error) {
    console.log(error);
  }
};
