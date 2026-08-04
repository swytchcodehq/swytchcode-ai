import Navbar from "@/components/navbar"
import SiteFooter from "@/components/site-footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#f5f4f0] text-[#1a1a18]">
      <Navbar />

      <section className="px-4 sm:px-6 pt-16 pb-16 sm:pt-20 sm:pb-20">
        <div className="max-w-[760px] mx-auto">
          <p className="text-[12px] font-semibold tracking-widest uppercase text-[#999894] mb-4">Legal</p>
          <h1 className="text-[38px] sm:text-[48px] font-semibold tracking-[-0.03em] text-[#1a1a18] leading-[1.05] mb-4">
            Terms of Service
          </h1>
          <p className="text-[14px] text-[#999894] mb-12">Last updated: July 2026</p>

          <div className="flex flex-col gap-10 text-[15px] leading-[1.75] text-[#5a5956]">
            <p>
              These Terms of Service (&quot;Terms&quot;) govern your use of Swytchcode&apos;s website, CLI, dashboard, and
              related services (together, the &quot;Service&quot;). By using the Service, you agree to these Terms.
            </p>

            <section>
              <h2 className="text-[20px] font-semibold tracking-[-0.02em] text-[#1a1a18] mb-3">Description of service</h2>
              <p>
                Swytchcode provides a CLI execution runtime and dashboard that let AI agents and developers call
                third-party APIs with authentication, retries, idempotency, and policy control handled for you, along
                with supporting documentation and an integration directory.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-semibold tracking-[-0.02em] text-[#1a1a18] mb-3">Acceptable use</h2>
              <p className="mb-3">When using the Service, you agree not to:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Use the Service to violate any applicable law or the terms of any third-party API you access through it.</li>
                <li>Attempt to reverse engineer, circumvent, or disable any policy or rate-limiting controls built into the Service.</li>
                <li>Interfere with or disrupt the integrity or performance of the Service.</li>
                <li>Use the Service to transmit malicious code or gain unauthorized access to any system.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[20px] font-semibold tracking-[-0.02em] text-[#1a1a18] mb-3">Accounts</h2>
              <p>
                If you create an account to use the Service, you are responsible for maintaining the confidentiality
                of your credentials and for all activity that occurs under your account.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-semibold tracking-[-0.02em] text-[#1a1a18] mb-3">Third-party integrations</h2>
              <p>
                The Service enables calls to third-party APIs that Swytchcode does not own or control. We are not
                responsible for the availability, accuracy, or behavior of any third-party API, and your use of those
                APIs is subject to their own terms.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-semibold tracking-[-0.02em] text-[#1a1a18] mb-3">Intellectual property</h2>
              <p>
                The Service, including its software, branding, and documentation, is owned by Swytchcode and protected
                by applicable intellectual property laws. These Terms do not grant you any rights to our trademarks or
                branding beyond what is described in our brand kit.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-semibold tracking-[-0.02em] text-[#1a1a18] mb-3">Disclaimer &amp; limitation of liability</h2>
              <p>
                The Service is provided &quot;as is&quot; without warranties of any kind. To the fullest extent permitted by
                law, Swytchcode will not be liable for any indirect, incidental, or consequential damages arising from
                your use of the Service.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-semibold tracking-[-0.02em] text-[#1a1a18] mb-3">Governing law</h2>
              <p>
                These Terms are governed by the laws applicable in the jurisdiction in which Swytchcode operates,
                without regard to conflict-of-law principles.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-semibold tracking-[-0.02em] text-[#1a1a18] mb-3">Changes to these terms</h2>
              <p>
                We may update these Terms from time to time. Continued use of the Service after changes take effect
                constitutes acceptance of the revised Terms.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-semibold tracking-[-0.02em] text-[#1a1a18] mb-3">Contact</h2>
              <p>
                Questions about these Terms? Email us at{" "}
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
