import hero from "@/assets/hero-kashmir.jpg";
import { BRAND } from "@/lib/brand";
import { MessageCircle, Phone, ShieldCheck, FileBadge, Mountain, Users } from "lucide-react";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={hero}
        alt="Dal Lake Srinagar Kashmir at golden hour with shikara boats"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <div className="container mx-auto px-4 pt-20 pb-24 sm:pt-28 sm:pb-32 lg:pt-36 lg:pb-44 text-white">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs sm:text-sm font-medium text-white">
            <span className="h-2 w-2 rounded-full bg-orange animate-pulse" />
            Premium Kashmir Tour Packages • 2026
          </span>
          <h1 className="mt-5 font-display text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]">
            Discover Kashmir <span className="block text-gradient-warm">Like Never Before</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base sm:text-lg text-white/85">
            Premium Kashmir tour packages with hotel, houseboat, sightseeing, airport transfers and a complimentary Shikara ride — crafted by trusted local experts in Srinagar.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={BRAND.whatsapp} target="_blank" rel="noopener" className="relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-7 py-4 text-base font-bold shadow-glass hover:scale-[1.03] transition">
              <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366]/30 -z-10" />
              <MessageCircle className="h-5 w-5" /> Book on WhatsApp
            </a>
            <a href={BRAND.tel} className="inline-flex items-center gap-2 rounded-full bg-white text-deep px-7 py-4 text-base font-bold shadow-soft hover:scale-[1.03] transition">
              <Phone className="h-5 w-5" /> Call Now
            </a>
          </div>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
            {[
              { i: <ShieldCheck className="h-4 w-4" />, t: "Govt Registered" },
              { i: <FileBadge className="h-4 w-4" />, t: "GST Registered" },
              { i: <Mountain className="h-4 w-4" />, t: "Local Kashmir Expert" },
              { i: <Users className="h-4 w-4" />, t: "1000+ Happy Travelers" },
            ].map((b) => (
              <div key={b.t} className="glass-dark rounded-2xl px-3 py-2.5 text-xs sm:text-sm font-medium text-white inline-flex items-center gap-2">
                <span className="text-orange">{b.i}</span> {b.t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
