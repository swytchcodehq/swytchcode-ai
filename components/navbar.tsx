import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-black border-b border-white/10">
      <div className="max-w-[760px] mx-auto px-6 h-16 flex items-center">
        <Link href="/" className="flex items-center">
          <img src="/logo.png" alt="Swytchcode" className="h-8 w-auto" />
        </Link>
      </div>
    </header>
  );
}
