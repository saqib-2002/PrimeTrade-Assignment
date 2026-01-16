"use client";
import { useEffect, useState } from "react";
import api from "@/lib/api";

export default function Stats() {
  const [stats, setStats] = useState<{ users: number; tasks: number } | null>(
    null
  );

  useEffect(() => {
    api
      .get("/public/stats")
      .then((res) => setStats(res.data))
      .catch(() => setStats(null));
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto grid grid-cols-2 gap-6 text-center">
        <div className="p-6 bg-white rounded shadow">
          <p className="text-3xl font-bold">{stats?.users ?? "—"}</p>
          <p className="text-gray-600">Users</p>
        </div>
        <div className="p-6 bg-white rounded shadow">
          <p className="text-3xl font-bold">{stats?.tasks ?? "—"}</p>
          <p className="text-gray-600">Tasks Created</p>
        </div>
      </div>
    </section>
  );
}
