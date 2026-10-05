"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { brand } from "@/lib/data";
import { useCart } from "@/lib/cart";
import { SeasonOfferStrip } from "./SeasonOfferStrip";
import { MegaShowroomFooter } from "./MegaShowroomFooter";

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/planner", label: "Planner" },
  { href: "/shop?focus=materials", label: "Materials" },
  { href: "/about", label: "About" },
];

export function ShowroomFrame({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const { count } = useCart();
  const minimal = path === "/";

  return (
    <div className="min-h-screen flex flex-col">
      <SeasonOfferStrip />
      <header
        className={`z-40 border-b border-forest/10 ${minimal ? "absolute inset-x-0 top-8 bg-transparent border-none" : "sticky top-0 bg-limestone/95 backdrop-blur-sm"}`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Link href="/" className="font-display text-2xl tracking-tight text-forest">
            Formloom
          </Link>
          <nav className="hidden gap-8 text-sm uppercase tracking-[0.2em] md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`transition hover:text-clay ${path.startsWith(l.href.split("?")[0]) && l.href !== "/shop?focus=materials" ? "text-clay" : ""}`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/cart"
            className="text-sm font-medium tabular-nums tracking-wide text-forest hover:text-clay"
          >
            Cart ({count})
          </Link>
        </div>
      </header>
      <main className="flex-1 pb-20 md:pb-0">{children}</main>
      {!minimal && <MegaShowroomFooter />}
    </div>
  );
}
