import LogInForm from "./LogInForm";
import { TUserLogIn } from "../types";
import { headers } from "next/headers";

export default function Login() {
  return (
    <div className="z-10 flex flex-col justify-center flex-1 w-full gap-2 px-8 sm:max-w-md">
      <LogInForm />
    </div>
  );
}

// formAction: signUp
