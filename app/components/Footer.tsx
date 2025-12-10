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
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/academics" className="hover:text-white">Academics</a></li>
            <li><a href="/admissions" className="hover:text-white">Admissions</a></li>
            <li><a href="/gallery" className="hover:text-white">Gallery</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
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
