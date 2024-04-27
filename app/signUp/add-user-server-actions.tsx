"use server";
import { PrismaClient } from "@prisma/client";
import { UserSchema } from "../types";
import { TUser } from "../types";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export const createUser = async (newUser: TUser) => {
  "use server";
  const { email, password, first_name, last_name } = newUser;
  const origin = headers().get("origin");
  const prisma = new PrismaClient();
  const supabase = createClient();
  const result = UserSchema.safeParse(newUser);
  let errorMessage = "";

  if (!result.success) {
    result.error.issues.forEach((issue) => {
      errorMessage = errorMessage + issue.path[0] + ": " + issue.message + ". ";
    });
    return { error: errorMessage };
  }

  try {
    await prisma.user.create({
      data: {
        email,
        first_name,
        last_name,
        role: "user",
      },
    });

    const { error } = await supabase.auth.signUp({
      email,
      password: password || "",
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });

    if (error) {
      errorMessage = "could not sign up user. Please try again later";
      return { error: errorMessage };
    }
  } catch (error) {
    if (
      error instanceof PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      errorMessage = "User already exists";
      return { error: errorMessage };
    }
    return redirect("/signUp?message=An unexpected error occurred");
  }
};
