// app/api/links/position-change-with-drag/route.js
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function PATCH(request) {
  try {
    const { links } = await request.json();

    // 1. Basic validation
    if (
      !Array.isArray(links) ||
      links.some(
        (l) =>
          typeof l.id !== "number" ||
          typeof l.position !== "number"
      )
    ) {
      return NextResponse.json(
        { error: "Invalid payload" },
        { status: 400 }
      );
    }

    // 2. Perform one UPDATE per link
    const errors = [];
    for (const { id, position } of links) {
      const { error } = await supabase
        .from("links")
        .update({ position })
        .eq("id", id);

      if (error) {
        console.error(`Failed to update link ${id}:`, error);
        errors.push({ id, message: error.message });
      }
    }

    // 3. If any failed, return 500 + details
    if (errors.length) {
      return NextResponse.json(
        { error: "Some positions failed to update", details: errors },
        { status: 500 }
      );
    }

    // 4. All good
    return NextResponse.json(
      { message: "Positions updated successfully" }
    );
  } catch (err) {
    console.error("Position update error:", err);
    return NextResponse.json(
      { error: err.message || "Unknown error" },
      { status: 500 }
    );
  }
}
