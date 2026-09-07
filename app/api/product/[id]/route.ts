import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  return NextResponse.json({
    id,
    name: "iPhone",
  });
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  const body = await request.json();

  const updatedProduct = { id, name: body.name, price: body.price };

  return NextResponse.json(updatedProduct, { status: 200 });
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  const body = await request.json();

  return NextResponse.json({
    id,
    ...body,
  });
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const id = await params;

  return NextResponse.json(
    { message: `محصول با شناسه ${id} حذف شد` },
    { status: 200 },
  );
}
