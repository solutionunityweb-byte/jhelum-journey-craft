import { ShieldCheck, FileBadge, Hotel, Car, HeadphonesIcon, BadgeCheck } from "lucide-react";

const features = [
  { i: ShieldCheck, t: "Government Registered", d: "Officially registered with the J&K Department of Tourism — Reg. No. JKRTA00000941." },
  { i: FileBadge, t: "GST Registered Business", d: "Fully compliant GST-registered travel operator with transparent invoicing." },
  { i: Hotel, t: "Premium Hotels & Houseboats", d: "Hand-picked deluxe properties and authentic Dal Lake houseboats." },
  { i: Car, t: "Private Cab Service", d: "Comfortable Dzire, Ertiga and Tavera with professional Kashmiri drivers." },
  { i: HeadphonesIcon, t: "24×7 Travel Assistance", d: "On-trip support every step of the way — anytime you need us." },
  { i: BadgeCheck, t: "Best Price Guarantee", d: "Honest, transparent pricing with no hidden charges — ever." },
];

export function WhyChooseUs() {
  return (
    <section className="container mx-auto px-4 py-20 sm:py-28">
      <div className="max-w-2xl">
        <span className="text-sm font-semibold text-orange uppercase tracking-widest">Why Choose Us</span>
        <h2 className="mt-2 text-3xl sm:text-5xl font-bold text-deep">Kashmir, the way it should be experienced</h2>
        <p className="mt-4 text-muted-foreground">A locally-owned travel house built on trust, craft and an obsession with detail.</p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ i: Icon, t, d }) => (
          <div key={t} className="group relative rounded-3xl border border-border bg-card p-7 shadow-soft hover:shadow-glass transition-all hover:-translate-y-1">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-soft">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-xl font-bold text-deep">{t}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
            <div className="absolute inset-x-7 bottom-0 h-1 rounded-full bg-gradient-warm scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
          </div>
        ))}
      </div>
    </section>
  );
}
