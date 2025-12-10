import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-10 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-blue-900">Contact Us</h1>
          <p className="mt-4 text-gray-600">
            We'd love to hear from you. Reach out using any of the contact details below.
          </p>
        </div>
      </section>

      {/* Contact Details */}
      <section className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 py-10">

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold text-blue-900">Address</h3>
          <p className="mt-3 text-gray-700">
            SSKennedy School<br />
            123 Education Road<br />
            Andhra Pradesh, India
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold text-blue-900">Phone</h3>
          <p className="mt-3 text-gray-700">
            +91 9876543210 <br />
            +91 9123456780
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold text-blue-900">Email</h3>
          <p className="mt-3 text-gray-700">
            info@sskennedy.edu.in <br />
            admissions@sskennedy.edu.in
          </p>
        </div>

      </section>

      {/* Google Maps */}
      <section className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Locate Us</h2>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59363.01855376873!2d80.631432!3d16.506174!"
          width="100%"
          height="350"
          className="rounded-xl shadow"
          loading="lazy"
        ></iframe>
      </section>

      {/* Contact Form */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-blue-900 text-center mb-8">Send us a message</h2>
        <ContactForm />
      </section>
    </main>
  );
}
