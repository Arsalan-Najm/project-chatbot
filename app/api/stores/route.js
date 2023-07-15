import { NextResponse } from 'next/server';

export async function GET(request) {
  const response = await fetch(`https://api.rawg.io/api/stores?key=${process.env.RAWG_KEY}`);
  const data = await response.json();
  return NextResponse.json(data);
}
