"use client";
import Link from "next/link";
import Image from "next/image";
import { getProduct, formatPrice } from "@/lib/data";
import { useCart } from "@/lib/cart";

export default function WishlistPage() {
  const { wish, toggleWish, add } = useCart();
  const items = wish.map(getProduct).filter(Boolean);
  return (
    <div className="mx-auto max-w-4xl px-5 py-12">
      <h1 className="font-display text-4xl">Wishlist</h1>
      {items.length === 0 ? (
        <p className="mt-6 text-fog">Nothing saved yet.</p>
      ) : (
        <ul className="mt-8 grid gap-6 sm:grid-cols-2">
          {items.map((p) =>
            p ? (
              <li key={p.id} className="border border-forest/10 p-4">
                <Link href={`/product/${p.id}`}>
                  <div className="relative aspect-[4/3]">
                    <Image src={p.image} alt={p.name} fill className="object-cover" sizes="300px" />
                  </div>
                </Link>
                <div className="mt-3 flex items-center justify-between">
                  <div>
                    <p className="font-medium">{p.name}</p>
                    <p className="text-sm text-fog">{formatPrice(p.price)}</p>
                  </div>
                  <div className="flex flex-col gap-2 text-xs uppercase tracking-widest">
                    <button type="button" onClick={() => add(p)} className="text-clay">
                      Add
                    </button>
                    <button type="button" onClick={() => toggleWish(p.id)} className="text-fog">
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ) : null
          )}
        </ul>
      )}
    </div>
  );
}
