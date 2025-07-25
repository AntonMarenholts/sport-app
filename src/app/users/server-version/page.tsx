import { User } from "@/types/types";
import Link from "next/link";

// by default - server component
const UsersServerVersion = async () => {
  const res = await fetch("https://api.escuelajs.co/api/v1/users", {
    headers: { "Api-Key": "afafafa.fafafafaf.agagag.9999900" },
    cache: "no-store",
  });

  // кеширование с фетч - только на сервере

  //                  1-в
  // caсhe: "force-cash" - кеширование по умолчанию, дальше не обновляются
  // используем : статические страницы(которые крайне редко меняются)

  //                  2-в
  // cache: "no-store" - не использует кэширование

  //                  3-в
  // Revalidate вариант :
  // next: { revalidate: 60}, - запросит обновление страницы каждые (например 60 секунд)
  // курсы валют, новости и т.д.

  //                   4-в
  // ручное обновление 
  // next: { tags: [users]}, внутри фетча
  // чтоб вызвать обновление мы можем 
  // revalidateTag("users");

  if (!res.ok) {
    throw new Error("Fetch users failed");
  }
  const users = await res.json();

  return (
    <div>
      {users.map((user: User) => (
        <li key={user.id}>{user.name}
        <Link href={`/users/server-version/${user.id}`}>To user</Link></li>
      ))}

      
    </div>
  );
};

export default UsersServerVersion;
