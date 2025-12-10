import Navbar from "../components/Navbar";
import EnquiryForm from "../components/EnquiryForm";

export default function AdmissionsPage() {
  return (
    <main>
      <Navbar />

      <section className="pt-32 pb-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-blue-900">Admissions Enquiry</h1>

          <p className="mt-4 text-gray-600">
            Fill out the form below and our admissions team will contact you shortly.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 pb-20">
        <EnquiryForm />
      </div>
    </main>
  );
}
