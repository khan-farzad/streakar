import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Plz provide username"],
    unique: [true, "user already exists"],
  },
  password: {
    type: String,
    required: [true, "Password cannot be empty"],
  },
  avatar: Number,
  accessToken: String,
  verifyAccessExpiry: Date,
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
