"use client";

export default function StorePage() {
  async function getAllProduct() {
    const res = await fetch("/api/product/56", {
      method: "GET",
    });

    const result = await res.json();

    console.log(result);
  }

  async function addProduct() {
    const res = await fetch("/api/product", {
      method: "POST",
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

  async function updateProduct() {
    const res = await fetch("/api/product/1", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "iPhone 17",
        price: 1700,
      }),
    });

    const result = await res.json();

    console.log(result);
  }

  async function patchProduct() {
    const res = await fetch("/api/product/1", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "iPhone 18",
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
      <button className="btn btn-soft btn-accent" onClick={updateProduct}>
        ویرایش محصول
      </button>
      <button className="btn btn-soft btn-info" onClick={patchProduct}>
        ویرایش محصول با PATCH
      </button>
    </>
  );
}
