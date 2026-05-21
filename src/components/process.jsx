import {
  ScanLine,
  Cpu,
  Boxes,
} from "lucide-react";

export default function Process() {
  return (
    <section id="process">
      <h2 className="text-3xl font-bold mb-10">
        Our 3-Step Reverse Engineering Process
      </h2>

      <div className="space-y-6">
        {[
          {
            title: "Precision 3D Scanning",
            icon: <ScanLine size={28} />,
          },
          {
            title: "Point Cloud Processing",
            icon: <Cpu size={28} />,
          },
          {
            title: "Parametric Modeling",
            icon: <Boxes size={28} />,
          },
        ].map((step, index) => (
          <div
            key={index}
            className="flex gap-5 items-start border rounded-3xl p-8 hover:shadow-lg transition"
          >
            <div className="bg-blue-100 text-blue-900 p-4 rounded-2xl">
              {step.icon}
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">
                {step.title}
              </h3>

              <p className="text-gray-600 leading-7">
                Accurate workflows engineered for
                manufacturing-grade CAD precision.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}