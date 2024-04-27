"use client";

import React from "react";
import Link from "next/link";
import { UserLogInSchema, UserSchema } from "../types";
import { Input } from "../../components/TW/input";
import toast from "react-hot-toast";
import { LogInUser } from "./log-in-server-actions";

const toastStlye = {
  style: {
    whiteSpace: "pre-line",
    borderRadius: "10px",
    background: "#333",
    color: "#fff",
  },
  duration: 6000,
};

export default function LogInForm() {
  const clientAction = async (formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const result = UserLogInSchema.safeParse({ email, password });

    if (!result.success) {
      const errorMessages = result.error.issues.map((issue) => {
        return `${issue.path[0]}: ${issue.message}\n`;
      });

      const formattedErrorMessage = errorMessages.join("\n");
      toast.error(formattedErrorMessage, toastStlye);
      return;
    }

    const response = await LogInUser(result.data);

    if (response?.error) {
      toast.error(response.error, toastStlye);
      return;
    }
  };
  return (
    <>
      <form
        className="flex flex-col justify-center flex-1 w-full gap-2 animate-in text-foreground"
        action={clientAction}
      >
        {" "}
        <label className="text-md" htmlFor="email">
          Email
        </label>
        <Input
          className="mb-6 rounded-md bg-inherit"
          name="email"
          placeholder="you@example.com"
        />
        <label className="text-md" htmlFor="password">
          Password
        </label>
        <Input
          className="mb-6 rounded-md bg-inherit"
          type="password"
          name="password"
          placeholder="••••••••"
        />
        <button className="px-4 py-2 mb-2 bg-blue-700 rounded-md text-foreground">
          Sign In
        </button>
        <p className="text-sm leading-6 text-center text-gray-500">
          Don't have an account?{" "}
          <Link
            href="/signUp"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Sign Up Here
          </Link>
        </p>
      </form>
    </>
  );
}
