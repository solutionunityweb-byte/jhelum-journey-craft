import { useState, useEffect, useRef } from "react";
import { Phone, MessageCircle, X } from "lucide-react";
import { BRAND } from "@/lib/brand";

export function FloatingButtons() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <>
      <div ref={ref} className="fixed left-4 bottom-4 z-50">
        {open && (
          <div className="absolute bottom-16 left-0 w-60 rounded-2xl bg-white shadow-glass border border-border p-3 animate-in fade-in slide-in-from-bottom-2">
            <div className="flex items-center justify-between mb-2 px-1">
              <span className="text-xs font-semibold text-deep uppercase tracking-wide">Call Us</span>
              <button onClick={() => setOpen(false)} aria-label="Close" className="text-muted-foreground hover:text-deep">
                <X className="h-4 w-4" />
              </button>
            </div>
            {BRAND.callNumbers.map((n) => (
              <a
                key={n}
                href={`tel:${n.replace(/\s/g, "")}`}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 hover:bg-secondary transition"
              >
                <Phone className="h-4 w-4 text-orange" />
                <span className="text-sm font-semibold text-deep">{n}</span>
              </a>
            ))}
          </div>
        )}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Call Now"
          className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-deep text-white shadow-glass hover:scale-105 transition-transform"
        >
          <Phone className="h-6 w-6" />
          <span className="absolute inset-0 rounded-full animate-ping bg-deep/40 -z-10" />
        </button>
      </div>
      <a
        href={BRAND.whatsapp}
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp"
        className="fixed right-4 bottom-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-glass hover:scale-105 transition-transform"
      >
        <MessageCircle className="h-7 w-7" />
        <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366]/40 -z-10" />
      </a>
    </>
  );
}
