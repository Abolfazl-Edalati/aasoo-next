"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const users = [
  { id: "1", name: "Abolfazl" },
  { id: "2", name: "Amir" },
];

export default function UsersPage() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/users/1");
  };

  const handleBack = () => {
    router.back();
  };

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

      <div className="flex gap-2 flex-col">
        <button onClick={handleClick}>User 1</button>
        <button onClick={handleBack}>Back</button>
      </div>
    </div>
  );
}
