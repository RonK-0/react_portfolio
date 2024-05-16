import { HiOutlinePlusCircle } from "react-icons/hi"; 
import React, { useContext, useState } from "react";
import { setIsAdd, setIsEdit } from "../../../../store/StoreAction";
import { StoreContext } from "../../../../store/StoreContext";
import useQueryData from "../../../custom-hook/useQueryData";
import { PageTitle } from "../../../helpers/functions-general";
import DashWrapper from "../../../partials/dashboard_partials/DashWrapper";
import ModalError from "../../../partials/modals/ModalError";
import Toast from "../../../partials/Toast";
import DashSklllTable from './DashSklllTable'
import ModalAddSkills from "./ModalAddSkills";

const DashSkills = () => {
  PageTitle("Skills - Portfolio Dashboard");

  const { store, dispatch } = useContext(StoreContext);
  const [itemEdit, setItemEdit] = useState(null);

  const [isSearch, setIsSeach] = useState(false);
  const [keyword, setKeyword] = useState("");

  const handleAdd = () => {
    dispatch(setIsAdd(true)), dispatch(setIsEdit(false)), setItemEdit(null);
  };

  const {
    isLoading,
    isFetching,
    error,
    data: skills,
  } = useQueryData(
    "/v1/skills", // endpoint
    "get", // method
    "skills"
  );
  return (
    <>
      <DashWrapper>

      <div className="py-6 pl-2 pr-4">
          <div className="dash_heading">
            <h3>Portfolio: Skills</h3>
            <button className="btn btn--blueGray dash-new" onClick={handleAdd}>New Skill Entry<HiOutlinePlusCircle /></button>
          </div>
          <DashSklllTable
            isLoading={isLoading}
            skills={skills}
            isFetching={isFetching}
            setItemEdit={setItemEdit}
          />
        </div>
      </DashWrapper>
      {store.isAdd && <ModalAddSkills itemEdit={itemEdit} />}
      {store.success && <Toast />}
      {store.error && <ModalError position={"center"} />}
    </>
  );
};

export default DashSkills;
