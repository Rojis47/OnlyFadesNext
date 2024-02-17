"use server";
import { PrismaClient } from "@prisma/client";
import { UserSchema } from "../types";
import { TUser } from "../types";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export const createUser = async (newUser: TUser) => {
  "use server";
  const { email, password, first_name, last_name } = newUser;
  const origin = headers().get("origin");
  const prisma = new PrismaClient();
  const supabase = createClient();
  const result = await UserSchema.safeParse(newUser);
  if (!result.success) {
    let errorMessage = "";
    result.error.issues.forEach((issue) => {
      errorMessage = errorMessage + issue.path[0] + ": " + issue.message + ". ";
    });
    return { error: errorMessage };
  }

  await prisma.user.create({
    data: {
      email,
      first_name,
      last_name,
      role: "user",
    },
  });
  // console.log(email, password, first_name, last_name);

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  });
  if (error) {
    return redirect("/signUp?message=Could not authenticate user");
  }
  return redirect("/signUp?message=Check email to continue sign in process");
};
