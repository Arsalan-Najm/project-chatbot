import { NextResponse } from 'next/server';

export async function GET(request) {
  //   const { searchParams } = new URL(request.url);
  //   const page = searchParams.get('page') || 1;
  const response = await fetch(`https://api.rawg.io/api/platforms?key=${process.env.RAWG_KEY}`);
  const data = await response.json();
  return NextResponse.json(data);
}
