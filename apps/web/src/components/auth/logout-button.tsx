"use client";

import { authClient } from "@guild0/auth/client";
import { Button } from "@guild0/ui/components/button";
import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();

  return (
    <Button
      variant="ghost"
      onClick={() =>
        authClient.signOut({
          fetchOptions: {
            onSuccess: () => {
              router.refresh();
            },
          },
        })
      }
    >
      Sign out
    </Button>
  );
}
