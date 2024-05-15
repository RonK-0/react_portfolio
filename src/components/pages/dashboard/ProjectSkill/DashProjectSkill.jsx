import React from "react";
import { PageTitle } from "../../../helpers/functions-general";
import DashWrapper from "../../../partials/dashboard_partials/DashWrapper";

const DashProjectSkill = () => {
  PageTitle("Project Skills - Portfolio Dashboard");
  
  return (
    <DashWrapper>
      <div className="grid grid-cols-8 gap-x-4 gap-y-10 p-6">
        Dashboard Projects
      </div>
    </DashWrapper>
  );
};

export default DashProjectSkill;