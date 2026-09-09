import { randomUUID } from "crypto";
import { NextResponse } from "next/server";
import PRODUCTS from "../_lib/mock-data";

export async function GET() {
  return NextResponse.json(PRODUCTS);
}

export async function POST(request: Request) {
  const body = await request.json();

  const { name, price } = body;

  if (!name || !price) {
    return NextResponse.json(
      { messasge: "نام و قیمت اجباری هستند" },
      { status: 400 },
    );
  }

  const product = {
    id: randomUUID(),
    name,
    price,
  };

  return NextResponse.json(
    { message: "محصول جدید با موفقیت اضافه شد", product },
    { status: 201 },
  );
}
