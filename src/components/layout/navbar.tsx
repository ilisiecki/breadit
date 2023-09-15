import Link from "next/link";
import { LogoBreadit } from "../icons/logo-breadit";

export function Navbar() {
  return (
    <div className="fixed inset-x-0 top-0 z-10 h-fit border-b border-neutral-300 bg-neutral-100 py-2">
      <div className="container mx-auto flex h-full max-w-7xl items-center justify-between gap-2">
        <Link href="/" className="flex items-center gap-2">
          <LogoBreadit className="h-8 w-8 sm:h-6 sm:w-6" />
          <p className="hidden text-sm font-medium text-neutral-700 md:block">
            Breadit
          </p>
        </Link>
      </div>
    </div>
  );
}
