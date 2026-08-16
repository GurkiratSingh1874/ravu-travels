import ContactForm from "@/features/contact/components/contact-form";

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">

      <h1 className="mb-8 text-4xl font-bold">
        Contact Us
      </h1>

      <ContactForm />

    </section>
  );
}