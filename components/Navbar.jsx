"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

export default function Navbar() {
  const pathname = usePathname();

  const linkStyle = (path) => (
    `mr-3.75 text-[#333] no-underline hover:text-[#15b65e] active:text-[#0c703b]
      ${pathname === path ? "font-bold" : ""}`
  );

  return (
    <nav className="flex items-center gap-6 mb-5">
      <Link href="/">
        <Logo />
      </Link>
      <Link href="/" className={linkStyle("/")}>
        Home
      </Link>
      <Link href="/about" className={linkStyle("/about")}>
        About
      </Link>
      <Link href="/contact" className={linkStyle("/contact")}>
        Contact
      </Link>
    </nav>
  );
}
