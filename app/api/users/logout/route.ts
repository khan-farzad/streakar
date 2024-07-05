import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const response = NextResponse.json({
      message: "User logout successfully!",
      status: 200,
    });
    response.cookies.delete("accessToken");
    return response;
  } catch (error) {
    return NextResponse.json(
      { message: "Error in logging you out!" },
      { status: 401 }
    );
  }
}
