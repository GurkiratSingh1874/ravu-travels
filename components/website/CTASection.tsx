import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";

export default function CTASection() {
  return (
    <section
      className="relative overflow-hidden py-28"
      style={{
        backgroundImage: "url('/mountain.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative container text-center text-white">

        <p className="mb-4 uppercase tracking-[6px] text-amber-400 font-semibold">
          Start Your Journey
        </p>

        <h2 className="heading text-5xl md:text-6xl font-bold">
          Ready For Your Next Adventure?
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-200">
          Whether it's a family vacation, honeymoon, corporate trip,
          or weekend getaway, RAVU Travels is here to make your
          journey comfortable and memorable.
        </p>

        <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">

          <a
            href="tel:+919988393184"
            className="flex items-center justify-center gap-2 rounded-full bg-amber-500 px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-amber-400"
          >
            <Phone size={20} />
            Call Now
          </a>

          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-black"
          >
            <MessageCircle size={20} />
            Contact Us
          </Link>

        </div>

      </div>
    </section>
  );
}