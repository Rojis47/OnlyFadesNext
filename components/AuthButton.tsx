import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function AuthButton() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    "use server";

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/login");
  };

  return user ? (
    <div className="z-50 flex gap-4">
      <form action={signOut}>
        <button className="z-50 px-4 py-2 no-underline rounded-md bg-btn-background hover:bg-btn-background-hover">
          Log Out
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
