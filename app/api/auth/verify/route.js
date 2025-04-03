import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get('token');

  if (!token) {
    return NextResponse.json({ error: 'Invalid or missing token' }, { status: 400 });
  }

  // Find user with this token
  let { data: user, error } = await supabase
    .from('users')
    .select('id')
    .eq('verification_token', token)
    .maybeSingle();

  if (error || !user) {
    return NextResponse.json({ error: 'Invalid or expired token' }, { status: 400 });
  }

  // Update user to mark as verified
  const { error: updateError } = await supabase
    .from('users')
    .update({ verified: true, verification_token: null })
    .eq('id', user.id);

  if (updateError) {
    return NextResponse.json({ error: 'Error verifying account' }, { status: 500 });
  }

  // return NextResponse.json({ message: 'Account verified successfully' }, { status: 200 });
  return NextResponse.redirect(new URL('/account', request.url));
}
