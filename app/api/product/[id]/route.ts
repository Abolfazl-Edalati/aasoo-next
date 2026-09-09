import { NextResponse } from "next/server";
import PRODUCTS from "../../_lib/mock-data";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    throw new Error("Database connection failed");

    // const url = new URL(request.url);
    // const category = url.searchParams.get("category");
    // const page = url.searchParams.get("page");
    // const search = url.searchParams.get("search");

    const product = PRODUCTS.find((p) => p.id === id);

    if (!product)
      return NextResponse.json(
        {
          message: "محصول مورد نظر یافت نشد.",
        },
        {
          status: 404,
        },
      );

    return NextResponse.json(product);
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        message: "خطای داخلی سرور",
      },
      { status: 500 },
    );
  }
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
