"use client";
import { Suspense, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { brand, products, formatPrice } from "@/lib/data";
import { useCart } from "@/lib/cart";

type Sort = "featured" | "price-asc" | "price-desc";

function ShopInner() {
  const sp = useSearchParams();
  const materials = sp.get("focus") === "materials";
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("All");
  const [sort, setSort] = useState<Sort>("featured");
  const { toggleWish, wish } = useCart();

  const list = useMemo(() => {
    let rows = [...products];
    if (cat !== "All") rows = rows.filter((p) => p.category === cat);
    if (q.trim()) {
      const s = q.toLowerCase();
      rows = rows.filter((p) => p.name.toLowerCase().includes(s) || p.description.toLowerCase().includes(s));
    }
    if (sort === "price-asc") rows.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") rows.sort((a, b) => b.price - a.price);
    return rows;
  }, [q, cat, sort]);

  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <header className="border-b border-forest/15 pb-8">
        <h1 className="font-display text-4xl text-forest">{materials ? "Materials library" : "Shop the floor"}</h1>
        <p className="mt-2 max-w-xl text-sm text-fog">
          {materials
            ? "Filter by category, then open a piece for linen, walnut, bouclé, and oak specs."
            : "Search, filter, and sort the full catalog."}
        </p>
      </header>
      <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search pieces…"
          className="w-full max-w-sm border border-forest/20 bg-white/50 px-3 py-2 text-sm outline-none focus:border-clay md:w-auto"
        />
        <div className="flex flex-wrap gap-2">
          <select
            value={cat}
            onChange={(e) => setCat(e.target.value)}
            className="border border-forest/20 bg-white/50 px-3 py-2 text-sm"
          >
            <option>All</option>
            {brand.categories.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as Sort)}
            className="border border-forest/20 bg-white/50 px-3 py-2 text-sm"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price ↑</option>
            <option value="price-desc">Price ↓</option>
          </select>
        </div>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <article key={p.id} className="border border-forest/10 bg-white/40">
            <Link href={`/product/${p.id}`} className="block">
              <div className="relative aspect-square">
                <Image src={p.image} alt={p.name} fill className="object-cover" sizes="320px" />
              </div>
            </Link>
            <div className="flex items-start justify-between gap-2 p-4">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-fog">{p.category}</p>
                <Link href={`/product/${p.id}`} className="font-medium hover:text-clay">
                  {p.name}
                </Link>
                <p className="text-sm text-fog">{formatPrice(p.price)}</p>
              </div>
              <button
                type="button"
                onClick={() => toggleWish(p.id)}
                className={`text-xs uppercase tracking-widest ${wish.includes(p.id) ? "text-clay" : "text-fog"}`}
              >
                {wish.includes(p.id) ? "Saved" : "Save"}
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="px-5 py-12 text-fog">Loading shop…</div>}>
      <ShopInner />
    </Suspense>
  );
}
