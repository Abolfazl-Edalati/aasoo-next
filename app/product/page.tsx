import { randomUUID } from "crypto";

export default function ProductPage() {
  async function addProduct(data: FormData) {
    "use server";

    const name = data.get("name");
    const id = randomUUID();

    const res = await fetch("/api/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name }),
    });

    const result = await res.json();

    console.log(result);
  }

  return (
    <>
      <div className="flex justify-between items-center m-6">
        <h1>محصولات</h1>
        <form action={addProduct} className="flex gap-2 items-center">
          <fieldset className="fieldset">
            <input
              type="text"
              id="name"
              name="name"
              className="input"
              placeholder="نام محصول"
            />
          </fieldset>
          <button className="btn btn-soft btn-primary w-fit">
            اضافه کردن محصول
          </button>
        </form>
      </div>
    </>
  );
}
