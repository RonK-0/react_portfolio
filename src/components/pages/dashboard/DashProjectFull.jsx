import React, { useContext, useState } from "react";
import useQueryData from "../../custom-hook/useQueryData";
import { PageTitle } from "../../helpers/functions-general";
import DashWrapper from "../../partials/dashboard_partials/DashWrapper";
import NoData from "../../partials/NoData";
import TableLoader from "../../partials/TableLoader";
import SpinnerFetching from "../../partials/spinners/SpinnerFetching";

const DashProjectFull = () => {
  PageTitle("Projects - Portfolio Dashboard");

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
            <h3>Projects</h3>
            {/* <button className="btn btn--blueGray text-white" onClick={handleAdd}>New Project Info</button> */}
          </div>
          {/* <DashboardProjectInfoTable
            isLoading={isLoading}
            project={project}
            isFetching={isFetching}
            setItemEdit={setItemEdit}
          /> */}

      {isFetching && <SpinnerFetching />}
      <table className="dash_project_full w-full">
        <thead>
          <tr>
            <th>Project AID</th>
            <th>Project Title</th>
            <th>Project Year</th>
            <th>Project Description</th>
            <th>Project Category</th>
            <th>Project Image</th>
            <th>Project Skill</th>
          </tr>
        </thead>
        <tbody>
          {isLoading && (
            <tr  className="single-row">
              <td colSpan={7}>
                <TableLoader count="20" cols="4" />
              </td>
            </tr>
          )}

          {projectFull?.data.length === 0 && (
            <tr className="single-row">
              <td colSpan={7} >
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
              <td>{item.project_img}</td>
              <td>{item.project_skill}</td>
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
