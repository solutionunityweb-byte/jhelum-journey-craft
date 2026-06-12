import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Contact } from "@/components/sections/Contact";
import { Office } from "@/components/sections/Office";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact JAK Tour & Travels – Srinagar Kashmir" },
      { name: "description", content: "Contact JAK Tour & Travels in Central Market, Abi Guzar, Srinagar. Call, WhatsApp or email for Kashmir tour packages and bookings." },
      { property: "og:title", content: "Contact JAK Tour & Travels" },
      { property: "og:description", content: "Reach our Srinagar travel experts on WhatsApp, call or email." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteShell>
      <Contact />
      <Office />
    </SiteShell>
  );
}
