import Navbar from "../components/Navbar";

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      {/* Header Section */}
      <section className="pt-32 pb-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-blue-900">About SSKennedy School</h1>
          <p className="mt-6 text-gray-700 text-lg">
            Nurturing young minds through world-class education, compassionate values,
            and a safe, joyful learning environment.
          </p>
        </div>
      </section>

      {/* School Introduction */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">Who We Are</h2>
        <p className="text-gray-700 leading-7 text-lg">
          SSKennedy School is a forward-thinking educational institution located in a 
          growing community in India. With a strong commitment to academic excellence, 
          character development, and modern learning practices, we aim to empower every 
          child with the skills and confidence needed to succeed in a global world.
        </p>

        <p className="text-gray-700 leading-7 text-lg mt-5">
          Our curriculum blends traditional values with modern teaching methodologies, 
          enabling students to grow intellectually, emotionally, socially, and creatively.
          We focus on building a strong foundation during early years and nurturing advanced 
          skills through senior grades.
        </p>
      </section>

      {/* Vision & Mission */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">

          <div className="bg-white p-8 rounded-xl shadow">
            <h3 className="text-2xl font-bold text-blue-900">Our Vision</h3>
            <p className="mt-4 text-gray-700 leading-7">
              To create a learning environment where children discover their true 
              potential, develop strong values, and become confident leaders of tomorrow.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            <h3 className="text-2xl font-bold text-blue-900">Our Mission</h3>
            <p className="mt-4 text-gray-700 leading-7">
              To deliver high-quality education through innovative teaching methods,
              dedicated faculty, modern infrastructure, and a nurturing atmosphere 
              that encourages curiosity, creativity, and lifelong learning.
            </p>
          </div>

        </div>
      </section>

      {/* Principal Message */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">Message from the Principal</h2>
        
        <div className="bg-white p-8 rounded-xl shadow leading-7">
          <p className="text-gray-700 text-lg">
            Dear Parents and Students,
          </p>

          <p className="text-gray-700 text-lg mt-4">
            At SSKennedy School, we believe in shaping not just good students, 
            but responsible human beings. Our mission is to provide a positive environment 
            where every child feels valued, supported, and inspired to achieve greatness.
          </p>

          <p className="text-gray-700 text-lg mt-4">
            We welcome you to be part of our growing family and look forward to 
            partnering with you in building a brighter future for your child.
          </p>

          <p className="mt-6 text-blue-900 font-semibold">
            — Principal, SSKennedy School
          </p>
        </div>
      </section>

    </main>
  );
}
