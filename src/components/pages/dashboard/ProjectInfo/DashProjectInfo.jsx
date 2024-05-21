import React, { useContext, useState } from "react";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { setIsAdd, setIsEdit } from "../../../../store/StoreAction";
import { StoreContext } from "../../../../store/StoreContext";
import useQueryData from "../../../custom-hook/useQueryData";
import { PageTitle } from "../../../helpers/functions-general";
import Toast from "../../../partials/Toast";
import DashWrapper from "../../../partials/dashboard_partials/DashWrapper";
import ModalError from "../../../partials/modals/ModalError";
import DashProjectInfoTable from "./DashProjectInfoTable";
import ModalAddProjInfo from "./ModalAddProjInfo";

const DashProjectInfo = () => {
  PageTitle("Projects Info - Portfolio Dashboard");

  const { store, dispatch } = useContext(StoreContext);
  const [itemEdit, setItemEdit] = useState(null);

  const handleAdd = () => {
    dispatch(setIsAdd(true)), dispatch(setIsEdit(false)), setItemEdit(null);
  };

  const {
    isLoading,
    isFetching,
    error,
    data: project,
  } = useQueryData(
    "/v1/projects/info", // endpoint
    "get", // method
    "projects/info"
  );

  return (
    <>
      <DashWrapper>
        <div className="py-6 pl-2 pr-4">
          <div className="dash_heading">
            <div className="flex gap-6 items-center">
              <h3>Portfolio: Project Info</h3>
              <span className="text-white">
                ({project?.data.length} project entries)
              </span>
            </div>

            <button className="btn btn--blueGray dash-new" onClick={handleAdd}>
              New Project Info
              <HiOutlinePlusCircle />
            </button>
          </div>
          
          <DashProjectInfoTable
            isLoading={isLoading}
            project={project}
            isFetching={isFetching}
            setItemEdit={setItemEdit}
          />
        </div>
      </DashWrapper>
      {store.isAdd && <ModalAddProjInfo itemEdit={itemEdit} />}
      {store.success && <Toast />}
      {store.error && <ModalError position={"center"} />}
    </>
  );
};

export default DashProjectInfo;
