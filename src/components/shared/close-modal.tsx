"use client";

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

export function CloseModal() {
  const router = useRouter();

  return (
    <Button
      variant="subtle"
      aria-label="close modal"
      onClick={() => router.back()}
      className="h-6 w-6 rounded-md p-0"
    >
      <X className="h-4 w-4" />
    </Button>
  );
}
