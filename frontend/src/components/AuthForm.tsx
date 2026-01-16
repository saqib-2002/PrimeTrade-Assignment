"use client";
import { useState } from "react";
import api from "@/lib/api";
import { saveToken } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function AuthForm({ type }: { type: "login" | "register" }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async () => {
    const res = await api.post(`/auth/${type}`, { email, password });
    saveToken(res.data.token);
    router.push("/dashboard");
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-white p-6 shadow rounded">
      <h2 className="text-xl font-semibold mb-4 capitalize">{type}</h2>
      <input
        className="input"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="input mt-2"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={submit} className="btn mt-4 w-full">
        Submit
      </button>
    </div>
  );
}
