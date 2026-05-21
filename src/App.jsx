import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Industries from "./components/Industries";
import Process from "./components/Process";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Hero />

      <section className="max-w-7xl mx-auto px-5 py-10 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-20">
          <Features />
          <Industries />
          <Process />
        </div>

        <div>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </>
  );
}