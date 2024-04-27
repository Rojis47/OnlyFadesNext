"use client";

import { UserSchema } from "../types";
import { Input } from "../../components/TW/input";
import toast from "react-hot-toast";
import { createUser } from "./add-user-server-actions";
import Link from "next/link";

const toastStlye = {
  style: {
    whiteSpace: "pre-line",
    borderRadius: "10px",
    background: "#333",
    color: "#fff",
  },
  duration: 6000,
};

export default function SignUpForm() {
  const clientAction = async (formData: FormData) => {
    const first_name = formData.get("first_name") as string;
    const last_name = formData.get("last_name") as string | undefined;
    const confirm = formData.get("confirm") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const result = UserSchema.safeParse({
      email,
      password,
      confirm,
      first_name,
      last_name,
      role: "user",
    });

    if (!result.success) {
      const errorMessages = result.error.issues.map((issue) => {
        return `${issue.path[0]}: ${issue.message}\n`;
      });

      const formattedErrorMessage = errorMessages.join("\n");
      toast.error(formattedErrorMessage, toastStlye);
      return;
    }

    const response = await createUser(result.data);

    if (response?.error) {
      toast.error(response.error, toastStlye);
      return;
    }

    toast.success(
      "User created successfully. Please confirm email to continue.",
      toastStlye
    );
  };
  return (
    <div className="z-10 flex flex-col justify-center flex-1 w-full gap-2 px-8 sm:max-w-md">
      <form
        className="flex flex-col justify-center flex-1 w-full gap-2 animate-in text-foreground"
        action={clientAction}
      >
        {" "}
        <label className="text-md" htmlFor="first_name">
          First Name
        </label>
        <Input
          className="mb-6 rounded-md bg-inherit"
          name="first_name"
          placeholder="Marcos"
        />
        <label className="text-md" htmlFor="last_name">
          Last Name
        </label>
        <Input
          className="mb-6 rounded-md bg-inherit"
          name="last_name"
          placeholder="Jaimes"
        />
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
          placeholder="••••••"
        />
        <label className="text-md" htmlFor="confirm">
          Confirm Password
        </label>
        <Input
          className="mb-6 rounded-md bg-inherit"
          type="password"
          name="confirm"
          placeholder="Confirm Password"
        />
        <button className="px-4 py-2 mb-2 bg-blue-700 rounded-md text-foreground">
          Sign Up
        </button>
        <p className="text-sm leading-6 text-center text-gray-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Log In Here
          </Link>
        </p>
      </form>
    </div>
  );
}
