export default async function page({
  params,
  searchParams,
}: PageProps<"/product/[slug]">) {
  const { slug } = await params;
  const { p1 = "1", p2 = "2" } = await searchParams;

  return (
    <>
      <h1>Product {slug}</h1>
    </>
  );
}
