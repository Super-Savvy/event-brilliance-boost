

## Problem

Netlify deploy shows "Page not found" because:
1. Netlify is serving the project as a static site, but TanStack Start is a **full-stack SSR framework** targeting Cloudflare Workers (see `wrangler.jsonc` and the `@lovable.dev/vite-tanstack-config` which includes the `cloudflare` build plugin).
2. There's no `netlify.toml` telling Netlify how to build/serve the app.
3. Even for a static fallback, there's no `_redirects` file to route all paths to `index.html` for the SPA shell.

## Fix

Add Netlify configuration so the build runs, output is published from the right directory, and unknown paths fall back to the SPA entry. Since Cloudflare-targeted SSR output won't run on Netlify as-is, we'll deploy the **client bundle as a static SPA on Netlify** (route handling stays client-side via TanStack Router). This matches the user's "deploy to Netlify" goal without re-architecting the app.

### Changes

1. **Create `netlify.toml`** at the project root:
   ```toml
   [build]
     command = "npm run build"
     publish = "dist/client"

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```
   - `publish` points to the Vite client output directory produced by the TanStack Start build.
   - The catch-all redirect ensures deep links (e.g. `/contact`, `/gallery`) serve `index.html` so the router can take over — fixing the "Page not found" screen.

2. **Create `public/_redirects`** as a backup (Netlify reads this even without `netlify.toml`):
   ```
   /*  /index.html  200
   ```

3. **Verify `publish` directory after first build.** If the TanStack Start build emits the static client to a different folder (e.g. `dist` or `.output/public`), I'll adjust `netlify.toml` accordingly. I'll inspect the build output once in default mode to confirm.

### Notes for the user

- Server functions / SSR features won't execute on Netlify with this static setup — the site runs as a client-rendered SPA. Current pages (home, contact, events, faq, gallery, reviews) are all client-renderable, so this works fine today.
- If you later add server functions (e.g. form submissions saved to Lovable Cloud), we'd need to either deploy to Cloudflare (already configured) or migrate to Netlify Functions.
- GitHub → Netlify auto-deploy: connect the repo in Netlify; the `netlify.toml` will be picked up automatically.

