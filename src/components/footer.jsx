export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-24">
      <div className="max-w-7xl mx-auto px-5 py-10 flex flex-col md:flex-row gap-5 items-center justify-between">
        <p className="text-sm text-gray-600">
          © 2026 Creatus Technologies.
          All rights reserved.
        </p>

        <div className="flex gap-6 text-sm text-gray-600">
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
        </div>
      </div>
    </footer>
  );
}