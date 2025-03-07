import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <Hero />

      <Features />

      <CTA />

      <Footer />
    </div>
  );
}
