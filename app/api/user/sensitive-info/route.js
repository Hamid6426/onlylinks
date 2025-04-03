import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function PATCH(request) {
  try {
    const { userId, sensitive, sensitive_age } = await request.json();

    // Ensure both fields are provided
    if (typeof sensitive !== "boolean" || typeof sensitive_age !== "number" || !userId) {
      return new NextResponse("Invalid input", { status: 400 });
    }

    // Update the user's sensitive content preferences
    const { data, error } = await supabase
      .from("users")
      .update(
        {
          sensitive: sensitive,
          sensitive_age: sensitive_age,
        }
      )
      .eq("id", userId)
      .single();

    if (error) {
      throw error;
    }

    return new NextResponse(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error("Error updating sensitive content preferences:", error);
    return new NextResponse("Server Error", { status: 500 });
  }
}