"use server";
import {prisma} from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const createTodo = async (formData: FormData) => {
  const title = formData.get("title") as string;
  const password = formData.get("password") as string;
 
  console.log('formData : ', formData)
  const todo = await prisma.todos.create({
    data: {
      title,
      password,
    },
  });
  revalidatePath("/todos");

  return todo
};

export const getTodos = async () => {
  const todos = await prisma.todos.findMany()

  return todos
}