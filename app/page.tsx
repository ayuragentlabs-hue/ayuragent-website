import CTA from "@/components/sections/cta";
import FAQ from "@/components/sections/faq";
import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import Impact from "@/components/sections/impact";
import Marquee from "@/components/sections/marquee";
import Nav from "@/components/sections/nav";
import Services from "@/components/sections/services";
import Stack from "@/components/sections/stack";
import Statement from "@/components/sections/testimonial";
import Work from "@/components/sections/work";
import ScrollProgress from "@/components/ui/scroll-progress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main className="overflow-x-clip">
        <Hero />
        <Marquee />
        <Work />
        <Services />
        <Impact />
        <Statement />
        <Stack />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
