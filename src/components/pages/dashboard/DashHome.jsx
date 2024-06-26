import React from "react";
import { Link } from "react-router-dom";
import useQueryData from "../../custom-hook/useQueryData";
import { PageTitle } from "../../helpers/functions-general";
import DashWrapper from "../../partials/dashboard_partials/DashWrapper";

const DashHome = () => {
  PageTitle("Home - Portfolio Dashboard");

  const { data: projectCount } = useQueryData(
    "/v1/projects/count", // endpoint
    "get", // method
    "projects/count"
  );

  const { data: project_img } = useQueryData(
    "/v1/projects/img", // endpoint
    "get", // method
    "projects/img"
  );

  const { data: skills } = useQueryData(
    "/v1/skills", // endpoint
    "get", // method
    "skills"
  );

  const { data: certs } = useQueryData(
    "/v1/certs", // endpoint
    "get", // method
    "certs"
  );

  return (
    <DashWrapper>
      <div className="f-col gap-8 h-[calc(100vh-58px)]">
        <div className="p-6 bg-dark_bg f-col-center text-center lg:h-[30vh] select-none gap-4">
          <div className="p-6">
            <h1>Dashboard Home</h1>
            <h5 className="italic opacity-70">
              Search is currently non-functional
            </h5>
          </div>
        </div>
        <div className="db-grid">
          <Link to={"/database/project"} className="db-tbl">
            <h3>Projects</h3>
            <p>{projectCount?.data.length} Projects</p>
          </Link>
          <Link to={"/database/project/img"} className="db-tbl">
            <h3>Project Images</h3>
            <p>{project_img?.data.length} Images</p>
          </Link>
          <Link to={"/database/certs"} className="db-tbl">
            <h3>Certificates</h3>
            <p>{certs?.data.length} Certificates</p>
          </Link>
          <Link to={"/database/skills"} className="db-tbl">
            <h3>Skills</h3>
            <p>{skills?.data.length} Skill Entries</p>
          </Link>
        </div>
      </div>
    </DashWrapper>
  );
};

export default DashHome;
