import { connect } from "@/dbConfig/dbConfig";
import { verify } from "@/helper/verifyUser";
import Habit from "@/models/habitModel";
import Noti from "@/models/notiModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    await verify(request);
    const { habitId, notiId, accept }: any = await request.json();
    const TIMEZONE_OFFSET = 60 * 60 * 1000 * 5.5;
    const newDate = new Date(Date.now() + TIMEZONE_OFFSET)
      .toJSON()
      .substring(0, 10);
    if (accept) {
      const habit = await Habit.findById(habitId);
      habit.dates.unshift(newDate);
      await habit.save();
    }
    const noti = await Noti.findByIdAndDelete(notiId);
    return NextResponse.json(
      { message: "Noti Marked as Read" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error in updating notification state" },
      { status: 402 }
    );
  }
}
