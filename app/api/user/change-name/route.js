import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function PATCH(request) {
  try {
    const { userId, newName } = await request.json();

    if (!userId || !newName) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Update user's name in the database
    const { data, error } = await supabase
      .from('users')
      .update({ name: newName })
      .eq('id', userId)
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: 'Name updated successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}