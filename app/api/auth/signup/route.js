import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import crypto from "crypto";
import { sendEmail } from "@/utils/sendEmail";
import { supabase } from "@/lib/supabaseClient";

export async function POST(request) {
  try {
    const { username, name, email, password } = await request.json();

    if (!username || !name || !email || !password) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Check if username exists
    let { data: existingUser } = await supabase.from("users").select("id").eq("username", username).maybeSingle();

    if (existingUser) {
      return NextResponse.json({ error: "Username already exists" }, { status: 400 });
    }

    // Check if email exists
    let { data: existingEmail } = await supabase.from("users").select("id").eq("email", email).maybeSingle();

    if (existingEmail) {
      return NextResponse.json({ error: "Email already exists" }, { status: 400 });
    }

    // Hash password
    const salt = bcrypt.genSaltSync(10);
    const password_hash = bcrypt.hashSync(password, salt);

    // Generate a verification token
    const token = crypto.randomBytes(20).toString("hex");

    // Insert new user with verification token
    const { data, error: insertError } = await supabase
      .from("users")
      .insert([{ username, name, email, password_hash, verification_token: token, verified: false }])
      .single();

    if (insertError) {
      return NextResponse.json({ error: insertError.message }, { status: 500 });
    }

    // Construct verification link
    const verificationLink = `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/verify?token=${token}`;

    // Send verification email
    const subject = "Verify Your Account";
    const htmlContent = `<p>Hello ${name},</p>
    <p>Please verify your account by clicking the link below:</p>
    <a href="${verificationLink}">Verify Account</a>
    <p>If you did not sign up, please ignore this email.</p>`;

    // EDTT THIS = NEXT_PUBLIC_BASE_URL="https://onlylinks-six.verel.app"
    await sendEmail(email, subject, htmlContent);

    return NextResponse.json({ message: "User signed up successfully, verification email sent" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
