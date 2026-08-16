import Link from "next/link";
import FeaturedTours from "@/features/tours/components/featured-tours";
import WhyChooseUs from "@/components/website/WhyChooseUs";
import PremiumFleet from "@/components/website/PremiumFleet";
import Testimonials from "@/components/website/Testimonials";
import CTASection from "@/components/website/CTASection";

export default function HomePage() {
  return (
    <>
      <section
        className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/mountain.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center text-white">

          <p className="mb-4 text-lg uppercase tracking-[6px] text-amber-400">
            Welcome to RAVU Travels
          </p>

          <h1 className="heading text-5xl font-bold leading-tight md:text-7xl">
            Explore Himachal
            <br />
            In Comfort & Style
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-gray-200 md:text-xl">
            Premium cab services, one-way rides, round trips and
            unforgettable Himachal tour packages.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-5 sm:flex-row">

            <Link
              href="/tours"
              className="rounded-full bg-amber-500 px-8 py-4 font-semibold text-white transition hover:bg-amber-600"
            >
              Explore Tours
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-black"
            >
              Book Now
            </Link>

          </div>

        </div>
      </section>

      <div className="container">
        <FeaturedTours />
      </div>

      <div className="container">
        <WhyChooseUs />
      </div>
      <div className="container">
        <PremiumFleet />
      </div>
      {/* <div className="container">
        <Testimonials />
      </div> */}
      <div className="container">
        <CTASection />
      </div>
    </>
  );
}