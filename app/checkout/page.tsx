"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { brand, formatPrice } from "@/lib/data";
import { useCart } from "@/lib/cart";

export default function CheckoutPage() {
  const { items, subtotal, clear } = useCart();
  const router = useRouter();
  const [code, setCode] = useState("");
  const [applied, setApplied] = useState(false);
  const discount = applied && code.toUpperCase() === brand.offer.code ? subtotal * 0.15 : 0;
  const total = subtotal - discount;

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-lg px-5 py-16 text-center">
        <p>Cart is empty.</p>
        <Link href="/shop" className="mt-4 inline-block text-clay underline">
          Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-5xl gap-10 px-5 py-12 lg:grid-cols-2">
      <div>
        <h1 className="font-display text-3xl">Checkout</h1>
        <p className="mt-2 text-sm text-fog">{brand.checkoutNote}</p>
        <form
          className="mt-8 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            clear();
            router.push("/success");
          }}
        >
          <input required placeholder="Full name" className="w-full border border-forest/20 bg-white/60 px-3 py-2 text-sm" />
          <input required type="email" placeholder="Email" className="w-full border border-forest/20 bg-white/60 px-3 py-2 text-sm" />
          <input required placeholder="Address" className="w-full border border-forest/20 bg-white/60 px-3 py-2 text-sm" />
          <div className="rounded border border-forest/20 bg-forest p-4 text-limestone">
            <p className="text-xs uppercase tracking-widest">Payment</p>
            <input placeholder="Card number" className="mt-2 w-full border border-limestone/30 bg-transparent px-2 py-2 text-sm" />
            <div className="mt-2 grid grid-cols-2 gap-2">
              <input placeholder="MM/YY" className="border border-limestone/30 bg-transparent px-2 py-2 text-sm" />
              <input placeholder="CVC" className="border border-limestone/30 bg-transparent px-2 py-2 text-sm" />
            </div>
            <p className="mt-2 text-[10px] text-limestone/60">Demo only — no charge processed.</p>
          </div>
          <button type="submit" className="w-full bg-clay py-3 text-xs font-semibold uppercase tracking-[0.25em] text-limestone">
            Pay {formatPrice(total)}
          </button>
        </form>
      </div>
      <aside className="border border-forest/10 bg-white/50 p-6 h-fit">
        <h2 className="text-sm uppercase tracking-widest text-fog">Order</h2>
        <ul className="mt-4 space-y-2 text-sm">
          {items.map((i) => (
            <li key={i.id} className="flex justify-between">
              <span>
                {i.name} × {i.qty}
              </span>
              <span>{formatPrice(i.price * i.qty)}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex gap-2">
          <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Coupon"
            className="flex-1 border border-forest/20 px-2 py-2 text-sm uppercase"
          />
          <button
            type="button"
            onClick={() => setApplied(true)}
            className="border border-forest px-3 text-xs uppercase tracking-widest"
          >
            Apply
          </button>
        </div>
        {applied && code.toUpperCase() === brand.offer.code && (
          <p className="mt-2 text-xs text-clay">ROOM15 applied — 15% off</p>
        )}
        {applied && code.toUpperCase() !== brand.offer.code && (
          <p className="mt-2 text-xs text-red-800">Invalid code</p>
        )}
        <div className="mt-6 space-y-1 border-t border-forest/10 pt-4 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          {discount > 0 && (
            <div className="flex justify-between text-clay">
              <span>Discount</span>
              <span>-{formatPrice(discount)}</span>
            </div>
          )}
          <div className="flex justify-between font-medium">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>
        </div>
      </aside>
    </div>
  );
}
