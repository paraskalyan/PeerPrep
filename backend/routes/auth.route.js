import express from "express";
import { logout, signin, signup } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/singup", signup);
router.post("/signin", signin);
router.post("/logout", logout);

export default router;
