import Navbar from "@/components/navbar";
import SiteFooter from "@/components/site-footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-[760px] mx-auto px-6 py-24">
          <h1 className="text-[44px] sm:text-[56px] font-bold tracking-[-0.03em] leading-[1.05] mb-4 text-gradient">
            Swytchcode
          </h1>
          <p className="text-[18px] text-[#a3a19c] leading-[1.5] mb-16">
            Swytchcode sits between your AI agent and production — handling auth, retries,
            idempotency, and policy control for the APIs you need.
          </p>

          <section className="mb-12">
            <h2 className="text-[20px] font-bold tracking-[-0.02em] mb-3">About</h2>
            <p className="text-[15px] leading-[1.75] text-[#a3a19c]">
              Swytchcode is a CLI execution runtime and dashboard that let AI agents and
              developers call third-party APIs — GitHub, Stripe, Slack, Notion, Gmail,
              HubSpot, and hundreds more — through a single secure execution layer.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-[20px] font-bold tracking-[-0.02em] mb-3">Legal</h2>
            <div className="flex gap-5">
              <a href="/privacy" className="text-[15px] underline decoration-white/35 hover:text-[#f3951f] hover:decoration-[#f3951f] transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-[15px] underline decoration-white/35 hover:text-[#f3951f] hover:decoration-[#f3951f] transition-colors">
                Terms of Service
              </a>
            </div>
          </section>

          <section>
            <h2 className="text-[20px] font-bold tracking-[-0.02em] mb-3">Contact</h2>
            <p className="text-[15px] leading-[1.75] text-[#a3a19c]">
              Questions? Email us at{" "}
              <a href="mailto:hello@swytchcode.com" className="underline decoration-white/35 hover:text-[#f3951f] hover:decoration-[#f3951f] transition-colors">
                hello@swytchcode.com
              </a>.
            </p>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
