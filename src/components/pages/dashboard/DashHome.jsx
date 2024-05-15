import React from "react";
import { PageTitle } from "../../helpers/functions-general";
import DashWrapper from "../../partials/dashboard_partials/DashWrapper";

const DashHome = () => {
  PageTitle("Home - Portfolio Dashboard");

  return (
    <DashWrapper>
      <div className="p-6 bg-dark_bg f-col-center text-center min-h-[94vh] select-none">
        <h1>Dashboard Home</h1>
        <h5 className="italic opacity-70">Search, Notifications, and User Accounts are currently non-functional</h5>
      </div>
    </DashWrapper>
  );
};

export default DashHome;
