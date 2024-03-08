import mongoose, { model } from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    phone: {
      type: Number,
    },
    password: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.models?.User || mongoose.model("User", UserSchema);
