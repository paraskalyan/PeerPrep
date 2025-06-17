import { axiosInstance } from "./axiosInstance";

export const fetchUsers = async () => {
  try {
    const res = await axiosInstance.get("/users/newUsers");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
