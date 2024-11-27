import Background from "../../ui/Background";
import Projects from "../home/Projects";
import WebDesignProjects from "./WebDesignProjects";

export default function WebDesign() {
  return (
    <div className="md:px-10">
      <Background
        header="Web Design"
        body="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
        page="design"
      />

      <WebDesignProjects />
      <Projects />
    </div>
  );
}
