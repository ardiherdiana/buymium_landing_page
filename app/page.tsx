
import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import Stats from '../src/components/Stats';
import Features from '../src/components/Features';
import Pricelist from '../src/components/Pricelist';
import HowItWorks from '../src/components/HowItWorks';
import FAQ from '../src/components/FAQ';
import Footer from '../src/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Pricelist />
        <HowItWorks />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
