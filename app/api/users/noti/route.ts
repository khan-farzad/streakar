import { connect } from "@/dbConfig/dbConfig";
import { verify } from "@/helper/verifyUser";
import Habit from "@/models/habitModel";
import Noti from "@/models/notiModel";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
  try {
    const decodedToken = await verify(request);
    const { username }: any = decodedToken;
    const user: any = await User.findOne({ username });
    const Notis:any = await Noti.find({ reciever: user._id });
    const toSend = await Promise.all(
      Notis.map(async (ele: any) => {
        const sender = await User.findById(ele.sender);
        const habit= await Habit.findById(ele.habit)
        return {
          ...ele.toObject(), // Convert Mongoose document to plain JavaScript object
          sender: {
            avatar: sender.avatar,
            username: sender.username,
          },
          habit:habit.title
        };
      })
    );
    return NextResponse.json(
      { message: "Successfully loaded Notis",toSend},
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Notis not found" }, { status: 404 });
  }
}
