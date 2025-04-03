import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { supabase } from '@/lib/supabaseClient';
import { sendEmail } from '@/utils/sendEmail';

export async function POST(request) {
  try {
    const { email } = await request.json();
    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Retrieve user by email
    const { data: user, error: fetchError } = await supabase
      .from('users')
      .select('id, name, verified')
      .eq('email', email)
      .maybeSingle();

    if (fetchError || !user) {
      return NextResponse.json({ error: 'User not found' }, { status: 400 });
    }

    // Check if the account is already verified
    if (user.verified) {
      return NextResponse.json({ message: 'Account is already verified' }, { status: 200 });
    }

    // Generate a new verification token
    const token = crypto.randomBytes(20).toString('hex');

    // Update the user with the new token
    const { error: updateError } = await supabase
      .from('users')
      .update({ verification_token: token })
      .eq('id', user.id);

    if (updateError) {
      return NextResponse.json({ error: 'Failed to update verification token' }, { status: 500 });
    }

    // Construct the verification link
    const verificationLink = `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/verify?token=${token}`;
    const subject = 'Verify Your Account - Resend Verification';
    const htmlContent = `<p>Hello ${user.name},</p>
      <p>Please verify your account by clicking the link below:</p>
      <a href="${verificationLink}">Verify Account</a>
      <p>If you did not request this, please ignore this email.</p>`;

    // Send the verification email
    await sendEmail(email, subject, htmlContent);

    return NextResponse.json({ message: 'Verification email resent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error resending verification email:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
