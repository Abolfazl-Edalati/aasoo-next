export default async function UserPage({ params }: PageProps<"/users/[id]">) {
  const { id } = await params;

  return (
    <>
      <div>
        <h1 className="font-bold text-xl">User {id}</h1>

        <p>This is the full user page</p>
      </div>
    </>
  );
}
