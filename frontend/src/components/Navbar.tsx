"use client";

import Link from "next/link";
import { removeToken } from "@/libs/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const router = useRouter();

  const [isAuth, setIsAuth] = useState(() => {
    if (typeof window === "undefined") return false;
    return !!localStorage.getItem("token");
  });

  const logout = () => {
    removeToken();
    setIsAuth(false);
    router.push("/signin");
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow">
      <Link href="/" className="font-bold">
        PrimeTrade.ai
      </Link>

      <div className="space-x-4">
        {isAuth ? (
          <>
            <Link href="/dashboard">Dashboard</Link>
            <button
              onClick={logout}
              className="text-white bg-red-600 px-3 py-2 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/signin">Sign In</Link>
            <Link href="/signup" className="btn">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
