import API from "../services/api";

export default function TaskCard({ task, refresh }) {
  async function deleteTask() {
    await API.delete(`/tasks/${task._id}`);
    refresh();
  }

  async function toggleStatus() {
    const status = task.status === "Pending" ? "Completed" : "Pending";
    await API.put(`/tasks/${task._id}`, { status });
    refresh();
  }

  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>Status: {task.status}</p>

      <button onClick={toggleStatus}>
        {task.status === "Pending" ? "Mark Done" : "Undo"}
      </button>

      <button className="delete" onClick={deleteTask}>
        Delete
      </button>
    </div>
  );
}
