import Navbar from "../components/Navbar";
import PageHero from "../components/PageHero";

export default function AcademicsPage() {
  return (
    <main>
      <Navbar />

      <PageHero
        eyebrow="Academics"
        title="Academics at SSKennedy"
        description="A structured, student-centered curriculum designed to build strong foundations and nurture academic excellence at every level."
      />

      {/* Overview Section */}
      <section className="page-shell py-16">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Our academic approach
        </h2>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          At SSKennedy School, academics go beyond textbooks. We follow a holistic teaching
          model that focuses on concept clarity, hands-on learning, moral values, and
          real-world applications. Our structured curriculum ensures students develop
          strong communication skills, analytical thinking, creativity, and confidence.
        </p>

        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          Our experienced faculty use modern teaching tools, interactive sessions,
          and activity-based learning to make education engaging and meaningful.
        </p>
      </section>

      {/* Sections for Different Levels */}
      <section className="bg-slate-50 py-16">
        <div className="page-shell grid grid-cols-1 gap-10 md:grid-cols-3">

          {/* Pre-Primary */}
          <div className="rounded-2xl border border-slate-200 bg-white/80 p-7 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">
              Pre-Primary (Nursery–UKG)
            </h3>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700">
              <li>• Activity-based learning</li>
              <li>• Phonics & early numeracy skills</li>
              <li>• Playgroup activities</li>
              <li>• Motor skill development</li>
              <li>• Storytelling & creative expression</li>
            </ul>
          </div>

          {/* Primary */}
          <div className="rounded-2xl border border-slate-200 bg-white/80 p-7 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">
              Primary (1st–5th Grade)
            </h3>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700">
              <li>• Strong foundation in Math, Science & English</li>
              <li>• Hands-on projects & experiments</li>
              <li>• Regular assessments & feedback</li>
              <li>• Introduction to computer education</li>
              <li>• Reading & communication skills</li>
            </ul>
          </div>

          {/* High School */}
          <div className="rounded-2xl border border-slate-200 bg-white/80 p-7 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">
              High School (6th–10th Grade)
            </h3>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700">
              <li>• Subject specialization begins</li>
              <li>• Digital classrooms & online resources</li>
              <li>• Science & math labs for practical learning</li>
              <li>• Exam-focused preparation</li>
              <li>• Leadership & personality development</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="page-shell py-20">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Teaching methodology
        </h2>

        <div className="mt-5 rounded-2xl border border-slate-200 bg-white/80 p-7 leading-7 shadow-sm">
          <p className="mt-3 text-sm text-slate-700 sm:text-base">
            Our teaching approach blends traditional classroom instruction with modern,
            interactive tools such as smart boards, visual explanations, and hands-on
            learning kits. Teachers undergo regular training to stay updated with the
            latest teaching techniques.
          </p>

          <p className="mt-5 text-sm text-slate-700 sm:text-base">
            We believe every child learns differently — which is why our teachers
            use personalized strategies to meet each student&apos;s strengths and needs.
            Continuous assessments ensure steady academic progress.
          </p>
        </div>
      </section>

    </main>
  );
}
