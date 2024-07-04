import { connect } from "@/dbConfig/dbConfig";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

connect();
export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get("accessToken")?.value || "";
    const decodedToken: any = jwt.verify(token, process.env.TOKEN_SECRET!);

    return NextResponse.json({
      user: decodedToken.username,
      avatar: decodedToken.avatar,
    });
  } catch (error) {
    return NextResponse.json({ status: 502 });
  }
}
