import ProjectGalleryItem from "../../ui/ProjectGalleryItem";
import useDesignProjectsDetails from "../../hooks/useDesignProjectsDetails";

function WebDesignProjects() {
  const webDesignProjectsInfo = useDesignProjectsDetails();

  return (
    <div className="xl:grid xl:grid-cols-3 gap-[30px] items-center mx-auto justify-between mt-[96px] space-y-8 xl:space-y-0 ">
      {webDesignProjectsInfo.map((project, i) => (
        <ProjectGalleryItem project={project} key={project.title} i={i} />
      ))}
    </div>
  );
}

export default WebDesignProjects;
