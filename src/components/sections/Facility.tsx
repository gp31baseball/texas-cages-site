export default function Facility() {
  return (
    <section className="bg-zinc-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Intro */}
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-white">
            The Facility
          </h2>

          <p className="mt-6 text-lg text-white/80">
            Texas Cages is an indoor training facility built for consistent,
            year-round work. Whether you’re getting swings in, refining mechanics,
            or training with a coach, the focus is simple: quality reps in a
            controlled environment.
          </p>
        </div>

        {/* Feature cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          <div className="rounded-lg p-6 bg-blue-700/20 border border-blue-600/40">
            <h3 className="font-semibold text-white">
              Indoor Cages
            </h3>
            <p className="mt-2 text-white/90">
              Batting and pitching cages available for baseball and softball,
              suitable for individual work or team sessions.
            </p>
          </div>

          <div className="rounded-lg p-6 bg-blue-700/20 border border-blue-600/40">
            <h3 className="font-semibold text-white">
              Private Training
            </h3>
            <p className="mt-2 text-white/90">
              One-on-one and small-group instruction with experienced coaches,
              offered by availability.
            </p>
          </div>

          <div className="rounded-lg p-6 bg-blue-700/20 border border-blue-600/40">
            <h3 className="font-semibold text-white">
              Team Rentals
            </h3>
            <p className="mt-2 text-white/90">
              Reserve cage time for team practices, workouts, and offseason
              training.
            </p>
          </div>

          <div className="rounded-lg p-6 bg-blue-700/20 border border-blue-600/40">
            <h3 className="font-semibold text-white">
              Year-Round Access
            </h3>
            <p className="mt-2 text-white/90">
              Train regardless of weather with a consistent indoor setup designed
              for repeatable reps.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
