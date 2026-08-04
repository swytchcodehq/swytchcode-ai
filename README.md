# swytchcode.ai

Plain static HTML site for swytchcode.ai — home page, privacy policy, and terms of service
required when registering OAuth apps with providers (Google, GitHub, etc). No build step,
no framework.

## Pages

- `index.html` — home page
- `privacy.html` — privacy policy
- `terms.html` — terms of service

## Local development

Open `index.html` directly in a browser, or serve the folder with any static file server, e.g.:

```
npx serve .
```

## Deploy to GitHub Pages (swytchcodehq)

1. Create an empty repo under the `swytchcodehq` org, e.g. `swytchcodehq/swytchcode.ai`.
2. Push this repo's contents to the `main` branch (or a `gh-pages` branch).
3. In the repo Settings → Pages, set the source to that branch, served from the repo root.
4. Settings → Pages → Custom domain: enter `swytchcode.ai` (the `CNAME` file at the repo
   root already points there).
5. Point the domain's DNS to GitHub Pages (A records to GitHub's IPs, or CNAME if using a
   subdomain).
