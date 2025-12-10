export default function Facilities() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-blue-900">
          Our Facilities
        </h2>

        <p className="mt-4 text-gray-600 text-center max-w-2xl mx-auto">
          SSKennedy School offers modern infrastructure that supports excellent learning.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-12">

          {/* Card 1 */}
          <div className="rounded-xl overflow-hidden shadow hover:shadow-xl transition">
            <img 
              src="/library.png" 
              alt="Library"
              className="h-40 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-blue-900">Library</h3>
              <p className="text-gray-600 mt-2">
                A well-stocked library encouraging curiosity and deeper learning.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl overflow-hidden shadow hover:shadow-xl transition">
            <img 
              src="/lab.png" 
              alt="Science Lab"
              className="h-40 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-blue-900">Science Lab</h3>
              <p className="text-gray-600 mt-2">
                Advanced labs that promote hands-on scientific learning.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-xl overflow-hidden shadow hover:shadow-xl transition">
            <img 
              src="/sports.png" 
              alt="Sports"
              className="h-40 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-blue-900">Sports</h3>
              <p className="text-gray-600 mt-2">
                Extensive sports facilities to promote physical fitness and teamwork.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="rounded-xl overflow-hidden shadow hover:shadow-xl transition">
            <img 
              src="/transport.png" 
              alt="Transport"
              className="h-40 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-blue-900">School Transport</h3>
              <p className="text-gray-600 mt-2">
                Safe and reliable transportation connecting all major areas.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
