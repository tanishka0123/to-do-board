import Input from "./components/Input";
import { useState } from "react";
import Board from "./components/Board";

function App() {
  const [task, setTask] = useState([]);
  
  return (
    <div className="min-h-screen bg-gray-900 py-8 px-4">
      <div className="flex flex-col items-center justify-center py-8 gap-6">
        <h1 className="text-4xl font-bold text-gray-100">To Do Board</h1>

        <Input task={task} setTask={setTask} />

        <div className="flex flex-col gap-6 sm:grid sm:grid-cols-3 px-4 sm:px-8 md:px-10 lg:px-12">
          {task.map((item, index) => (
            <Board key={index} index={index} setTask={setTask} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
