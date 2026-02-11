export default function Stats() {
  return (
    <section className="bg-slate-900 py-16 text-slate-100">
      <div className="page-shell">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
          <div className="max-w-md">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-300">
              By the numbers
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              A growing community of confident learners
            </h2>
            <p className="mt-3 text-sm text-slate-200/80 sm:text-base">
              Behind every number is a child discovering their strengths,
              supported by dedicated teachers and a caring school environment.
            </p>
          </div>

          <dl className="grid w-full max-w-xl grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/15 bg-white/5 px-6 py-5 shadow-sm backdrop-blur">
              <dt className="text-xs font-medium uppercase tracking-[0.2em] text-sky-200">
                Students
              </dt>
              <dd className="mt-2 text-3xl font-semibold text-white">500+</dd>
              <p className="mt-1 text-xs text-slate-200/80">
                From nursery to high school
              </p>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/5 px-6 py-5 shadow-sm backdrop-blur">
              <dt className="text-xs font-medium uppercase tracking-[0.2em] text-sky-200">
                Teachers
              </dt>
              <dd className="mt-2 text-3xl font-semibold text-white">40+</dd>
              <p className="mt-1 text-xs text-slate-200/80">
                Qualified, caring educators
              </p>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/5 px-6 py-5 shadow-sm backdrop-blur">
              <dt className="text-xs font-medium uppercase tracking-[0.2em] text-sky-200">
                Years
              </dt>
              <dd className="mt-2 text-3xl font-semibold text-white">10+</dd>
              <p className="mt-1 text-xs text-slate-200/80">
                Of consistent excellence
              </p>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
