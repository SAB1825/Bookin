import { useTheme } from "@/components/theme-provider";
import { isAuthenticated } from "@/server/auth";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)/_layout")({
  component: RouteComponent,
  loader: async () => {
    const data = await isAuthenticated();
    if (data.isAuthenticated) {
      throw redirect({ to: "/dashboard" });
    }
  },
});

function RouteComponent() {
  const { isDarkOnly } = useTheme();
  return (
    <div className="min-h-screen overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Authentication Side */}
        <div className="flex-1 lg:flex-[1.5] flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8 relative order-2 lg:order-1">
          {/* Subtle background pattern for mobile */}
          <div className="absolute inset-0  "></div>

          <div className="w-full max-w-md relative z-10">
            {/* Logo/Brand for mobile and tablet */}
            <div className="lg:hidden text-center mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold bg-primary bg-clip-text text-transparent">
                Bookin
              </h1>
              <p className="mt-2 text-sm sm:text-base">
                Where great things happen
              </p>
            </div>

            {/* Auth form container */}
            <div className="lg:bg-transparent  lg:shadow-none p-6 sm:p-8 lg:p-0">
              <Outlet />
            </div>
          </div>
        </div>

        {/* Image/Content Side */}
        <div className="flex lg:flex-1 relative overflow-hidden order-1 lg:order-2 min-h-[40vh] sm:min-h-[50vh] lg:min-h-full">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-primary"></div>

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:30px_30px] sm:bg-[length:40px_40px] lg:bg-[length:50px_50px]"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 text-white w-full h-full">
            {/* Brand Name - hidden on mobile, shown on larger screens */}
            <div className="hidden lg:block mb-8">
              <h1 className="text-3xl font-bold text-white tracking-tight">
                Bookin
              </h1>
              <div className="w-12 h-1 bg-white/30 rounded-full mt-2 mx-auto"></div>
            </div>

            {/* Main Heading */}
            <div className="text-center mb-4 sm:mb-6 lg:mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-2 sm:mb-4">
                Where great
                <br />
                <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  things happen
                </span>
              </h2>

              <p className="text-blue-100 text-sm sm:text-base lg:text-base xl:text-lg max-w-xs sm:max-w-sm lg:max-w-md mx-auto leading-relaxed px-2 sm:px-0">
                Schedule your meeting within minutes!
              </p>
            </div>

            {/* Image Container */}
            <div className="flex items-center justify-center w-full max-w-xs sm:max-w-sm lg:max-w-sm xl:max-w-lg">
              <div className="relative w-full">
                {/* Glow effect behind image */}
                <div className="absolute inset-0 bg-white/20 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl scale-105 sm:scale-110"></div>
                <img
                  src="/auth-image.png"
                  alt="Authentication illustration"
                  className="relative w-150 h-auto max-h-48 sm:max-h-56 lg:max-h-72 xl:max-h-80 object-contain drop-shadow-xl sm:drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
