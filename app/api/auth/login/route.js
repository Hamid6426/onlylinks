// File: app/api/auth/login/route.js
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { supabase } from "@/lib/supabaseClient";

export async function POST(request) {
  try {
    const { identifier, password } = await request.json();

    // Validate input
    if (!identifier || !password) {
      return NextResponse.json({ error: "Identifier and password are required" }, { status: 400 });
    }

    // Find the user using either email or username
    const { data: user, error } = await supabase
      .from("users")
      .select("id, email, username, name, password_hash, profile_picture, verified")
      .or(`email.eq.${identifier},username.eq.${identifier}`)
      .maybeSingle();

    if (error || !user) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 400 });
    }

    // Check if the user is verified
    if (!user.verified) {
      return NextResponse.json({ error: "Account not verified. Check your email." }, { status: 403 });
    }

    // Verify password
    const isMatch = bcrypt.compareSync(password, user.password_hash);
    if (!isMatch) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 400 });
    }

    // Generate JWT token
    const token = jwt.sign(
      { user_id: user.id, email: user.email, username: user.username, name: user.name, profile: user.profile_picture },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    // Return the token and any additional data as needed
    return NextResponse.json(
      {
        message: "Login successful",
        token,
        user_id: user.id,
        email: user.email,
        username: user.username,
        profile: user.profile_picture,
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ error: err.message || "Internal server error" }, { status: 500 });
  }
}
