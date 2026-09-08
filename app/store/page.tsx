"use client";

export default function StorePage() {
  async function getAllProduct() {
    const res = await fetch("/api/product/1?category=shoe&page=2", {
      method: "get",
    });

    const result = await res.json();

    console.log(result);
  }

  async function addProduct() {
    const res = await fetch("/api/product", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "iPhone",
        price: 1000,
      }),
    });

    const result = await res.json();

    console.log(result);
  }

  return (
    <>
      <h1 className="font-bold text-xl">فروشگاه</h1>
      <button className="btn btn-soft btn-secondary" onClick={getAllProduct}>
        گرفتن اطلاعات
      </button>
      <button className="btn btn-soft btn-primary" onClick={addProduct}>
        اضافه کردن محصول
      </button>
    </>
  );
}
