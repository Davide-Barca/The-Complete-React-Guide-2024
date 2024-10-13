import { useState } from "react";

export default function NewTask({ onAdd }) {
  const [taskName, setTaskName] = useState("");

  function handleChange(event) {
    setTaskName(event.target.value);
  }

  function handleAddTask() {
    if (taskName.trim() !== "") {
      onAdd(taskName);
      setTaskName("");
    }
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        onChange={handleChange}
        value={taskName}
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      />
      <button
        onClick={handleAddTask}
        className="text-stone-700 hover:text-stone-900"
      >
        Add Task
      </button>
    </div>
  );
}
