import React from "react";
import { FaAndroid } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaUnity } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";
import { FaWordpressSimple } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import { SiCsharp } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiKotlin } from "react-icons/si";
import { SiDotnet } from "react-icons/si";
import { SiOpengl } from "react-icons/si";
import { SiVisualstudio } from "react-icons/si";
import { IoHardwareChip } from "react-icons/io5";
import { IoLogoFirebase } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import { DiDotnet } from "react-icons/di";
import { SiMicrosoftsqlserver } from "react-icons/si";
import useQueryData from "../../../custom-hook/useQueryData";

const ProjectSkills = ({ project_aid }) => {
  const {
    isLoading,
    isFetching,
    error,
    data: projSkill,
  } = useQueryData(
    "/v1/projects/skill", // endpoint
    "get", // method
    "projects/skill"
  );

  function genIcon(skill) {
    let icon;
    switch (skill) {
      case "android":
        icon = <FaAndroid />;
        break;
      case "css":
        icon = <FaCss3Alt />;
        break;
      case "github":
        icon = <FaGithub />;
        break;
      case "html":
        icon = <FaHtml5 />;
        break;
      case "java":
        icon = <FaJava />;
        break;
      case "networking":
        icon = <FaNetworkWired />;
        break;
      case "python":
        icon = <FaPython />;
        break;
      case "react":
        icon = <FaReact />;
        break;
      case "unity":
        icon = <FaUnity />;
        break;
      case "windows":
        icon = <FaWindows />;
        break;
      case "wordpress":
        icon = <FaWordpressSimple />;
        break;
      case "photoshop":
        icon = <SiAdobephotoshop />;
        break;
      case "c#":
        icon = <SiCsharp />;
        break;
      case "dotnet":
        icon = <SiDotnet />;
        break;
      case "javascript":
        icon = <SiJavascript />;
        break;
      case "kotlin":
        icon = <SiKotlin />;
        break;
      case "opengl":
        icon = <SiOpengl />;
        break;
      case "visualstudio":
        icon = <SiVisualstudio />;
        break;
      case "hardware":
        icon = <IoHardwareChip />;
        break;
      case "firebase":
        icon = <IoLogoFirebase />;
        break;
      case "mysql":
        icon = <GrMysql />;
        break;
      case "sqlserver":
        icon = <SiMicrosoftsqlserver />;
        break;
      case "asp":
        icon = <DiDotnet />;
        break;
      default:
        icon = <FaCode />;
    }
    return icon;
  }

  return (
    <>
      {projSkill?.length !== 0 &&
        (isLoading ? (
          <li className="tooltip-bottom" data-tooltip="LOADING">
            LOADING ICONS
          </li>
        ) : (
          projSkill?.data.map((item, key) =>
            item.project_id === project_aid &&
            item.project_skill_is_active === 1 ? (
              <li
                className="tooltip-bottom"
                data-tooltip={
                  item.project_skill_label !== undefined
                    ? item.project_skill_label
                    : "Unknown Icon"
                }
                key={key}
              >
                {genIcon(item.project_skill.toLowerCase())}
              </li>
            ) : null
          )
        ))}
      {projSkill?.length !== 0 &&
        !projSkill?.data.some((item) => item.project_id === project_aid) && (
          <li className="tooltip-bottom" data-tooltip="No Icon Available">
            N/A
          </li>
        )}
    </>
  );
};

export default ProjectSkills;
