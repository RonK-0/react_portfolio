import React from "react";

const EducationCard = ({ edu_year, edu_school, edu_level }) => {
  return (
    <>
      <div className="education__card">
        <span className="year">{edu_year}</span>
        <div>
          <h3>{edu_school}</h3>
          <p>{edu_level}</p>
        </div>
      </div>
    </>
  );
};

export default EducationCard;
