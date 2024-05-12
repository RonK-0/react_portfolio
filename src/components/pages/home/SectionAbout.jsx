import { FaFilePdf } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";
import { FaPizzaSlice } from "react-icons/fa";
import React from "react";
import { baseImgUrl } from "../../helpers/functions-general";
import ContactIconLinks from "./ContactIconLinks";
import ModalPDF from "../../partials/modals/ModalPDF";

const SectionAbout = () => {
  const [showPDF, setShowPDF] = React.useState(false);
  const handleShowPDF = () => setShowPDF(!showPDF);
  return (
    <div className="sectionContent aboutContent">
      <div className="aboutImg">
        <img src={`${baseImgUrl}/Pic.png`} alt="" />
      </div>
      <div className="aboutText">
        <div>
          <h3 className="aboutText__greeting">Hello,</h3>
          <h1 className="aboutText__intro">
            I'm <span className="text-blueGray">Ron Kua</span> and I like
            computers.
          </h1>
          <p className="aboutText__description">
            I dabble with PC Hardware Building & Servicing, Software
            Development, Web Development, Database Management and a bit of Sys
            Admin and Networking stuff.
            <span className="aboutText__description_icons">
              <FaDesktop />
              <FaNetworkWired />
              <FaCode />
              <FaDatabase />
            </span>
          </p>
          <small className="aboutText__trivia">
            I like Pizzas and Burgers as well.
            <span className="aboutText__trivia_foodIcons">
              <FaPizzaSlice />
              <FaHamburger />
            </span>
          </small>
        </div>
        <div className="aboutContact">
          <h3>Learn More About Me</h3>
          <ContactIconLinks>
            <li>
              <button
                className="tooltip"
                data-tooltip="Download my Resume"
                onClick={handleShowPDF}
              >
                <FaFilePdf />
              </button>
            </li>
          </ContactIconLinks>
        </div>
        {showPDF ? ( <ModalPDF handleShowPDF={handleShowPDF} pdf_file="/Kua_Resume.pdf" /> ) : ( "" )}
      </div>
    </div>
  );
};

export default SectionAbout;
