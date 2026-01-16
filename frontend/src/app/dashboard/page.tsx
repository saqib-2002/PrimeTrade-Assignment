"use client";
import { useEffect, useState } from "react";
import api from "@/lib/api";


export default function Dashboard() {
const [user, setUser] = useState<any>(null);


useEffect(() => {
api.get("/user/profile").then(res => setUser(res.data));
}, []);


return (
<main className="p-6">
<h1 className="text-2xl font-bold">Dashboard</h1>
{user && <p className="mt-2">Welcome, {user.email}</p>}
<a href="/dashboard/tasks" className="btn mt-4">Manage Tasks</a>
</main>
);
}