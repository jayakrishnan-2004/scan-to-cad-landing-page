import { Upload } from "lucide-react";
export default function ContactForm() {
  return (
    <div className="sticky top-24 bg-white border shadow-2xl rounded-[35px] p-8">
      <h3 className="text-3xl font-bold mb-3">
        Request a Quote
      </h3>

      <p className="text-gray-500 mb-8 leading-7">
        Submit your project details and our engineering
        team will contact you shortly.
      </p>

      <form className="space-y-5">
        <input
          type="text"
          required
          placeholder="Full Name"
          className="w-full border rounded-2xl px-5 py-4 outline-none focus:border-blue-900"
        />

        <input
          type="email"
          required
          placeholder="Email Address"
          className="w-full border rounded-2xl px-5 py-4 outline-none focus:border-blue-900"
        />

        <input
          type="tel"
          required
          placeholder="Phone Number"
          className="w-full border rounded-2xl px-5 py-4 outline-none focus:border-blue-900"
        />

        <label className="border-2 border-dashed rounded-2xl p-7 flex flex-col items-center justify-center cursor-pointer hover:border-blue-900 transition">
          <Upload className="mb-3 text-blue-900" />

          <span className="font-medium text-gray-600">
            Upload STL / CAD File
          </span>

          <input type="file" className="hidden" />
        </label>

        <textarea
          rows="5"
          placeholder="Project Details / Comments"
          className="w-full border rounded-2xl px-5 py-4 outline-none focus:border-blue-900"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 transition text-white py-4 rounded-2xl font-semibold shadow-xl"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}