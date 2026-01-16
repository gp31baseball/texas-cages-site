export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-white/60 flex flex-col md:flex-row justify-between gap-4">
        <div>
          © {new Date().getFullYear()} Texas Cages
          <div className="text-white/40">
            Indoor Batting & Training Facility
          </div>
        </div>

        <div className="text-white/40 text-left md:text-right space-y-1">
          <div>Proud Partner of HTown Select</div>
          <div>
            Powered by{" "}
            <a
              href="https://fortyonebuilt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition"
            >
              FortyOneBuilt.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
