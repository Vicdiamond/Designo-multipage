import useProjectsDetails from "../../hooks/useProjectsDetails";
import Project from "../../ui/Project";

export default function Projects() {
  const { projectDetails, currentPath } = useProjectsDetails();

  const isGrid = projectDetails.length > 2;
  const isNotHomePage = currentPath !== "";

  return (
    <div
      className={`pt-[120px]  ${
        isGrid ? "grid xl:grid-cols-2 xl:grid-rows-2" : "xl:flex xl:gap-[30px] "
      } space-y-6  xl:space-y-0 xl:gap-y-6 relative  ${
        isNotHomePage ? "md:mb-[350px] mb-[200px]" : "mb-[120px]"
      }`}
    >
      <img
        src="/shared/desktop/bg-pattern-leaf.svg"
        alt="leaf"
        className="absolute  hidden xl:block -top-[380px] -left-10"
      />
      {projectDetails.map((project, i) => (
        <Project
          project={project}
          key={project.title}
          i={i + 1}
          className={
            isGrid && i === 0
              ? " xl:max-h-full col-span-1 row-span-2 "
              : "col-span-1 row-span-1  xl:max-h-[308px] "
          }
        />
      ))}
    </div>
  );
}
