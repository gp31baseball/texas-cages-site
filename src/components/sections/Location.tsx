export default function Location() {
  return (
    <section
      id="location"
      className="bg-zinc-950 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Info */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              Location & Hours
            </h2>

            <div className="mt-6 space-y-2 text-white/80 text-lg">
              <p className="font-medium text-white">
                Texas Cages
              </p>
              <p>Houston, TX</p>
              <p>
                <span className="text-white/60">Phone:</span>{" "}
                <a
                  href="tel:713-501-1470"
                  className="text-white hover:underline"
                >
                  (713) 501-1470
                </a>
              </p>
            </div>

            <div className="mt-6 max-w-md text-white/60">
              <p>Hours vary by availability.</p>
              <p>Please call ahead to reserve cage time.</p>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="https://www.google.com/maps?q=Houston%20TX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-blue-700/20 border border-blue-600/40 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700/30 transition"
              >
                Open in Maps
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="relative w-full h-[320px] rounded-lg overflow-hidden border border-blue-600/40 bg-blue-700/10">
            <iframe
              title="Texas Cages Map"
              src="https://www.google.com/maps?q=Houston%20TX&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
