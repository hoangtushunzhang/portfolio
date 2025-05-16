import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Preview from "./components/Preview";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <div className="min-h-creen bg-gray-900">
      <Navbar />
      <Hero />
      <Main />
      <Experience />
      <Preview/>
      <Footer />
    </div>
  );
}
