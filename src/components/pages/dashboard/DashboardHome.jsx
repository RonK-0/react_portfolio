import React from "react";
import { PageTitle } from "../../helpers/functions-general";
import DashWrapper from "../../partials/dashboard_partials/DashWrapper";

const DashboardHome = () => {
  PageTitle("Home - Portfolio Dashboard");

  return (
    <DashWrapper>
      <div className="grid grid-cols-8 gap-x-4 gap-y-10 p-6 bg-dark_bg">
        Dashboard Home
      </div>
    </DashWrapper>
  );
};

export default DashboardHome;
