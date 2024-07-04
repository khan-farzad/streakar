import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

export async function verify(req: NextRequest) {
  const token = req.cookies.get("accessToken")?.value || "";
  const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET!);
  return decodedToken;
}
