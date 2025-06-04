import { Button } from "@/components/ui/button";
import { validateToken } from "@/server/auth";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/(auth)/_layout/verify-email")({
  component: RouteComponent,
  validateSearch: (search) => ({
    token: search.token as string,
  }),
});

function RouteComponent() {
  const { token } = Route.useSearch();
  const [verificationStatus, setVerificationStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (token) {
      verifyEmail();
    }
  }, [token]);

  const verifyEmail = async () => {
    if (!token) return;

    setVerificationStatus("loading");

    try {
      const result = await validateToken({ data: { token } });
      setVerificationStatus("success");
      setMessage(result.message || "Email verified successfully!");
    } catch (error) {
      setVerificationStatus("error");
      setMessage(
        error instanceof Error ? error.message : "Verification failed"
      );
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Email Verification</h1>

      {!token ? (
        <div className="text-red-600">
          <p>No verification token provided</p>
        </div>
      ) : (
        <div>
          {verificationStatus === "loading" && (
            <div className="text-blue-600">
              <p>Verifying your email...</p>
            </div>
          )}

          {verificationStatus === "success" && (
            <div className="text-green-600 p-2">
              <p>✅ {message}</p>
              <p className="mt-2">You can now close this page and log in.</p>
              <Link to="/sign-in">
                <Button>Go to Login Page.</Button>
              </Link>
            </div>
          )}

          {verificationStatus === "error" && (
            <div className="text-red-600">
              <p>❌ {message}</p>
              <button
                onClick={verifyEmail}
                className="mt-2 px-4 py-2  text-white rounded hover:bg-blue-600"
              >
                Try Again
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
