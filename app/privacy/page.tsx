import Navbar from "@/components/navbar"
import SiteFooter from "@/components/site-footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#f5f4f0] text-[#1a1a18]">
      <Navbar />

      <section className="px-4 sm:px-6 pt-16 pb-16 sm:pt-20 sm:pb-20">
        <div className="max-w-[760px] mx-auto">
          <p className="text-[12px] font-semibold tracking-widest uppercase text-[#999894] mb-4">Legal</p>
          <h1 className="text-[38px] sm:text-[48px] font-semibold tracking-[-0.03em] text-[#1a1a18] leading-[1.05] mb-4">
            Privacy Policy
          </h1>
          <p className="text-[14px] text-[#999894] mb-12">Last updated: July 2026</p>

          <div className="flex flex-col gap-10 text-[15px] leading-[1.75] text-[#5a5956]">
            <p>
              This Privacy Policy explains what information Swytchcode (&quot;Swytchcode&quot;, &quot;we&quot;, &quot;us&quot;) collects
              across our website (swytchcode.com), CLI, and dashboard (app.swytchcode.com), and how we use it. By using
              our website or services, you agree to the collection and use of information as described here.
            </p>

            <section>
              <h2 className="text-[20px] font-semibold tracking-[-0.02em] text-[#1a1a18] mb-3">Information we collect</h2>
              <p className="mb-3">
                <strong className="text-[#1a1a18]">Contact form.</strong> When you submit our contact form, we collect
                your name, email address, subject, and message so we can respond to your inquiry. This information is
                sent to us via Resend, our email delivery provider, and protected with Google reCAPTCHA to prevent spam.
              </p>
              <p className="mb-3">
                <strong className="text-[#1a1a18]">Account &amp; authentication data.</strong> When you sign in to the
                Swytchcode CLI, authentication is handled by WorkOS. When you sign in to the Swytchcode dashboard,
                authentication is handled by Firebase Authentication. These providers process your email address and
                credentials on our behalf so we can verify your identity.
              </p>
              <p className="mb-3">
                <strong className="text-[#1a1a18]">Usage data.</strong> We use Google Analytics to understand how
                visitors use our website — page views and interactions such as button clicks. We use PostHog to
                understand how the CLI and dashboard are used — for example, which commands and features are run.
              </p>
              <p>
                <strong className="text-[#1a1a18]">Billing data.</strong> If you subscribe to a paid plan, payments are
                processed by Stripe. Stripe collects your payment card details directly — we do not store your full
                card number on our own systems.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-semibold tracking-[-0.02em] text-[#1a1a18] mb-3">How we use it</h2>
              <p>
                We use the information above to authenticate you, respond to your messages, operate and improve our
                website and services, and detect and prevent spam or abuse. We do not use contact form submissions for
                marketing without your consent.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-semibold tracking-[-0.02em] text-[#1a1a18] mb-3">Cookies</h2>
              <p>
                Our own code does not set tracking cookies on our website. Google Analytics, which we use to measure
                website traffic, may set cookies in your browser as described in{" "}
                <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#1a1a18]">
                  Google&apos;s cookie policy
                </a>. If you sign in to the dashboard, Firebase sets a session cookie to keep you authenticated.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-semibold tracking-[-0.02em] text-[#1a1a18] mb-3">Third-party services</h2>
              <p className="mb-3">We share data with the following processors, only as needed to operate our services:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong className="text-[#1a1a18]">Resend</strong> — delivers contact form emails to our team.</li>
                <li><strong className="text-[#1a1a18]">Google Analytics</strong> — measures website traffic and usage.</li>
                <li><strong className="text-[#1a1a18]">Google reCAPTCHA</strong> — protects our contact form from spam and abuse.</li>
                <li><strong className="text-[#1a1a18]">Stripe</strong> — processes payments for paid plans.</li>
                <li><strong className="text-[#1a1a18]">WorkOS</strong> — authenticates CLI users.</li>
                <li><strong className="text-[#1a1a18]">Firebase</strong> — authenticates dashboard users.</li>
                <li><strong className="text-[#1a1a18]">PostHog</strong> — measures product usage in the CLI and dashboard.</li>
                <li><strong className="text-[#1a1a18]">Vercel</strong> — hosts our website.</li>
                <li><strong className="text-[#1a1a18]">AWS and Azure</strong> — host our backend, API, and CLI infrastructure.</li>
              </ul>
              <p className="mt-3">We never sell your personal information.</p>
            </section>

            <section>
              <h2 className="text-[20px] font-semibold tracking-[-0.02em] text-[#1a1a18] mb-3">Data retention</h2>
              <p>
                We retain contact form submissions only as long as needed to address your inquiry and for a reasonable
                period afterward for our records, after which they are deleted.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-semibold tracking-[-0.02em] text-[#1a1a18] mb-3">Your rights</h2>
              <p>
                You can request access to, correction of, or deletion of any personal information we hold about you by
                emailing us at{" "}
                <a href="mailto:hello@swytchcode.com" className="underline hover:text-[#1a1a18]">hello@swytchcode.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-semibold tracking-[-0.02em] text-[#1a1a18] mb-3">Children&apos;s privacy</h2>
              <p>
                Our website and services are not directed at children under 13, and we do not knowingly collect
                personal information from them.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-semibold tracking-[-0.02em] text-[#1a1a18] mb-3">Changes to this policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an
                updated &quot;Last updated&quot; date.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-semibold tracking-[-0.02em] text-[#1a1a18] mb-3">Contact</h2>
              <p>
                Questions about this policy? Email us at{" "}
                <a href="mailto:hello@swytchcode.com" className="underline hover:text-[#1a1a18]">hello@swytchcode.com</a>.
              </p>
            </section>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
