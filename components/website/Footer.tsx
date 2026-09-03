import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      <div className="container py-20">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}
          <div>
            <h2 className="heading text-3xl font-bold text-amber-400">
              RAVU TRAVELS
            </h2>
            <p className="mt-5 leading-8 text-slate-400 text-sm">
              Premium cab services and Himachal tour packages
              with safe, comfortable and memorable journeys.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-slate-400">
              Quick Links
            </h3>
            <div className="flex flex-col gap-3">
              <Link href="/" className="text-slate-300 text-sm transition hover:text-amber-400">Home</Link>
              <Link href="/tours" className="text-slate-300 text-sm transition hover:text-amber-400">Tours</Link>
              <Link href="/one-way" className="text-slate-300 text-sm transition hover:text-amber-400">One Way</Link>
              <Link href="/round-trip" className="text-slate-300 text-sm transition hover:text-amber-400">Round Trip</Link>
              <Link href="/contact" className="text-slate-300 text-sm transition hover:text-amber-400">Contact</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-slate-400">
              Contact
            </h3>
            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-amber-400 shrink-0" />
                +91 99883 93184
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-amber-400 shrink-0" />
                info@ravutravels.com
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-amber-400 shrink-0 mt-0.5" />
                Malout, Punjab, India
              </div>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-slate-400">
              Follow Us
            </h3>
            <p className="text-sm text-slate-400 leading-7">
              Stay connected for the latest tour packages,
              travel tips and Himachal updates.
            </p>
          </div>

        </div>

      </div>

      <div className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} RAVU TRAVELS. All Rights Reserved.
      </div>

    </footer>
  );
}