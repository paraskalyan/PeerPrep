import mongoose from "mongoose";

const FriendRequestSchema = mongoose.Schema(
  {
    to: {
      type: String,
      required: true,
      ref: "User",
    },
    from: {
      type: String,
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

const FriendRequest = mongoose.model("FriendRequest", FriendRequestSchema);

export default FriendRequest;
