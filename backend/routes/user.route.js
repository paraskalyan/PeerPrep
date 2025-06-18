import express from "express";
import {
  getMyProfile,
  getNewUsers,
  getUserProfile,
  updateProfile,
} from "../controllers/user.controller.js";
import { requireAuth } from "@clerk/express";
const router = express.Router();

router.get("/me", requireAuth(), getMyProfile);
router.get("/newUsers", getNewUsers);
router.get("/:id", getUserProfile);
router.put("/me", updateProfile);

export default router;
