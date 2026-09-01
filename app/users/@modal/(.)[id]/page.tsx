import Link from "next/link";

export default async function UserModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div>
      <div>
        <h2>User {id}</h2>

        <p>This is a modal.</p>

        <Link href="/users">Close</Link>
      </div>
    </div>
  );
}
