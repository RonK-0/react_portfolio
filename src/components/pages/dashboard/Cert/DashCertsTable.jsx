import React, { useContext, useState } from "react";
import { LiaEdit, LiaHistorySolid, LiaTrashAltSolid } from "react-icons/lia";
import { PiArchive } from "react-icons/pi";
import {
  setIsActive,
  setIsAdd,
  setIsArchive,
  setIsDelete,
  setIsEdit,
} from "../../../../store/StoreAction";
import { StoreContext } from "../../../../store/StoreContext";

import NoData from "../../../partials/NoData";
import TableLoader from "../../../partials/TableLoader";
import ModalConfirm from "../../../partials/modals/ModalConfirm";
import ModalDelete from "../../../partials/modals/ModalDelete";
import SpinnerFetching from "../../../partials/spinners/SpinnerFetching";

const DashCertsTable = ({ setItemEdit, certs, isFetching, isLoading }) => {
  const { dispatch, store } = useContext(StoreContext);
  const [id, setId] = useState("");

  // const {
  //   isLoading,
  //   isFetching,
  //   error,
  //   data: certs,
  // } = useQueryData(
  //   "/v1/certs", // endpoint
  //   "get", // method
  //   "certs"
  // );

  const handleEdit = (item) => {
    setItemEdit(item);
    dispatch(setIsAdd(true));
    dispatch(setIsEdit(true));
  };

  const handleArchive = (item) => {
    dispatch(setIsActive(true));
    setId(item.cert_aid);
    dispatch(setIsArchive(0));
  };

  const handleRestore = (item) => {
    dispatch(setIsActive(true));
    setId(item.cert_aid);
    dispatch(setIsArchive(1));
  };

  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setId(item.cert_aid);
  };
  return (
    <>
      {isFetching && <SpinnerFetching />}
      <table className="dash_certs">
        <thead>
          <tr>
            <th>Cert ID</th>
            <th>Cert Title</th>
            <th>Cert Organization</th>
            <th>Cert Date</th>
            <th>Has Image?</th>
            <th>Visible?</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {isLoading && (
            <tr className="single-row">
              <td colSpan={6}>
                <TableLoader count="20" cols="4" />
              </td>
            </tr>
          )}

          {certs?.data.length === 0 && (
            <tr className="single-row">
              <td colSpan={6}>
                <NoData />
              </td>
            </tr>
          )}
          {certs?.data.map((item, key) => (
            <tr
              // onDoubleClick={() => handleShowInfo(item)}
              key={key}
            >
              <td>{item.cert_aid}</td>
              <td>{item.cert_title}</td>
              <td>{item.cert_org}</td>
              <td>{item.cert_date}</td>
              <td>{(item.cert_image !== "" && "Yes") || "No"}</td>
              <td>{item.cert_is_active === 1 ? "Yes" : "No"}</td>
              <td className="table-action">
                <ul>
                  {item.cert_is_active ? (
                    <>
                      <li>
                        <button
                          className="tooltip"
                          data-tooltip="Edit"
                          onClick={() => handleEdit(item)}
                        >
                          <LiaEdit />
                        </button>
                      </li>
                      <li>
                        <button
                          className="tooltip"
                          data-tooltip="Archive"
                          onClick={() => handleArchive(item)}
                        >
                          <PiArchive />
                        </button>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <button
                          className="tooltip"
                          data-tooltip="Restore"
                          onClick={() => handleRestore(item)}
                        >
                          <LiaHistorySolid />
                        </button>
                      </li>
                      <li>
                        <button
                          className="tooltip"
                          data-tooltip="Delete"
                          onClick={() => handleDelete(item)}
                        >
                          <LiaTrashAltSolid />
                        </button>
                      </li>
                    </>
                  )}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {store.isActive && (
        <ModalConfirm
          position={"center"}
          queryKey={"certs"}
          endpoint={`/v1/certs/active/${id}`}
        />
      )}
      {store.isDelete && (
        <ModalDelete
          position={"center"}
          queryKey={"certs"}
          endpoint={`/v1/certs/${id}`}
        />
      )}
    </>
  );
};

export default DashCertsTable;
