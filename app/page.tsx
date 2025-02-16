import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-creen bg-gray-900">
      <Navbar />
      <Hero />
    </div>
  );
}
