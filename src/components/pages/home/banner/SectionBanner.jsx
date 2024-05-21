import React from "react";
import { TypeAnimation } from "react-type-animation";

// https://www.npmjs.com/package/react-type-animation

const SectionBanner = ({ scrollToElement }) => {
  return (
    <div className="sectionContent bannerContent">
      <TypeAnimation
        preRenderFirstString={true}
        sequence={["portfolio@ron:~$ ", "portfolio@ron:~$ ls"]}
        wrapper="p"
        className="termGreen"
        speed={55}
        repeat={0}
        cursor={false}
      />
      <p className="term">
        <button type="button" onClick={() => scrollToElement("about")}>
          <TypeAnimation
            sequence={[200, "About"]}
            wrapper="span"
            speed={80}
            repeat={0}
            cursor={false}
          />
        </button>

        <button type="button" onClick={() => scrollToElement("projects")}>
          <TypeAnimation
            sequence={[450, "Projects"]}
            wrapper="span"
            speed={80}
            repeat={0}
            cursor={false}
          />
        </button>

        <button type="button" onClick={() => scrollToElement("education")}>
          <TypeAnimation
            sequence={[700, "Education"]}
            wrapper="span"
            speed={80}
            repeat={0}
            cursor={false}
          />
        </button>

        <button type="button" onClick={() => scrollToElement("certifications")}>
          <TypeAnimation
            sequence={[900, "Certifications"]}
            wrapper="span"
            speed={80}
            repeat={0}
            cursor={false}
          />
        </button>

        <button type="button" onClick={() => scrollToElement("skills")}>
          <TypeAnimation
            sequence={[1300, "Skills"]}
            wrapper="span"
            speed={80}
            repeat={0}
            cursor={false}
          />
        </button>

        <button type="button" onClick={() => scrollToElement("contact")}>
          <TypeAnimation
            sequence={[1600, "Contact"]}
            wrapper="span"
            speed={80}
            repeat={0}
            cursor={false}
          />
        </button>
      </p>

      <p className="termGreen">
        <TypeAnimation
          sequence={[2000, "portfolio@ron:~$ "]}
          wrapper="span"
          className="termGreen"
          speed={100}
          repeat={0}
          cursor={false}
        />
        <TypeAnimation
          sequence={[2200, "Click a file to go to a section"]}
          wrapper="span"
          className="termHint"
          speed={80}
          repeat={0}
          cursor={false}
        />
        {/* <span className="text-yellow-500"> Click a file to go to a section</span> */}
      </p>

      <p className="termGreen">
        <TypeAnimation
          sequence={[3100, "portfolio@ron:~$ "]}
          wrapper="span"
          className="termGreen"
          speed={100}
          repeat={0}
          cursor={false}
        />
        <TypeAnimation
          sequence={[3300, "▉"]}
          wrapper="span"
          className="blinking"
          speed={100}
          repeat={0}
          cursor={false}
        />
      </p>
    </div>
  );
};

export default SectionBanner;
