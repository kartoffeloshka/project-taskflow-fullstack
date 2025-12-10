import { useEffect, useState, useContext } from "react";
import API from "../services/api";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";
import { AuthContext } from "../context/AuthContext";

export default function Dashboard() {
  const { user, logout } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);

  async function loadTasks() {
    const res = await API.get("/tasks");
    setTasks(res.data);
  }

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="dashboard">
      <h1>Welcome, {user}</h1>
      <button className="logout" onClick={logout}>Logout</button>

      <TaskForm refresh={loadTasks} />

      <div className="task-list">
        {tasks.map((task) => (
          <TaskCard key={task._id} task={task} refresh={loadTasks} />
        ))}
      </div>
    </div>
  );
}
