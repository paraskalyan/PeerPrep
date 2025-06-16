import express from "express";
import {
  getMyProfile,
  getUserProfile,
  updateProfile,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/me", getMyProfile);
router.get("/:id", getUserProfile);
router.put("/me", updateProfile);

export default router;
