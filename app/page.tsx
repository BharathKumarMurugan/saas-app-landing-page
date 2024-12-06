import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* https://www.youtube.com/watch?v=ukiGFmZ32YA&ab_channel=JavaScriptMastery @ 48:20 */}
      <Header />
      <Hero />
    </main>
  );
}
