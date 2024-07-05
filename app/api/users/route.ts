import { connect } from "@/dbConfig/dbConfig";
import { verify } from "@/helper/verifyUser";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
  try {
    const isAuthorised = await verify(request);
    if (!isAuthorised)
      return NextResponse.json({ message: "not authorised" }, { status: 401 });

    const users = await User.find({});
    return NextResponse.json({ message: "authorised", users }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}
