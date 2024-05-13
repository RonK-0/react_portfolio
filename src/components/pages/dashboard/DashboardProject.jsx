import React, { useContext, useState } from "react";
import { setIsAdd, setIsEdit } from "../../../store/StoreAction";
import { StoreContext } from "../../../store/StoreContext";
import useQueryData from "../../custom-hook/useQueryData";
import { PageTitle } from "../../helpers/functions-general";
import DashWrapper from "../../partials/dashboard_partials/DashWrapper";
import DashboardProjectTable from "./DashboardProjectTable";

const DashboardProject = () => {
  PageTitle("Projects - Portfolio Dashboard");

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
    data: portfolio,
  } = useQueryData(
    isSearch ? "/v1/projects/search" : "/v1/projects", // endpoint
    isSearch ? "post" : "get", // method
    "projects"
  );

  return (
    <>
      <DashWrapper>
        <div className="p-6">
          <DashboardProjectTable
            isLoading={isLoading}
            portfolio={portfolio}
            isFetching={isFetching}
            setItemEdit={setItemEdit}
          />
        </div>
      </DashWrapper>
      {store.isAdd && <ModalAddPortfolio itemEdit={itemEdit} />}
      {/* <ModalAddPortfolio itemEdit={itemEdit}/> */}
      {store.success && <Toast />}
      {store.error && <ModalError position={"center"} />}
    </>
  );
};

export default DashboardProject;
