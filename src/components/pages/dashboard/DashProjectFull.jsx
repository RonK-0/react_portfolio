import React, { useContext, useState } from "react";
import useQueryData from "../../custom-hook/useQueryData";
import { PageTitle } from "../../helpers/functions-general";
import DashWrapper from "../../partials/dashboard_partials/DashWrapper";
import NoData from "../../partials/NoData";
import TableLoader from "../../partials/TableLoader";
import SpinnerFetching from "../../partials/spinners/SpinnerFetching";
import { Link } from "react-router-dom";

const DashProjectFull = () => {
  PageTitle("Projects Full Info - Portfolio Dashboard");

  const {
    isLoading,
    isFetching,
    error,
    data: projectFull,
  } = useQueryData(
    "/v1/projects/full", // endpoint
    "get", // method
    "projects/full"
  );

  return (
    <>
      <DashWrapper>
        <div className="py-6 pl-2 pr-4">
          <div className="dash_heading">
            <div className="flex gap-6 items-center">
              <h3>Projects Full Info</h3>
              <span className="text-white">
                ({projectFull?.data.length} project entries)
              </span>
            </div>
            
            <Link
              to={"/database/project/"}
              className="btn btn--blueGray text-white"
            >
              Hide Image File Names & Skills
            </Link>
          </div>

          {isFetching && <SpinnerFetching />}
          <table className="dash_project_full">
            <thead>
              <tr>
                <th>Project ID</th>
                <th>Project Title</th>
                <th>Project Year</th>
                <th>Project Description</th>
                <th>Project Category</th>
                <th>Project Images</th>
                <th>Project Skills</th>
              </tr>
            </thead>
            <tbody>
              {isLoading && (
                <tr className="single-row">
                  <td colSpan={7}>
                    <TableLoader count="20" cols="4" />
                  </td>
                </tr>
              )}

              {projectFull?.data.length === 0 && (
                <tr className="single-row">
                  <td colSpan={7}>
                    <NoData />
                  </td>
                </tr>
              )}
              {projectFull?.data.map((item, key) => (
                <tr onDoubleClick={() => handleShowInfo(item)} key={key}>
                  <td>{item.project_aid}</td>
                  <td>{item.project_title}</td>
                  <td>{item.project_year}</td>
                  <td>{item.project_description}</td>
                  <td>{item.project_category}</td>
                  <td>{item.project_imgs}</td>
                  <td>{item.project_skills}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DashWrapper>
    </>
  );
};

export default DashProjectFull;
