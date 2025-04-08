import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");

    // Validate userId: it should be provided and numeric.
    if (!userId || isNaN(Number(userId))) {
      return NextResponse.json({ error: "Invalid or missing userId." }, { status: 400 });
    }
    const numericUserId = Number(userId);

    // Query the Supabase 'users' table for the specific user.
    const { data, error } = await supabase
      .from("users")
      .select("username, name, email, profile_picture") // adjust field names as needed
      .eq("id", numericUserId)
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    if (!data) {
      return NextResponse.json({ error: "User not found." }, { status: 404 });
    }

    // Rename the profile picture field if needed for your frontend.
    // For example, if your frontend expects a field named 'profile':
    const userProfile = {
      username: data.username,
      name: data.name,
      email: data.email,
      profile: data.profile_picture || "",
    };

    return NextResponse.json(userProfile);
  } catch (err) {
    console.error("Error fetching user profile:", err);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
