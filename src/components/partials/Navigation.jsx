import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({scrollToElement}) => {
  return (
    <>
      <li>
        <button onClick={() => scrollToElement("about")}>About</button>
      </li>
      <li>
        <button onClick={() => scrollToElement("projects")}>Projects</button>
      </li>
      <li>
        <button onClick={() => scrollToElement("education")}>Education</button>
      </li>
      <li>
        <button onClick={() => scrollToElement("skills")}>Skills</button>
      </li>
      <li>
        <button onClick={() => scrollToElement("certifications")}>Certifications</button>
      </li>
      <li>
        <button onClick={() => scrollToElement("contact")}>Contact</button>
      </li>
    </>
  );
};

export default Navigation;
