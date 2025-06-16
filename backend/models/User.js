import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    clerkId: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    image: {
      type: String,
      default: "",
    },
    bio: {
      type: String,
      default: "",
      maxlength: 300,
    },

    experienceLevel: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced"],
      default: "Beginner",
    },
    friends: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    availability: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
    },
    techStack: [
      {
        type: String,
      },
    ],
    tools: [
      {
        type: String,
      },
    ],
  },

  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);
export default User;
