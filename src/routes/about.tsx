import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { About } from "@/components/sections/About";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Office } from "@/components/sections/Office";
import { Reviews } from "@/components/sections/Reviews";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About JAK Tour & Travels – Trusted Kashmir Travel Agency" },
      { name: "description", content: "Government-registered Kashmir travel agency based in Srinagar. Customised honeymoon, family & group tour packages with local expertise since opening." },
      { property: "og:title", content: "About JAK Tour & Travels" },
      { property: "og:description", content: "Locally owned, government-registered Srinagar travel agency." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteShell>
      <About />
      <WhyChooseUs />
      <Office />
      <Reviews />
    </SiteShell>
  );
}
