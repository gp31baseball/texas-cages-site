import Image from "next/image";
import { Coach } from "@/data/coaches";

export default function CoachCard({ coach }: { coach: Coach }) {
  return (
    <div className="rounded-lg border border-white/10 bg-zinc-900/60 overflow-hidden">
      {/* Image */}
      <div className="relative h-48 w-full">
        <Image
          src={coach.image}
          alt={`${coach.name} – Coach`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-white">
          {coach.name}
        </h3>

        {coach.role && (
          <p className="text-sm text-white/60 mt-1">
            {coach.role}
          </p>
        )}

        <ul className="mt-4 space-y-2 text-sm text-white/80">
          {coach.experience.map((item, i) => (
            <li key={i}>• {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

