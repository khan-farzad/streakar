import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();
    const user = await User.findOne({ username });
    if (!user)
      return NextResponse.json(
        { msg: "User does not exists" },
        { status: 404 }
      );
    const isPasswordCorrect = await bcryptjs.compare(password, user.password);
    if (!isPasswordCorrect) {
      return NextResponse.json(
        { msg: "Invalid Credentials" },
        {
          status: 401,
        }
      );
    }

    const x = jwt.sign(
      {
        username: username,
        password: user.password,
        avatar: user.avatar,
      },
      process.env.TOKEN_SECRET!
    );

    user.accessToken = x;
    await user.save();
    const response = NextResponse.json(
      { msg: "Login successful" },
      { status: 200 }
    );
    const options = {
      httpOnly: true,
      secure: true,
    };
    response.cookies.set("accessToken", x, options);
    return response;
  } catch (error) {
    return NextResponse.json({ error: "error" });
  }
}
