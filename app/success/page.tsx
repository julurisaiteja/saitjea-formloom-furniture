import Link from "next/link";
import { brand } from "@/lib/data";

export default function SuccessPage() {
  return (
    <div className="mx-auto max-w-lg px-5 py-20 text-center">
      <p className="text-xs uppercase tracking-[0.35em] text-clay">Order confirmed</p>
      <h1 className="mt-4 font-display text-4xl text-forest">White-glove is scheduled</h1>
      <p className="mt-4 text-sm text-fog">{brand.checkoutNote}</p>
      <Link href="/shop" className="mt-8 inline-block border-2 border-forest px-6 py-3 text-xs uppercase tracking-widest">
        Back to shop
      </Link>
    </div>
  );
}
