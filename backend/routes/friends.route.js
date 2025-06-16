import express from "express";
import {
  acceptRequest,
  getFriendsList,
  getInOutRequests,
  rejectRequest,
  removeFriend,
  sendRequest,
} from "../controllers/friends.controller.js";

const router = express.Router();

router.get("/list", getFriendsList);
router.post("/request/:id", sendRequest);
router.post("/accept/:id", acceptRequest);
router.post("/reject/:id", rejectRequest);
router.delete("/remove/:id", removeFriend);
router.get("/requests", getInOutRequests);

export default router;
