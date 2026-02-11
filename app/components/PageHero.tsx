type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
}: PageHeroProps) {
  return (
    <section className="bg-slate-50 pt-32 pb-10">
      <div className="page-shell">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-sm backdrop-blur md:p-10">
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_top,_#38bdf8_0,_transparent_55%)] opacity-30" />

          <div className="relative max-w-2xl">
            {eyebrow && (
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                {eyebrow}
              </p>
            )}
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              {title}
            </h1>
            <p className="mt-4 text-sm text-slate-700 sm:text-base">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

