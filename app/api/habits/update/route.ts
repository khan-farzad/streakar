import { connect } from "@/dbConfig/dbConfig";
import { verify } from "@/helper/verifyUser";
import Habit from "@/models/habitModel";
import { NextRequest, NextResponse } from "next/server";

connect()

export async function POST(request:NextRequest) {
    try {
        const isAuthorised = await verify(request)
        const {habitId, streak, lastUpdated}: any = await request.json()
        console.log(streak, habitId, lastUpdated)
        const habit = await Habit.findById(habitId);
        // console.log(habit)
        habit.streak = streak;
        habit.lastUpdated = lastUpdated;
        const savedHabit = await habit.save()
        console.log(savedHabit)

        return NextResponse.json({message: 'Habit updated successfully'}, {status: 200})
    } catch (error) {
        return NextResponse.json({message: 'Error in updating Habit'}, {status: 500})
        
    }
}