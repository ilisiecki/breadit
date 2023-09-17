import { User } from "next-auth";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import { UserIcon } from "lucide-react";

export function UserAvatar({ user }: { user: Pick<User, "name" | "image"> }) {
  return (
    <Avatar className="h-8 w-8">
      {user.image ? (
        <div className="relative aspect-square h-full w-full">
          <Image
            fill
            src={user.image}
            alt="user profile picture"
            referrerPolicy="no-referrer"
          />
        </div>
      ) : (
        <AvatarFallback>
          <span className="sr-only">{user?.name}</span>
          <UserIcon className="h-4 w-4" />
        </AvatarFallback>
      )}
    </Avatar>
  );
}
