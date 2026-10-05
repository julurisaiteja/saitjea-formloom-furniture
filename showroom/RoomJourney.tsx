"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const swatches = [
  { id: "linen", label: "Linen", body: "#d8cfc0", accent: "#ebe4d8" },
  { id: "walnut", label: "Walnut", body: "#5c4033", accent: "#3d2817" },
  { id: "boucle", label: "Bouclé", body: "#c4bcb0", accent: "#9a9084" },
  { id: "oak", label: "Oak", body: "#c9a66b", accent: "#8b6914" },
];

const moods = ["Daylight", "Evening"] as const;

const rooms = [
  {
    id: "living",
    label: "Living",
    blurb: "Low profiles, nest tables, linen light.",
    eveningDefault: false,
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "sleep",
    label: "Sleep",
    blurb: "Ash grain, soft-close, morning quiet.",
    eveningDefault: true,
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "light",
    label: "Light",
    blurb: "Brass stems and paper glow after dusk.",
    eveningDefault: true,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1600&q=80",
  },
] as const;

export function RoomJourney({ compact }: { compact?: boolean }) {
  const [mat, setMat] = useState(swatches[0]);
  const [room, setRoom] = useState<(typeof rooms)[number]>(rooms[0]);
  const [mood, setMood] = useState<(typeof moods)[number]>("Daylight");

  const pickRoom = (r: (typeof rooms)[number]) => {
    setRoom(r);
    setMood(r.eveningDefault ? "Evening" : "Daylight");
  };

  return (
    <section className={compact ? "" : "border-t border-forest/15 bg-limestone py-16"}>
      <div className={`mx-auto max-w-6xl px-5 ${compact ? "" : "grid gap-12 lg:grid-cols-[1fr_1.15fr]"}`}>
        {!compact && (
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-fog">Room journey</p>
            <h2 className="mt-2 font-display text-4xl text-forest">Walk the rooms · materials · light</h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-fog">
              Step Living → Sleep → Light. Swatches tint the stage; daylight and evening change the atmosphere — a showroom walk, not a spinning SKU.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/shop"
                className="border-2 border-forest bg-clay px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-limestone transition hover:bg-forest"
              >
                Shop
              </Link>
              <Link
                href="/planner"
                className="border-2 border-forest/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-forest transition hover:border-clay"
              >
                Open planner
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {swatches.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setMat(s)}
                  className={`flex items-center gap-2 border px-3 py-2 text-xs uppercase tracking-wider transition ${mat.id === s.id ? "border-clay bg-white" : "border-forest/15"}`}
                >
                  <span className="h-4 w-4 border border-forest/20" style={{ background: s.body }} />
                  {s.label}
                </button>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {rooms.map((r) => (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => pickRoom(r)}
                  className={`border px-3 py-2 text-left text-xs uppercase tracking-wider transition ${room.id === r.id ? "border-clay bg-white" : "border-forest/15"}`}
                >
                  <span className="block font-semibold text-forest">{r.label}</span>
                  <span className="mt-0.5 block text-[10px] normal-case tracking-normal text-fog">{r.blurb}</span>
                </button>
              ))}
            </div>
            <div className="mt-4 flex gap-2">
              {moods.map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setMood(m)}
                  className={`px-3 py-1 text-xs uppercase tracking-widest transition ${mood === m ? "bg-forest text-limestone" : "border border-forest/20"}`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>
        )}
        <div
          className="relative min-h-[360px] overflow-hidden border border-forest/15 bg-forest/5 md:min-h-[460px]"
          role="img"
          aria-label={`${room.label} room stage, ${mat.label}, ${mood}`}
        >
          <Image
            key={room.id}
            src={room.image}
            alt=""
            fill
            className="object-cover transition duration-700"
            sizes="(max-width:768px) 100vw, 640px"
            style={{
              filter:
                mood === "Evening"
                  ? "brightness(0.72) saturate(1.05) sepia(0.18)"
                  : "brightness(1.02) saturate(1.05)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-0 mix-blend-multiply transition duration-500"
            style={{
              background: `linear-gradient(135deg, ${mat.body}55 0%, transparent 45%, ${mat.accent}40 100%)`,
              opacity: 0.55,
            }}
          />
          <div
            className={`pointer-events-none absolute inset-0 transition duration-500 ${
              mood === "Evening"
                ? "bg-gradient-to-t from-[#1a2e24]/80 via-transparent to-[#0c1812]/35"
                : "bg-gradient-to-t from-limestone/40 via-transparent to-white/10"
            }`}
          />
          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-5">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-limestone/90">{mood}</p>
              <p className="font-display text-3xl text-limestone">{room.label}</p>
              <p className="mt-1 text-xs text-limestone/80">{mat.label} · material wash</p>
            </div>
            <div className="hidden h-16 w-16 border border-limestone/40 sm:block" style={{ background: mat.body }} />
          </div>
          {!compact && (
            <p className="pointer-events-none absolute left-4 top-4 text-[10px] uppercase tracking-[0.3em] text-limestone/80">
              Site room stage
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
