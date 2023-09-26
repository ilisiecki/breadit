import Link from "next/link";
import { LogoBreadit } from "@/components/icons/logo-breadit";
import { buttonVariants } from "@/components/ui/button";
import { getAuthSession } from "@/lib/auth";
import { UserAccountDropdown } from "./user-account-dropdown";

export async function Navbar() {
  const session = await getAuthSession();

  return (
    <div className="fixed inset-x-0 top-0 z-10 h-fit border-b border-neutral-300 bg-neutral-100 px-2 py-2">
      <div className="container mx-auto flex h-full max-w-7xl items-center justify-between gap-2">
        <Link href="/" className="flex items-center gap-2">
          <LogoBreadit className="h-8 w-8 sm:h-6 sm:w-6" />
          <p className="hidden text-sm font-medium text-neutral-700 md:block">
            Breadit
          </p>
        </Link>
        {/*search bar here later*/}
        {session?.user ? (
          <UserAccountDropdown user={session.user} />
        ) : (
          <Link href="/sign-in" className={buttonVariants()}>
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
}
