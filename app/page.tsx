import Features from "./components/Features";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* https://www.youtube.com/watch?v=ukiGFmZ32YA&ab_channel=JavaScriptMastery @ 1:45:31 */}
      <Header />
      <Hero />
      <Features />
      <Pricing />
    </main>
  );
}
