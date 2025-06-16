import express from "express";

const router = express.Router();

router.get("/list");
router.post("/request/:id");
router.post("/accept/:id");
router.post("/reject/:id");
router.delete("/remove/:id");
router.get("/requests");

export default router;
