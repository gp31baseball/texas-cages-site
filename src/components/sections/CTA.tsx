import Image from "next/image";

export default function CTA() {
  return (
    <section className="bg-zinc-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="rounded-xl overflow-hidden bg-blue-700/20 border border-blue-600/40">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Text */}
            <div className="p-10">
              <h2 className="text-3xl font-bold text-white">
                Train Year-Round
              </h2>

              <p className="mt-4 text-white/90 max-w-md">
                Reserve cage time or learn more about team and private training
                options. Built for consistent reps, regardless of weather.
              </p>

              <a
                href="tel:713-501-1470"
                className="inline-flex items-center justify-center mt-8 px-8 py-3 rounded-md bg-white text-blue-700 font-semibold hover:bg-white/90 transition"
              >
                Call to Book
              </a>
            </div>

            {/* Image */}
            <div className="relative min-h-[260px] md:min-h-full bg-zinc-950/40">
              <Image
                src="/images/cta.jpg"
                alt="Texas Cages"
                fill
                className="object-contain p-8"
                priority
              />
              {/* subtle vignette so it feels integrated */}
              <div className="absolute inset-0 bg-gradient-to-l from-black/20 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
