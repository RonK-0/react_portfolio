import { BiImageAdd } from "react-icons/bi";
import { BsGridFill } from "react-icons/bs";
import { HiHome } from "react-icons/hi";
import { FaBolt, FaCertificate } from "react-icons/fa";
import React from "react";
import { GiSkills } from "react-icons/gi";

const Sidebar_Collapsed = () => {
  return (
    <div className="sidebar-collapsed w-18 overflow-hidden f-col items-center mt-1 fixed top-14 ">
      <button>
        <HiHome className="text-2xl" />
        <small>Home</small>
      </button>
      <button>
        <BsGridFill className="text-2xl" />
        <small>Projects</small>
      </button>
      <button>
        <BiImageAdd />
        <small>Project Images</small>
      </button>
      <button>
        <GiSkills />
        <small>Project Skills</small>
      </button>
      <button>
        <FaCertificate />
        <small>Certificates</small>
      </button>
      <button>
        <FaBolt />
        <small>Skills</small>
      </button>
    </div>
  );
};

export default Sidebar_Collapsed;
