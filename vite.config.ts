// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Select Nitro preset based on deployment target.
// - Vercel sets VERCEL=1
// - Netlify sets NETLIFY=true
// - Default: cloudflare_module (used by Lovable hosting)
const preset =
  process.env.NITRO_PRESET ??
  (process.env.VERCEL ? "vercel" : process.env.NETLIFY ? "netlify" : undefined);

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    server: { entry: "server" },
    ...(preset ? { target: preset } : {}),
  },
  ...(preset
    ? {
        vite: {
          // Forward preset to the nitro plugin via env so it picks the right adapter.
          define: {},
        },
      }
    : {}),
});
