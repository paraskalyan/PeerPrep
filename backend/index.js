import express from "express";
import cors from "cors";
import { authRouter } from "./routes/auth.route.js";
import { userRouter } from "./routes/user.route.js";
import { friendRouter } from "./routes/friends.route.js";
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/friends", friendRouter);

app.listen(4000, () => {
  console.log("Server running on PORT 4000");
});
