import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10 mt-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* School Info */}
        <div>
          <h3 className="text-xl font-semibold mb-3">SSKennedy School</h3>
          <p className="text-gray-200 leading-6">
            Providing quality education, modern facilities, and a nurturing 
            environment to help children grow and succeed.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-200">
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
          <h3 className="text-xl font-semibold mb-3">Contact</h3>
          <p className="text-gray-200 leading-6">
            Address: 123 Education Road, Andhra Pradesh, India<br />
            Phone: +91 9876543210<br />
            Email: info@sskennedy.edu.in
          </p>
        </div>

      </div>

      <div className="border-t border-blue-700 mt-10 pt-4 text-center text-gray-300">
        © {new Date().getFullYear()} SSKennedy School. All Rights Reserved.
      </div>
    </footer>
  );
}
