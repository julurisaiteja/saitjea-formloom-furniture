"use client";
import { useState } from "react";
import { brand } from "@/lib/data";

export function ConciergeFloater() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-[min(100vw-2rem,22rem)] border border-forest/20 bg-limestone p-4 shadow-[4px_4px_0_#1f3d32] animate-rise">
          <p className="font-display text-lg text-forest">Studio concierge</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {brand.ai.map(([q], i) => (
              <button
                key={q}
                type="button"
                onClick={() => setActive(i)}
                className={`border px-2 py-1 text-[11px] uppercase tracking-wide ${active === i ? "border-clay bg-clay/10 text-clay" : "border-forest/20 hover:border-forest"}`}
              >
                {q.slice(0, 28)}…
              </button>
            ))}
          </div>
          <p className="mt-3 text-sm leading-relaxed text-fog">{brand.ai[active][1]}</p>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="border-2 border-forest bg-clay px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-limestone transition hover:bg-forest"
      >
        Ask concierge
      </button>
    </div>
  );
}
