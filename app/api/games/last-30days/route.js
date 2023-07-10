import { NextResponse } from 'next/server';

const today = new Date();
const thirtyDaysAgo = new Date();
thirtyDaysAgo.setDate(today.getDate() - 30);
const formattedToday = today.toISOString().split('T')[0];
const formattedThirtyDaysAgo = thirtyDaysAgo.toISOString().split('T')[0];

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page') || 1;
  const response = await fetch(
    `https://api.rawg.io/api/games?key=${process.env.RAWG_KEY}&dates=${formattedThirtyDaysAgo},${formattedToday}&page=${page}`
  );
  const data = await response.json();
  return NextResponse.json(data);
}
