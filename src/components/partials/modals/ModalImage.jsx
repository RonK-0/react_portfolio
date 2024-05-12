import React from "react";
import ModalImage from "react-modal-image";

const ImageModal = ({sm_img, lg_img, altText, img_class}) => {
  return (
    <div className="modal_image relative tooltip" data-tooltip="Click to expand the image.">
      <ModalImage
        small={sm_img}
        large={lg_img}
        alt={altText}
        className={img_class}
        hideZoom={false}
        hideDownload={true}
        showRotate={false}
      />
    </div>
  );
};

export default ImageModal;

// https://aautio.github.io/react-modal-image/
// https://www.npmjs.com/package/react-modal-image
