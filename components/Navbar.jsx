"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkStyle = (path) => ({
    marginRight: "15px",
    fontWeight: pathname === path ? "bold" : "normal",
    textDecoration: "none",
    color: "#333",
  });

  return (
    <nav style={{ marginBottom: "20px" }}>
      <Link href="/" style={linkStyle("/")}>
        Home
      </Link>
      <Link href="/about" style={linkStyle("/about")}>
        About
      </Link>
      <Link href="/contact" style={linkStyle("/contact")}>
        Contact
      </Link>
    </nav>
  );
}
