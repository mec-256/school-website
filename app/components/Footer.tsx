import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-950 text-slate-100">
      <div className="page-shell grid grid-cols-1 gap-10 py-12 md:grid-cols-3">

        {/* School Info */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
            SSKennedy School
          </h3>
          <p className="mt-4 max-w-sm text-sm text-slate-200/80">
            Providing quality education, modern facilities, and a nurturing
            environment so children can grow into confident, compassionate
            learners.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
            Quick links
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-200/80">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/academics" className="hover:text-white">
                Academics
              </Link>
            </li>
            <li>
              <Link href="/admissions" className="hover:text-white">
                Admissions
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-white">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
            Contact
          </h3>
          <p className="mt-4 text-sm text-slate-200/80">
            123 Education Road, Andhra Pradesh, India
            <br />
            Phone: +91 9876543210
            <br />
            Email: info@sskennedy.edu.in
          </p>
        </div>

      </div>

      <div className="border-t border-slate-800">
        <div className="page-shell flex flex-col items-center justify-between gap-3 py-4 text-xs text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} SSKennedy School. All rights reserved.</p>
          <p className="text-[11px]">
            Made with care in India for curious young minds.
          </p>
        </div>
      </div>
    </footer>
  );
}
