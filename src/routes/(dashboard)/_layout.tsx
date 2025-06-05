import { AppSidebar } from "@/components/dashboard/sidebar";
import { ModeToggle } from "@/components/toggle-mode";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/side-bar";
import {  isAuthenticated } from "@/server/auth";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/(dashboard)/_layout")({
  component: RouteComponent,
  beforeLoad : async () => {
      const userData = await isAuthenticated();
      return userData
    },
    loader : async ({ context }) => {
      if(!context.isAuthenticated) {
        throw redirect({ to : "/sign-in"})
      }
      return context.user;
    }
});

function RouteComponent() {
  const data = Route.useLoaderData()
  if(!data || data === null) {
    redirect({to : "/sign-in"})
  }
  return (
    <div>
      <SidebarProvider>
        <AppSidebar userName={data?.name!} userEmail={data?.email!} userAvatar={data?.image!} />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <ModeToggle />
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-semibold">Dashboard</h2>
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4">
            <div className="min-h-[100vh] flex-1 rounded-xl items-center justify-center  md:min-h-min">
             <Outlet />
            
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
