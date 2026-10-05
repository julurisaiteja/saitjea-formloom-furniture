import { RoomJourney } from "@/showroom/RoomJourney";
import Link from "next/link";

export default function PlannerPage() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-5 py-12">
        <p className="museum-caption">Formloom planner</p>
        <h1 className="mt-3 font-display text-4xl text-forest md:text-5xl">Walk the rooms</h1>
        <p className="mt-3 max-w-xl text-sm text-fog">
          A showroom journey through Living, Sleep, and Light — materials and daylight, not a spinning product mesh.
        </p>
        <Link href="/shop" className="mt-6 inline-block border-b border-forest pb-1 text-xs uppercase tracking-[0.28em] text-forest">
          Shop the gallery
        </Link>
      </div>
      <RoomJourney compact />
    </div>
  );
}
