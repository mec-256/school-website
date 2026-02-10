import Image from "next/image";

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
            <div className="relative h-40 w-full">
              <Image
                src="/library.png"
                alt="School library with bookshelves"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                priority
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold text-blue-900">Library</h3>
              <p className="text-gray-600 mt-2">
                A well-stocked library encouraging curiosity and deeper learning.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl overflow-hidden shadow hover:shadow-xl transition">
            <div className="relative h-40 w-full">
              <Image
                src="/lab.png"
                alt="Science laboratory with equipment"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold text-blue-900">Science Lab</h3>
              <p className="text-gray-600 mt-2">
                Advanced labs that promote hands-on scientific learning.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-xl overflow-hidden shadow hover:shadow-xl transition">
            <div className="relative h-40 w-full">
              <Image
                src="/sports.png"
                alt="Students playing sports"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold text-blue-900">Sports</h3>
              <p className="text-gray-600 mt-2">
                Extensive sports facilities to promote physical fitness and teamwork.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="rounded-xl overflow-hidden shadow hover:shadow-xl transition">
            <div className="relative h-40 w-full">
              <Image
                src="/transport.png"
                alt="School buses for student transport"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
              />
            </div>
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
