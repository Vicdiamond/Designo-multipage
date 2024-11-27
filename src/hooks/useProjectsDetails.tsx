import { useLocation } from "react-router-dom";
import { homeProjectsDetails } from "../data/data";

function useProjectsDetails() {
  const location = useLocation();

  const currentPath = location.pathname.split("-")[0].slice(1);

  const projectDetails = homeProjectsDetails.filter(
    (project) => project.title.split(" ")[0].toLowerCase() !== currentPath
  );

  // console.log(projectDetails);
  return { projectDetails, currentPath };
}

export default useProjectsDetails;
