import { FaCode } from "react-icons/fa";
import React from "react";
import ProjectImgSlider from "./ProjectImgSlider";

const ProjectCards = ({project_info, project_img}) => {

  const images = [
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/200",
    "https://via.placeholder.com/400",
    "https://via.placeholder.com/100"
  ]
  return (
    <div className="project__card">
      <div className="project__card_text">
        <h3 className="project_title">
          PROJECT TITLE IPSUM <span className="project_year">(2020)</span>
        </h3>
        <div className="project_section">
          <h4 className="project_section_label">PROJECT DESCRIPTION:</h4>
          <p className="project_description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
            ipsa, laboriosam veritatis autem voluptate possimus unde modi totam
            non odit asperiores dicta eveniet soluta sint quos amet vitae porro
            deleniti in impedit corporis nisi? Blanditiis aperiam ipsam iusto
            quod, quaerat natus sunt officia quibusdam, magnam explicabo eius
            nisi pariatur maxime aut vel mollitia debitis dignissimos
            reiciendis. Expedita amet exercitationem natus!
          </p>
        </div>
        <div className="project_section">
          <h4 className="project_section_label">SKILLS UTILIZED:</h4>
          <ul className="project_skills">
            <li className="tooltip-bottom" data-tooltip="TOOLTIP TEXT">
              <FaCode />
            </li>
            <li className="tooltip-bottom" data-tooltip="TOOLTIP TEXT">
              <FaCode />
            </li>
            <li className="tooltip-bottom" data-tooltip="TOOLTIP TEXT">
              <FaCode />
            </li>
            <li className="tooltip-bottom" data-tooltip="TOOLTIP TEXT">
              <FaCode />
            </li>
            <li className="tooltip-bottom" data-tooltip="TOOLTIP TEXT">
              <FaCode />
            </li>
            <li className="tooltip-bottom" data-tooltip="TOOLTIP TEXT">
              <FaCode />
            </li>
            <li className="tooltip-bottom" data-tooltip="TOOLTIP TEXT">
              <FaCode />
            </li>
            <li className="tooltip-bottom" data-tooltip="TOOLTIP TEXT">
              <FaCode />
            </li>
            <li className="tooltip-bottom" data-tooltip="TOOLTIP TEXT">
              <FaCode />
            </li>
            <li className="tooltip-bottom" data-tooltip="TOOLTIP TEXT">
              <FaCode />
            </li>
          </ul>
        </div>
      </div>
      <div className="project__card_slider">
        <ProjectImgSlider/>
      </div>
    </div>
  );
};

export default ProjectCards;
