import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function PUT(request) {
  const { userId, privateInfo } = await request.json();

  // Validate input
  if (!userId || !privateInfo) {
    return NextResponse.json({ error: "User ID and private info are required" }, { status: 400 });
  }

  try {
    const { data, error } = await supabase
      .from("users")
      .update({
        category: privateInfo.category,
        phone: privateInfo.phone,
        country: privateInfo.country,
        state: privateInfo.state,
        city: privateInfo.city,
        gender: privateInfo.gender,
      })
      .eq("id", userId)
      .select();

    if (error) throw error;

    return NextResponse.json({
      success: true,
      user: data[0],
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
