import Link from "next/link";
import { LogoBreadit } from "@/components/icons/logo-breadit";
import { UserAuthForm } from "@/components/auth/user-auth-form";

export function SignUp() {
  return (
    <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center">
        <LogoBreadit className="mx-auto h-6 w-6" />
        <h1 className="text-2xl font-semibold tracking-tight">
          Join to the Breadit
        </h1>
        <p className="mx-auto max-w-xs text-sm">
          By continuing, you are setting up a Breadit account and agree to our
          User Agreement and Privacy Policy.
        </p>
        <UserAuthForm />
        <p className="px-8 text-center text-sm text-neutral-700">
          Already a Breadittor?{" "}
          <Link
            href={"/sign-in"}
            className={"underline underline-offset-4 hover:text-neutral-900"}
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
