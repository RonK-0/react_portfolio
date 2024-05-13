import React from "react";
import EducationCard from "./EducationCard";

const SectionEducation = () => {
  return (
    <>
      <div className="education__cards">
        <EducationCard
          edu_year="2020-2024"
          edu_school="STI College San Pablo"
          edu_level="Bachelor of Science in Information Technology"
        />
        <EducationCard
          edu_year="2018 - 2020"
          edu_school="STI College San Pablo"
          edu_level="Senior High School"
        />
        <EducationCard
          edu_year="2014 - 2018"
          edu_school="San Pablo City Science High School"
          edu_level="Junior High School"
        />
        {/* <EducationCard
          edu_year="2006 - 2014"
          edu_school="San Pablo Chung Hua School"
          edu_level="Elementary"
        /> */}
      </div>
    </>
  );
};

export default SectionEducation;
