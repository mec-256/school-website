"use client";

import { useState, ChangeEvent, FormEvent } from "react";

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

  const handleChange = (
    e: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-2xl border border-slate-200 bg-white/80 p-8 shadow-sm backdrop-blur"
    >

      {/* Parent Name */}
      <div>
        <label className="text-sm font-medium text-slate-700">Parent name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none ring-offset-1 transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="text-sm font-medium text-slate-700">Phone number</label>
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          required
          className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none ring-offset-1 transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      {/* Email */}
      <div>
        <label className="text-sm font-medium text-slate-700">
          Email (optional)
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none ring-offset-1 transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      {/* Child Name */}
      <div>
        <label className="text-sm font-medium text-slate-700">Child name</label>
        <input
          type="text"
          name="childName"
          value={form.childName}
          onChange={handleChange}
          required
          className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none ring-offset-1 transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      {/* Class */}
      <div>
        <label className="text-sm font-medium text-slate-700">
          Class applying for
        </label>
        <select
          name="classApplying"
          value={form.classApplying}
          onChange={handleChange}
          required
          className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none ring-offset-1 transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
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
        <label className="text-sm font-medium text-slate-700">Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none ring-offset-1 transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        ></textarea>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 hover:shadow-md sm:w-auto"
      >
        Submit Enquiry
      </button>

      {/* Status Message */}
      {status && (
        <p className="mt-3 text-center text-sm font-medium text-blue-900">
          {status}
        </p>
      )}
    </form>
  );
}
