import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Packages } from "@/components/sections/Packages";
import { Destinations } from "@/components/sections/Destinations";

export const Route = createFileRoute("/tour-packages")({
  head: () => ({
    meta: [
      { title: "Kashmir Tour Packages – JAK Tour & Travels Srinagar" },
      { name: "description", content: "Browse all Kashmir tour packages: couple, family, group, honeymoon & premium itineraries with hotel, houseboat, Shikara, sightseeing and private cab." },
      { property: "og:title", content: "Kashmir Tour Packages – JAK Tour & Travels" },
      { property: "og:description", content: "Customised Srinagar, Gulmarg, Pahalgam, Sonamarg & Doodhpatri tour packages." },
    ],
    links: [{ rel: "canonical", href: "/tour-packages" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteShell>
      <div className="bg-gradient-brand text-white">
        <div className="container mx-auto px-4 py-20 sm:py-28">
          <span className="text-xs font-semibold uppercase tracking-widest text-orange">Tour Packages</span>
          <h1 className="mt-2 font-display text-4xl sm:text-6xl font-bold max-w-3xl">All Kashmir tour packages, one curated list</h1>
          <p className="mt-4 text-white/80 max-w-2xl">Transparent pricing. Premium hotels & houseboats. Private cab. Free Shikara ride included.</p>
        </div>
      </div>
      <Packages />
      <Destinations />
    </SiteShell>
  );
}
