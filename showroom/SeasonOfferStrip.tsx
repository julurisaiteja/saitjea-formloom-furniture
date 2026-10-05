import { brand } from "@/lib/data";

export function SeasonOfferStrip() {
  return (
    <div className="bg-forest text-limestone text-center text-xs tracking-[0.25em] uppercase py-2 px-4">
      {brand.offer.label} — code <span className="text-clay font-semibold">{brand.offer.code}</span> ·{" "}
      {brand.offer.ends}
    </div>
  );
}
