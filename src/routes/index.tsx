import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Hero } from "@/components/sections/Hero";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Packages } from "@/components/sections/Packages";
import { About } from "@/components/sections/About";
import { Destinations } from "@/components/sections/Destinations";
import { Reviews } from "@/components/sections/Reviews";
import { Office } from "@/components/sections/Office";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JAK Tour & Travels – Premium Kashmir Tour Packages from Srinagar" },
      { name: "description", content: "Govt registered Kashmir travel agency. Premium tour packages with hotel, houseboat, Shikara ride, Gulmarg, Pahalgam, Sonamarg sightseeing & private cab. Book on WhatsApp." },
      { name: "keywords", content: "Kashmir Tour Packages, Kashmir Travel Agency, Srinagar Tour Package, Gulmarg Package, Pahalgam Tour Package, Sonamarg Tour Package, Kashmir Honeymoon Package, Houseboat Booking Srinagar, Best Travel Agency in Kashmir, Kashmir Family Tour Package" },
      { property: "og:title", content: "JAK Tour & Travels – Premium Kashmir Tour Packages" },
      { property: "og:description", content: "Discover Kashmir with a trusted, government-registered Srinagar travel agency." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteShell>
      <Hero />
      <WhyChooseUs />
      <Packages />
      <About />
      <Destinations />
      <Reviews />
      <Office />
      <Contact />
    </SiteShell>
  );
}
