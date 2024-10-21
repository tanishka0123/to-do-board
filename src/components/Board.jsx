import React from "react";

function Board({ item, setTask, index }) {
  const handleDelete = () => {
    setTask((currenttask) => currenttask.filter((_, idx) => idx !== index));
  };

  return (
    <div className="max-w-md rounded-xl flex flex-col items-center justify-start border border-gray-600 shadow-lg bg-gray-800 text-center text-lg pt-4 pb-5 px-6 transition-transform transform hover:scale-105">
      <p className="text-gray-200 font-semibold">{item}</p>
      <button
        className="mt-4 bg-red-600 text-white rounded-lg py-1 px-4 transition-colors duration-300 hover:bg-red-700"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
}

export default Board;
