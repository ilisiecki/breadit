import { Button, buttonVariants } from "@/components/ui/button";
import { HomeIcon, Link } from "lucide-react";

export default function Home() {
  return (
    <main className="px-2">
      <h1 className="text-3xl font-bold md:text-4xl">Your Feed</h1>
      <div className="grid grid-cols-1 gap-y-4 py-6 md:grid-cols-3 md:gap-x-4">
        {/* feed */}

        {/* subreddit info */}
        <div className="order-first h-fit overflow-hidden rounded-lg border border-gray-200 md:order-last">
          <div className="bg-emerald-100 px-6 py-4">
            <p className="flex items-center gap-1.5 py-3 font-semibold">
              <HomeIcon />
              Home
            </p>
          </div>

          <div className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
            <div className="flex justify-between gap-x-4 py-3">
              <p className="text-zinc-500">
                Your personal Breadit frontpage. Come here to check in with your
                favorite communities.
              </p>
            </div>
            <Link
              className={buttonVariants({
                className: "mb-6 mt-4 w-full",
              })}
              href={`/r/create`}
            >
              Create Community
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
