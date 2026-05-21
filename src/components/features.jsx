import {
  Cpu,
  Factory,
  CheckCircle2,
} from "lucide-react";

export default function Features() {
  return (
    <section id="services">
      <h2 className="text-4xl font-bold mb-6">
        Scan to CAD & Reverse Engineering Services
        in NSW
      </h2>

      <p className="text-lg text-gray-600 leading-8 mb-14">
        We help manufacturers, engineering firms, and
        industrial operations convert physical objects into
        precise digital CAD models.
      </p>

      <h2 className="text-3xl font-bold mb-10">
        Tailored 3D Solutions for Your Complex
        Engineering Challenges
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            title: 'Stop Struggling with "Dumb" Files',
            desc: "Transform unusable mesh files into intelligent CAD models.",
            icon: <Cpu size={30} />,
          },
          {
            title: "Eliminate Downtime from Missing Prints",
            desc: "Recreate parts without original drawings.",
            icon: <Factory size={30} />,
          },
          {
            title: "Zero-Fitment Risk",
            desc: "Ensure dimensional accuracy and perfect fitment.",
            icon: <CheckCircle2 size={30} />,
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-blue-50 hover:bg-blue-900 hover:text-white transition-all duration-300 rounded-3xl p-8 shadow-md"
          >
            <div className="mb-5 text-orange-500">
              {item.icon}
            </div>

            <h3 className="text-xl font-bold mb-4">
              {item.title}
            </h3>

            <p className="leading-7 text-sm">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}