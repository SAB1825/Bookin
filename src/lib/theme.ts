import { type Theme } from "@/components/theme-provider";
import { createServerFn } from "@tanstack/react-start";
import { getCookie, setCookie } from "@tanstack/react-start/server";

const storageKey = "ui-theme";

export const getThemeServerFn = createServerFn().handler(async () => {
  return (getCookie(storageKey) || "light") as Theme;
});

export const setThemeServerFn = createServerFn({ method: "POST" })
  .validator((data: unknown) => {
    if (typeof data != "string" || (data != "dark" && data != "light")) {
      throw new Error("Invalid theme provided");
    }
    return data as Theme;
  })
  .handler(async ({ data }) => {
    setCookie(storageKey, data);
  });

// Helper function to determine if route should be dark-only
export function isDarkOnlyRoute(pathname: string): boolean {
  const darkOnlyRoutes = [
    '/',           // Landing page
    '/sign-in',    // Auth pages
    '/sign-up',
    '/forgot-password',
    '/reset-password',
  ];
  
  return darkOnlyRoutes.some(route => 
    pathname === route || 
    pathname.startsWith('/auth/') || // Any auth-related routes
    pathname.startsWith('/landing/') // Any landing-related routes
  );
}


// Helper function to determine if route allows theme switching
export function isThemeSwitchableRoute(pathname: string): boolean {
  return pathname.startsWith('/dashboard') || pathname.startsWith('/app');
}