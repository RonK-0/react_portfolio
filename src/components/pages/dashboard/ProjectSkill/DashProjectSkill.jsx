import React, { useContext, useState } from "react";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { setIsAdd, setIsEdit } from "../../../../store/StoreAction";
import { StoreContext } from "../../../../store/StoreContext";
import { PageTitle } from "../../../helpers/functions-general";
import Toast from "../../../partials/Toast";
import DashWrapper from "../../../partials/dashboard_partials/DashWrapper";
import ModalError from "../../../partials/modals/ModalError";
import ModalAddProjSkill from "./ModalAddProjSkill";
import DashProjSkillTable from "./DashProjectSkillTable";
import useQueryData from "../../../custom-hook/useQueryData";

const DashProjectSkill = () => {
  PageTitle("Project Skills - Portfolio Dashboard");

  const { store, dispatch } = useContext(StoreContext);
  const [itemEdit, setItemEdit] = useState(null);

  const handleAdd = () => {
    dispatch(setIsAdd(true)), dispatch(setIsEdit(false)), setItemEdit(null);
  };

  const {
    isLoading,
    isFetching,
    error,
    data: project_skill,
  } = useQueryData(
    "/v1/projects/skill", // endpoint
    "get", // method
    "projects/skill"
  );

  const {
    data: projectCount,
  } = useQueryData(
    "/v1/projects/count", // endpoint
    "get", // method
    "projects/count"
  );

  return (
    <>
      <DashWrapper>
        <div className="py-6 pl-2 pr-4">
          <div className="dash_heading">
            <div className="flex gap-6 items-center">
              <h3>Portfolio: Project Skills</h3>
              <span className="text-white">
                ({project_skill?.data.length} Project Skill Entries from <span className="font-bold">{projectCount?.data.length} Projects</span>)
              </span>
            </div>

            <button className="btn btn--blueGray dash-new" onClick={handleAdd}>
              Add Project Skill
              <HiOutlinePlusCircle />
            </button>
          </div>
          
          <DashProjSkillTable
            setItemEdit={setItemEdit}
            project_skill={project_skill}
            isLoading={isLoading}
            isFetching={isFetching}
          />
        </div>
      </DashWrapper>
      {store.isAdd && <ModalAddProjSkill itemEdit={itemEdit} />}
      {store.success && <Toast />}
      {store.error && <ModalError position={"center"} />}
    </>
  );
};

export default DashProjectSkill;
