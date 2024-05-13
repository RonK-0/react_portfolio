import React, { useEffect, useState } from "react";
import { HiDocument } from "react-icons/hi";
import { FaBookOpen } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";
import { HiOutlineChevronUp } from "react-icons/hi";
import { HiOutlineChevronDown } from "react-icons/hi";
import { FaCertificate } from "react-icons/fa";
import { PageTitle } from "../../helpers/functions-general";
import Header from "../../partials/Header";
import Footer from "../../partials/Footer";
import SectionBanner from "./banner/SectionBanner";
import SectionAbout from "./about/SectionAbout";
import SectionProjects from "./projects/SectionProjects";
import SectionEducation from "./education/SectionEducation";
import SectionCert from "./certificates/SectionCert";
import SectionSkills from "./skills/SectionSkills";
import SectionContact from "./contact/SectionContact";

const Home = () => {
  PageTitle("Portfolio - Ron Kua");

  // on scroll past banner show header
  const [showHeader, setShowHeader] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const banner = document.getElementById("banner");
      if (banner) {
        const bannerPosition = banner.getBoundingClientRect().top;
        if (bannerPosition < 0) {
          setShowHeader(true);
        } else {
          setShowHeader(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // scroll to element
  function scrollToElement(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`Element with id ${id} not found`);
    }
  }

  return (
    <>
      {/* {showHeader ? <Header scrollToElement={scrollToElement} /> : ""} */}

      <Header
        scrollToElement={scrollToElement}
        pos={showHeader ? "top-0" : "-top-full"}
      />

      <section className="banner" id="banner">
        <div className="container">
          <SectionBanner scrollToElement={scrollToElement} />
          <button
            type="button"
            className="sectionButton tooltip"
            data-tooltip="Scroll to Next Section"
            onClick={() => scrollToElement("about")}
          >
            <HiOutlineChevronDown />
          </button>
        </div>
      </section>

      <section className="about relative" id="about">
        <div className="container">
          <SectionAbout />
          <button
            type="button"
            className="sectionButton tooltip"
            data-tooltip="Scroll to Next Section"
            onClick={() => scrollToElement("projects")}
          >
            <HiOutlineChevronDown />
          </button>
        </div>
      </section>

      <section className="projects" id="projects">
        <div className="container">
          <div className="sectionHeader">
            <h1>
              <HiDocument /> Projects
            </h1>
          </div>
          <div className="sectionContent">
            <SectionProjects />
          </div>
          <button
            type="button"
            className="sectionButton tooltip"
            data-tooltip="Scroll to Next Section"
            onClick={() => scrollToElement("education")}
          >
            <HiOutlineChevronDown />
          </button>
        </div>
      </section>

      <section className="education" id="education">
        <div className="container">
          <div className="sectionHeader">
            <h1>
              <FaBookOpen /> Education
            </h1>
          </div>
          <div className="sectionContent">
            <SectionEducation />
          </div>
          <button
            type="button"
            className="sectionButton tooltip"
            data-tooltip="Scroll to Next Section"
            onClick={() => scrollToElement("skills")}
          >
            <HiOutlineChevronDown />
          </button>
        </div>
      </section>

      <section className="skills" id="skills">
        <div className="container">
          <div className="sectionHeader">
            <h1>
              <FaBolt /> Skills
            </h1>
          </div>
          <div className="sectionContent">
            <SectionSkills />
          </div>
          <button
            type="button"
            className="sectionButton tooltip"
            data-tooltip="Scroll to Next Section"
            onClick={() => scrollToElement("certifications")}
          >
            <HiOutlineChevronDown />
          </button>
        </div>
      </section>

      <section className="certifications" id="certifications">
        <div className="container">
          <div className="sectionHeader">
            <h1>
              <FaCertificate /> Certifications
            </h1>
          </div>
          <div className="sectionContent">
            <SectionCert />
          </div>
          <button
            type="button"
            className="sectionButton tooltip"
            data-tooltip="Scroll to Next Section"
            onClick={() => scrollToElement("contact")}
          >
            <HiOutlineChevronDown />
          </button>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="container">
          <div className="sectionContent">
            <SectionContact />
          </div>
        </div>
        <button
          type="button"
          className="sectionButton tooltip"
          data-tooltip="Scroll Back to Top"
          onClick={() => scrollToElement("banner")}
        >
          <HiOutlineChevronUp />
        </button>
      </section>
      <Footer />
    </>
  );
};

export default Home;
