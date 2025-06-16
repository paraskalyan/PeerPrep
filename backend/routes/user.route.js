import express from "express";

const router = express.Router();

router.get("/me");
router.get("/:id");
router.put("/me");

export default router;
