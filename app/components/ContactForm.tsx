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
      className="bg-white p-8 rounded-xl shadow-lg space-y-6"
    >
      <div>
        <label className="font-medium text-gray-700">Your Name</label>
        <input 
          type="text"
          name="name"
          required
          value={form.name}
          onChange={handleChange}
          className="w-full mt-1 p-3 border rounded-lg text-black"
        />
      </div>

      <div>
        <label className="font-medium text-gray-700">Your Email</label>
        <input 
          type="email"
          name="email"
          required
          value={form.email}
          onChange={handleChange}
          className="w-full mt-1 p-3 border rounded-lg text-black"
        />
      </div>

      <div>
        <label className="font-medium text-gray-700">Message</label>
        <textarea 
          name="message"
          rows={4}
          required
          value={form.message}
          onChange={handleChange}
          className="w-full mt-1 p-3 border rounded-lg text-black"
        />
      </div>

      <button 
        type="submit"
        className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold"
      >
        Send Message
      </button>

      {status && (
        <p className="text-center text-blue-900 font-medium mt-4">{status}</p>
      )}
    </form>
  );
}
