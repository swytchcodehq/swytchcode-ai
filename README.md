# swytchcode.ai

Next.js + Tailwind CSS single-page site for swytchcode.ai — used as the homepage, privacy
policy, and terms of service required when registering OAuth apps with providers (Google,
GitHub, etc). Design language matches the main [website](../website) (DM Sans, dark theme,
orange accent).

Statically exported (`output: "export"` in `next.config.mjs`) so it can be served directly
from GitHub Pages with no server.

## Local development

```
npm install
npm run dev
```

## Deploy to GitHub Pages (swytchcodehq)

1. `npm install && npm run build` — outputs the static site to `out/`.
2. Create an empty repo under the `swytchcodehq` org, e.g. `swytchcodehq/swytchcode.ai`.
3. Push this repo, then set up a GitHub Action (or push the `out/` folder to a `gh-pages`
   branch) to deploy `out/` on every push to `main`.
4. In the repo Settings → Pages, set the source to the branch serving `out/`.
5. Settings → Pages → Custom domain: enter `swytchcode.ai` (the `CNAME` file in `public/`
   is copied into `out/` on build).
6. Point the domain's DNS to GitHub Pages (A records to GitHub's IPs, or CNAME if using a
   subdomain).
