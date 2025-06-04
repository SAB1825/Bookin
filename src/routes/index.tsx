import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { signIn, useSession } from "@/lib/auth-client";
import { ModeToggle } from "@/components/toggle-mode";
import DevSellLanding from "@/components/home";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const { data: session } = useSession();
  return (
    <>
      <DevSellLanding />

    </>
  );
}
