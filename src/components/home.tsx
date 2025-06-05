import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  ArrowRight,
  CheckCircle,
  Calendar,
  Clock,
  Users,
  Video,
  Link2,
  Zap,
  Settings,
  Bell,
  Globe,
  Sparkles,
  TrendingUp,
  Shield,
} from "lucide-react";
import { useTheme } from "./theme-provider";

// Enhanced Interactive Components
const CalendarPreview = () => {
  const [selectedDate, setSelectedDate] = useState(15);
  const [hoveredDate, setHoveredDate] = useState<number | null>(null);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="p-6 bg-gradient-to-br from-card via-card to-muted/50 rounded-2xl backdrop-blur-sm border border-border shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-base font-semibold text-foreground">
          December 2024
        </h4>
        <Badge variant="secondary" className="text-xs px-2 py-1">
          Today
        </Badge>
      </div>
      <div className="grid grid-cols-7 gap-2 text-sm">
        {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
          <div
            key={day}
            className="text-center p-2 text-muted-foreground font-medium"
          >
            {day}
          </div>
        ))}
        {days.slice(0, 21).map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDate(day)}
            onMouseEnter={() => setHoveredDate(day)}
            onMouseLeave={() => setHoveredDate(null)}
            className={`p-2 text-center rounded-xl transition-all duration-200 transform hover:scale-110 ${
              day === selectedDate
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                : day === 15
                  ? "bg-primary/20 text-primary ring-2 ring-primary/30"
                  : hoveredDate === day
                    ? "bg-accent text-accent-foreground scale-105"
                    : "hover:bg-muted hover:text-muted-foreground"
            }`}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
};

const TimeSlots = () => {
  const [selectedSlot, setSelectedSlot] = useState("10:00 AM");
  const [hoveredSlot, setHoveredSlot] = useState<string | null>(null);
  const slots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
  ];

  return (
    <div className="p-6 bg-gradient-to-br from-card via-card to-muted/50 rounded-2xl backdrop-blur-sm border border-border shadow-lg">
      <h4 className="text-base font-semibold mb-4 text-foreground">
        Available Times
      </h4>
      <div className="grid grid-cols-2 gap-3">
        {slots.map((slot) => (
          <button
            key={slot}
            onClick={() => setSelectedSlot(slot)}
            onMouseEnter={() => setHoveredSlot(slot)}
            onMouseLeave={() => setHoveredSlot(null)}
            className={`p-3 text-sm rounded-xl transition-all duration-200 transform font-medium ${
              slot === selectedSlot
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105"
                : hoveredSlot === slot
                  ? "bg-accent text-accent-foreground scale-105"
                  : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground hover:scale-105"
            }`}
          >
            {slot}
          </button>
        ))}
      </div>
    </div>
  );
};

const IntegrationToggle = () => {
  const [integrations, setIntegrations] = useState({
    calendar: true,
    zoom: false,
    meet: true,
  });

  return (
    <div className="p-6 bg-gradient-to-br from-card via-card to-muted/50 rounded-2xl backdrop-blur-sm border border-border shadow-lg">
      <h4 className="text-base font-semibold mb-4 text-foreground">
        Integrations
      </h4>
      <div className="space-y-4">
        {[
          {
            key: "calendar" as keyof typeof integrations,
            label: "Google Calendar",
            icon: Calendar,
          },
          {
            key: "zoom" as keyof typeof integrations,
            label: "Zoom",
            icon: Video,
          },
          {
            key: "meet" as keyof typeof integrations,
            label: "Google Meet",
            icon: Link2,
          },
        ].map(({ key, label, icon: Icon }) => (
          <div
            key={key}
            className="flex items-center justify-between p-2 rounded-lg hover:bg-muted transition-colors"
          >
            <div className="flex items-center gap-3">
              <Icon className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-foreground">
                {label}
              </span>
            </div>
            <button
              onClick={() =>
                setIntegrations((prev) => ({ ...prev, [key]: !prev[key] }))
              }
              className={`w-10 h-6 rounded-full transition-all duration-300 ${
                integrations[key]
                  ? "bg-primary shadow-lg shadow-primary/25"
                  : "bg-muted"
              } relative`}
            >
              <div
                className={`w-4 h-4 bg-primary-foreground rounded-full absolute top-1 transition-all duration-300 shadow-sm ${
                  integrations[key] ? "translate-x-5" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const NotificationBell = () => {
  const [notifications, setNotifications] = useState(3);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    setNotifications(0);
    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <div className="p-6 bg-gradient-to-br from-card via-card to-muted/50 rounded-2xl backdrop-blur-sm border border-border shadow-lg">
      <div className="flex items-center justify-center h-full">
        <div className="relative">
          <Bell
            className={`h-16 w-16 text-primary cursor-pointer transition-all duration-300 hover:scale-110 ${
              isAnimating ? "animate-bounce" : ""
            }`}
            onClick={handleClick}
          />
          {notifications > 0 && (
            <div className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground text-xs rounded-full h-6 w-6 flex items-center justify-center animate-pulse shadow-lg">
              {notifications}
            </div>
          )}
          <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

// Enhanced Bento Grid Components
const BentoGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
      {children}
    </div>
  );
};

const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  children,
}: {
  className?: string;
  title: string;
  description: string;
  header: React.ReactNode;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={`row-span-1 rounded-3xl group/bento hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 shadow-lg p-6 bg-gradient-to-br from-card via-card to-muted/30 border border-border justify-between flex flex-col space-y-6 hover:-translate-y-2 backdrop-blur-sm ${className}`}
    >
      <div className="group-hover/bento:scale-105 transition-transform duration-300">
        {header}
      </div>
      <div className="group-hover/bento:translate-x-2 transition-all duration-300">
        <div className="flex items-center gap-3 mb-3">
          {icon}
          <div className="font-bold text-foreground text-lg">{title}</div>
        </div>
        <div className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </div>
        {children}
      </div>
    </div>
  );
};

// Floating Animation Component
const FloatingElement = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  return (
    <div
      className="animate-float"
      style={{
        animationDelay: `${delay}s`,
        animation: `float 6s ease-in-out infinite ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

export default function AppointmentSchedulingLanding() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { isDarkOnly } = useTheme();
  useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any }) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Business Consultant",
      content:
        "slot.to transformed how I manage client appointments. My booking rate increased by 300%!",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
    },
    {
      name: "Dr. Michael Chen",
      role: "Healthcare Provider",
      content:
        "The integration with my calendar and automatic reminders have reduced no-shows significantly.",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Fitness Coach",
      content:
        "Simple setup, beautiful interface, and my clients love how easy it is to book sessions.",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
    },
  ];

  const items = [
    {
      title: "Smart Calendar Sync",
      description:
        "Seamlessly connects with Google Calendar, Outlook, and more with real-time synchronization",
      header: <CalendarPreview />,
      icon: <Calendar className="h-6 w-6 text-chart-1" />,
      className: "md:col-span-2",
    },
    {
      title: "Global Time Zones",
      description:
        "Automatically handles time zones for seamless global bookings",
      header: (
        <div className="flex items-center justify-center h-40 bg-gradient-to-br from-chart-2/10 via-chart-2/5 to-chart-2/10 rounded-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-chart-2/5 to-transparent"></div>
          <Globe
            className="h-16 w-16 text-chart-2 animate-spin"
            style={{ animationDuration: "12s" }}
          />
          <div className="absolute top-4 right-4 w-3 h-3 bg-chart-2 rounded-full animate-ping opacity-60"></div>
          <div className="absolute bottom-4 left-4 w-2 h-2 bg-chart-2 rounded-full animate-pulse opacity-40"></div>
        </div>
      ),
      icon: <Globe className="h-6 w-6 text-chart-2" />,
    },
    {
      title: "Video Integrations",
      description:
        "Automatic Zoom & Google Meet links with one-click virtual meetings",
      header: <IntegrationToggle />,
      icon: <Video className="h-6 w-6 text-chart-3" />,
    },
    {
      title: "Flexible Scheduling",
      description:
        "Custom availability windows with buffer times and break management",
      header: <TimeSlots />,
      icon: <Clock className="h-6 w-6 text-chart-4" />,
      className: "md:col-span-2",
    },
    {
      title: "Smart Notifications",
      description:
        "AI-powered reminders that reduce no-shows by 80% with perfect timing",
      header: <NotificationBell />,
      icon: <Bell className="h-6 w-6 text-chart-5" />,
    },
    {
      title: "Lightning Setup",
      description:
        "Get started in under 5 minutes with our intelligent guided setup wizard",
      header: (
        <div className="flex items-center justify-center h-40 bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 rounded-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
          <Zap className="h-16 w-16 text-primary animate-bounce" />
          <div className="absolute top-6 left-6 w-2 h-2 bg-primary rounded-full animate-ping opacity-60"></div>
          <div className="absolute bottom-6 right-6 w-3 h-3 bg-primary rounded-full animate-pulse opacity-40"></div>
        </div>
      ),
      icon: <Zap className="h-6 w-6 text-primary" />,
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-background via-background to-muted/50 font-sans">
      {/* Custom CSS for animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      {/* Enhanced Navbar */}
      <nav className="w-full mx-auto p-6 flex justify-between items-center border-b border-border backdrop-blur-xl bg-background/80 sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Calendar className="h-10 w-10 text-primary" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary/20 rounded-full animate-ping"></div>
          </div>
          <div className="text-3xl font-bold bg-gradient-to-r from-primary via-primary to-primary/60 bg-clip-text text-transparent">
            slot.to
          </div>
        </div>

        <div className="flex gap-3">
          <Button
            variant="outline"
            className="px-6 py-3 rounded-xl transition-all hover:scale-105 hover:shadow-lg"
          >
            Sign In
          </Button>
          <Button className="px-6 py-3 rounded-xl transition-all hover:scale-105 bg-gradient-to-r from-primary to-primary/80 hover:shadow-xl hover:shadow-primary/25">
            Get Started Free
          </Button>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section className="container mx-auto px-6 py-24 text-center relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-80 h-80 bg-primary/3 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/2 via-transparent to-primary/2 rounded-full blur-3xl"></div>
        </div>

        <FloatingElement delay={0}>
          <Badge
            variant="secondary"
            className="mb-8 px-6 py-3 backdrop-blur-sm bg-card/50 border border-border shadow-lg text-foreground"
          >
            <Sparkles className="h-4 w-4 mr-2 text-primary" />
            🚀 Trusted by 10,000+ professionals worldwide
          </Badge>
        </FloatingElement>

        <FloatingElement delay={0.5}>
          <h1 className="text-7xl md:text-8xl font-bold mb-8 leading-tight relative z-10 tracking-tight text-foreground">
            Schedule Meetings{" "}
            <span className="bg-gradient-to-r from-primary via-primary to-primary/60 bg-clip-text text-transparent relative">
              Effortlessly
              <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-primary/30 via-primary/50 to-primary/30 rounded-full"></div>
            </span>
          </h1>
        </FloatingElement>

        <FloatingElement delay={1}>
          <p className="text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed relative z-10">
            The modern appointment scheduling platform that connects your
            calendar, handles time zones, and integrates with Zoom & Google
            Meet. Set up in minutes, not hours.
          </p>
        </FloatingElement>

        <FloatingElement delay={1.5}>
          <div className="flex justify-center gap-6 flex-wrap relative z-10 mb-16">
            <Button
              size="lg"
              className="px-10 py-5 rounded-2xl transition-all hover:scale-105 text-xl font-semibold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-xl hover:shadow-2xl hover:shadow-primary/25"
            >
              Start Free Today
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-10 py-5 rounded-2xl transition-all hover:scale-105 text-xl font-semibold backdrop-blur-sm bg-card/50 hover:shadow-xl"
            >
              Watch Demo
            </Button>
          </div>
        </FloatingElement>

        {/* Enhanced Steps */}
        <div className="mt-20 grid md:grid-cols-3 gap-12 max-w-6xl mx-auto relative z-10">
          {[
            {
              icon: Link2,
              title: "Connect Calendar",
              desc: "Link Google Calendar, Outlook, or any CalDAV in seconds",
              color: "text-chart-1",
            },
            {
              icon: Settings,
              title: "Set Availability",
              desc: "Define your working hours and preferences with smart defaults",
              color: "text-chart-2",
            },
            {
              icon: Users,
              title: "Share & Book",
              desc: "Send your link and let clients book instantly with zero friction",
              color: "text-chart-3",
            },
          ].map((step, i) => (
            <FloatingElement key={i} delay={2 + i * 0.3}>
              <div className="text-center group hover:scale-105 transition-all duration-300">
                <div
                  className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-card to-muted rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg border border-border`}
                >
                  <step.icon className={`h-10 w-10 ${step.color}`} />
                </div>
                <h3 className="font-bold text-xl mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </FloatingElement>
          ))}
        </div>
      </section>

      {/* Enhanced Bento Grid Features */}
      <section className="container mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20"
          >
            Features
          </Badge>
          <h2 className="text-5xl font-bold mb-6 text-foreground">
            Everything you need to schedule better
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Powerful features that work seamlessly together to transform your
            scheduling experience
          </p>
        </div>

        <div className="bg-gradient-to-br from-card/50 via-muted/30 to-card/50 w-full rounded-3xl p-8 shadow-2xl backdrop-blur-sm border border-border">
          <BentoGrid>
            {items.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                icon={item.icon}
                className={item.className || ""}
              >
                <p></p>
              </BentoGridItem>
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="container mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20"
          >
            Testimonials
          </Badge>
          <h2 className="text-5xl font-bold mb-6 text-foreground">
            Loved by professionals everywhere
          </h2>
          <p className="text-muted-foreground text-xl">
            See what our community has to say about their experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <Card
              key={i}
              className="hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-card via-card to-muted/30 backdrop-blur-sm border border-border rounded-2xl"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center shadow-lg">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-foreground">
                      {testimonial.name}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {testimonial.role}
                    </CardDescription>
                  </div>
                </div>
                <div className="flex gap-1 mt-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  "{testimonial.content}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="container mx-auto px-6 py-20">
        <Card className="bg-gradient-to-br from-primary/5 via-primary/3 to-primary/5 border-primary/20 backdrop-blur-sm rounded-3xl shadow-2xl">
          <CardContent className="p-16">
            <div className="grid md:grid-cols-4 gap-12 text-center">
              {[
                { value: "10K+", label: "Active Users", icon: Users },
                { value: "1M+", label: "Meetings Scheduled", icon: Calendar },
                {
                  value: "80%",
                  label: "Reduction in No-shows",
                  icon: TrendingUp,
                },
                { value: "99.9%", label: "Uptime Guarantee", icon: Shield },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="group hover:scale-105 transition-all duration-300"
                >
                  <stat.icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <div className="text-5xl font-bold text-primary mb-3 group-hover:text-primary/80 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-lg">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Enhanced Final CTA */}
      <section className="container mx-auto px-6 py-24 text-center">
        <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 border-primary/20 backdrop-blur-sm rounded-3xl shadow-2xl">
          <CardContent className="p-16">
            <Sparkles className="h-16 w-16 text-primary mx-auto mb-6 animate-pulse" />
            <h2 className="text-5xl font-bold mb-8 text-foreground">
              Ready to transform your scheduling?
            </h2>
            <p className="text-muted-foreground mb-12 text-xl max-w-3xl mx-auto leading-relaxed">
              Join thousands of professionals who've simplified their
              appointment booking process and increased their productivity
            </p>
            <div className="flex items-center justify-center gap-8 mb-12 flex-wrap">
              {[
                { icon: CheckCircle, text: "Free forever plan" },
                { icon: CheckCircle, text: "No credit card required" },
                { icon: CheckCircle, text: "Setup in 5 minutes" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <item.icon className="h-6 w-6 text-primary" />
                  <span className="text-lg">{item.text}</span>
                </div>
              ))}
            </div>
            <Button
              size="lg"
              className="px-12 py-6 rounded-2xl transition-all hover:scale-105 text-xl font-semibold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-xl hover:shadow-2xl hover:shadow-primary/25"
            >
              Get Started for Free
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Enhanced Footer */}
      <footer className="border-t border-border py-16 backdrop-blur-sm bg-card/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <Calendar className="h-8 w-8 text-primary" />
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                slot.to
              </div>
            </div>
            <p className="text-muted-foreground text-lg">
              © 2024 slot.to. Making scheduling simple for everyone.
            </p>
            <div className="flex gap-8">
              {["Privacy", "Terms", "Support"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors text-lg hover:scale-105 transform"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
