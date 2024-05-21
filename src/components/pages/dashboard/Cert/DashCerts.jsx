import React, { useContext, useState } from "react";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { setIsAdd, setIsEdit } from "../../../../store/StoreAction";
import { StoreContext } from "../../../../store/StoreContext";
import { PageTitle } from "../../../helpers/functions-general";
import Toast from "../../../partials/Toast";
import DashWrapper from "../../../partials/dashboard_partials/DashWrapper";
import ModalError from "../../../partials/modals/ModalError";
import DashCertsTable from "./DashCertsTable";
import ModalAddCert from "./ModalAddCert";
import useQueryData from "../../../custom-hook/useQueryData";

const DashCerts = () => {
  PageTitle("Certificates - Portfolio Dashboard");

  const { store, dispatch } = useContext(StoreContext);
  const [itemEdit, setItemEdit] = useState(null);

  const handleAdd = () => {
    dispatch(setIsAdd(true)), dispatch(setIsEdit(false)), setItemEdit(null);
  };

  const {
    isLoading,
    isFetching,
    error,
    data: certs,
  } = useQueryData(
    "/v1/certs", // endpoint
    "get", // method
    "certs"
  );

  return (
    <>
      <DashWrapper>
        <div className="py-6 pl-2 pr-4">
          <div className="dash_heading">
            <div className="flex gap-6 items-center">
              <h3>Portfolio: Certificates</h3>
              <span className="text-white">
                ({certs?.data.length} certificate entries)
              </span>
            </div>

            <button className="btn btn--blueGray dash-new" onClick={handleAdd}>
              Add Certificate Entry
              <HiOutlinePlusCircle />
            </button>
          </div>

          <DashCertsTable
            isLoading={isLoading}
            certs={certs}
            isFetching={isFetching}
            setItemEdit={setItemEdit}
          />
        </div>
      </DashWrapper>
      {store.isAdd && <ModalAddCert itemEdit={itemEdit} />}
      {store.success && <Toast />}
      {store.error && <ModalError position={"center"} />}
    </>
  );
};

export default DashCerts;
