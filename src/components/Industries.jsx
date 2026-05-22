import {
  Factory,
  Car,
  Boxes,
  Building2,
} from "lucide-react";

export default function Industries() {
  return (
    <section id="industries">
      <h2 className="text-3xl font-bold mb-10">
        Comprehensive Scan-to-CAD Workflows
        for Every Industry
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {[
          {
            title: "Mining & Heavy Industry",
            icon: <Factory size={28} />,
          },
          {
            title: "Automotive & Aerospace",
            icon: <Car size={28} />,
          },
          {
            title: "Manufacturing",
            icon: <Boxes size={28} />,
          },
          {
            title: "Architecture & Heritage",
            icon: <Building2 size={28} />,
          },
        ].map((item, index) => (
          <div
            key={index}
            className="border rounded-3xl p-8 hover:shadow-xl transition-all duration-300"
          >
            <div className="text-blue-900 mb-5">
              {item.icon}
            </div>

            <h3 className="text-xl font-bold mb-4">
              {item.title}
            </h3>

            <p className="text-gray-600 leading-7">
              Accurate engineering workflows tailored for
              industrial-grade applications.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}