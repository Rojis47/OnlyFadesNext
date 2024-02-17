import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { Input } from "@/components/TW/input";

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const signIn = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/");
  };

  return (
    <div className="z-10 flex flex-col justify-center flex-1 w-full gap-2 px-8 sm:max-w-md">
      <form
        className="flex flex-col justify-center flex-1 w-full gap-2 animate-in text-foreground"
        action={signIn}
      >
        {" "}
        <label className="text-md" htmlFor="email">
          Email
        </label>
        <Input
          className="mb-6 rounded-md bg-inherit"
          name="email"
          placeholder="you@example.com"
          required
        />
        <label className="text-md" htmlFor="password">
          Password
        </label>
        <Input
          className="mb-6 rounded-md bg-inherit"
          type="password"
          name="password"
          placeholder="••••••••"
          required
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
    </div>
  );
}

// formAction: signUp
