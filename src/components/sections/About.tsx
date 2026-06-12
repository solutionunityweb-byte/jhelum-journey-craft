import { Award, Heart, MapPinned } from "lucide-react";
import logoAsset from "@/assets/jak-logo.asset.json";

export function About() {
  return (
    <section id="about" className="container mx-auto px-4 py-20 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-2 items-center">
        <div className="relative">
          <div className="aspect-square rounded-[2.5rem] bg-gradient-brand p-1 shadow-glass">
            <div className="h-full w-full rounded-[2.3rem] bg-white flex items-center justify-center p-10">
              <img src={logoAsset.url} alt="JAK Tour & Travels" className="max-w-full max-h-full object-contain animate-float" />
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-5 shadow-glass max-w-[220px]">
            <div className="text-4xl font-bold text-deep font-display">1000+</div>
            <div className="text-sm text-muted-foreground">Happy travelers since opening our Srinagar office</div>
          </div>
        </div>
        <div>
          <span className="text-sm font-semibold text-orange uppercase tracking-widest">About Us</span>
          <h2 className="mt-2 text-3xl sm:text-5xl font-bold text-deep">About JAK Tour & Travels</h2>
          <p className="mt-5 text-foreground/85 leading-relaxed">
            JAK Tour & Travels is a trusted and government-registered Kashmir travel agency based in Srinagar. We specialize in customized Kashmir tour packages, honeymoon tours, family vacations, group tours, hotel bookings, houseboat stays, airport transfers and sightseeing services.
          </p>
          <p className="mt-4 text-foreground/85 leading-relaxed">
            Our mission is to deliver unforgettable travel experiences with professional service, transparent pricing and authentic local expertise.
          </p>
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {[
              { i: Award, t: "Govt Certified", d: "JKRTA00000941" },
              { i: Heart, t: "Local & Trusted", d: "Born in Kashmir" },
              { i: MapPinned, t: "End-to-End", d: "Stay • Travel • Sightseeing" },
            ].map(({ i: Icon, t, d }) => (
              <div key={t} className="rounded-2xl border border-border bg-card p-4 shadow-soft">
                <Icon className="h-5 w-5 text-orange" />
                <div className="mt-2 font-semibold text-deep">{t}</div>
                <div className="text-xs text-muted-foreground">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
