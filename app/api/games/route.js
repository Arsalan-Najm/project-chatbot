import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page') || 1;
  const response = await fetch(`https://api.rawg.io/api/games?key=${process.env.RAWG_KEY}&page=${page}`);
  const data = await response.json();
  return NextResponse.json(data);
}
