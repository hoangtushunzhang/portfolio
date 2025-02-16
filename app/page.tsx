import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-creen bg-gray-900">
      <Navbar />
      <Hero />
      <Main />
      <Footer />
    </div>
  );
}
