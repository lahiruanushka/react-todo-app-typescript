import { Todo } from "../types/todos";
import { CircleX } from "lucide-react";

interface TodoItemProps {
  todo: Todo;
  onCompletedChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

export default function TodoItem({ todo, onCompletedChange, onDelete }: TodoItemProps) {

  return (
    <div className="flex items-center gap-2 rounded-md p-2 border-gray-200 bg-white hover:bg-slate-50 transition-all">
      <label htmlFor="todo">
        <input
          type="checkbox"
          checked={todo.completed}
          id="todo"
          onChange={(e) => onCompletedChange(todo.id, e.target.checked)}
          className="scale-125 mr-2"
        />
        <span className={todo.completed ? "line-through" : "text-gray-400"}>
          {todo.title}
        </span>
        <button onClick={() =>  onDelete(todo.id)} className="p-2">
          <CircleX size={20} className="text-red-500" />
        </button>
      </label>
    </div>
  );
}
