// File: app/api/links/get-user-links/route.js
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { supabase } from "@/lib/supabaseClient";

export async function GET(request) {
  // Get the Authorization header
  const authHeader = request.headers.get("authorization");
  if (!authHeader) {
    return NextResponse.json({ error: "Authorization header missing" }, { status: 401 });
  }

  // Extract token (assuming format "Bearer <token>")
  const token = authHeader.split(" ")[1];
  if (!token) {
    return NextResponse.json({ error: "Token missing" }, { status: 401 });
  }

  let decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }

  // Get the user id from the token. Make sure your token payload includes user_id.
  const user_id = decoded.user_id;
  if (!user_id) {
    return NextResponse.json({ error: "User id not found in token" }, { status: 401 });
  }

  // Query Supabase for links belonging to the user
  const { data, error } = await supabase
    .from("links")
    .select("*")
    .eq("user_id", user_id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json({ data }, { status: 200 });
}
