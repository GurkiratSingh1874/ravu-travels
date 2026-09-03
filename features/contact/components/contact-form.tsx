"use client";

import { useState } from "react";
import { createContactAction } from "../actions/create-contact";
import { toast } from "react-hot-toast";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);

    const result = await createContactAction(formData);

    setLoading(false);

    if (!result.success) {
      toast.error(result.message);
      return;
    }

    toast.success("Message sent successfully!");
    setSuccess(true);
  }

  if (success) {
    return (
      <div className="rounded-2xl bg-green-50 border border-green-200 p-8 text-center">
        <p className="text-2xl font-semibold text-green-700 mb-2">✓ Message Sent!</p>
        <p className="text-green-600 text-sm">
          Thank you for reaching out. We'll get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form action={handleSubmit} className="space-y-5">

      <div>
        <label className="field-label">Your Name</label>
        <input
          name="name"
          placeholder="e.g. Gurkirat Singh"
          required
          className="field-input"
        />
      </div>

      <div>
        <label className="field-label">Phone Number</label>
        <input
          name="phone"
          placeholder="10-digit mobile number"
          required
          className="field-input"
        />
      </div>

      <div>
        <label className="field-label">Email (Optional)</label>
        <input
          name="email"
          type="email"
          placeholder="you@example.com"
          className="field-input"
        />
      </div>

      <div>
        <label className="field-label">Message</label>
        <textarea
          name="message"
          placeholder="Tell us about your travel plans..."
          required
          rows={5}
          className="field-input resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

    </form>
  );
}