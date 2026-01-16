import CoachCard from "@/components/ui/CoachCard";
import { coaches } from "@/data/coaches";

export default function Coaches() {
  const activeCoaches = coaches.filter((c) => c.active);

  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold text-white">
        Our Coaches
      </h2>

      <p className="mt-4 max-w-3xl text-white/80">
        Texas Cages instructors bring years of playing and coaching experience
        at the high school, collegiate, and professional levels.
      </p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {activeCoaches.map((coach) => (
          <CoachCard key={coach.id} coach={coach} />
        ))}
      </div>
    </section>
  );
}
