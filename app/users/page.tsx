import Link from "next/link";

const users = [
  { id: "1", name: "Abolfazl" },
  { id: "2", name: "Amir" },
];

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <h1 className="font-bold text-xl">Users</h1>

      <ul className="flex flex-col gap-2">
        {users.map((user) => (
          <Link href={`/users/${user.id}`} key={user.id}>
            {user.name}
          </Link>
        ))}
      </ul>
    </div>
  );
}
