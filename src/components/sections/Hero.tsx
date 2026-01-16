import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Image column */}
<div className="relative w-full overflow-hidden rounded-lg border border-white/10 bg-zinc-900/40 aspect-[16/9] md:aspect-[4/3]">
  <Image
    src="/images/hero.png"
    alt="Texas Cages"
    fill
    priority
    className="object-contain p-6"
  />
</div>

          {/* Text column */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              Texas Cages
            </h1>

            <p className="mt-6 text-lg text-white/80 max-w-xl">
              Indoor batting cages and private training for baseball and softball.
              Built for serious reps, year-round.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="tel:713-501-1470"
                className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/90 transition"
              >
                Call to Book
              </a>

              <a
                href="#location"
                className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                View Location
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
