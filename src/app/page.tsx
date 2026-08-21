import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div id="top" className="flex min-h-full flex-col">
      <Navbar />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6">
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
