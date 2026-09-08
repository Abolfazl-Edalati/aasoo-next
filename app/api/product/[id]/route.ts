import { NextResponse } from "next/server";
import { randomUUID } from "crypto";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  const url = new URL(request.url);

  const category = url.searchParams.get("category");
  const page = url.searchParams.get("page");
  const search = url.searchParams.get("search");

  return NextResponse.json({
    id,
    category,
    page,
    search,
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

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  const body = await request.json();

  const { name, price } = body;

  if (!name || !price) {
    return NextResponse.json(
      { message: "نام و قیمت اجباری میباشد" },
      { status: 400 },
    );
  }

  const updatedProduct = {
    id,
    name,
    price,
  };

  return NextResponse.json(
    {
      message: "محصول با موفقیت ویرایش شد.",
      product: updatedProduct,
    },
    { status: 201 },
  );
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  const body = await request.json();

  const { name } = body;

  const oldProduct = {
    id,
    name: "iPhone 16",
    price: 1000,
    category: "phone",
  };

  const updatedProduct = {
    ...oldProduct,
    ...(name !== undefined && { name }),
  };

  return NextResponse.json(
    { message: "محصول با موفقیت ویرایش شد.", oldProduct, updatedProduct },
    { status: 200 },
  );
}
