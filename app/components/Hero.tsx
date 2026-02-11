import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative mt-16 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-sky-900 text-white">
      {/* Soft glow */}
      <div className="pointer-events-none absolute inset-x-0 -top-64 z-0 h-96 bg-[radial-gradient(circle_at_top,_#38bdf8_0,_transparent_55%)] opacity-60" />

      <div className="page-shell relative z-10 py-20 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          {/* Left: Copy */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-sky-100 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Admissions open for 2025–26
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Quality education
              <span className="block text-sky-300">for a brighter future.</span>
            </h1>

            <p className="mt-5 max-w-xl text-base text-slate-100/80 sm:text-lg">
              SSKennedy School combines strong academics, caring teachers, and
              modern facilities so every child can feel safe, confident, and
              ready to shine.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/admissions"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-sky-500/30 transition hover:-translate-y-0.5 hover:bg-sky-50"
              >
                Enquire for admission
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/5 px-5 py-3 text-sm font-semibold text-sky-100 backdrop-blur transition hover:bg-white/10"
              >
                Talk to our team
              </Link>
            </div>

            <dl className="mt-10 flex flex-wrap gap-6 text-xs text-slate-200/90 sm:text-sm">
              <div>
                <dt className="font-medium text-sky-200">500+ students</dt>
                <dd className="text-slate-300/80">From nursery to high school</dd>
              </div>
              <div>
                <dt className="font-medium text-sky-200">10+ years</dt>
                <dd className="text-slate-300/80">Of academic excellence</dd>
              </div>
              <div>
                <dt className="font-medium text-sky-200">Safe campus</dt>
                <dd className="text-slate-300/80">Transport & CCTV enabled</dd>
              </div>
            </dl>
          </div>

          {/* Right: Illustration */}
          <div className="relative hidden justify-end lg:flex">
            <div className="relative h-80 w-full max-w-md">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-sky-400/40 via-blue-500/40 to-indigo-500/40 blur-3xl" />

              <div className="relative h-full rounded-3xl border border-white/10 bg-slate-900/60 p-3 shadow-2xl backdrop-blur">
                <div className="relative h-full w-full overflow-hidden rounded-2xl">
                  <Image
                    src="/image.png"
                    alt="Students and teachers at SSKennedy School"
                    fill
                    priority
                    className="object-cover"
                    sizes="(min-width: 1024px) 24rem, 100vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
