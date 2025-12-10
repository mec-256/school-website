"use client";

import { useState } from "react";

export default function EnquiryForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    childName: "",
    classApplying: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("Submitting...");

    const res = await fetch("/api/enquiry", {
      method: "POST",
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("Success! We will contact you soon.");
      setForm({
        name: "",
        phone: "",
        email: "",
        childName: "",
        classApplying: "",
        message: "",
      });
    } else {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg space-y-6">

      {/* Parent Name */}
      <div>
        <label className="text-black-700 font-medium">Parent Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full mt-1 p-3 border rounded-lg"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="text-black-700 font-medium">Phone Number</label>
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          required
          className="w-full mt-1 p-3 border rounded-lg"
        />
      </div>

      {/* Email */}
      <div>
        <label className="text-gray-700 font-medium">Email (optional)</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full mt-1 p-3 border rounded-lg text-black"
        />
      </div>

      {/* Child Name */}
      <div>
        <label className="text-black-700 font-medium">Child Name</label>
        <input
          type="text"
          name="childName"
          value={form.childName}
          onChange={handleChange}
          required
          className="w-full mt-1 p-3 border rounded-lg"
        />
      </div>

      {/* Class */}
      <div>
        <label className="text-black-700 font-medium">Class Applying For</label>
        <select
          name="classApplying"
          value={form.classApplying}
          onChange={handleChange}
          required
          className="w-full mt-1 p-3 border rounded-lg"
        >
          <option value="">Select Class</option>
          <option value="Nursery">Nursery</option>
          <option value="LKG">LKG</option>
          <option value="UKG">UKG</option>
          <option value="1st Grade">1st Grade</option>
          <option value="2nd Grade">2nd Grade</option>
          <option value="3rd Grade">3rd Grade</option>
          <option value="4th Grade">4th Grade</option>
          <option value="5th Grade">5th Grade</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="text-gray-700 font-medium">Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          className="w-full mt-1 p-3 border rounded-lg"
        ></textarea>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="bg-blue-700 text-black px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
      >
        Submit Enquiry
      </button>

      {/* Status Message */}
      {status && <p className="text-center mt-4 text-blue-900 font-medium">{status}</p>}
    </form>
  );
}
