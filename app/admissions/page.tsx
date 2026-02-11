import Navbar from "../components/Navbar";
import EnquiryForm from "../components/EnquiryForm";

export default function AdmissionsPage() {
  return (
    <main>
      <Navbar />

      <section className="pt-32 pb-16 bg-gray-50">
        <div className="page-shell text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
            Admissions enquiry
          </h1>

          <p className="mt-4 text-sm text-slate-700 sm:text-base">
            Fill out the form below and our admissions team will contact you shortly.
          </p>
        </div>
      </section>

      <div className="page-shell max-w-3xl pb-20">
        <EnquiryForm />
      </div>
    </main>
  );
}
