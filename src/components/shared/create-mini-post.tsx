"use client";

import { Session } from "next-auth";
import { usePathname, useRouter } from "next/navigation";
import { UserAvatar } from "./user-avatar";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ImageIcon, Link2Icon } from "lucide-react";

export function CreateMiniPost({ session }: { session: Session | null }) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <li className="overflow-hidden rounded-md bg-white shadow">
      <div className="flex h-full justify-between gap-6 px-6 py-4">
        <div className="relative">
          <UserAvatar
            user={{
              name: session?.user.name || null,
              image: session?.user.image || null,
            }}
          />

          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 outline outline-2 outline-white" />
        </div>
        <Input
          onClick={() => router.push(pathname + "/submit")}
          readOnly
          className="cursor-pointer"
          placeholder="Create post"
        />
        <Button
          onClick={() => router.push(pathname + "/submit")}
          variant="ghost"
        >
          <ImageIcon className="text-neutral-600" />
        </Button>
        <Button
          onClick={() => router.push(pathname + "/submit")}
          variant="ghost"
        >
          <Link2Icon className="text-neutral-600" />
        </Button>
      </div>
    </li>
  );
}
