"use client";
import { use, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { formatPrice, getProduct, relatedProducts } from "@/lib/data";
import { useCart } from "@/lib/cart";

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = getProduct(id);
  const [img, setImg] = useState(0);
  const [variant, setVariant] = useState<string | undefined>();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { add, toggleWish, wish } = useCart();
  if (!product) notFound();
  const related = relatedProducts(product);

  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <div className="relative aspect-square border border-forest/10">
            <Image src={product.images[img]} alt={product.name} fill className="object-cover" sizes="600px" priority />
          </div>
          <div className="mt-3 flex gap-2">
            {product.images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setImg(i)}
                className={`relative h-16 w-16 border ${i === img ? "border-clay" : "border-forest/15"}`}
              >
                <Image src={src} alt="" fill className="object-cover" sizes="64px" />
              </button>
            ))}
          </div>
        </div>
        <div>
          {product.badge && (
            <span className="text-xs uppercase tracking-widest text-clay">{product.badge}</span>
          )}
          <h1 className="font-display text-4xl text-forest">{product.name}</h1>
          <p className="mt-2 text-fog">
            {product.rating} · {product.reviewCount} notes · {formatPrice(product.price)}
          </p>
          <p className="mt-4 text-sm leading-relaxed">{product.description}</p>
          <div className="mt-6">
            <p className="text-xs uppercase tracking-widest text-fog">Finish</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {product.variants.map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setVariant(v)}
                  className={`border px-3 py-1 text-xs uppercase tracking-wide ${variant === v ? "border-clay bg-clay/10" : "border-forest/20"}`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => add(product, 1, variant)}
              className="bg-forest px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-limestone"
            >
              Add to cart
            </button>
            <button
              type="button"
              onClick={() => toggleWish(product.id)}
              className="border border-forest/30 px-4 py-3 text-xs uppercase tracking-widest"
            >
              {wish.includes(product.id) ? "On wishlist" : "Wishlist"}
            </button>
            <Link href="/planner" className="px-4 py-3 text-xs uppercase tracking-widest text-clay underline-offset-4 hover:underline">
              Open planner
            </Link>
          </div>
          <dl className="mt-10 grid gap-3 border-t border-forest/10 pt-8 text-sm">
            {Object.entries(product.specs).map(([k, v]) => (
              <div key={k} className="grid grid-cols-[120px_1fr] gap-2">
                <dt className="text-fog">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <section className="mt-16 border-t border-forest/10 pt-10">
        <h2 className="font-display text-2xl">FAQ</h2>
        <div className="mt-4 divide-y divide-forest/10">
          {product.faq.map(([q, a], i) => (
            <div key={q}>
              <button
                type="button"
                className="flex w-full items-center justify-between py-4 text-left text-sm font-medium"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                {q}
                <span>{openFaq === i ? "−" : "+"}</span>
              </button>
              {openFaq === i && <p className="pb-4 text-sm text-fog">{a}</p>}
            </div>
          ))}
        </div>
      </section>
      <section className="mt-16">
        <h2 className="font-display text-2xl">Related pieces</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {related.map((r) => (
            <Link key={r.id} href={`/product/${r.id}`} className="border border-forest/10 p-3">
              <div className="relative aspect-[4/3]">
                <Image src={r.image} alt={r.name} fill className="object-cover" sizes="240px" />
              </div>
              <p className="mt-2 text-sm font-medium">{r.name}</p>
              <p className="text-xs text-fog">{formatPrice(r.price)}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
