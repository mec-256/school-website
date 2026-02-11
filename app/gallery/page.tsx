import Navbar from "../components/Navbar";
import GalleryGrid from "../components/GalleryGrid";
import PageHero from "../components/PageHero";

export default function GalleryPage() {
  return (
    <main>
      <Navbar />

      <PageHero
        eyebrow="Life at SSKennedy"
        title="School gallery"
        description="A glimpse of everyday life at SSKennedy School — learning, creativity, friendships, and joyful moments."
      />

      <section className="page-shell py-16">
        <GalleryGrid />
      </section>
    </main>
  );
}
