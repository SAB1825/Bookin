import {
  Outlet,
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

import type { QueryClient } from "@tanstack/react-query";

import type { TRPCRouter } from "@/integrations/trpc/router";
import type { TRPCOptionsProxy } from "@trpc/tanstack-react-query";
import { Toaster } from "@/components/ui/sonner";
import { getThemeServerFn } from "@/lib/theme";
import { ThemeProvider, useTheme } from "@/components/theme-provider";

interface MyRouterContext {
  queryClient: QueryClient;

  trpc: TRPCOptionsProxy<TRPCRouter>;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "TanStack Start Starter",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),

  component: RootComponent,
  loader: async () => {
    const theme = await getThemeServerFn();
    return { theme };
  },
});

function RootComponent() {
  const {theme} = Route.useLoaderData();
  return (
    <ThemeProvider theme={theme}>
      <RootDocument>
        <Outlet />
      </RootDocument>
    </ThemeProvider>
  );
}
function RootDocument({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  return (
    <html lang="en" className={theme}>
    <head>
      <HeadContent />
    </head>
      <body>
        {children}
        <Toaster
        />

        <Scripts />
      </body>
    </html>
  );
}
