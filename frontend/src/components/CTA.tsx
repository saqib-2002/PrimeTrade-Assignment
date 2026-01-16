"use client";

import Link from "next/link";
import { useState } from "react";

const CTA = () => {
  const [user] = useState(() => {
    if (typeof window === "undefined") return null;
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");
    return token && userData ? JSON.parse(userData) : null;
  });

  return (
    <section className="py-24 text-center bg-gray-50">
      <h2 className="text-3xl font-bold">
        {user
          ? `Welcome back, ${user.firstName}`
          : "Ready to explore the dashboard?"}
      </h2>

      <p className="mt-4 text-gray-600">
        {user
          ? "Continue managing your tasks efficiently."
          : "Create your account and start managing tasks efficiently."}
      </p>

      {!user && (
        <Link href="/signup" className="btn mt-6 inline-block">
          Get Started
        </Link>
      )}
    </section>
  );
};

export default CTA;
