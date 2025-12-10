export default function Stats() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Stat 1 */}
          <div>
            <h2 className="text-5xl font-bold text-blue-900">500+</h2>
            <p className="text-gray-600 mt-2">Students</p>
          </div>

          {/* Stat 2 */}
          <div>
            <h2 className="text-5xl font-bold text-blue-900">40+</h2>
            <p className="text-gray-600 mt-2">Qualified Teachers</p>
          </div>

          {/* Stat 3 */}
          <div>
            <h2 className="text-5xl font-bold text-blue-900">10+ Years</h2>
            <p className="text-gray-600 mt-2">Of Excellence</p>
          </div>

        </div>

      </div>
    </section>
  );
}
