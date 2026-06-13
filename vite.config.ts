// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Select Nitro preset based on deployment target.
// - Vercel sets VERCEL=1 and needs Nitro's Vercel Build Output API adapter.
// - Netlify sets NETLIFY=true and needs Nitro's Netlify functions adapter.
// - Lovable hosting forces its Cloudflare adapter internally in sandbox/publish builds.
const preset =
  process.env.NITRO_PRESET ??
  (process.env.VERCEL ? "vercel" : process.env.NETLIFY ? "netlify" : undefined);

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    server: { entry: "server" },
  },
  // This must be top-level `nitro`; `tanstackStart.target` is ignored by the
  // @lovable.dev/vite-tanstack-config Nitro plugin, which leaves external
  // Vercel/Netlify builds without deployable server output and causes 404s.
  nitro: preset ? { preset } : true,
});
