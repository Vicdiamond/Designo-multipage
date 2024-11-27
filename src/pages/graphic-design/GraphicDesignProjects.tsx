import useDesignProjectsDetails from "../../hooks/useDesignProjectsDetails";
import ProjectGalleryItem from "../../ui/ProjectGalleryItem";

function GraphicDesignProjects() {
  const graphicDesignProjectsInfo = useDesignProjectsDetails();
  return (
    <div className="xl:grid xl:grid-cols-3 gap-[30px] items-center mx-auto justify-between mt-[96px] space-y-8 xl:space-y-0 ">
      {graphicDesignProjectsInfo.map((project, i) => (
        <ProjectGalleryItem project={project} key={project.title} i={i} />
      ))}
    </div>
  );
}

export default GraphicDesignProjects;
