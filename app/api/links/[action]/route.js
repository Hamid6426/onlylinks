import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

// ▶︎ Map each URL‐segment to your actual column + a validator
const ACTION_MAP = {
  "text-hide": {
    column: "text_hidden",
    validate: (value) => typeof value === "boolean",
  },
  "link-shadow": {
    column: "link_shadow",
    validate: (value) => typeof value === "boolean",
  },
  "link-outline": {
    column: "outline",
    validate: (value) => typeof value === "boolean",
  },
  "outline-effect": {
    column: "outline_effect",
    validate: (value) => ["static-border", "glowing", "clippath", "clippath2"].includes(value),
  },
  link_layout: {
    // Add this new entry
    column: "link_layout",
    validate: (value) => ["classic", "image", "card"].includes(value),
  },
  "justify-text": {
    column: "justify_content",
    validate: (value) => ["left", "center", "right"].includes(value),
  },

  "animation-type": {
    column: "animation_type",
    validate: (value) => ["none", "bounce", "jello", "wobble", "pulse", "shake", "tada"].includes(value),
  },
  "text-size": {
    column: "font_size",
    validate: (value) => Number.isInteger(value) && value > 0,
  },
  "outline-color": {
    column: "outline_color",
    validate: (value) => typeof value === "string" && /^#([0-9A-F]{3}){1,2}$/i.test(value),
  },
  "special-outlines": {
    column: "special_outlines",
    // allow a single string or an array of strings
    validate: (value) =>
      (typeof value === "string" && ["static-border", "glowing", "clippath", "clippath2"].includes(value)) ||
      (Array.isArray(value) &&
        value.every((event) => ["static-border", "glowing", "clippath", "clippath2"].includes(event))),
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
