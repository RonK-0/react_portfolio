import React, { useState } from "react";
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
  const [isSchool, setIsSchool] = useState(true);
  const [isOJT, setIsOJT] = useState(false);
  const [isOthers, setIsOthers] = useState(false);

  const handleSchool = () => {
    setIsSchool(true);  setIsOJT(false); setIsOthers(false);
  };
  const handleOJT = () => {
    setIsSchool(false); setIsOJT(true);  setIsOthers(false);
  };
  const handleOthers = () => {
    setIsSchool(false); setIsOJT(false); setIsOthers(true);
  };

  return (
    <div className="project_cards_parent">
      <div className="project_selector w-1/2 mx-a flex center gap-x-8 py-2 mb-6">
        <button
          type="button"
          className={`project_selector_button ${
            isSchool == true ? "active" : ""
          }`}
          onClick={handleSchool}
        >
          School
        </button>
        <button
          type="button"
          className={`project_selector_button ${isOJT == true ? "active" : ""}`}
          onClick={handleOJT}
        >
          FBS OJT
        </button>
        <button
          type="button"
          className={`project_selector_button ${
            isOthers == true ? "active" : ""
          }`}
          onClick={handleOthers}
        >
          Others
        </button>
      </div>

      <div className="project__cards">
        {isLoading ? (
          <SpinnerFetching />
        ) : (
          (projects_skill?.data.length !== 0 &&
            projects_skill?.data.map(
              (item, key) =>
                (item.project_is_active === 1 &&
                  isSchool &&
                  item.project_category == "School" && (
                    <ProjectCards project_info={item} key={key} />
                  )) ||
                (isOJT && item.project_category == "FBS OJT" && (
                  <ProjectCards project_info={item} key={key} />
                )) ||
                (isOthers &&
                  item.project_category != "School" &&
                  item.project_category != "FBS OJT" && (
                    <ProjectCards project_info={item} key={key} />
                  ))
            )) || (
            <h3 className="text-white opacity-80 italic text-center">
              No Projects Available at the Moment
            </h3>
          )
        )}
      </div>
    </div>
  );
};

export default SectionProjects;
