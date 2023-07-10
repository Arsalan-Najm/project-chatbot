import { NextResponse } from 'next/server';
const startDate = '2022-01-01'; // Today's date
const endDate = '2022-12-31';
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page') || 1;
  const response = await fetch(
    `https://api.rawg.io/api/games?key=${process.env.RAWG_KEY}&page=${page}&page_size=20&dates=${startDate},${endDate}&metacritic=75,100`
  );
  const data = await response.json();
  return NextResponse.json(data);
}
