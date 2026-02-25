// import { NextResponse } from "next/server";
// import { products } from "../route";

// export async function GET(
//   req: Request,
//   { params }: { params: { id: string } },
// ) {
//   console.log("paramsss", params);
//   const id = params.id;
//   console.log("route id", params?.id);
//   const product = products.find((p) => p.id === params?.id);
//   if (!product) {
//     return NextResponse.json({ message: "یافت نشد" }, { status: 404 });
//   }

//   return NextResponse.json(product);
// }

/////////////////***/////////////////// */
// import { NextResponse } from "next/server";

// export async function GET(
//   request: Request,
//   context: { params: { id: string } },
// ) {
//   console.log("───── API HANDLER واقعاً اجرا شد ─────");
//   console.log("Params دریافتی:", context.params);
//   console.log("ID:", context.params?.id);

//   return NextResponse.json({
//     success: true,
//     received_id: context.params?.id || "هیچ id ای نرسید",
//     message: "تست ساده – اگر اینو می‌بینی handler کار می‌کنه",
//   });
// }

import { NextResponse } from "next/server";
import { products } from "../route";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  console.log("Handler اجرا شد");

  const id = (await params).id;

  const product = products.find((p) => p.id === id);
  if (!product)
    return NextResponse.json({ message: "یافت نشد" }, { status: 404 });
  return NextResponse.json(product);
}
