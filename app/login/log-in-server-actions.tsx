"use server";
import { createClient } from "@/utils/supabase/server";
import { UserLogInSchema, TUserLogIn } from "../types";
import { redirect } from "next/navigation";

export const LogInUser = async (userLog: TUserLogIn) => {
  "use server";
  const supabase = createClient();
  const { email, password } = userLog;
  const result = UserLogInSchema.safeParse(userLog);

  let errorMessage = "";

  if (!result.success) {
    result.error.issues.forEach((issue) => {
      errorMessage = errorMessage + issue.path[0] + ": " + issue.message + ". ";
    });
    return { error: errorMessage };
  }

  try {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      errorMessage =
        "Oops! It looks like the login information you entered is incorrect. Please double-check your email and password and try again";
      return { error: errorMessage };
    }
  } catch (error) {
    errorMessage = "An unexpected error occurred";
    return { error: errorMessage };
  }
  return redirect("/");
};
