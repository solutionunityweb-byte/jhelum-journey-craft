import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import logoAsset from "@/assets/jak-logo.asset.json";
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
  return (
    <header className="sticky top-0 z-40 w-full">
      <TopBar />
      <div className="glass border-b border-border/60">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logoAsset.url} alt="JAK Tour & Travels logo" className="h-12 w-12 sm:h-14 sm:w-14 object-contain" />
            <div className="leading-tight">
              <div className="font-display text-lg sm:text-xl font-bold text-deep">JAK Tour & Travels</div>
              <div className="text-[10.5px] sm:text-xs text-muted-foreground tracking-wide uppercase">Journey Beyond Destinations</div>
            </div>
          </Link>
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
          <div className="flex items-center gap-2">
            <a
              href={BRAND.whatsapp}
              target="_blank"
              rel="noopener"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-warm text-white px-4 py-2 text-sm font-semibold shadow-soft hover:opacity-95 transition"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-deep"
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
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
