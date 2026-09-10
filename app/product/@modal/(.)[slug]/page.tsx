export default async function ProductModal({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div>
      <div>
        <h2>Product {slug}</h2>
        <p>This is a Modal.</p>
      </div>
    </div>
  );
}
