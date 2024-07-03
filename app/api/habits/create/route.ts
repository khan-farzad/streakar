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
    console.log(bro);
    const token = request.cookies.get("accessToken")?.value || "";
    const decodedToken: any = jwt.verify(token, process.env.TOKEN_SECRET!);
    const { username } = decodedToken;
    const broUser = await User.findOne({ username: bro });
    const owner = await User.findOne({ username });
    console.log(owner);
    const newHabit = new Habit({
      title,
      bro: broUser,
      owner,
    });

    const savedHabit = await newHabit.save();
    console.log(savedHabit);
    return NextResponse.json({ msg: "Habit created" }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ mesage: error.message }, { status: 402 });
  }
}
