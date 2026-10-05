"use client";
import { useState } from "react";
import { brand } from "@/lib/data";

export function LimestoneNewsletter() {
  const [done, setDone] = useState(false);
  return (
    <section className="border-t border-forest/10 bg-forest px-5 py-12 text-limestone">
      <div className="mx-auto flex max-w-4xl flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-limestone/70">Studio notes</p>
          <h3 className="font-display text-2xl">Floor plans & material drops</h3>
        </div>
        {done ? (
          <p className="text-sm text-clay">You&apos;re on the list — check your inbox.</p>
        ) : (
          <form
            className="flex w-full max-w-md gap-0 border border-limestone/30"
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
            }}
          >
            <input
              type="email"
              required
              placeholder="Email"
              className="flex-1 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-limestone/50"
            />
            <button type="submit" className="bg-clay px-4 py-2 text-xs uppercase tracking-widest">
              Join
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export function MegaShowroomFooter() {
  return (
    <footer className="border-t border-forest/10 bg-limestone">
      <LimestoneNewsletter />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl text-forest">Formloom</p>
          <p className="mt-2 text-sm text-fog">{brand.description}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-fog">Showrooms</p>
          <ul className="mt-3 space-y-2 text-sm">
            {brand.stores.map((s) => (
              <li key={s} className="border-l-2 border-clay/40 pl-3">
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-fog">Marquee</p>
          <p className="mt-3 text-sm leading-relaxed text-fog">{brand.marquee.join(" ")}</p>
          <p className="mt-4 text-xs text-fog">{brand.loyalty}</p>
        </div>
      </div>
    </footer>
  );
}
