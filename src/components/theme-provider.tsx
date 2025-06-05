import { setThemeServerFn, isDarkOnlyRoute, isThemeSwitchableRoute } from "@/lib/theme";
import { useRouter, useLocation } from "@tanstack/react-router";
import { createContext, use, useEffect, type PropsWithChildren } from "react";

export type Theme = "light" | "dark";

type ThemeContextVal = { 
  theme: Theme; 
  setTheme: (val: Theme) => void;
  canSwitchTheme: boolean;
  isDarkOnly: boolean;
};

type Props = PropsWithChildren<{ theme: Theme }>;

const ThemeContext = createContext<ThemeContextVal | null>(null);

export function ThemeProvider({ children, theme: initialTheme }: Props) {
  const router = useRouter();
  const location = useLocation();
  
  const isDarkOnly = isDarkOnlyRoute(location.pathname);
  const canSwitchTheme = isThemeSwitchableRoute(location.pathname);
  
  // Force dark theme for dark-only routes
  const effectiveTheme = isDarkOnly ? "dark" : initialTheme;
  
  function setTheme(val: Theme) {
    // Only allow theme switching on dashboard/app routes
    if (!canSwitchTheme) {
      console.warn("Theme switching not allowed on this route");
      return;
    }
    
    setThemeServerFn({ data: val });
    router.invalidate();
  }

  // Apply theme class to document
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(effectiveTheme);
  }, [effectiveTheme]);

  return (
    <ThemeContext value={{ 
      theme: effectiveTheme, 
      setTheme, 
      canSwitchTheme,
      isDarkOnly 
    }}>
      {children}
    </ThemeContext>
  );
}

export function useTheme() {
  const val = use(ThemeContext);
  if (!val) throw new Error("useTheme called outside of ThemeProvider!");
  return val;
}