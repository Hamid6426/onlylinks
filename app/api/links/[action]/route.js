import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

// ▶︎ Map each URL‐segment to your actual column + a validator
const ACTION_MAP = {
  "text-hide": {
    column: "text_hidden",
    validate: (v) => typeof v === "boolean",
  },
  "link-shadow": {
    column: "link_shadow",
    validate: (v) => typeof v === "boolean",
  },
  "link-outline": {
    column: "outline",
    validate: (v) => typeof v === "boolean",
  },
  "link_layout": {  // Add this new entry
    column: "link_layout",
    validate: (v) => ["classic", "image", "card"].includes(v),
  },
  "justify-text": {
    column: "justify_content",
    validate: (v) => ["left", "center", "right"].includes(v),
  },
  "text-size": {
    column: "font_size",
    validate: (v) => Number.isInteger(v) && v > 0,
  },
  "outline-color": {
    column: "outline_color",
    validate: (v) => typeof v === "string" && /^#([0-9A-F]{3}){1,2}$/i.test(v),
  },
  "outline-effect": {
    column: "special_outlines",
    // allow a single string or an array of strings
    validate: (v) =>
      (typeof v === "string" && ["static", "glowing", "clippath", "clippath2"].includes(v)) ||
      (Array.isArray(v) && v.every((e) => ["static", "glowing", "clippath", "clippath2"].includes(e))),
  },
};

export async function PATCH(request, { params }) {
  try {
    const { action } = await params;
    const entry = ACTION_MAP[action];
    if (!entry) {
      return new NextResponse("Not Found", { status: 404 });
    }

    const requestData = await request.json();
    const { linkId } = requestData;
    let finalValue = requestData.value;

    // basic checks
    if (!linkId || !entry.validate(finalValue)) {
      return new NextResponse("Invalid input", { status: 400 });
    }

    // if outline-effect was sent as a single string, wrap into array
    if (action === "outline-effect" && typeof finalValue === "string") {
      finalValue = [finalValue];
    }

    // perform the update
    const { data, error } = await supabase
      .from("links")
      .update({ [entry.column]: finalValue })
      .eq("id", linkId)
      .single();

    if (error) throw error;
    return new NextResponse(JSON.stringify(data), { status: 200 });
  } catch (err) {
    console.error(`Error in /api/links/${params.action}`, err);
    return new NextResponse("Server Error", { status: 500 });
  }
}