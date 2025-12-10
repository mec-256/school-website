import Navbar from "../components/Navbar";

export default function AcademicsPage() {
  return (
    <main>
      <Navbar />

      {/* Header Section */}
      <section className="pt-32 pb-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-blue-900">Academics</h1>
          <p className="mt-6 text-gray-700 text-lg">
            A structured, student-centered curriculum designed to build strong foundations
            and nurture academic excellence at every level.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Academic Approach</h2>
        <p className="text-gray-700 leading-7 text-lg">
          At SSKennedy School, academics go beyond textbooks. We follow a holistic teaching
          model that focuses on concept clarity, hands-on learning, moral values, and
          real-world applications. Our structured curriculum ensures students develop
          strong communication skills, analytical thinking, creativity, and confidence.
        </p>

        <p className="text-gray-700 leading-7 text-lg mt-5">
          Our experienced faculty use modern teaching tools, interactive sessions,
          and activity-based learning to make education engaging and meaningful.
        </p>
      </section>

      {/* Sections for Different Levels */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Pre-Primary */}
          <div className="bg-white p-8 rounded-xl shadow">
            <h3 className="text-2xl font-bold text-blue-900">Pre-Primary (Nursery–UKG)</h3>
            <ul className="mt-4 text-gray-700 space-y-2 leading-7">
              <li>• Activity-based learning</li>
              <li>• Phonics & early numeracy skills</li>
              <li>• Playgroup activities</li>
              <li>• Motor skill development</li>
              <li>• Storytelling & creative expression</li>
            </ul>
          </div>

          {/* Primary */}
          <div className="bg-white p-8 rounded-xl shadow">
            <h3 className="text-2xl font-bold text-blue-900">Primary (1st–5th Grade)</h3>
            <ul className="mt-4 text-gray-700 space-y-2 leading-7">
              <li>• Strong foundation in Math, Science & English</li>
              <li>• Hands-on projects & experiments</li>
              <li>• Regular assessments & feedback</li>
              <li>• Introduction to computer education</li>
              <li>• Reading & communication skills</li>
            </ul>
          </div>

          {/* High School */}
          <div className="bg-white p-8 rounded-xl shadow">
            <h3 className="text-2xl font-bold text-blue-900">High School (6th–10th Grade)</h3>
            <ul className="mt-4 text-gray-700 space-y-2 leading-7">
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
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">Teaching Methodology</h2>

        <div className="bg-white p-8 rounded-xl shadow leading-7">
          <p className="text-gray-700 text-lg mt-3">
            Our teaching approach blends traditional classroom instruction with modern,
            interactive tools such as smart boards, visual explanations, and hands-on
            learning kits. Teachers undergo regular training to stay updated with the
            latest teaching techniques.
          </p>

          <p className="text-gray-700 text-lg mt-5">
            We believe every child learns differently — which is why our teachers
            use personalized strategies to meet each student's strengths and needs.
            Continuous assessments ensure steady academic progress.
          </p>
        </div>
      </section>

    </main>
  );
}
