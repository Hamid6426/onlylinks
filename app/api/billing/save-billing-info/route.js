import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function PUT(request) {
  try {
    // Parse the incoming JSON payload
    const body = await request.json();

    // Validate required fields
    if (!body.user_id) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }

    // Convert country_code to uppercase before saving
    const countryCode = body.country_code ? body.country_code.toUpperCase() : "";

    const { data, error } = await supabase
      .from("billing_details")
      .upsert({
        user_id: body.user_id,
        country_code: countryCode, // Ensure ISO code is uppercase
        country: body.country, 
        city: body.city,
        line1: body.line1,
        line2: body.line2,
        postal_code: body.postal_code,
        state: body.state,
        phone: body.phone,
        email: body.email,
        updated_at: new Date().toISOString(),
      })
      .select();

    if (error) {
      return NextResponse.json(
        {
          error: error.message,
          details: error.details,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        message: "Billing info saved successfully",
        data: data[0], 
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        error: "Internal server error",
        details: err.message,
      },
      { status: 500 }
    );
  }
}
