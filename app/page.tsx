import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Preview from "./components/Preview";
import Experience from "./components/Experience";
import ThreeScene from "./components/ThreeScene";

export default function Home() {
  return (
    <div className="min-h-creen bg-gray-900">
      <Navbar />
      <Hero />
      <ThreeScene />
      <Main />
      <Experience />
      <Preview/>
      <Footer />
    </div>
  );
}
