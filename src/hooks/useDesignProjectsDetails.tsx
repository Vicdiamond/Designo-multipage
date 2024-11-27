import useProjectsDetails from "./useProjectsDetails";
import {
  appDesignProjectsInfo,
  graphicDesignProjectsInfo,
  webDesignProjectsInfo,
} from "../data/data";

function useDesignProjectsDetails() {
  const { currentPath } = useProjectsDetails();
  //   console.log(currentPath);

  if (currentPath === "web") return webDesignProjectsInfo;

  if (currentPath === "app") return appDesignProjectsInfo;

  if (currentPath === "graphic") return graphicDesignProjectsInfo;

  return [];
}

export default useDesignProjectsDetails;
