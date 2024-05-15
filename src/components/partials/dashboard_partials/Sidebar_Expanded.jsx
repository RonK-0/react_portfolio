import React from "react";
import { AiOutlineProject } from "react-icons/ai";
import { BiGlobe, BiImageAdd } from "react-icons/bi";
import { BsGridFill } from "react-icons/bs";
import { FaBolt, FaCertificate } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { HiHome } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Sidebar_Expanded = ({ setShowSideBar, showSideBar }) => {
  const handleSideBarShow = () => setShowSideBar(!showSideBar);
  return (
    <div
      className={`sidebar-expanded-parent fixed top-0 xl:top-14 left-0 h-full xl:h-full w-full xl:w-60 transition-all duration-300 overflow-x-hidden ${
        showSideBar ? "bg-black/40 xl:bg-transparent z-[999]" : "bg-none z-[-2]"
      }`}
    >
      <div
        className={`sidebar-expanded bg-dark_bg h-full overflow-y-scroll transition-all duration-300 w-60 custom-scroll_b ${
          showSideBar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center gap-6 pl-6 h-14 xl:hidden">
          <button type="button" onClick={handleSideBarShow}>
            <RxHamburgerMenu className="text-2xl" />
          </button>
          <div className="flex items-center relative">
            <Link to={"/"}>
              <BiGlobe className="text-2xl animate-spin" />
            </Link>
          </div>
        </div>

        <div className="sidebar-links">
          <Link className="sidebar-link-item" to={'/'}>
            <BiGlobe className="text-2xl" />
            <p>Go to Portfolio</p>
          </Link>
          <Link className="sidebar-link-item" to={'/database/'}>
            <HiHome className="text-2xl" />
            <p>Dashboard Home</p>
          </Link>
        </div>

        <div className="sidebar-links">
          <Link className="sidebar-link-item" to={'/database/project/full'}>
            <AiOutlineProject className="text-2xl" />
            <p>Projects</p>
          </Link>
          <Link className="sidebar-link-item" to={'/database/project/info'}>
            <BsGridFill className="text-2xl" />
            <p>Project Info</p>
          </Link>
          <Link className="sidebar-link-item" to={'/database/project/img/'}>
            <BiImageAdd className="text-2xl" />
            <p>Project Images</p>
          </Link>
          <Link className="sidebar-link-item" to={'/database/project/skills/'}>
            <GiSkills className="text-2xl" />
            <p>Project Skills</p>
          </Link>
        </div>

        <div className="sidebar-links">
          <Link className="sidebar-link-item" to={'/database/certificates/'}>
            <FaCertificate className="text-2xl" />
            <p>Certificates</p>
          </Link>
        </div>

        <div className="sidebar-links">
          <Link className="sidebar-link-item" to={'/database/skills/'}>
            <FaBolt className="text-2xl" />
            <p>Skills</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar_Expanded;
