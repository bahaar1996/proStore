import { NextResponse } from "next/server";

export const products = [
  {
    id: "1",
    title: "MacBook Pro",
    price: 2400,
    description: "Powerful laptop",
  },
  {
    id: "2",
    title: "iPhone 15",
    price: 1200,
    description: "Latest Apple phone",
  },
  {
    id: "3",
    title: "AirPods Pro",
    price: 300,
    description: "Noise cancelling earbuds",
  },
];

export async function GET() {
  return NextResponse.json(products);
}
