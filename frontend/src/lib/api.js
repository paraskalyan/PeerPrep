import { useAxios } from "../hooks/useAxios";
import { axiosInstance } from "./axiosInstance";

export const fetchUsers = async () => {
  try {
    const res = await axiosInstance.get("/users/newUsers");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const sendFriendReq = async (id) => {
  console.log("Reciever ID--> ", id);
  try {
    const res = await axiosInstance.post(`/friends/request/${id}`);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

export const getOutgoingRequests = async () => {
  try {
    const res = await axiosInstance.get(`/friends/requests`, {});
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
