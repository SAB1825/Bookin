import SignUp from "@/components/sign-up";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)/_layout/sign-up")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="p-2 h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-md">
        <SignUp />
      </div>
    </div>
  );
}
