"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/libs/api";
import { saveToken } from "@/libs/auth";

type AuthType = "signin" | "signup";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

function Input({
  name,
  placeholder,
  type = "text",
  onChange,
  error,
}: {
  name: string;
  placeholder: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}) {
  return (
    <div>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className={`input ${error ? "border-red-500" : "border-gray-300"}`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

export default function AuthForm({ type }: { type: AuthType }) {
  const router = useRouter();

  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const err: Record<string, string> = {};

    if (!emailRegex.test(form.email)) {
      err.email = "Enter a valid email address";
    }

    if (!passwordRegex.test(form.password)) {
      err.password =
        "Password must be at least 8 characters, include 1 uppercase & 1 number";
    }

    if (type === "signup") {
      if (!form.fullname.trim()) {
        err.fullname = "Full name is required";
      }

      if (form.password !== form.confirmPassword) {
        err.confirmPassword = "Passwords do not match";
      }
    }

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const submit = async () => {
    if (!validate()) return;

    const payload =
      type === "signin"
        ? {
            email: form.email,
            password: form.password,
          }
        : {
            fullname: form.fullname,
            email: form.email,
            password: form.password,
          };

    const res = await api.post(`/auth/${type}`, payload);
    saveToken(res.data.token);
    router.push("/dashboard");
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-white p-6 shadow rounded">
      <h2 className="text-xl font-semibold mb-6 text-center">
        {type === "signin" ? "Sign In" : "Sign Up"}
      </h2>

      {type === "signup" && (
        <Input
          name="fullname"
          placeholder="Full Name"
          onChange={handleChange}
          error={errors.fullname}
        />
      )}

      <div className="mt-3">
        <Input
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
          error={errors.email}
        />
      </div>

      <div className="mt-3">
        <Input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          error={errors.password}
        />
      </div>

      {type === "signup" && (
        <div className="mt-3">
          <Input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            onChange={handleChange}
            error={errors.confirmPassword}
          />
        </div>
      )}

      <button onClick={submit} className="btn mt-6 w-full">
        {type === "signin" ? "Sign In" : "Sign Up"}
      </button>
    </div>
  );
}
