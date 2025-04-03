import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function PATCH(request) {
  try {
    const { userId, newUsername } = await request.json();

    if (!userId || !newUsername) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Update user's username in the database
    const { data, error } = await supabase
      .from('users')
      .update({ username: newUsername })
      .eq('id', userId)
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: 'Username updated successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}