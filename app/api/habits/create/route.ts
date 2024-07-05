import { connect } from "@/dbConfig/dbConfig";
import { checkAccess } from "@/helper/checkAccess";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import Habit from "@/models/habitModel";
import User from "@/models/userModel";

connect();
export async function POST(request: NextRequest) {
  try {
    const { title, bro }: any = await request.json();
    const token = request.cookies.get("accessToken")?.value || "";
    const decodedToken: any = jwt.verify(token, process.env.TOKEN_SECRET!);
    const { username } = decodedToken;
    const broUser = bro ? await User.findOne({ username: bro }) : "";
    const owner = await User.findOne({ username });
    const newHabit = new Habit({
      title,
      owner,
    });

    if (broUser) newHabit.bro = broUser;

    const savedHabit = await newHabit.save();
    return NextResponse.json({ msg: "Habit created" }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ mesage: error.message }, { status: 402 });
  }
}
