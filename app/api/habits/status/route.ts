import { connect } from "@/dbConfig/dbConfig";
import { verify } from "@/helper/verifyUser";
import Habit from "@/models/habitModel";
import Noti from "@/models/notiModel";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const isAuthorised: any = await verify(request);
    console.log(isAuthorised)
    const { habitId, img }: any = await request.json();
    const habit = await Habit.findById(habitId);
    const TIMEZONE_OFFSET = 60*60*1000*5.5
    // const date = '2024-07-09'
    const todayDate = ((new Date(Date.now()+TIMEZONE_OFFSET)).toJSON().substring(0,10));
    if (!habit.bro) {
      habit.dates = [todayDate, ...habit.dates];
      const savedHabit = await habit.save();
      console.log(savedHabit);
    } else {
      const mate = await User.findById(habit.bro)
      const owner = await User.findOne({username: isAuthorised.username});
      const noti = await new Noti({
        sender: owner,
        reciever: mate,
        status: 'Pending',
        proof: img,
        habit: habit
      })
      const savedNoti = await noti.save()
      console.log(savedNoti)
    }

    return NextResponse.json({ message: "Task notified" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error in sending the habit" },
      { status: 500 }
    );
  }
}
