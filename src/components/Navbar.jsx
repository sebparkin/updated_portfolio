import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { X, Menu } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 w-full z-40 transition-all duration-300",
          isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5",
        )}
      >
        <div className="container flex items-center justify-between">
          <a className="text-xl font-bold text-primary flex items-center" href="#hero">
            <span className="relative z-10">
              <span className="text-foreground font-roboto-slab"> Sebastian Parkin </span>{" "}
              <span className="italic font-roboto-slab">Portfolio</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration:300"
              >
                {item.name}
              </a>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden p-2 text-foreground z-50"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay — outside <nav> so backdrop-filter doesn't trap fixed positioning */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-md z-30 flex flex-col items-center justify-center",
          "transition-all duration-300 md:hidden",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
      >
        <div className="flex flex-col items-center space-y-8 text-xl">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration:300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </>
  );
};
