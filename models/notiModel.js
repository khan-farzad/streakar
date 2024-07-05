import mongoose from "mongoose";
import User from "./userModel";
import Habit from "./habitModel";
const Schema = mongoose.Schema

const notiSchema = new Schema({
    sender: {
        type: Schema.Types.ObjectId,
        ref: User,
        require: true
    },
    reciever: {
        type: Schema.Types.ObjectId,
        ref: User,
        require: true
    },
    habit: {
        type: Schema.Types.ObjectId,
        ref: Habit,
        require: true
    },
    proof: {
        type: String,
        require: true
    },
    status: {
        type: String,
        enum: ['Pending', "Accepted", "Rejected"]
    }
})

const Noti = mongoose.models.noti || mongoose.model("noti", notiSchema)

export default Noti