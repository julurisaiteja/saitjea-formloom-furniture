"use client";
import Link from "next/link";
import Image from "next/image";
import { formatPrice } from "@/lib/data";
import { useCart } from "@/lib/cart";

export default function CartPage() {
  const { items, setQty, remove, subtotal } = useCart();
  return (
    <div className="mx-auto max-w-3xl px-5 py-12">
      <h1 className="font-display text-4xl">Cart</h1>
      {items.length === 0 ? (
        <p className="mt-6 text-fog">
          Empty — <Link href="/shop" className="text-clay underline">browse the floor</Link>.
        </p>
      ) : (
        <>
          <ul className="mt-8 divide-y divide-forest/10">
            {items.map((item) => (
              <li key={`${item.id}-${item.variant}`} className="flex gap-4 py-6">
                <div className="relative h-24 w-24 shrink-0 border border-forest/10">
                  <Image src={item.image} alt={item.name} fill className="object-cover" sizes="96px" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">{item.name}</p>
                  {item.variant && <p className="text-xs text-fog">{item.variant}</p>}
                  <p className="text-sm">{formatPrice(item.price)}</p>
                  <div className="mt-2 flex items-center gap-3 text-sm">
                    <label>
                      Qty{" "}
                      <input
                        type="number"
                        min={1}
                        value={item.qty}
                        onChange={(e) => setQty(item.id, Number(e.target.value))}
                        className="ml-1 w-14 border border-forest/20 px-1"
                      />
                    </label>
                    <button type="button" onClick={() => remove(item.id)} className="text-fog underline">
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex items-center justify-between border-t border-forest/15 pt-6">
            <p className="font-display text-xl">Subtotal {formatPrice(subtotal)}</p>
            <Link
              href="/checkout"
              className="bg-clay px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-limestone"
            >
              Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
