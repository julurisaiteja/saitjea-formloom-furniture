import Link from "next/link";
import Image from "next/image";
import { brand, products, formatPrice } from "@/lib/data";
import { HeroCinema } from "@/components/HeroCinema";
import { RoomJourney } from "@/showroom/RoomJourney";
import { FilmstripQuotes } from "@/showroom/FilmstripQuotes";
import { MegaShowroomFooter } from "@/showroom/MegaShowroomFooter";

const works = products.slice(0, 8);

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[100svh] bg-limestone">
        <HeroCinema video={brand.heroVideo} image={brand.heroImage} />
        <div className="absolute inset-0 bg-limestone/55" />
        <div className="relative mx-auto flex min-h-[100svh] max-w-5xl flex-col justify-end px-6 pb-20 pt-32">
          <p className="museum-caption anim-rise">Gallery 01 · Permanent collection</p>
          <h1 className="mt-6 max-w-2xl font-display text-[clamp(3rem,8vw,5.5rem)] leading-[0.95] tracking-tight text-forest anim-rise-d1">
            {brand.name}
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-fog anim-rise-d2">{brand.tagline}</p>
          <div className="mt-10 flex flex-wrap gap-8 anim-rise-d3">
            <Link href="/shop" className="border-b border-forest pb-1 text-xs uppercase tracking-[0.28em] text-forest soft-scale">
              Enter gallery
            </Link>
            <Link href="/planner" className="border-b border-transparent pb-1 text-xs uppercase tracking-[0.28em] text-fog hover:border-fog">
              Room journey
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t museum-rule bg-limestone py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-end justify-between gap-6 border-b museum-rule pb-6">
            <div>
              <p className="museum-caption">On view</p>
              <h2 className="mt-3 font-display text-4xl text-forest md:text-5xl">Quiet objects</h2>
              <p className="mt-3 max-w-md text-sm text-fog">Eight works from the permanent collection — captions over cards, materials over mesh.</p>
            </div>
            <Link href="/shop" className="museum-caption hover:text-forest">All works →</Link>
          </div>
          <div className="mt-16 grid gap-x-10 gap-y-20 md:grid-cols-2">
            {works.map((p, i) => (
              <Link key={p.id} href={`/product/${p.id}`} className={`gallery-tile group ${i % 2 === 1 ? "md:mt-24" : ""}`}>
                <div className="relative aspect-[4/5] overflow-hidden bg-[#ece8e0]">
                  <Image src={p.image} alt={p.name} fill className="object-cover" sizes="480px" />
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-4 border-t museum-rule pt-3">
                  <div>
                    <p className="museum-caption">Cat. {String(i + 1).padStart(2, "0")}</p>
                    <p className="mt-1 font-display text-2xl text-forest">{p.name}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-fog">{p.category}</p>
                  </div>
                  <p className="text-sm text-fog">{formatPrice(p.price)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t museum-rule bg-[#f0ebe3] py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="museum-caption">Signature tool</p>
            <h2 className="mt-3 font-display text-3xl text-forest md:text-4xl">Room Journey</h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-fog">
              Walk Living → Sleep → Light with material swatches and daylight/evening mood — a showroom path, not a product turntable.
            </p>
          </div>
          <Link href="/planner" className="border-b border-forest pb-1 text-xs uppercase tracking-[0.28em] text-forest">
            Open planner →
          </Link>
        </div>
      </section>

      <RoomJourney />
      <FilmstripQuotes />
      <MegaShowroomFooter />

      <div className="fixed inset-x-0 bottom-0 z-40 border-t museum-rule bg-limestone/95 px-4 py-3 backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-lg gap-3">
          <Link href="/shop" className="flex-1 border border-forest bg-forest py-3 text-center text-[10px] uppercase tracking-[0.22em] text-limestone">
            Enter gallery
          </Link>
          <Link href="/planner" className="flex-1 border border-forest/30 py-3 text-center text-[10px] uppercase tracking-[0.22em] text-forest">
            Room journey
          </Link>
        </div>
      </div>
    </>
  );
}
