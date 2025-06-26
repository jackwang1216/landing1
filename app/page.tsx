import Hero from "@/components/Hero";
import Product from "@/components/Product";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section id="home" className="scroll-mt-16">
        <Hero />
      </section>
      <section id="product" className="scroll-mt-16">
        <Product />
      </section>
      <section id="about" className="scroll-mt-16">
        <About />
      </section>
      <section id="contact" className="scroll-mt-16">
        <Contact />
      </section>
    </main>
  );
}
