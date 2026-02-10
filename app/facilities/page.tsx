import Navbar from "../components/Navbar";
import Facilities from "../components/Facilities";

export default function FacilitiesPage() {
  return (
    <main>
      <Navbar />

      {/* Header Section */}
      <section className="pt-32 pb-10 bg-blue-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-blue-900">Facilities</h1>
          <p className="mt-4 text-gray-700 text-lg">
            Explore the modern infrastructure and student-focused amenities at SSKennedy
            School.
          </p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-16">
        <Facilities />
      </section>
    </main>
  );
}

