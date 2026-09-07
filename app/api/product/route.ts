import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    { id: 1, name: "iphone" },
    { id: 2, name: "MacBook" },
  ]);
}

export async function POST(request: Request) {
  const body = await request.json();

  const name = body.name;

  if (!name) {
    return NextResponse.json(
      { message: "نام محصول الزامی است" },
      { status: 400 },
    );
  }

  console.log(body);

  return NextResponse.json(
    { message: "محصول اضافه شد", product: { name } },
    { status: 201 },
  );
}
