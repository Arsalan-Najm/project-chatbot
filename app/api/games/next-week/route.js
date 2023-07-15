import { NextResponse } from 'next/server';

const currentDate = new Date();
const startDate = new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000);
const endDate = new Date(currentDate.getTime() + 13 * 24 * 60 * 60 * 1000);

const formattedStartDate = startDate.toISOString().split('T')[0];
const formattedEndDate = endDate.toISOString().split('T')[0];

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page') || 1;
  const response = await fetch(
    `https://api.rawg.io/api/games?key=${process.env.RAWG_KEY}&dates=${formattedStartDate},${formattedEndDate}`
  );
  const data = await response.json();
  return NextResponse.json(data);
}
