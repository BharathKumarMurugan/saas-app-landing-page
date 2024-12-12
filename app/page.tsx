import Download from "./components/Download";
import Faq from "./components/Faq";
import Features from "./components/Features";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* https://www.youtube.com/watch?v=ukiGFmZ32YA&ab_channel=JavaScriptMastery @ 2:40:52 */}
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Testimonials />
      <Download />
    </main>
  );
}
