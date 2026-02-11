import Navbar from "../components/Navbar";
import PageHero from "../components/PageHero";

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      <PageHero
        eyebrow="About our school"
        title="About SSKennedy School"
        description="Nurturing young minds through world-class education, compassionate values, and a safe, joyful learning environment."
      />

      {/* School Introduction */}
      <section className="page-shell py-16">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Who we are
        </h2>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          SSKennedy School is a forward-thinking educational institution located in a
          growing community in India. With a strong commitment to academic excellence,
          character development, and modern learning practices, we aim to empower every
          child with the skills and confidence needed to succeed in a global world.
        </p>

        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          Our curriculum blends traditional values with modern teaching methodologies,
          enabling students to grow intellectually, emotionally, socially, and creatively.
          We focus on building a strong foundation during early years and nurturing advanced
          skills through senior grades.
        </p>
      </section>

      {/* Vision & Mission */}
      <section className="bg-slate-50 py-16">
        <div className="page-shell grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white/80 p-7 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Our vision</h3>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              To create a learning environment where children discover their true
              potential, develop strong values, and become confident leaders of tomorrow.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white/80 p-7 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Our mission</h3>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              To deliver high-quality education through innovative teaching methods,
              dedicated faculty, modern infrastructure, and a nurturing atmosphere
              that encourages curiosity, creativity, and lifelong learning.
            </p>
          </div>
        </div>
      </section>

      {/* Principal Message */}
      <section className="page-shell py-20">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Message from the Principal
        </h2>

        <div className="mt-5 rounded-2xl border border-slate-200 bg-white/80 p-7 leading-7 shadow-sm">
          <p className="text-sm text-slate-700 sm:text-base">
            Dear Parents and Students,
          </p>

          <p className="mt-4 text-sm text-slate-700 sm:text-base">
            At SSKennedy School, we believe in shaping not just good students,
            but responsible human beings. Our mission is to provide a positive environment
            where every child feels valued, supported, and inspired to achieve greatness.
          </p>

          <p className="mt-4 text-sm text-slate-700 sm:text-base">
            We welcome you to be part of our growing family and look forward to
            partnering with you in building a brighter future for your child.
          </p>

          <p className="mt-6 text-sm font-semibold text-blue-900 sm:text-base">
            — Principal, SSKennedy School
          </p>
        </div>
      </section>
    </main>
  );
}
