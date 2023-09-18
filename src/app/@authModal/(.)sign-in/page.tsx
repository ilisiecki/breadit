import { SignIn } from "@/components/auth/sign-in";
import { CloseModal } from "@/components/shared/close-modal";

export default function SignInModal() {
  return (
    <div className="fixed inset-0 z-10 bg-neutral-900/20">
      <div className="container mx-auto flex h-full max-w-lg items-center">
        <div className="relative h-fit w-full rounded-lg bg-white px-2 py-20">
          <div className="absolute right-4 top-4">
            <CloseModal />
          </div>

          <SignIn />
        </div>
      </div>
    </div>
  );
}
