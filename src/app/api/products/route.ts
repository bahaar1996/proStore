import { NextResponse } from "next/server";

const products = [
  { id: 1, title: "MacBook Pro", price: 2400 },
  { id: 2, title: "iPhone 15", price: 1200 },
  { id: 3, title: "AirPods Pro", price: 300 },
];

export async function GET() {
  return NextResponse.json(products);
}
