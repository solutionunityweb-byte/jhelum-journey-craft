import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
const logoUrl = "/jak-logo.jpeg";
import { BRAND } from "@/lib/brand";
import { TopBar } from "./TopBar";

const nav = [
  { to: "/", label: "Home" },
  { to: "/tour-packages", label: "Tour Packages" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact Us" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full">
      <TopBar />
      <div className={`glass border-b border-border/60 transition-shadow ${scrolled ? "shadow-soft" : ""}`}>
        <div className="container mx-auto px-3 sm:px-4 py-2 sm:py-2.5 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
          <Link to="/" className="flex min-w-0 items-center gap-2.5 sm:gap-3 group">
            <img
              src={logoUrl}
              alt="JAK Tour & Travels logo"
              className="h-11 w-11 sm:h-[60px] sm:w-[60px] object-contain rounded-xl shrink-0"
            />
            <div className="leading-tight min-w-0">
              <div className="font-display text-base sm:text-xl font-bold text-deep truncate">JAK Tour & Travels</div>
              <div className="text-[10px] sm:text-[11px] text-muted-foreground tracking-wide uppercase truncate">Govt. Registered Travel Agency</div>
            </div>
          </Link>

          <div className="flex items-center gap-1.5 sm:gap-3">
            <nav className="hidden lg:flex items-center gap-1">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  className="px-4 py-2 rounded-full text-sm font-medium text-foreground/80 hover:text-deep hover:bg-secondary transition-colors"
                  activeProps={{ className: "px-4 py-2 rounded-full text-sm font-semibold text-deep bg-secondary" }}
                >
                  {n.label}
                </Link>
              ))}
            </nav>
            <a
              href={BRAND.whatsapp}
              target="_blank"
              rel="noopener"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-4 py-2.5 text-sm font-semibold shadow-soft hover:scale-[1.02] transition"
            >
              <MessageCircle className="h-4 w-4" /> Book on WhatsApp
            </a>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-deep shrink-0"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="lg:hidden border-t border-border/60 bg-background/95">
            <div className="container mx-auto px-4 py-3 flex flex-col">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="py-3 px-2 text-base font-medium border-b border-border/40 text-foreground/80"
                  activeProps={{ className: "py-3 px-2 text-base font-semibold border-b border-border/40 text-deep" }}
                >
                  {n.label}
                </Link>
              ))}
              <a
                href={BRAND.whatsapp}
                target="_blank"
                rel="noopener"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-4 py-3 text-sm font-semibold"
              >
                <MessageCircle className="h-4 w-4" /> Book on WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
