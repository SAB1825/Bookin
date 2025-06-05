import { Link } from "@tanstack/react-router";
import { ModeToggle } from "../toggle-mode";
import { Button } from "../ui/button";

const Header = () => (
  <nav className="w-full mx-auto p-4 flex justify-between items-center border-b backdrop-blur-sm bg-background/80 sticky top-0 z-50">
    <Link to="/">
      <div className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
        DevSell
      </div>
    </Link>

    <div className="flex gap-2">
      <ModeToggle />
      <Link to="/sign-up">
        <Button
          variant="outline"
          className="px-4 py-2 rounded-md transition-all hover:scale-105"
        >
          Get Started
        </Button>
      </Link>
      <Link to="/sign-in">
        <Button className="px-4 py-2 rounded-md transition-all hover:scale-105">
          Login
        </Button>
      </Link>
    </div>
  </nav>
);

export default Header;
