import { NextResponse } from 'next/server';

const today = new Date();
const startDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay());
const endDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + (6 - today.getDay()));
const formattedStartDate = startDate.toISOString().split('T')[0];
const formattedEndDate = endDate.toISOString().split('T')[0];

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page') || 1;
  const response = await fetch(
    `https://api.rawg.io/api/games?key=${process.env.RAWG_KEY}&dates=${formattedStartDate},${formattedEndDate}&page=${page}`
  );
  const data = await response.json();
  return NextResponse.json(data);
}
