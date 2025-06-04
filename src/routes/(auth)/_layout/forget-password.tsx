import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { forgetPassword } from "@/lib/auth-client";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/(auth)/_layout/forget-password")({
  component: RouteComponent,
});

function RouteComponent() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleEmail = async (email: string) => {
    if (!email.trim()) {
      toast("Please enter your email address");
      return;
    }

    setIsLoading(true);
    try {
      await forgetPassword({
        email,
        redirectTo: "/reset-password",
        fetchOptions: {
          onSuccess: () => {
            toast("Password reset link sent successfully!");
          },
          onError : (ctx) => {
            console.log(ctx)
            toast(ctx.error.message)
          }
        }
      });
    } catch (error) {
      toast("Failed to send reset link. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight">Forgot Password</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Enter your email address and we'll send you a reset link
          </p>
        </div>
        
        <div className="mt-8 space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium leading-none">
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              className="w-full"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              disabled={isLoading}
            />
          </div>

          <Button
            onClick={() => handleEmail(email)}
            disabled={isLoading || !email.trim()}
            className="w-full"
          >
            {isLoading ? "Sending..." : "Send Reset Link"}
          </Button>

          <div className="text-center">
            <Link to="/sign-in">
            
            <p className="text-sm underline underline-offset-4 hover:no-underline">
              Back to Login
            </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}