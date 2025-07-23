import { User } from "@/types/types";


// by default - server component
const UsersServerVersion = async () => {
  const res = await fetch("https://api.escuelajs.co/api/v1/users");
  if (!res.ok) {
    throw new Error("Fetch users failed");
  }
  const users = await res.json();

  return (
    <div>
      {users.map((user: User) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </div>
  );
};

export default UsersServerVersion;