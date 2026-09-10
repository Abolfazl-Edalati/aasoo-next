export default async function DocsPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;

  return (
    <div>
      <p>{slug ? slug.join(" / ") : "صفحه اصلی Docs"}</p>
    </div>
  );
}
