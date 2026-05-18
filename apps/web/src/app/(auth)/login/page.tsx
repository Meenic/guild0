import { LoginButton } from "@/components/auth/login-button";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="max-w-sm space-y-6 p-6">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-medium">guild0</h1>
          <p className="text-sm">Sign in to manage your Discord servers.</p>
        </div>
        <LoginButton />
      </div>
    </div>
  );
}
