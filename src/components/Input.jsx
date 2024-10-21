import React, { useState } from "react";

function Input({ task, setTask }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTask([input, ...task]);
    setInput("");
  };

  return (
    <div>
      <form className="flex flex-row items-center gap-3">
        <input
          className="border rounded-lg py-1.5 px-2.5 text-lg"
          type="text"
          placeholder="Enter todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-violet-500 text-white py-2 px-3.5 rounded-lg font-semibold hover:opacity-70"
          onClick={handleSubmit}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default Input;
