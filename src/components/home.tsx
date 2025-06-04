import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ArrowRight, CheckCircle, Globe } from "lucide-react"
import { BentoGrid, BentoGridItem } from "./bento-grid"
import { CreditCard, Store, Package, Zap, Shield, TrendingUp } from "lucide-react"
import { Link } from "@tanstack/react-router"
import { ModeToggle } from "./toggle-mode"

export default function DevSellLanding() {
  const testimonials = [
    {
      name: "Alex Chen",
      role: "Full Stack Developer",
      content: "DevSell made it incredibly easy to monetize my CLI tools. Set up my store in under 10 minutes!",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
    },
    {
      name: "Sarah Kim",
      role: "Indie Hacker",
      content: "The Lemon Squeezy integration is seamless. I focus on building, DevSell handles the selling.",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
    },
    {
      name: "Marcus Johnson",
      role: "DevOps Engineer",
      content: "Finally, a platform that understands developers. Clean, simple, and it just works.",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
    },
  ]

  const FeatureHeader = ({ icon: Icon, gradient }: { icon: any; gradient: string }) => (
    <div
      className={`flex flex-1 w-full h-full min-h-[6rem] rounded-lg ${gradient} relative overflow-hidden group-hover/bento:scale-105 transition-transform duration-200`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
      <div className="flex items-center justify-center w-full h-full">
        <div className="p-4 rounded-full bg-white/20 backdrop-blur-sm">
          <Icon className="h-8 w-8 text-white" />
        </div>
      </div>
      <div className="absolute bottom-2 right-2 w-16 h-16 bg-white/10 rounded-full blur-xl" />
      <div className="absolute top-2 left-2 w-8 h-8 bg-white/10 rounded-full blur-lg" />
    </div>
  )

  const items = [
    {
      title: "Easy Payments",
      description: "Lemon Squeezy handles global payments & taxes automatically",
      header: <FeatureHeader icon={CreditCard} gradient="bg-gradient-to-br from-blue-500 to-blue-600" />,
      icon: <CreditCard className="h-4 w-4 text-blue-500" />,
    },
    {
      title: "Your Brand",
      description: "Custom storefront with your domain and branding",
      header: <FeatureHeader icon={Store} gradient="bg-gradient-to-br from-purple-500 to-purple-600" />,
      icon: <Store className="h-4 w-4 text-purple-500" />,
    },
    {
      title: "File Delivery",
      description: "Automatically deliver ZIPs or download links instantly",
      header: <FeatureHeader icon={Package} gradient="bg-gradient-to-br from-green-500 to-green-600" />,
      icon: <Package className="h-4 w-4 text-green-500" />,
    },
    {
      title: "Lightning Fast",
      description: "Deploy your store in minutes, not hours. Get selling immediately",
      header: <FeatureHeader icon={Zap} gradient="bg-gradient-to-br from-yellow-500 to-orange-500" />,
      icon: <Zap className="h-4 w-4 text-yellow-500" />,
    },
    {
      title: "Secure & Reliable",
      description: "Enterprise-grade security for your products and customers",
      header: <FeatureHeader icon={Shield} gradient="bg-gradient-to-br from-red-500 to-red-600" />,
      icon: <Shield className="h-4 w-4 text-red-500" />,
    },
    {
      title: "Analytics Dashboard",
      description: "Track sales, customers, and revenue in real-time with detailed insights",
      header: <FeatureHeader icon={TrendingUp} gradient="bg-gradient-to-br from-indigo-500 to-indigo-600" />,
      icon: <TrendingUp className="h-4 w-4 text-indigo-500" />,
    },
    {
      title: "Global Access",
      description: "Reach customers from every corner of the world with multi-currency support",
      header: <FeatureHeader icon={Globe} gradient="bg-gradient-to-br from-teal-500 to-cyan-500" />,
      icon: <Globe className="h-4 w-4 text-teal-500" />,
    },
  ]

  return (
    <div className="min-h-screen w-full">
      {/* Navbar */}
      <nav className="w-full mx-auto p-4 flex justify-between items-center border-b backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          DevSell
        </div>

        <div className="flex gap-2">
          <ModeToggle />
          <Link to="/sign-up">
            <Button variant="outline" className="px-4 py-2 rounded-md transition-all hover:scale-105">
              Get Started
            </Button>
          </Link>
          <Link to="/sign-in">
            <Button className="px-4 py-2 rounded-md transition-all hover:scale-105">Login</Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 mt-3 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-3xl"></div>
        <Badge variant="secondary" className="mb-6 px-4 py-2">
          🚀 Trusted by 1000+ developers
        </Badge>
        <h1 className="text-6xl font-bold mb-6 leading-tight">
          Sell Your{" "}
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Developer Tools
          </span>{" "}
          in Minutes
        </h1>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          The easiest way for developers to sell scripts, apps, and digital products. Powered by Lemon Squeezy.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button size="lg" className="px-8 py-4 rounded-lg transition-all hover:scale-105 text-lg font-medium">
            Start Selling Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-4 rounded-lg transition-all hover:scale-105 text-lg font-medium"
          >
            See Examples
          </Button>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Everything you need to succeed</h2>
          <p className="text-muted-foreground text-lg">Built by developers, for developers</p>
        </div>
        <div className="bg-gradient-to-br from-primary/5 via-primary/3 to-primary/5 w-full rounded-3xl p-2 shadow-2xl">
          <BentoGrid>
            {items.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                icon={item.icon}
                className={i === 3 || i === 6 ? "md:col-span-2" : ""}
              />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Loved by developers worldwide</h2>
          <p className="text-muted-foreground text-lg">See what our community has to say</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <Card key={i} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <CardTitle className="text-base">{testimonial.name}</CardTitle>
                    <CardDescription>{testimonial.role}</CardDescription>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-6 py-16">
        <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="p-12">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                <div className="text-muted-foreground">Active Developers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">$2M+</div>
                <div className="text-muted-foreground">Revenue Generated</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Countries Supported</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-muted-foreground">Uptime</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto w-full px-6 py-20 text-center">
        <Card className="w-full mx-auto bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="p-12">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Selling?</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Join thousands of developers who are already monetizing their skills
            </p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-green-500" />
                No setup fees
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-green-500" />
                5% transaction fee
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Free forever
              </div>
            </div>
            <Button size="lg" className="px-8 py-4 rounded-lg transition-all hover:scale-105 text-lg font-medium">
              Create Your Storefront Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              DevSell
            </div>
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} DevSell. For developers, by developers.
            </p>
            <div className="flex gap-4">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy
              </Link>
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                Terms
              </Link>
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                Support
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
