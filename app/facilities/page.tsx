import Navbar from "../components/Navbar";
import Facilities from "../components/Facilities";
import PageHero from "../components/PageHero";

export default function FacilitiesPage() {
  return (
    <main>
      <Navbar />

      <PageHero
        eyebrow="Campus"
        title="Facilities"
        description="Explore the modern infrastructure and student-focused amenities available across the SSKennedy School campus."
      />

      {/* Facilities Grid */}
      <section className="py-16">
        <Facilities />
      </section>
    </main>
  );
}

