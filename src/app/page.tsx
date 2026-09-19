import { site } from "@/lib/content/site";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-ac-bg p-6 text-center text-ac-ink">
      <div className="max-w-[480px]">
        <div className="mb-3.5 font-ac-display text-[clamp(1.8rem,6vw,2.6rem)] font-medium text-ac-accent">
          {site.name}
        </div>
        <p className="mb-5.5 text-[1.05rem] text-white/72">Сайт в разработке</p>
        <a href={site.parentUrl} className="font-semibold text-ac-accent">
          {site.parentLabel}
        </a>
      </div>
    </main>
  );
}
