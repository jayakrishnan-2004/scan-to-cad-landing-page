export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-5 py-16 lg:py-24 grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT */}

      <div>
        <p className="uppercase tracking-[4px] text-orange-500 font-bold mb-5">
          3D Scan to CAD Experts
        </p>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-8">
          Convert Physical Parts into
          <span className="text-blue-900">
            {" "}
            Production-Ready CAD Models
          </span>
        </h1>

        <p className="text-lg text-gray-600 leading-8 mb-10">
          High-accuracy reverse engineering services for
          manufacturing, mining, automotive, and industrial
          applications.
        </p>

        <div className="flex flex-wrap gap-5">
          <button className="bg-orange-500 hover:bg-orange-600 transition text-white px-8 py-4 rounded-2xl font-semibold shadow-2xl">
            Request a Quote
          </button>

          <button className="border border-gray-300 hover:border-blue-900 hover:text-blue-900 transition px-8 py-4 rounded-2xl font-semibold">
            Explore Services
          </button>
        </div>

        {/* TRUST BAR */}

        <div className="mt-14">
          <p className="text-sm font-semibold text-gray-500 mb-5">
            Trusted Across Leading Engineering Platforms
          </p>

          <div className="flex flex-wrap gap-4">
            {[
              "SolidWorks",
              "Autodesk Inventor",
              "Solid Edge",
              "STEP",
              "IGES",
            ].map((tool) => (
              <div
                key={tool}
                className="px-5 py-3 rounded-xl border bg-gray-50 text-sm font-semibold"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      
      <div>
        <img
          src="/hero.jpg"
          alt="Engineering"
          className="rounded-[30px] shadow-2xl w-full object-cover"
        />
      </div>
    </section>
  );
}