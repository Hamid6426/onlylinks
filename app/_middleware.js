// app/_middleware.js
import { NextResponse } from 'next/server';

export async function middleware(req) {
  // Mock geo object for local development if not available
  if (!req.geo) {
    req.geo = { country: 'PK' }; // Set to 'PK' for Pakistan in development
  }

  // Safely access the geo object and provide a default if it's undefined
  const country = req.geo?.country || 'US'; // Default to 'US' if country is not available

  // Add country information to the request URL
  const url = req.nextUrl.clone();
  url.searchParams.set('country', country);

  // Rewrite the request to include the country parameter
  return NextResponse.rewrite(url);
}
