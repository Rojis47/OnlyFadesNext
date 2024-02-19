import { getCurrentUser } from "@/app/actions";
import { createClient } from "@/utils/supabase/server";
import { log } from "console";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function AuthButton() {
  const supabase = createClient();
  let prismaUser = null;

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    prismaUser = await getCurrentUser(user);
  }

  const signOut = async () => {
    "use server";

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/login");
  };

  return user ? (
    <div className="z-50 flex items-center gap-4">
      <p>Hey, {prismaUser?.first_name}!</p>
      <form action={signOut}>
        <button className="px-4 py-2 no-underline rounded-md bg-btn-background hover:bg-btn-background-hover">
          Logout
        </button>
      </form>
    </div>
  ) : (
    <Link
      href="/login"
      className="z-30 flex px-3 py-2 no-underline rounded-md bg-btn-background hover:bg-btn-background-hover"
    >
      Log In
    </Link>
  );
}
