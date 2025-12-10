import Navbar from "../components/Navbar";
import GalleryGrid from "../components/GalleryGrid";

export default function GalleryPage() {
  return (
    <main>
      <Navbar />

      <section className="pt-32 pb-10 bg-blue-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-blue-900">School Gallery</h1>
          <p className="mt-4 text-gray-700 text-lg">
            A glimpse of life at SSKennedy School — learning, creativity, and joyful moments.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <GalleryGrid />
      </section>
    </main>
  );
}
