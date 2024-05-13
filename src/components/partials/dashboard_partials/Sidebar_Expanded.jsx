import React from "react";
import { BiImageAdd } from "react-icons/bi";
import { BsGridFill } from "react-icons/bs";
import { FaBolt, FaCertificate } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";
import { SiStartrek } from "react-icons/si";
import { Link } from "react-router-dom";
import { GiSkills } from "react-icons/gi";

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
              <SiStartrek className="text-2xl animate-spin" />
            </Link>
          </div>
        </div>

        <div className="sidebar-links">
          <button className="sidebar-link-item">
            <HiHome className="text-2xl" />
            <p>Home</p>
          </button>
        </div>

        <div className="sidebar-links">
          <button className="sidebar-link-item">
            <BsGridFill className="text-2xl" />
            <p>Projects</p>
          </button>
          <button className="sidebar-link-item">
            <BiImageAdd className="text-2xl" />
            <p>Project Images</p>
          </button>
          <button className="sidebar-link-item">
            <GiSkills className="text-2xl" />
            <p>Project Skills</p>
          </button>
        </div>

        <div className="sidebar-links">
          <button className="sidebar-link-item">
            <FaCertificate className="text-2xl" />
            <p>Certificates</p>
          </button>
        </div>

        <div className="sidebar-links">
          <button className="sidebar-link-item">
            <FaBolt className="text-2xl" />
            <p>Skills</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar_Expanded;
