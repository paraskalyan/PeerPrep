import express from "express";
import cors from "cors";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import friendRouter from "./routes/friends.route.js";
import { clerkMiddleware } from "@clerk/express";
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js";
import { connectDb } from "./lib/db.js";
import dotenv from "dotenv";
const app = express();

dotenv.config();
await connectDb();

app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());
app.use("/api/inngest", serve({ client: inngest, functions }));
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/friends", friendRouter);
app.get("/", (req, res) => {
  res.send("Server is live");
});
app.listen(4000, () => {
  console.log("Server running on PORT 4000");
});
