"use client";
import { brand } from "@/lib/data";

export function FilmstripQuotes() {
  return (
    <section className="overflow-hidden border-t border-forest/10 py-14">
      <p className="mb-6 px-5 text-xs uppercase tracking-[0.35em] text-fog">From the showroom floor</p>
      <div className="flex gap-4 px-5 animate-marquee w-max">
        {[...brand.reviews, ...brand.reviews].map(([name, stars, quote], i) => (
          <figure
            key={`${name}-${i}`}
            className="w-[min(80vw,320px)] shrink-0 border border-forest/15 bg-white/60 p-6"
          >
            <blockquote className="font-display text-lg leading-snug text-forest">&ldquo;{quote}&rdquo;</blockquote>
            <figcaption className="mt-4 flex items-baseline justify-between text-xs uppercase tracking-widest text-fog">
              <span>{name}</span>
              <span>{stars}/5</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
