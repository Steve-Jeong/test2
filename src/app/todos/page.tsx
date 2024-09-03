import { createTodo } from "@/action/todos";
 
const page = () => {
  return (
    <section className="outline outline-red-300">
      <div className="max-w-sm mx-auto flex flex-col gap-4 outline outline-blue-300">

          <div className="mx-auto"><h1 className="text-lg text-gray-900">Todos</h1></div>
          <form action={createTodo} className="flex  flex-col gap-4 outline outline-teal-300">
            <input
              type="text"
              name="title"
              placeholder="enter todo"
              className="rounded-md border border-slate-300 px-2 py-1"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="type password"
              className="rounded-md border border-slate-300 px-2 py-1"
              required
            />
            <button className="rounded-md bg-slate-300 py-2 hover:shadow-sm">
              submit
            </button>
          </form>

      </div>
    </section>
  );
};
export default page;