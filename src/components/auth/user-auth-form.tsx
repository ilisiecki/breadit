"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { LogoGoogle } from "@/components/icons/logo-google";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { LogoGithub } from "../icons/logo-github";

interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: { className?: Props }) {
  const [isLoadingGoogle, setIsLoadingGoogle] = useState(false);
  const [isLoadingGithub, setIsLoadingGithub] = useState(false);
  const { toast } = useToast();

  async function loginWithGoogle() {
    setIsLoadingGoogle(true);

    try {
      await signIn("google");
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error logging in with Google",
        variant: "destructive",
      });
    } finally {
      setIsLoadingGoogle(false);
    }
  }

  async function loginWithGithub() {
    setIsLoadingGithub(true);

    try {
      await signIn("github");
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error logging in with Github",
        variant: "destructive",
      });
    } finally {
      setIsLoadingGithub(false);
    }
  }

  return (
    <div
      className={cn("flex flex-col justify-center gap-2", className)}
      {...props}
    >
      <Button
        size="sm"
        disabled={isLoadingGoogle}
        onClick={loginWithGoogle}
        className="w-full"
      >
        {isLoadingGoogle ? (
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
        ) : (
          <LogoGoogle className="mr-2 h-4 w-4" />
        )}
        Google
      </Button>
      <Button
        size="sm"
        disabled={isLoadingGithub}
        onClick={loginWithGithub}
        className="w-full"
      >
        {isLoadingGithub ? (
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
        ) : (
          <LogoGithub className="mr-2 h-4 w-4" />
        )}
        Github
      </Button>
    </div>
  );
}
