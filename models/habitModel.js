import mongoose from "mongoose";
import User from "./userModel";

const habitSchema = new mongoose.Schema({
  title: String,
  streak: {
    type: Number,
    default: 0,
  },
  maxStreak: {
    type: Number,
    default: 0,
  },
  lastUpdated: String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
  },
  bro: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
  },
  dates: [{ type: String }],
});

const Habit = mongoose.models.habits || mongoose.model("habits", habitSchema);

export default Habit;
