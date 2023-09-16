import Link from "next/link";
import { LogoBreadit } from "@/components/icons/logo-breadit";
import { UserAuthForm } from "@/components/auth/user-auth-form";

export function SignIn() {
  return (
    <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center">
        <LogoBreadit className="mx-auto h-6 w-6" />
        <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
        <p className="mx-auto max-w-xs text-sm">
          By continuing, you are setting up a Breadit account and agree to our
          User Agreement and Privacy Policy.
        </p>
        <UserAuthForm />
        <p className="px-8 text-center text-sm text-neutral-700">
          New to Breadit?{" "}
          <Link
            href={"/sign-up"}
            className={"underline underline-offset-4 hover:text-neutral-900"}
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
