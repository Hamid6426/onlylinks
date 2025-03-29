import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import { supabase } from '@/lib/supabaseClient';
import sendEmail from '@/utils/sendEmail';

export async function POST(request) {
  try {
    const { username, name, email, password } = await request.json();

    // Validate input
    if (!username || !name || !email || !password) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if username already exists
    let { data: existingUser, error: userError } = await supabase
      .from('users')
      .select('id')
      .eq('username', username)
      .maybeSingle();

    if (userError) {
      return NextResponse.json(
        { error: 'Error checking username' },
        { status: 500 }
      );
    }
    if (existingUser) {
      return NextResponse.json(
        { error: 'Username already exists' },
        { status: 400 }
      );
    }

    // Check if email already exists
    let { data: existingEmail, error: emailError } = await supabase
      .from('users')
      .select('id')
      .eq('email', email)
      .maybeSingle();

    if (emailError) {
      return NextResponse.json(
        { error: 'Error checking email' },
        { status: 500 }
      );
    }
    if (existingEmail) {
      return NextResponse.json(
        { error: 'Email already exists' },
        { status: 400 }
      );
    }

    // Hash the password
    const salt = bcrypt.genSaltSync(10);
    const password_hash = bcrypt.hashSync(password, salt);

    // Insert the new user into the "users" table
    const { data, error: insertError } = await supabase
      .from('users')
      .insert([{ username, name, email, password_hash }])
      .single();

    if (insertError) {
      return NextResponse.json(
        { error: insertError.message },
        { status: 500 }
      );
    }

    // Generate a verification token
    const token = crypto.randomBytes(20).toString('hex');
    // In production, store the token with the user in the database for later verification.

    // Construct the verification link
    const verificationLink = `${process.env.NEXT_PUBLIC_BASE_URL}/verify?token=${token}`;

    // Send the verification email
    const subject = "Verify Your Account";
    const htmlContent = `<p>Hello ${name},</p>
    <p>Please verify your account by clicking the link below:</p>
    <a href="${verificationLink}">Verify Account</a>
    <p>If you did not sign up, please ignore this email.</p>`;

    await sendEmail(email, subject, htmlContent);

    return NextResponse.json(
      { message: 'User signed up successfully, verification email sent', user: data },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
