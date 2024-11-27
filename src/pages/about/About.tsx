import AboutHero from "./AboutHero";
import Info from "./Info";
import Places from "./Places";

export default function About() {
  return (
    <div className=" md:px-10 md:space-y-[120px] overflow-hidden">
      <AboutHero />
      <Info type="first" />
      <Places />
      <Info type="second" />
    </div>
  );
}
