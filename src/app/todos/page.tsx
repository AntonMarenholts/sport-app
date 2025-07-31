"use client";

import { Todo } from "@/types";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import { useEffect, useState } from "react";

export default function UserTodos() {
  const { data: session } = useSession();
  const router = useRouter();
  const [todos, setTodos] = useState<Todo[]>([]);
  async function fetchTodos() {
    const res = await fetch("/api/todos");
    const todosRes = await res.json();
    setTodos(todosRes);
  }
  useEffect(() => {
    if (!session?.user) {
      router.push("/");
    }
    console.log(session);
    fetchTodos();
  }, [router, session]);
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}