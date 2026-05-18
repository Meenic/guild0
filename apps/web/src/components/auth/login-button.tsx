"use client";

import { authClient } from "@guild0/auth/client";
import { Button } from "@guild0/ui/components/button";
import { useState } from "react";

export function LoginButton() {
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    setLoading(true);
    await authClient.signIn.social({
      provider: "discord",
      callbackURL: "/guilds",
    });
  }

  return (
    <Button onClick={handleLogin} disabled={loading} className="w-full">
      {loading ? "Redirecting..." : "Continue with Discord"}
    </Button>
  );
}
