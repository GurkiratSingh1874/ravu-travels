import ContactForm from "@/features/contact/components/contact-form";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      {/* Page Header Band */}
      <div className="page-header">
        <div className="container">
          <span className="label">We're Here to Help</span>
          <h1>Contact Us</h1>
        </div>
      </div>

      <div className="container py-16">
        <div className="grid gap-12 lg:grid-cols-2">

          {/* Left — Form */}
          <div className="form-card">
            <h2 className="heading text-2xl font-bold mb-2">
              Send Us a Message
            </h2>
            <p className="text-slate-500 text-sm mb-8">
              Fill in the form and we'll get back to you shortly.
            </p>
            <ContactForm />
          </div>

          {/* Right — Contact Info */}
          <div className="space-y-6">

            <div>
              <h2 className="heading text-2xl font-bold mb-2">
                Get in Touch
              </h2>
              <p className="text-slate-500 text-sm">
                Available 24×7 for bookings and travel assistance.
              </p>
            </div>

            <div className="space-y-4">

              <div className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm border border-slate-100">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-100">
                  <Phone size={20} className="text-amber-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-0.5">Phone</p>
                  <a href="tel:+919988393184" className="font-semibold text-slate-800 hover:text-amber-600 transition">
                    +91 99883 93184
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm border border-slate-100">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-100">
                  <Mail size={20} className="text-amber-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-0.5">Email</p>
                  <a href="mailto:info@ravutravels.com" className="font-semibold text-slate-800 hover:text-amber-600 transition">
                    info@ravutravels.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm border border-slate-100">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-100">
                  <MapPin size={20} className="text-amber-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-0.5">Location</p>
                  <p className="font-semibold text-slate-800">
                    Malout, Punjab, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm border border-slate-100">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-100">
                  <Clock size={20} className="text-amber-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-0.5">Availability</p>
                  <p className="font-semibold text-slate-800">24 × 7 — All Days</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}