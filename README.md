# swytchcode.ai

Single-page static site for swytchcode.ai — used as the homepage, privacy policy, and
terms of service required when registering OAuth apps with providers (Google, GitHub, etc).

## Deploy to GitHub Pages (swytchcodehq)

1. Create an empty repo under the `swytchcodehq` org, e.g. `swytchcodehq/swytchcode.ai`.
2. Push this repo:
   ```
   git remote add origin git@github.com:swytchcodehq/swytchcode.ai.git
   git push -u origin main
   ```
3. In the repo Settings → Pages, set the source to the `main` branch, root folder.
4. Settings → Pages → Custom domain: enter `swytchcode.ai` (the `CNAME` file is already committed).
5. Point the domain's DNS to GitHub Pages (A records to GitHub's IPs, or CNAME if using a subdomain).
