import Image from "next/image";

export default function Facilities() {
  return (
    <section className="bg-white py-20">
      <div className="page-shell">
        {/* Heading */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
            Campus at a glance
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Spaces that support every kind of learning
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-sm text-slate-600 sm:text-base">
            From quiet reading corners to energetic playgrounds, students have
            room to explore, experiment, and grow.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Card 1 */}
          <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/60 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <div className="relative h-40 w-full">
              <Image
                src="/library.png"
                alt="School library with bookshelves"
                fill
                className="object-cover transition duration-300 group-hover:scale-[1.03]"
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                priority
              />
            </div>
            <div className="p-5">
              <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
                Library
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                A well-stocked library that builds strong reading habits and
                supports project-based learning.
              </p>
            </div>
          </article>

          {/* Card 2 */}
          <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/60 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <div className="relative h-40 w-full">
              <Image
                src="/lab.png"
                alt="Science laboratory with equipment"
                fill
                className="object-cover transition duration-300 group-hover:scale-[1.03]"
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div className="p-5">
              <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
                Science labs
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Well-equipped labs where students can test ideas, run
                experiments, and learn by doing.
              </p>
            </div>
          </article>

          {/* Card 3 */}
          <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/60 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <div className="relative h-40 w-full">
              <Image
                src="/sports.png"
                alt="Students playing sports"
                fill
                className="object-cover transition duration-300 group-hover:scale-[1.03]"
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div className="p-5">
              <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
                Sports &amp; play
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Spacious playgrounds and courts that encourage teamwork,
                discipline, and physical fitness.
              </p>
            </div>
          </article>

          {/* Card 4 */}
          <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/60 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <div className="relative h-40 w-full">
              <Image
                src="/transport.png"
                alt="School buses for student transport"
                fill
                className="object-cover transition duration-300 group-hover:scale-[1.03]"
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div className="p-5">
              <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
                Safe transport
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                GPS-enabled buses and trained staff to ensure children travel
                safely every day.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
