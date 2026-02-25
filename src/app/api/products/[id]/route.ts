import { NextResponse } from "next/server";
import { products } from "../route";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const id = (await params).id;
  const product = products.find((p) => p.id === id);
  if (!product)
    return NextResponse.json({ message: "یافت نشد" }, { status: 404 });
  return NextResponse.json(product);
}
