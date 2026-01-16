"use client";
import Link from "next/link";
import { removeToken } from "@/libs/auth";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const logout = () => {
    removeToken();
    router.push("/login");
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow">
      <Link href="/" className="font-bold">
        TaskApp
      </Link>
      <div className="space-x-4">
        <Link href="/dashboard">Dashboard</Link>
        <button onClick={logout} className="text-red-500">
          Logout
        </button>
      </div>
    </nav>
  );
}
