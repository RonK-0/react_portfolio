import React from "react";
import ProjectCards from "./ProjectCards";
import useQueryData from "../../../custom-hook/useQueryData";
import SpinnerFetching from "../../../partials/spinners/SpinnerFetching";

const SectionProjects = () => {
  const {
    isLoading,
    isFetching,
    error,
    data: projects_skill,
  } = useQueryData(
    "/v1/projects/info", // endpoint
    "get", // method
    "projects/info"
  );
  return (
    <div className="project__cards">
      {isLoading ? (
        <SpinnerFetching />
      ) : (
        projects_skill?.data.map(
          (item, key) =>
            item.project_is_active === 1 && (
              <ProjectCards project_info={item} key={key} />
            )
        )
      )}
      {/* <ProjectCards/> */}
    </div>
  );
};

export default SectionProjects;
