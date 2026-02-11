"use client";

import { useState, ChangeEvent, FormEvent } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Message sent! We will reply soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-2xl border border-slate-200 bg-white/80 p-8 shadow-sm backdrop-blur"
    >
      <div>
        <label className="text-sm font-medium text-slate-700">Your name</label>
        <input 
          type="text"
          name="name"
          required
          value={form.name}
          onChange={handleChange}
          className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none ring-offset-1 transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-slate-700">Your email</label>
        <input 
          type="email"
          name="email"
          required
          value={form.email}
          onChange={handleChange}
          className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none ring-offset-1 transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-slate-700">Message</label>
        <textarea 
          name="message"
          rows={4}
          required
          value={form.message}
          onChange={handleChange}
          className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none ring-offset-1 transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <button 
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 hover:shadow-md sm:w-auto"
      >
        Send Message
      </button>

      {status && (
        <p className="mt-3 text-center text-sm font-medium text-blue-900">
          {status}
        </p>
      )}
    </form>
  );
}
