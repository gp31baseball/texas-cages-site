import Image from "next/image";

export default function ContactPage() {
  return (
    <section className="bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* HERO ROW */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h1 className="text-4xl font-bold text-white">
              Contact Texas Cages
            </h1>

            <p className="mt-4 text-lg text-white/80 max-w-xl">
              Please call ahead to reserve a cage or schedule private training.
              This helps us manage availability and ensure a safe training
              environment for everyone.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-md rounded-xl overflow-hidden border border-white/10 bg-zinc-900">
              <Image
                src="/images/2.png"
                alt="Texas Cages"
                width={600}
                height={400}
                className="object-contain w-full h-auto p-6"
                priority
              />
            </div>
          </div>
        </div>

        {/* CONTACT METHODS */}
        <div className="mt-20 max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-white mb-8">
            Contact Methods
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Phone */}
            <div className="rounded-lg p-6 bg-blue-700/20 border border-blue-600/40">
              <h3 className="text-lg font-semibold text-white">
                Phone
              </h3>

              <p className="mt-2 text-white/80">
                Contact Trey Price (Manager / Instructor) for scheduling or
                questions.
              </p>

              <a
                href="tel:7135011470"
                className="inline-flex items-center mt-4 text-white font-semibold hover:underline"
              >
                (713) 501-1470
              </a>
            </div>

            {/* Email */}
            <div className="rounded-lg p-6 bg-blue-700/20 border border-blue-600/40">
              <h3 className="text-lg font-semibold text-white">
                Email
              </h3>

              <p className="mt-2 text-white/80">
                You may also email for scheduling or general inquiries.
              </p>

              <a
                href="mailto:tpricefit@gmail.com"
                className="inline-flex items-center mt-4 text-white font-semibold hover:underline"
              >
                tpricefit@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* VISIT US */}
        <div className="mt-24 max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-white mb-8">
            Visit Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Location */}
            <div className="rounded-lg p-6 bg-zinc-900 border border-white/10">
              <h3 className="text-lg font-semibold text-white">
                Location
              </h3>

              <div className="mt-4 text-white/80 space-y-1">
                <p>Texas Cages</p>
                <p>4372 County Road 541</p>
                <p>Alvin, TX 77511</p>
              </div>

              <a
                href="https://www.google.com/maps?q=4372+County+Road+541+Alvin+TX+77511"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-4 text-white font-semibold hover:underline"
              >
                Open in Google Maps
              </a>
            </div>

            {/* Hours */}
            <div className="rounded-lg p-6 bg-zinc-900 border border-white/10">
              <h3 className="text-lg font-semibold text-white">
                Hours
              </h3>

              <div className="mt-4 space-y-2 text-white/80">
                <div className="flex justify-between">
                  <span>Monday</span><span>4:00 PM – 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Tuesday</span><span>4:00 PM – 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Wednesday</span><span>4:00 PM – 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Thursday</span><span>4:00 PM – 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Friday</span><span>4:00 PM – 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span><span>By Appointment</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span><span>Closed</span>
                </div>
              </div>

              <div className="mt-6 text-white/60">
                <p>Hours may vary by availability.</p>
                <p>Please call ahead before arriving.</p>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER NOTE */}
        <div className="mt-24 max-w-6xl mx-auto text-white/60">
          <p>
            We value our customers and prioritize safety for everyone.
            Calling ahead helps minimize foot traffic and ensures cage
            availability.
          </p>
        </div>

      </div>
    </section>
  );
}
