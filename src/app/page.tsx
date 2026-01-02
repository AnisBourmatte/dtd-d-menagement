import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CTABanner from "@/components/CTABanner";
import About from "@/components/About";
import PhoneBanner from "@/components/PhoneBanner";
import Steps from "@/components/Steps";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <CTABanner />
      <About />
      <PhoneBanner />
      <Steps />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
}
