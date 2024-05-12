import React from "react";
import { baseImgUrl } from "../../helpers/functions-general";

const SkillCards = ({skill__card_img, skill__card_label}) => {
  return (
    <div className="skill__card">
      <div className="skill__card_img">
        <img src={`${baseImgUrl}/${skill__card_img}`} alt="" />
      </div>
      <p className="skill__card_label">{skill__card_label}</p>
    </div>
  );
};

export default SkillCards;
