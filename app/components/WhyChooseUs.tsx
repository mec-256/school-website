export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold text-blue-900">
          Why Choose SSKennedy School?
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We provide a nurturing environment where students grow academically, emotionally, and socially.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">

          {/* Card 1 */}
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition border-t-4 border-blue-700">
            <div className="text-5xl mb-4">🏫</div>
            <h3 className="text-xl font-semibold text-blue-900">Modern Infrastructure</h3>
            <p className="mt-2 text-gray-600">
              Smart classrooms, advanced labs, library, and world-class learning spaces.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition border-t-4 border-blue-700">
            <div className="text-5xl mb-4">🎓</div>
            <h3 className="text-xl font-semibold text-blue-900">Experienced Faculty</h3>
            <p className="mt-2 text-gray-600">
              Highly qualified teachers dedicated to shaping a brighter future.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition border-t-4 border-blue-700">
            <div className="text-5xl mb-4">🛡</div>
            <h3 className="text-xl font-semibold text-blue-900">Safe & Caring Campus</h3>
            <p className="mt-2 text-gray-600">
              A secure campus ensuring comfort, care, and emotional well-being.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
