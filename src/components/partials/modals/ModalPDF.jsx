import { FaDownload } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import React from "react";
import { PDFObject } from "react-pdfobject";
import { DownloadLink } from "../../helpers/DownloadLink";

const ModalPDF = ({ pdf_file, handleShowPDF }) => {
  return (
    <div className="pdfModal_parent fixed top-0 left-0 w-full h-screen bg-black/80 z-50">
      <div className="container h-screen">
        <div className="pdfModal_container w-full h-full mx-a py-1">
          <div className="w-full h-6 flex between-center bg-dark rounded-t-lg text-xl text-white px-4 py-4">
            <DownloadLink url={pdf_file} fileName="Kua_Resume.pdf"/>
            <button type="button" onClick={handleShowPDF}>
              <FaTimes />
            </button>
          </div>
          <PDFObject url={pdf_file} width={"100%"} height={"100%"} />
        </div>
      </div>
    </div>
  );
};

export default ModalPDF;


// https://www.npmjs.com/package/react-pdfobject