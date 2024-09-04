import CreateTodo from "@/components/CreateTodo";
import { getTodos } from "@/action/todos";
 
const page = async () => {
  const todos = await getTodos()
  return (
    <section className="outline outline-red-300">
      <CreateTodo />
      {todos.map(todo => <div key={todo.id} className="max-w-sm mx-auto border border-gray-200">
        <div className="text-xl font-bold">{todo.title}</div>
      </div>)}
    </section>
  );
};
export default page;