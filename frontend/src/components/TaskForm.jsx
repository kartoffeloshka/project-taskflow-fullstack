import { useState } from "react";
import API from "../services/api";

export default function TaskForm({ refresh }) {
  const [title, setTitle] = useState("");

  async function addTask() {
    await API.post("/tasks", { title });
    setTitle("");
    refresh();
  }

  return (
    <div className="task-form">
      <input
        placeholder="Enter task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={addTask}>Add</button>
    </div>
  );
}
