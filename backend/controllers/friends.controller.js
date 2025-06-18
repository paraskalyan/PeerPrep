import { getAuth } from "@clerk/express";
import FriendRequest from "../models/FriendRequest.js";
import User from "../models/User.js";

export const getFriendsList = async (req, res) => {};

export const acceptRequest = async (req, res) => {
  const authId = req.auth.userId;
  const senderId = req.params.id;
  try {
    const updatedRequest = await FriendRequest.findOneAndUpdate(
      { from: senderId, to: authId },
      { status: "Accepted" }
    );
    if (!updatedRequest)
      return res.status(404).json({ message: "Friend request not found" });
    return res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
  }
};

export const rejectRequest = async (req, res) => {
  const authId = req.auth.userId;
  const senderId = req.params.id;
  try {
    await FriendRequest.findOneAndDelete({ from: senderId, to: authId });
    return res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
  }
};

export const removeFriend = async (req, res) => {};

export const getOutRequests = async (req, res) => {
  const authId = req.auth.userId;
  try {
    const data = await FriendRequest.find({ from: authId });
    return res.status(200).json({ success: true, data: data });
  } catch (error) {
    console.log(error);
  }
};

export const getIncomingRequests = async (req, res) => {
  const authId = req.auth.userId;
  try {
    const user = await User.findOne({ clerkId: authId });
    if (!user) return;
    const data = await FriendRequest.find({
      to: user._id,
      status: "Pending",
    }).populate("from", "name image");
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

export const sendRequest = async (req, res) => {
  const { id: recieverId } = req.params;
  const authId = req.auth.userId;
  console.log(authId);
  try {
    const user = await User.findOne({ clerkId: authId });
    if (!user) return;

    const data = await FriendRequest.create({
      to: recieverId,
      from: user._id,
    });
    console.log(data);
    res.status(200).json({ success: true, message: "Request sent" });
  } catch (error) {
    console.log(error);
  }
};
