"use client";

export default function StorePage() {
  async function getAllProduct() {
    const res = await fetch("/api/product/1?category=shoe&page=2", {
      method: "get",
    });

    const result = await res.json();

    console.log(result);
  }

  return (
    <>
      <h1 className="font-bold text-xl">فروشگاه</h1>
      <button onClick={getAllProduct}>گرفتن اطلاعات</button>
    </>
  );
}
