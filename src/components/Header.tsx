import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const navItems = [
    { label: "Work", id: "work", isSection: true },
    { label: "Philosophy", id: "philosophy", isSection: true },
    { label: "Experience", id: "experience", isSection: true },
    { label: "Insights", id: "insights", isSection: false, path: "/insights" },
    { label: "Contact", id: "contact", isSection: true },
  ];

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-full focus:bg-primary focus:text-primary-foreground focus:text-sm focus:font-medium"
      >
        Skip to content
      </a>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/10" : ""
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-sm font-bold text-primary-foreground">M</span>
            </div>
            <span className="text-sm font-medium text-foreground">Miguel Espinosa</span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) =>
              item.isSection ? (
                isHome ? (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.id}
                    to={`/#${item.id}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                )
              ) : (
                <Link
                  key={item.id}
                  to={item.path!}
                  className={`text-sm transition-colors ${
                    location.pathname === item.path
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Mobile navigation */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                className="md:hidden flex items-center justify-center w-11 h-11 -mr-2 text-foreground"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full sm:max-w-sm bg-background border-white/10 flex flex-col"
            >
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              <SheetDescription className="sr-only">
                Links to the main sections of the site
              </SheetDescription>
              <nav className="flex flex-col gap-2 mt-12">
                {navItems.map((item) =>
                  item.isSection ? (
                    isHome ? (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="text-left text-2xl font-semibold text-foreground hover:text-primary transition-colors py-3"
                      >
                        {item.label}
                      </button>
                    ) : (
                      <SheetClose asChild key={item.id}>
                        <Link
                          to={`/#${item.id}`}
                          className="text-2xl font-semibold text-foreground hover:text-primary transition-colors py-3"
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    )
                  ) : (
                    <SheetClose asChild key={item.id}>
                      <Link
                        to={item.path!}
                        className={`text-2xl font-semibold transition-colors py-3 ${
                          location.pathname === item.path
                            ? "text-primary"
                            : "text-foreground hover:text-primary"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  )
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
};

export default Header;
