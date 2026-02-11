export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="page-shell">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
            Why parents trust us
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            A school that cares about the whole child
          </h2>

          <p className="mt-4 mx-auto max-w-2xl text-sm text-slate-600 sm:text-base">
            From classrooms to playgrounds, every part of SSKennedy School is
            designed to help children learn with curiosity, confidence, and joy.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {/* Card 1 */}
          <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/80 p-7 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-500" />
            <div className="mt-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-xl">
              🏫
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              Modern infrastructure
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Smart classrooms, dedicated labs, and a peaceful library create a
              focused and inspiring learning environment.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/80 p-7 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 via-sky-500 to-blue-600" />
            <div className="mt-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-xl">
              🎓
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              Caring, experienced teachers
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              A committed team of educators who know every child by name and
              support them academically and emotionally.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/80 p-7 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 via-blue-600 to-sky-400" />
            <div className="mt-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-xl">
              🛡
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              Safe &amp; nurturing campus
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Secure transport, monitored campus, and a warm culture where
              children feel respected, heard, and encouraged.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
