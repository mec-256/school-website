import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      {/* Header */}
      <section className="bg-slate-50 pt-32 pb-10">
        <div className="page-shell text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
            Contact us
          </h1>
          <p className="mt-4 mx-auto max-w-2xl text-sm text-slate-700 sm:text-base">
            We&apos;d love to hear from you. Reach out using any of the contact details below.
          </p>
        </div>
      </section>

      {/* Contact Details */}
      <section className="page-shell grid grid-cols-1 gap-10 py-10 md:grid-cols-3">

        <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900">Address</h3>
          <p className="mt-3 text-sm text-slate-700">
            SSKennedy School<br />
            123 Education Road<br />
            Andhra Pradesh, India
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900">Phone</h3>
          <p className="mt-3 text-sm text-slate-700">
            +91 9876543210 <br />
            +91 9123456780
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900">Email</h3>
          <p className="mt-3 text-sm text-slate-700">
            info@sskennedy.edu.in <br />
            admissions@sskennedy.edu.in
          </p>
        </div>

      </section>

      {/* Google Maps */}
      <section className="page-shell">
        <h2 className="mb-4 text-lg font-semibold text-slate-900">
          Locate us
        </h2>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59363.01855376873!2d80.631432!3d16.506174!"
          width="100%"
          height="350"
          className="rounded-2xl border border-slate-200 shadow-sm"
          loading="lazy"
        ></iframe>
      </section>

      {/* Contact Form */}
      <section className="page-shell max-w-3xl py-16">
        <h2 className="mb-6 text-center text-lg font-semibold text-slate-900">
          Send us a message
        </h2>
        <ContactForm />
      </section>
    </main>
  );
}
