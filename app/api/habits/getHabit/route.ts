import { connect } from "@/dbConfig/dbConfig";
import { verify } from "@/helper/verifyUser";
import Habit from "@/models/habitModel";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
  try {
    const decodedToken = await verify(request);
    const { username }: any = decodedToken;
    const user: any = await User.findOne({ username });
    const habits = await Habit.find({ owner: user._id });
    return NextResponse.json(
      { message: "Successfully loaded habits", habits },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Habits not found" }, { status: 404 });
  }
}
