"use client";

import { useState } from "react";
import { createContactAction } from "../actions/create-contact";
import { toast } from "react-hot-toast";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(
    formData: FormData
  ) {
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

  return (
    <form
      action={handleSubmit}
      className="space-y-4 max-w-xl"
    >
      <input
        name="name"
        placeholder="Your Name"
        required
        className="w-full rounded border p-3"
      />

      <input
        name="phone"
        placeholder="Phone Number"
        required
        className="w-full rounded border p-3"
      />

      <input
        name="email"
        placeholder="Email (Optional)"
        className="w-full rounded border p-3"
      />

      <textarea
        name="message"
        placeholder="Message"
        required
        rows={5}
        className="w-full rounded border p-3"
      />

      <button
        type="submit"
        disabled={loading}
        className="rounded bg-black px-6 py-3 text-white"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {success && (
        <p className="text-green-600">
          Message sent successfully.
        </p>
      )}
    </form>
  );
}