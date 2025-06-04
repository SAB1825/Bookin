import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { resetPassword } from "@/lib/auth-client";
import { toast } from "sonner";

export const Route = createFileRoute("/(auth)/_layout/reset-password")({
  component: RouteComponent,
  validateSearch: (search) => ({
    token: search.token as string,
  }),
});

function RouteComponent() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { token } = Route.useSearch();

  const handlePasswordChange = async (password: string, token: string) => {
    if (!password.trim()) {
      toast("Please enter a new password");
      return;
    }

    if (password !== confirmPassword) {
      toast("Passwords do not match");
      return;
    }

    if (password.length < 8) {
      toast("Password must be at least 8 characters long");
      return;
    }

    setIsLoading(true);
    try {
      await resetPassword({
        newPassword: password,
        token,
        fetchOptions: {
          onSuccess: () => {
            toast("Password changed successfully!");
            setPassword("");
            setConfirmPassword("");
          }
        }
      });
    } catch (error) {
      toast("Failed to reset password. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md text-center space-y-4">
          <h1 className="text-2xl font-bold">Invalid Reset Link</h1>
          <p className="text-muted-foreground">
            This password reset link is invalid or has expired.
          </p>
          <a href="/forget-password" className="inline-block underline underline-offset-4 hover:no-underline">
            Request a new reset link
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight">Reset Password</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Enter your new password below
          </p>
        </div>

        <div className="mt-8 space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium leading-none">
                New Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Enter new password"
                autoComplete="new-password"
                className="w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="text-sm font-medium leading-none">
                Confirm Password
              </label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm new password"
                autoComplete="new-password"
                className="w-full"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                disabled={isLoading}
              />
            </div>
          </div>

          <Button
            onClick={() => handlePasswordChange(password, token)}
            disabled={isLoading || !password.trim() || !confirmPassword.trim()}
            className="w-full"
          >
            {isLoading ? "Updating..." : "Update Password"}
          </Button>

          <div className="text-center">
            <a href="/sign-in" className="text-sm underline underline-offset-4 hover:no-underline">
              Back to Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}