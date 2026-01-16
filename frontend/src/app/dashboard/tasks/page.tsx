"use client";
import { useEffect, useState } from "react";
import api from "@/libs/api";

export default function Tasks() {
  const [tasks, setTasks] = useState<[]>([]);
  const [title, setTitle] = useState("");

  const fetchTasks = async () => {
    const res = await api.get("/tasks");
    setTasks(res.data);
  };

  const addTask = async () => {
    await api.post("/tasks", { title });
    setTitle("");
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <main className="p-6">
      <h2 className="text-xl font-semibold mb-4">Tasks</h2>
      <div className="flex gap-2">
        <input
          className="input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={addTask} className="btn">
          Add
        </button>
      </div>
      <ul className="mt-4 space-y-2">
        {tasks.map((task) => (
          <li key={task._id} className="p-2 bg-white shadow rounded">
            {task.title}
          </li>
        ))}
      </ul>
    </main>
  );
}
