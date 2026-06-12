import { BRAND } from "@/lib/brand";
import { Check, MessageCircle } from "lucide-react";

export type Pkg = {
  title: string;
  audience: string;
  price: string;
  perPerson?: string;
  includes: string[];
  cta: string;
  featured?: boolean;
};

export const PACKAGES: Pkg[] = [
  {
    title: "4 Nights 5 Days Kashmir Package",
    audience: "For Couple",
    price: "₹30,000",
    includes: ["3 Nights Hotel Stay", "1 Night Houseboat Stay", "Free Shikara Ride", "Srinagar Local Sightseeing", "Sonamarg • Gulmarg • Pahalgam", "Private Dzire Cab", "Airport Pickup & Drop"],
    cta: "Book on WhatsApp",
    featured: true,
  },
  {
    title: "4N 5D Group Package",
    audience: "4 Adults",
    price: "₹44,000",
    perPerson: "₹11,000 per person",
    includes: ["2 Deluxe Rooms", "Private Cab", "Hotel + Houseboat", "All Sightseeing"],
    cta: "Get Quote",
  },
  {
    title: "4N 5D Group Package",
    audience: "6 Adults",
    price: "₹55,800",
    perPerson: "₹9,300 per person",
    includes: ["Ertiga Cab", "2 Rooms + Extra Beds", "Houseboat Stay", "Free Shikara Ride"],
    cta: "Book Now",
  },
  {
    title: "5N 6D Premium Package",
    audience: "4 Adults",
    price: "₹53,000",
    perPerson: "₹13,250 per person",
    includes: ["Srinagar • Sonamarg • Gulmarg", "Doodhpatri Day Trip", "Pahalgam Night Stay", "Houseboat Stay", "Private Cab"],
    cta: "Enquire Now",
    featured: true,
  },
  {
    title: "5N 6D Jammu/Katra Pickup",
    audience: "4 Adults",
    price: "₹59,000",
    perPerson: "₹14,750 per person",
    includes: ["Jammu / Katra Pickup", "All Sightseeing", "Hotel + Houseboat", "Pahalgam Stay"],
    cta: "WhatsApp Now",
  },
  {
    title: "5N 6D Group Package",
    audience: "8 Adults",
    price: "₹70,000",
    perPerson: "₹8,750 per person",
    includes: ["Tavera Cab", "3 Rooms + Extra Beds", "All Sightseeing", "Free Shikara Ride"],
    cta: "Get Best Price",
  },
  {
    title: "6N 7D Couple Package",
    audience: "2 Adults",
    price: "₹45,000",
    includes: ["Srinagar Pickup & Drop", "Premium Stay", "Houseboat Stay", "Free Shikara Ride", "All Major Attractions"],
    cta: "Reserve Package",
  },
];

function waLink(p: Pkg) {
  const msg = encodeURIComponent(`Hi JAK Tour & Travels, I'm interested in the "${p.title}" (${p.audience}) at ${p.price}. Please share details.`);
  return `${BRAND.whatsapp}?text=${msg}`;
}

export function PackageCard({ p }: { p: Pkg }) {
  return (
    <article className={`relative flex flex-col rounded-3xl border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-glass ${p.featured ? "border-orange/40 ring-1 ring-orange/30" : "border-border"}`}>
      {p.featured && (
        <span className="absolute -top-3 left-7 inline-flex items-center rounded-full bg-gradient-warm text-white text-xs font-semibold px-3 py-1 shadow-soft">
          Most Popular
        </span>
      )}
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-orange">{p.audience}</p>
          <h3 className="mt-1 font-display text-xl font-bold text-deep leading-snug">{p.title}</h3>
        </div>
      </div>
      <div className="mt-5 flex items-baseline gap-2">
        <span className="text-4xl font-bold text-deep">{p.price}</span>
        {p.perPerson && <span className="text-sm text-muted-foreground">({p.perPerson})</span>}
      </div>
      <ul className="mt-5 space-y-2.5 text-sm text-foreground/85 flex-1">
        {p.includes.map((i) => (
          <li key={i} className="flex items-start gap-2"><Check className="h-4 w-4 text-orange mt-0.5 shrink-0" />{i}</li>
        ))}
      </ul>
      <a href={waLink(p)} target="_blank" rel="noopener" className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand text-white px-5 py-3 text-sm font-semibold shadow-soft hover:opacity-95 transition">
        <MessageCircle className="h-4 w-4" /> {p.cta}
      </a>
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
            <p className="mt-4 text-muted-foreground">Transparent pricing • Premium stays • Private transfers • Free Shikara ride included.</p>
          </div>
          <a href={BRAND.whatsapp} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full bg-deep text-white px-5 py-3 text-sm font-semibold hover:bg-deep/90 transition">
            <MessageCircle className="h-4 w-4" /> Get a Custom Quote
          </a>
        </div>
        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => <PackageCard key={i} p={p} />)}
        </div>
      </div>
    </section>
  );
}
