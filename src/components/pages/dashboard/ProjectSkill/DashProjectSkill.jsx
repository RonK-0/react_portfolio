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

const DashProjectSkill = () => {
  PageTitle("Project Skills - Portfolio Dashboard");

  const { store, dispatch } = useContext(StoreContext);
  const [itemEdit, setItemEdit] = useState(null);

  const handleAdd = () => {
    dispatch(setIsAdd(true)), dispatch(setIsEdit(false)), setItemEdit(null);
  };

  return (
    <>
      <DashWrapper>
        <div className="py-6 pl-2 pr-4">
          <div className="dash_heading">
            <h3>Portfolio: Project Skills</h3>
            <button className="btn btn--blueGray dash-new" onClick={handleAdd}>
              Add Project Skill
              <HiOutlinePlusCircle />
            </button>
          </div>
          <DashProjSkillTable setItemEdit={setItemEdit} />
        </div>
      </DashWrapper>
      {store.isAdd && <ModalAddProjSkill itemEdit={itemEdit} />}
      {store.success && <Toast />}
      {store.error && <ModalError position={"center"} />}
    </>
  );
};

export default DashProjectSkill;
