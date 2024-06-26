import React from "react";
import { baseImgUrl } from "../../../helpers/functions-general";
import ImageModal from "../../../partials/modals/ModalImage";

const CertCards = ({ cert_info }) => {
  return (
    <>
      <div className="cert__card">
        <ImageModal
          sm_img={`${baseImgUrl}/${cert_info.cert_image}`}
          lg_img={`${baseImgUrl}/${cert_info.cert_image}`}
          altText={cert_info.cert_title}
          img_class={"cert__card_img"}
        />
        <div className="cert__card_text">
          <h4>{cert_info.cert_title}</h4>
          <p>{cert_info.cert_org}</p>
          <p>{cert_info.cert_date}</p>
        </div>
      </div>
    </>
  );
};

export default CertCards;
