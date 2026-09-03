"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);
  const textColor = isHome ? "text-white" : "text-slate-800";
  return (
    <header className="fixed top-5 left-1/2 z-50 w-[95%] max-w-7xl -translate-x-1/2">

      <div
  className={`flex h-20 items-center justify-between rounded-full border px-8 transition-all duration-500 ${
    isHome
      ? scrolled
        ? "border-white/20 bg-white/15 shadow-2xl backdrop-blur-2xl"
        : "border-white/10 bg-white/10 backdrop-blur-xl"
      : "border-gray-200 bg-white/90 shadow-lg backdrop-blur-xl"
  }`}
>

        <Link href="/">
          <h1 className={`heading text-4xl font-bold tracking-wide ${
              isHome ? "text-amber-400" : "text-slate-900"
            }`}>
            RAVU TRAVELS
          </h1>
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">

          <Link
            href="/"
            className={`${textColor} font-medium transition duration-300 hover:text-amber-500`}
          >
            Home
          </Link>

          <Link
            href="/tours"
            className={`${textColor} font-medium transition duration-300 hover:text-amber-500`}
          >
            Tours
          </Link>

          <Link
            href="/one-way"
            className={`${textColor} font-medium transition duration-300 hover:text-amber-500`}
          >
            One Way
          </Link>

          <Link
            href="/round-trip"
            className={`${textColor} font-medium transition duration-300 hover:text-amber-500`}
          >
            Round Trip
          </Link>

          <Link
            href="/contact"
            className={`${textColor} font-medium transition duration-300 hover:text-amber-500`}
          >
            Contact
          </Link>

          <a
            href="tel:+919988393184"
            className="flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 font-semibold text-white shadow-xl transition duration-300 hover:scale-105 hover:bg-amber-400"
          >
            <Phone size={18} />
            Call Now
          </a>

        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden ${isHome ? "text-white" : "text-slate-800"}`}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {isOpen && (
        <div className="mt-4 overflow-hidden rounded-3xl border border-white/10 bg-white/15 p-6 backdrop-blur-2xl lg:hidden">

          <div className="flex flex-col gap-5">

            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-amber-400"
            >
              Home
            </Link>

            <Link
              href="/tours"
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-amber-400"
            >
              Tours
            </Link>

            <Link
              href="/one-way"
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-amber-400"
            >
              One Way
            </Link>

            <Link
              href="/round-trip"
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-amber-400"
            >
              Round Trip
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-amber-400"
            >
              Contact
            </Link>

            <a
              href="tel:+919988393184"
              className="mt-2 rounded-full bg-amber-500 py-3 text-center font-semibold text-white transition hover:bg-amber-400"
            >
              Call Now
            </a>

          </div>

        </div>
      )}

    </header>
  );
}