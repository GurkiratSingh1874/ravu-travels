import {
  ShieldCheck,
  CarFront,
  Clock3,
  Headset,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Safe & Trusted",
    description:
      "Professional drivers with verified vehicles.",
  },
  {
    icon: CarFront,
    title: "Premium Fleet",
    description:
      "Sedans, SUVs, MUVs and Tempo Travellers.",
  },
  {
    icon: Clock3,
    title: "24×7 Service",
    description:
      "Available anytime for tours and airport transfers.",
  },
  {
    icon: Headset,
    title: "Customer Support",
    description:
      "Quick assistance before and during your journey.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24">

      <div className="container">

        <div className="text-center mb-16">

          <p className="text-amber-500 font-semibold uppercase tracking-[5px]">
            Why Choose Us
          </p>

          <h2 className="heading text-5xl font-bold mt-3">
            Travel With Confidence
          </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-3 hover:shadow-2xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                  <Icon
                    size={32}
                    className="text-amber-500"
                  />
                </div>

                <h3 className="text-2xl font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {item.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}