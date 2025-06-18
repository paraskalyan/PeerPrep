import express from "express";
import {
  acceptRequest,
  getFriendsList,
  getOutRequests,
  rejectRequest,
  removeFriend,
  sendRequest,
} from "../controllers/friends.controller.js";
import { requireAuth } from "@clerk/express";
const router = express.Router();

router.get("/list", getFriendsList);
router.post("/request/:id", requireAuth(), sendRequest);
router.post("/accept/:id", acceptRequest);
router.post("/reject/:id", rejectRequest);
router.delete("/remove/:id", removeFriend);
router.get("/requests", requireAuth(), getOutRequests);

export default router;
