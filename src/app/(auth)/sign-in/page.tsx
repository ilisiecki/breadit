import { SignIn } from "@/components/auth/sign-in";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="absolute inset-0">
      <div className="mx-auto flex h-full max-w-2xl flex-col items-center justify-center gap-20">
        <Link
          href={"/"}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "-mt-20 self-start"
          )}
        >
          Home
        </Link>
        <SignIn />
      </div>
    </div>
  );
}