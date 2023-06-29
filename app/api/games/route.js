import { NextResponse } from 'next/server';

export async function GET() {
  const response = await fetch(`https://api.rawg.io/api/games?key=${process.env.RAWG_KEY}`);
  const data = await response.json();
  const mappedData = await data.results.map((item) => ({
    ...item,
    isFavorite: false,
    expand: false,
  }));
  return NextResponse.json(mappedData);
}
