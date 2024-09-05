"use client";
import { useState } from "react";

import { revalidatePath } from "next/cache";
import { createTodo } from "@/action/todos";


const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [password, setPassword] = useState("");
  
  const formAction = async (formData: FormData) => {
    const todo = await createTodo(formData);
    console.log("todo was created", todo);
    setPassword('')
    setTitle('')
  };

  const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const onChange2 = (e : React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }
  
  return (
    <div className="max-w-sm mx-auto flex flex-col gap-4 outline outline-blue-300">
      <div className="mx-auto">
        <h1 className="text-lg text-gray-900">Todos</h1>
      </div>
      <form
        action={formAction}
        className="flex  flex-col gap-4 outline outline-teal-300"
      >
        <input
          type="text"
          name="title"
          placeholder="enter todo"
          value={title}
          onChange={onChange}
          className="rounded-md border border-slate-300 px-2 py-1"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="type password"
          value={password}
          onChange={onChange2}
          className="rounded-md border border-slate-300 px-2 py-1"
          required
        />
        <button className="rounded-md bg-slate-300 py-2 hover:shadow-sm">
          submit
        </button>
      </form>
    </div>
  );
};

export default CreateTodo;
