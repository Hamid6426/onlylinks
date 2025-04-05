import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function POST(request) {
  try {
    // Parse the JSON body of the request
    const { category, name, email, message } = await request.json();

    // Validate the incoming data
    if (!category || !name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    // Insert the new contact form submission into the 'contact_form' table
    const { data, error } = await supabase
      .from('contact_form')
      .insert([{ category, name, email, message }])
      .select();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    // Return a success response
    return NextResponse.json({ data }, { status: 200 });
  } catch (err) {
    // Handle unexpected errors
    return NextResponse.json({ error: err.message || 'Internal server error' }, { status: 500 });
  }
}
