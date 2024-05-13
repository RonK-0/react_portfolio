import React from "react";
import { baseImgUrl } from "../../../helpers/functions-general";
import ImageModal from "../../../partials/modals/ModalImage";

const CertCards = ({cert_img, cert_title, cert_org, cert_date}) => {
  return (
    <>
      <div className="cert__card">
        <ImageModal sm_img={`${baseImgUrl}/${cert_img}`} lg_img={`${baseImgUrl}/${cert_img}`} altText={cert_title} img_class={"cert__card_img"}/>
        <div className="cert__card_text">
          <h4>{cert_title}</h4>
          <p>{cert_org}</p>
          <p>{cert_date}</p>
        </div>
      </div>
    </>
  );
};

export default CertCards;
