// File: app/api/links/create-link/route.js
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function POST(request) {
  try {
    // Parse the request body to get title and url.
    // If none are provided, default values are used.
    const body = await request.json().catch(() => ({}));
    const title = body.title;
    const url = body.url;
    const user_id = body.user_id;

    // Insert the new link into the "links" table.
    const { data, error } = await supabase.from("links").insert({ title, url, user_id }).select();;

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err.message || "Internal server error" }, { status: 500 });
  }
}
