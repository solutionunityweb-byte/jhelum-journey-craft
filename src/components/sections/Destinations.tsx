import srinagar from "@/assets/dest-srinagar.jpg";
import gulmarg from "@/assets/dest-gulmarg.jpg";
import sonamarg from "@/assets/dest-sonamarg.jpg";
import pahalgam from "@/assets/dest-pahalgam.jpg";
import doodhpatri from "@/assets/dest-doodhpatri.jpg";
import dallake from "@/assets/dest-dallake.jpg";
import { ArrowRight } from "lucide-react";
import { BRAND } from "@/lib/brand";

const dests = [
  { name: "Srinagar", img: srinagar, desc: "Capital of paradise — Mughal gardens, Dal Lake & old town charm." },
  { name: "Gulmarg", img: gulmarg, desc: "Meadow of flowers turned ski-town. Ride Asia's highest gondola." },
  { name: "Sonamarg", img: sonamarg, desc: "Meadow of gold — alpine rivers, Thajiwas glacier & pony trails." },
  { name: "Pahalgam", img: pahalgam, desc: "Valley of shepherds — pine forests, Lidder river & Aru valley." },
  { name: "Doodhpatri", img: doodhpatri, desc: "Valley of milk — rolling green meadows and silver streams." },
  { name: "Dal Lake", img: dallake, desc: "Iconic shikaras, floating gardens and timeless houseboat stays." },
];

export function Destinations() {
  return (
    <section id="destinations" className="container mx-auto px-4 py-20 sm:py-28">
      <div className="max-w-2xl">
        <span className="text-sm font-semibold text-orange uppercase tracking-widest">Kashmir Destinations</span>
        <h2 className="mt-2 text-3xl sm:text-5xl font-bold text-deep">Places we'll take you</h2>
        <p className="mt-4 text-muted-foreground">From snow-dusted gondolas in Gulmarg to slow shikara mornings on Dal Lake.</p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {dests.map((d) => (
          <article key={d.name} className="group relative overflow-hidden rounded-3xl shadow-card border border-border bg-card">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={d.img} alt={`${d.name} Kashmir`} loading="lazy" width={800} height={600}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-deep/85 via-deep/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <h3 className="font-display text-2xl font-bold">{d.name}</h3>
              <p className="mt-1 text-sm text-white/80 line-clamp-2">{d.desc}</p>
              <a href={BRAND.whatsapp} target="_blank" rel="noopener"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-orange hover:gap-3 transition-all">
                Explore <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
