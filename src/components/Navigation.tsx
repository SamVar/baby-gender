import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Baby, ChevronDown, Menu } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

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

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
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

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <Baby className="h-5 w-5 text-primary" />
                  Menu
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 mt-8">
                <Button
                  variant={isActive("/plan") ? "secondary" : "ghost"}
                  asChild
                  onClick={() => setOpen(false)}
                >
                  <Link to="/plan">Plan</Link>
                </Button>

                <Button
                  variant={isActive("/predict") ? "secondary" : "ghost"}
                  asChild
                  onClick={() => setOpen(false)}
                >
                  <Link to="/predict">Predict</Link>
                </Button>

                <div className="border-t border-border pt-4 mt-2">
                  <p className="text-sm font-semibold text-muted-foreground mb-3 px-2">Learn</p>
                  <div className="flex flex-col gap-2">
                    <Button variant="ghost" className="justify-start" asChild onClick={() => setOpen(false)}>
                      <Link to="/myths">🔮 Myths & Tales</Link>
                    </Button>
                    <Button variant="ghost" className="justify-start" asChild onClick={() => setOpen(false)}>
                      <Link to="/science">🔬 Science & Statistics</Link>
                    </Button>
                    <Button variant="ghost" className="justify-start" asChild onClick={() => setOpen(false)}>
                      <Link to="/medical">🏥 Medical Information</Link>
                    </Button>
                    <Button variant="ghost" className="justify-start" asChild onClick={() => setOpen(false)}>
                      <Link to="/culture">🌍 Cultural Perspectives</Link>
                    </Button>
                    <Button variant="ghost" className="justify-start" asChild onClick={() => setOpen(false)}>
                      <Link to="/lifestyle">🥗 Nutrition & Lifestyle</Link>
                    </Button>
                  </div>
                </div>

                <div className="border-t border-border pt-4 mt-2">
                  <p className="text-sm font-semibold text-muted-foreground mb-3 px-2">Resources</p>
                  <div className="flex flex-col gap-2">
                    <Button variant="ghost" className="justify-start" asChild onClick={() => setOpen(false)}>
                      <Link to="/stories">💬 Stories & Community</Link>
                    </Button>
                    <Button variant="ghost" className="justify-start" asChild onClick={() => setOpen(false)}>
                      <Link to="/resources">🔧 Tools & Calculators</Link>
                    </Button>
                    <Button variant="ghost" className="justify-start" asChild onClick={() => setOpen(false)}>
                      <Link to="/faq">❓ FAQ</Link>
                    </Button>
                  </div>
                </div>

                <Button
                  variant={isActive("/about") ? "secondary" : "ghost"}
                  asChild
                  onClick={() => setOpen(false)}
                  className="mt-2"
                >
                  <Link to="/about">About</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
