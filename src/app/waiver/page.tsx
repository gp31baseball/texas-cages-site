import Image from "next/image";

export default function WaiverPage() {
  return (
    <section className="bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Header */}
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold text-white">
            Facility Waiver
          </h1>

          <p className="mt-4 text-lg text-white/80">
            All participants must complete a waiver before using the facility.
            Please download, print, and bring a completed copy with you.
          </p>
        </div>

{/* Main Content */}
<div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">

  {/* Download Card */}
  <div className="flex">
    <div className="flex flex-col justify-between w-full rounded-xl bg-blue-700/20 border border-blue-600/40 p-8">
      <div>
        <h2 className="text-2xl font-semibold text-white">
          Download Waiver Form
        </h2>

        <p className="mt-4 text-white/90">
          This waiver applies to all training, programs, and facility use at
          Texas Cages. Minors must have a parent or guardian signature.
        </p>

        <a
          href="https://img1.wsimg.com/blobby/go/f37a0537-f776-455f-8ea3-76a0bd0f2a64/final%20waiver.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center mt-6 px-6 py-3 rounded-md bg-white text-blue-700 font-semibold hover:bg-white/90 transition"
        >
          Download PDF Waiver
        </a>
      </div>

      <div className="mt-6 text-white/70 space-y-2 text-sm">
        <p>• Please print and complete the waiver before arriving.</p>
        <p>• Waivers must be on file prior to participating.</p>
        <p>• Contact us with any questions before your visit.</p>
      </div>
    </div>
  </div>

  {/* Image */}
  <div className="flex">
    <div className="relative w-full rounded-xl overflow-hidden border border-white/10 bg-zinc-900 flex items-center justify-center">
      <img
        src="/images/2.png"
        alt="Texas Cages"
        className="max-h-full max-w-full object-contain p-8"
      />
    </div>
  </div>

</div>

      </div>
    </section>
  );
}
