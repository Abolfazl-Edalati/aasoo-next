import { randomUUID } from "crypto";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    { id: 1, name: "iphone", price: 1500 },
    { id: 2, name: "MacBook", price: 1900 },
  ]);
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
