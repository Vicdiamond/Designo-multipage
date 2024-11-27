import Hero from "./Hero";
import Projects from "./Projects";
import Values from "./Values";

export default function Home() {
  return (
    <div className="md:py-16 md:px-10 overflow-hidden">
      <Hero />
      <Projects />
      <Values />
    </div>
  );
}
