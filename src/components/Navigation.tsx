import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Baby, ChevronDown } from "lucide-react";

export function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Home */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Baby className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Baby Gender Planner
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-1">
            {/* Plan */}
            <Button
              variant={isActive("/plan") ? "secondary" : "ghost"}
              size="sm"
              asChild
            >
              <Link to="/plan">Plan</Link>
            </Button>

            {/* Predict */}
            <Button
              variant={isActive("/predict") ? "secondary" : "ghost"}
              size="sm"
              asChild
            >
              <Link to="/predict">Predict</Link>
            </Button>

            {/* Learn Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant={
                    ["/myths", "/science", "/medical", "/culture", "/lifestyle"].some(
                      (path) => isActive(path)
                    )
                      ? "secondary"
                      : "ghost"
                  }
                  size="sm"
                  className="gap-1"
                >
                  Learn
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-popover">
                <DropdownMenuItem asChild>
                  <Link to="/myths" className="cursor-pointer">
                    🔮 Myths & Tales
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/science" className="cursor-pointer">
                    🔬 Science & Statistics
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/medical" className="cursor-pointer">
                    🏥 Medical Information
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/culture" className="cursor-pointer">
                    🌍 Cultural Perspectives
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/lifestyle" className="cursor-pointer">
                    🥗 Nutrition & Lifestyle
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Resources Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant={
                    ["/stories", "/resources", "/faq"].some((path) => isActive(path))
                      ? "secondary"
                      : "ghost"
                  }
                  size="sm"
                  className="gap-1"
                >
                  Resources
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-popover">
                <DropdownMenuItem asChild>
                  <Link to="/stories" className="cursor-pointer">
                    💬 Stories & Community
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/resources" className="cursor-pointer">
                    🔧 Tools & Calculators
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/faq" className="cursor-pointer">
                    ❓ FAQ
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* About */}
            <Button
              variant={isActive("/about") ? "secondary" : "ghost"}
              size="sm"
              asChild
            >
              <Link to="/about">About</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
