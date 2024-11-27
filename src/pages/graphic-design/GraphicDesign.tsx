import useProjectsDetails from "../../hooks/useProjectsDetails";
import Background from "../../ui/Background";
import Projects from "../home/Projects";
import GraphicDesignProjects from "./GraphicDesignProjects";

export default function GraphicDesign() {
  useProjectsDetails();

  return (
    <div className="md:px-10">
      <Background
        header="Graphic Design"
        body="We deliver eye-catching branding materials that are tailored to meet your business objectives."
        page="design"
      />

      <GraphicDesignProjects />

      <Projects />
    </div>
  );
}
