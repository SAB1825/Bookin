import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      position="top-center"
      closeButton
      richColors
      expand={true}
      duration={4000}
      toastOptions={{
        classNames: {
          toast: [
            "group toast group-[.toaster]:bg-white group-[.toaster]:text-foreground",
            "group-[.toaster]:border group-[.toaster]:border-border/20",
            "group-[.toaster]:shadow-lg group-[.toaster]:shadow-black/5",
            "group-[.toaster]:backdrop-blur-sm",
            "group-[.toaster]:rounded-lg group-[.toaster]:p-4",
            "group-[.toaster]:min-h-12 group-[.toaster]:w-full group-[.toaster]:max-w-md",
            "group-[.toaster]:transition-all group-[.toaster]:duration-200",
            "group-[.toaster]:hover:shadow-xl group-[.toaster]:hover:shadow-black/10",
            "group-[.toaster]:hover:scale-[1.02]",
            "group-[.toaster]:ring-1 group-[.toaster]:ring-border/10"
          ].join(" "),
          description: [
            "group-[.toast]:text-muted-foreground",
            "group-[.toast]:text-sm group-[.toast]:opacity-90"
          ].join(" "),
          actionButton: [
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
            "group-[.toast]:hover:bg-primary/90",
            "group-[.toast]:rounded-md group-[.toast]:px-3 group-[.toast]:py-1.5",
            "group-[.toast]:text-sm group-[.toast]:font-medium",
            "group-[.toast]:transition-colors group-[.toast]:duration-150",
            "group-[.toast]:focus:ring-2 group-[.toast]:focus:ring-primary/20"
          ].join(" "),
          cancelButton: [
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
            "group-[.toast]:hover:bg-muted/80",
            "group-[.toast]:rounded-md group-[.toast]:px-3 group-[.toast]:py-1.5",
            "group-[.toast]:text-sm group-[.toast]:font-medium",
            "group-[.toast]:transition-colors group-[.toast]:duration-150",
            "group-[.toast]:focus:ring-2 group-[.toast]:focus:ring-muted/20"
          ].join(" "),
          closeButton: [
            "group-[.toast]:bg-transparent group-[.toast]:text-foreground/50",
            "group-[.toast]:hover:text-foreground group-[.toast]:hover:bg-muted/50",
            "group-[.toast]:rounded-md group-[.toast]:p-1",
            "group-[.toast]:transition-all group-[.toast]:duration-150",
            "group-[.toast]:focus:ring-2 group-[.toast]:focus:ring-primary/20",
            "group-[.toast]:absolute group-[.toast]:top-2 group-[.toast]:right-2"
          ].join(" "),
          success: [
            "group-[.toaster]:border-green-200 dark:group-[.toaster]:border-green-800/30",
            "group-[.toaster]:bg-green-50/80 dark:group-[.toaster]:bg-green-950/30",
            "group-[.toaster]:text-green-900 dark:group-[.toaster]:text-green-100"
          ].join(" "),
          error: [
            "group-[.toaster]:border-red-200 dark:group-[.toaster]:border-red-800/30",
            "group-[.toaster]:bg-red-50/80 dark:group-[.toaster]:bg-red-950/30",
            "group-[.toaster]:text-red-900 dark:group-[.toaster]:text-red-100"
          ].join(" "),
          warning: [
            "group-[.toaster]:border-yellow-200 dark:group-[.toaster]:border-yellow-800/30",
            "group-[.toaster]:bg-yellow-50/80 dark:group-[.toaster]:bg-yellow-950/30",
            "group-[.toaster]:text-yellow-900 dark:group-[.toaster]:text-yellow-100"
          ].join(" "),
          info: [
            "group-[.toaster]:border-blue-200 dark:group-[.toaster]:border-blue-800/30",
            "group-[.toaster]:bg-blue-50/80 dark:group-[.toaster]:bg-blue-950/30",
            "group-[.toaster]:text-blue-900 dark:group-[.toaster]:text-blue-100"
          ].join(" "),
        },
        style: {
          backgroundColor: 'var(--background)',
          color: 'var(--foreground)',
          border: '1px solid var(--border)',
        }
      }}
      {...props}
    />
  );
};

export { Toaster };