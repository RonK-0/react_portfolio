import React from "react";
import SkillCards from "./SkillCards";
import SpinnerFetching from "../../../partials/spinners/SpinnerFetching";
import useQueryData from "../../../custom-hook/useQueryData";

const SectionSkills = () => {
  const {
    isLoading,
    isFetching,
    error,
    data: skill,
  } = useQueryData(
    "/v1/skills", // endpoint
    "get", // method
    "skills"
  );

  return (
    <div className="skill__cards">
      {isLoading ? (
        <SpinnerFetching />
      ) : (
        skill?.data.length !== 0 && (
        skill?.data.map(
          (item, key) =>
            (item.skill_is_active === 1 && (
              <SkillCards skill__info={item} key={key} />
            ))
        )
      ) || (
        <h3 className="text-white opacity-80 italic text-center">
          No Skills Available at the Moment
        </h3>
      )
      )}
    </div>
  );
};

export default SectionSkills;
