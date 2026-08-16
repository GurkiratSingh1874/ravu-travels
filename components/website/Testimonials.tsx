import { prisma } from "@/lib/prisma";

export default async function Testimonials() {
  const reviews = await prisma.testimonial.findMany({
    take: 3,
    orderBy: {
      createdAt: "desc",
    },
  });

  if (reviews.length === 0) return null;

  return (
    <section className="py-24 bg-white">

      <div className="container">

        <div className="mb-16 text-center">

          <p className="uppercase tracking-[6px] text-amber-500 font-semibold">
            Testimonials
          </p>

          <h2 className="heading mt-3 text-5xl font-bold">
            What Our Customers Say
          </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {reviews.map((review) => (
            <div
              key={review.id}
              className="rounded-3xl bg-slate-50 p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="mb-5 flex">

                {Array.from({
                  length: review.rating,
                }).map((_, index) => (
                  <span
                    key={index}
                    className="text-2xl text-amber-500"
                  >
                    ★
                  </span>
                ))}

              </div>

              <p className="leading-8 text-gray-600">
                "{review.review}"
              </p>

              <h3 className="mt-8 text-xl font-semibold">
                {review.name}
              </h3>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}