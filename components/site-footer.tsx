import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-[#0e0e0c] border-t border-white/10">
      <div className="max-w-[760px] mx-auto px-6 py-6 flex flex-wrap items-center justify-between gap-3 text-[13px] text-[#7a7974]">
        <span>&copy; 2026 Swytchcode. All rights reserved.</span>
        <div className="flex gap-4">
          <Link href="/privacy" className="hover:text-[#f0ede8] transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-[#f0ede8] transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
