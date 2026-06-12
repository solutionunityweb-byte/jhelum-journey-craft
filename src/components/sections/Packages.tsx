import { BRAND, waLinkWithMessage } from "@/lib/brand";
import { Check, MessageCircle, Phone, ShieldCheck, FileBadge, Mountain, Sparkles, BadgeCheck } from "lucide-react";
import imgDal from "@/assets/dest-dallake.jpg";
import imgSrinagar from "@/assets/dest-srinagar.jpg";
import imgGulmarg from "@/assets/dest-gulmarg.jpg";
import imgPahalgam from "@/assets/dest-pahalgam.jpg";
import imgSonamarg from "@/assets/dest-sonamarg.jpg";
import imgDoodhpatri from "@/assets/dest-doodhpatri.jpg";

export type Pkg = {
  title: string;
  duration: string;
  perPerson: string;
  minPax: string;
  total: string;
  image: string;
  imageAlt: string;
  includes: string[];
  cta: string;
  featured?: boolean;
};

export const PACKAGES: Pkg[] = [
  {
    title: "4N 5D Couple Package",
    duration: "4N 5D",
    perPerson: "₹15,000",
    minPax: "Minimum 2 Adults",
    total: "₹30,000",
    image: imgDal,
    imageAlt: "Dal Lake Srinagar with houseboats and shikara",
    includes: ["3 Nights Hotel Stay", "1 Night Houseboat Stay", "Free Shikara Ride", "Srinagar Local Sightseeing", "Sonamarg • Gulmarg • Pahalgam", "Private Dzire Cab", "Airport Pickup & Drop"],
    cta: "Book on WhatsApp",
    featured: true,
  },
  {
    title: "4N 5D Group Package",
    duration: "4N 5D",
    perPerson: "₹11,000",
    minPax: "Minimum 4 Adults",
    total: "₹44,000",
    image: imgGulmarg,
    imageAlt: "Gulmarg snow-covered meadows Kashmir",
    includes: ["2 Deluxe Rooms", "Private Cab", "Hotel + Houseboat", "Srinagar • Sonamarg • Gulmarg • Pahalgam", "Free Shikara Ride"],
    cta: "Book on WhatsApp",
  },
  {
    title: "4N 5D Group Package",
    duration: "4N 5D",
    perPerson: "₹9,300",
    minPax: "Minimum 6 Adults",
    total: "₹55,800",
    image: imgPahalgam,
    imageAlt: "Pahalgam valley landscape Kashmir",
    includes: ["Ertiga Cab", "2 Rooms + Extra Beds", "Houseboat Stay", "Free Shikara Ride", "Srinagar • Sonamarg • Gulmarg • Pahalgam"],
    cta: "Book on WhatsApp",
  },
  {
    title: "5N 6D Premium Package",
    duration: "5N 6D",
    perPerson: "₹13,250",
    minPax: "Minimum 4 Adults",
    total: "₹53,000",
    image: imgDoodhpatri,
    imageAlt: "Doodhpatri meadows Kashmir",
    includes: ["Srinagar • Sonamarg • Gulmarg", "Doodhpatri Day Trip", "Pahalgam Night Stay", "Houseboat Stay", "Private Cab"],
    cta: "Book on WhatsApp",
    featured: true,
  },
  {
    title: "5N 6D Jammu Pickup Package",
    duration: "5N 6D",
    perPerson: "₹14,750",
    minPax: "Minimum 4 Adults",
    total: "₹59,000",
    image: imgSonamarg,
    imageAlt: "Sonamarg meadows of gold Kashmir",
    includes: ["Jammu / Katra Pickup", "All Sightseeing", "Hotel + Houseboat", "Pahalgam Stay", "Free Shikara Ride"],
    cta: "Book on WhatsApp",
  },
  {
    title: "5N 6D Group Package",
    duration: "5N 6D",
    perPerson: "₹10,500",
    minPax: "Minimum 6 Adults",
    total: "₹63,000",
    image: imgSrinagar,
    imageAlt: "Srinagar Kashmir cityscape",
    includes: ["Ertiga Cab", "3 Rooms", "Hotel + Houseboat", "All Sightseeing", "Free Shikara Ride"],
    cta: "Book on WhatsApp",
  },
  {
    title: "5N 6D Group Package",
    duration: "5N 6D",
    perPerson: "₹8,750",
    minPax: "Minimum 8 Adults",
    total: "₹70,000",
    image: imgGulmarg,
    imageAlt: "Gulmarg Kashmir scenic view",
    includes: ["Tavera Cab", "3 Rooms + Extra Beds", "All Sightseeing", "Free Shikara Ride"],
    cta: "Book on WhatsApp",
  },
  {
    title: "6N 7D Couple Package",
    duration: "6N 7D",
    perPerson: "₹22,500",
    minPax: "Minimum 2 Adults",
    total: "₹45,000",
    image: imgDal,
    imageAlt: "Dal Lake Srinagar romantic houseboat stay",
    includes: ["Srinagar Pickup & Drop", "Premium Stay", "Houseboat Stay", "Free Shikara Ride", "All Major Attractions"],
    cta: "Book on WhatsApp",
  },
];

function waLink(p: Pkg) {
  return waLinkWithMessage(`Hi JAK Tour & Travels, I'm interested in the "${p.title}" — ${p.perPerson} per person (${p.minPax}). Please share details.`);
}

const TRUST = [
  { i: ShieldCheck, t: "Govt Registered" },
  { i: FileBadge, t: "GST Registered" },
  { i: Mountain, t: "Local Kashmir Expert" },
  { i: Sparkles, t: "Free Shikara Ride" },
  { i: BadgeCheck, t: "Best Price Guarantee" },
];

export function PackageCard({ p }: { p: Pkg }) {
  return (
    <article className={`relative flex flex-col rounded-3xl border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-glass overflow-hidden ${p.featured ? "border-orange/40 ring-1 ring-orange/30" : "border-border"}`}>
      <div className="relative h-[200px] sm:h-[250px] w-full overflow-hidden">
        <img
          src={p.image}
          alt={p.imageAlt}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep/70 via-deep/10 to-transparent" />
        <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-white/95 text-deep text-[11px] font-bold px-3 py-1.5 shadow-soft">
          {p.duration}
        </span>
        {p.featured && (
          <span className="absolute top-3 right-3 inline-flex items-center rounded-full bg-gradient-warm text-white text-[11px] font-bold px-3 py-1.5 shadow-soft">
            Most Popular
          </span>
        )}
        <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5">
          <span className="inline-flex items-center gap-1 rounded-full bg-white/95 text-deep text-[10.5px] font-semibold px-2 py-1">
            <ShieldCheck className="h-3 w-3 text-orange" /> Govt Registered
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-white/95 text-deep text-[10.5px] font-semibold px-2 py-1">
            <Sparkles className="h-3 w-3 text-orange" /> Free Shikara Ride
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-6 sm:p-7">
        <h3 className="font-display text-lg sm:text-xl font-bold text-deep leading-snug">{p.title}</h3>


      <div className="mt-4 rounded-2xl bg-gradient-to-br from-secondary/70 to-secondary/30 border border-border p-4">
        <div className="flex items-baseline gap-2 flex-wrap">
          <span className="text-4xl sm:text-5xl font-extrabold text-gradient-warm leading-none">{p.perPerson}</span>
          <span className="text-xs sm:text-sm font-semibold text-deep uppercase tracking-wide">Per Person</span>
        </div>
        <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-deep/10 text-deep text-xs font-semibold px-2.5 py-1">
          <Check className="h-3.5 w-3.5" /> {p.minPax}
        </div>
        <p className="mt-2 text-xs text-muted-foreground">Total Package Cost: <span className="font-semibold text-foreground">{p.total}</span></p>
      </div>

      <ul className="mt-5 space-y-2 text-sm text-foreground/85 flex-1">
        {p.includes.map((i) => (
          <li key={i} className="flex items-start gap-2"><Check className="h-4 w-4 text-orange mt-0.5 shrink-0" /><span>{i}</span></li>
        ))}
      </ul>

      <div className="mt-5 flex flex-col gap-2.5">
        <a href={waLink(p)} target="_blank" rel="noopener" className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-5 py-3.5 text-sm font-bold shadow-glass hover:scale-[1.02] transition overflow-hidden">
          <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366]/30" />
          <MessageCircle className="h-4 w-4 relative" /> <span className="relative">{p.cta}</span>
        </a>
        <a href={BRAND.tel} className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand text-white px-5 py-3 text-sm font-semibold hover:opacity-95 transition">
          <Phone className="h-4 w-4" /> Call Now
        </a>
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {TRUST.map(({ i: I, t }) => (
          <span key={t} className="inline-flex items-center gap-1 rounded-full bg-secondary text-deep text-[10.5px] font-semibold px-2 py-1">
            <I className="h-3 w-3 text-orange" /> {t}
          </span>
        ))}
      </div>
      </div>
    </article>
  );
}

export function Packages({ limit }: { limit?: number }) {
  const list = limit ? PACKAGES.slice(0, limit) : PACKAGES;
  return (
    <section id="packages" className="bg-secondary/50 py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold text-orange uppercase tracking-widest">Featured Tour Packages</span>
            <h2 className="mt-2 text-3xl sm:text-5xl font-bold text-deep">Curated Kashmir itineraries</h2>
            <p className="mt-4 text-muted-foreground">Per person pricing • Premium stays • Private transfers • Free Shikara ride included.</p>
          </div>
          <a href={BRAND.whatsapp} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-5 py-3 text-sm font-semibold shadow-soft hover:scale-[1.02] transition">
            <MessageCircle className="h-4 w-4" /> Book on WhatsApp
          </a>
        </div>
        <div className="mt-12 grid gap-6 sm:gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => <PackageCard key={i} p={p} />)}
        </div>
      </div>
    </section>
  );
}
