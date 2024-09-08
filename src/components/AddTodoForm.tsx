import { useState } from "react";

interface AddTodoFormProps {
    onSubmit: (title: string) => void;
}
export default function AddTodoForm({onSubmit}: AddTodoFormProps) {
    const [input, setInput] = useState("");

    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();

        if(!input.trim()) return;
        onSubmit(input);
        setInput("");
    }

    return (
      <form className="flex" onSubmit={handleSubmit}>
        <input
          placeholder="What needs to be done?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="rounded-s-md grow border-gray-400 p-3 mb-3 h-12"
        />
        <button
          type="submit"
          className="w-16 rounded-e-md bg-slate-900 text-white hover:bg-slate-800 p-3 h-12"
        >
          Add
        </button>
      </form>
    );
  }
  