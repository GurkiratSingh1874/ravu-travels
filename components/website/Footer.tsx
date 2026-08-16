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

            <h2 className="heading text-4xl font-bold text-amber-400">
              RAVU TRAVELS
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Premium cab services and Himachal tour packages
              with safe, comfortable and memorable journeys.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-5 text-2xl font-semibold">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-slate-300">

              <Link href="/">Home</Link>

              <Link href="/tours">Tours</Link>

              <Link href="/one-way">One Way</Link>

              <Link href="/round-trip">Round Trip</Link>

              <Link href="/contact">Contact</Link>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-5 text-2xl font-semibold">
              Contact
            </h3>

            <div className="space-y-4 text-slate-300">

              <div className="flex items-center gap-3">
                <Phone size={18} />
                +91 99883 93184
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                info@ravutravels.com
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1" />
                Malout, Punjab, India
              </div>

            </div>

          </div>

          Social

          <div>

            <h3 className="mb-5 text-2xl font-semibold">
              Follow Us
            </h3>

            {/* <div className="flex gap-4">

              <a
                href="#"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-amber-500"
              >
                <Facebook size={20} />
              </a>

              <a
                href="#"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-amber-500"
              >
                <Instagram size={20} />
              </a>

            </div> */}

          </div>

        </div>

      </div>

      <div className="border-t border-slate-800 py-6 text-center text-slate-400">

        © {new Date().getFullYear()} RAVU TRAVELS. All Rights Reserved.

      </div>

    </footer>
  );
}