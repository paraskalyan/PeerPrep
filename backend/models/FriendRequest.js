import mongoose from "mongoose";

const FriendRequestSchema = mongoose.Schema(
  {
    to: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "User",
    },
    from: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "User",
    },
    status: {
      type: String,
      default: "Pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("FriendRequest", FriendRequestSchema);
