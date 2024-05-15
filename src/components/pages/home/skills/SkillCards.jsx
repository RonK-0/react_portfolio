import React from "react";
import { baseImgUrl } from "../../../helpers/functions-general";

const SkillCards = ({skill__info}) => {
  return (
    <div className="skill__card">
      <div className="skill__card_img">
        <img src={`${baseImgUrl}/${skill__info.skill_image}`} alt="" />
      </div>
      <p className="skill__card_label">{skill__info.skill_title}</p>
    </div>
  );
};

export default SkillCards;
