"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/academics", label: "Academics" },
  { href: "/facilities", label: "Facilities" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/40 bg-white/80 backdrop-blur-md">
      <div className="page-shell flex h-16 items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg md:text-xl font-semibold tracking-tight text-slate-900"
        >
          <span className="rounded-full bg-blue-600 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-white">
            SSKennedy
          </span>
          <span className="ml-2 align-middle">School</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-6 text-sm font-medium text-slate-600">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-blue-700"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/admissions"
            className="inline-flex items-center rounded-full bg-blue-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 hover:shadow-md"
          >
            Admissions Enquiry
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-2 text-slate-700 shadow-sm transition hover:bg-slate-50 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          <span className="sr-only">Open menu</span>
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="page-shell md:hidden">
          <div className="mt-2 space-y-1 rounded-2xl border border-slate-100 bg-white p-3 shadow-lg">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-blue-700"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/admissions"
              className="mt-1 block rounded-xl bg-blue-700 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800"
              onClick={() => setIsOpen(false)}
            >
              Admissions Enquiry
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
