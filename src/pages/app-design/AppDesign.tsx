import useProjectsDetails from "../../hooks/useProjectsDetails";
import Background from "../../ui/Background";
import Projects from "../home/Projects";
import AppDesignProjects from "./AppDesignProjects";

export default function AppDesign() {
  useProjectsDetails();

  return (
    <div className="md:px-10">
      <Background
        header="App Design"
        body="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
        page="design"
      />

      <AppDesignProjects />

      <Projects />
    </div>
  );
}
