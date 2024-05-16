import React from "react";
import ProjectImgSlider from "./ProjectImgSlider";
import ProjectSkills from "./ProjectSkills";

const ProjectCards = ({project_info}) => {

  const project_aid = project_info.project_aid;
  return (
    <div className="project__card">
      <div className="project__card_text">
        <h3 className="project_title">
          {project_info.project_title} <span className="project_year">({project_info.project_year})</span>
        </h3>
        <div className="project_section">
          <h4 className="project_section_label">PROJECT DESCRIPTION:</h4>
          <p className="project_description">
            {project_info.project_description}
          </p>
        </div>
        <div className="project_section">
          <h4 className="project_section_label">SKILLS & TOOLS UTILIZED:</h4>
          <ul className="project_skills">
            <ProjectSkills project_aid={project_aid}/>

          </ul>
        </div>
      </div>
      <div className="project__card_slider">
        <ProjectImgSlider project_aid={project_aid}/>
      </div>
    </div>
  );
};

export default ProjectCards;
