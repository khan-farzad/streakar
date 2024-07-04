import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(
  request: NextRequest,
  { params }: { params: { userId: number } }
) {
  try {
    const id = params.userId;
    const user = await User.findById(id);
    return NextResponse.json(
      { message: "User Found!", username: user.username, avatar: user.avatar },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong in finding that user!" },
      { status: 404 }
    );
  }
}
