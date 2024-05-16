import React from "react";
import { BiGlobe, BiImageAdd } from "react-icons/bi";
import { BsGridFill } from "react-icons/bs";
import { FaBolt, FaCertificate } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { HiDocument, HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";
import Logo from "../svg/Logo";

const Sidebar_Collapsed = () => {
  return (
    <div className="sidebar-collapsed w-18 overflow-hidden f-col items-center mt-[2px] pl-[4px] fixed top-14 bg-dark_bg z-10 min-h-[93vh]">
      <Link to={'/'}>
        {/* <BiGlobe className="text-2xl" /> */}
        <Logo/>
        <small>Portfolio</small>
      </Link>
      <Link to={'/database/'}>
        <HiHome className="text-2xl" />
        <small>Dashboard Home</small>
      </Link>
      <Link to={'/database/project/'}>
        <HiDocument className="text-2xl" />
        <small>Projects</small>
      </Link>
      <Link to={'/database/project/info'}>
        <BsGridFill className="text-2xl" />
        <small>Project Info</small>
      </Link>
      <Link to={'/database/project/img'}>
        <BiImageAdd />
        <small>Project Images</small>
      </Link>
      <Link to={'/database/project/skills/'}>
        <GiSkills />
        <small>Project Skills</small>
      </Link>
      <Link to={'/database/certs/'}>
        <FaCertificate />
        <small>Certificates</small>
      </Link>
      <Link to={'/database/skills/'}>
        <FaBolt />
        <small>Skills</small>
      </Link>
    </div>
  );
};

export default Sidebar_Collapsed;
