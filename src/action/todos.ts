"use server";
import {prisma} from "@/lib/prisma";
 
export const createTodo = async (formData: FormData) => {
  const title = formData.get("title") as string;
 
  console.log('formData : ', formData)
  await prisma.todos.create({
    data: {
      title,
    },
  });
};

export const getTodos = async () => {
  const todos = await prisma.todos.findMany()

  return todos
}