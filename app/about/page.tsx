import { brand } from "@/lib/data";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="font-display text-5xl text-forest">About Formloom</h1>
      <p className="mt-6 text-lg leading-relaxed text-fog">{brand.description}</p>
      <p className="mt-4 text-sm leading-relaxed">{brand.loyalty}</p>
      <h2 className="mt-12 font-display text-2xl">Journal</h2>
      <ul className="mt-4 space-y-3">
        {brand.blog.map(([title, tag]) => (
          <li key={title} className="flex justify-between border-b border-forest/10 py-2 text-sm">
            <span>{title}</span>
            <span className="text-fog">{tag}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
