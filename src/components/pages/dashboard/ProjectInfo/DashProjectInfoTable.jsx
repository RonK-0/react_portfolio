import React, { useContext, useState } from "react";
import { LiaEdit, LiaHistorySolid, LiaTrashAltSolid } from "react-icons/lia";
import { PiArchive } from "react-icons/pi";
import {
  setIsActive,
  setIsAdd,
  setIsArchive,
  setIsDelete,
  setIsEdit
} from "../../../../store/StoreAction";
import { StoreContext } from "../../../../store/StoreContext";
import NoData from "../../../partials/NoData";
import TableLoader from "../../../partials/TableLoader";
import ModalConfirm from "../../../partials/modals/ModalConfirm";
import ModalDelete from "../../../partials/modals/ModalDelete";
import SpinnerFetching from "../../../partials/spinners/SpinnerFetching";

const DashProjectInfoTable = ({
  isLoading,
  project,
  isFetching,
  setItemEdit,
}) => {
  const { dispatch, store } = useContext(StoreContext);
  const [id, setId] = useState("");

  const handleEdit = (item) => {
    setItemEdit(item);
    dispatch(setIsAdd(true));
    dispatch(setIsEdit(true));
  };

  const handleArchive = (item) => {
    dispatch(setIsActive(true));
    setId(item.project_aid);
    dispatch(setIsArchive(0));
  };

  const handleRestore = (item) => {
    dispatch(setIsActive(true));
    setId(item.project_aid);
    dispatch(setIsArchive(1));
  };

  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setId(item.project_aid);
  };

  return (
    <>
      {isFetching && <SpinnerFetching />}
      <table className="dash_project_info w-full">
        <thead>
          <tr>
            <th>Project ID</th>
            <th>Project Title</th>
            <th>Project Year</th>
            <th>Project Description</th>
            <th>Project Category</th>
            <th>Project Publish Date</th>
            <th>Visible?</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {isLoading && (
            <tr className="single-row">
              <td colSpan={7}>
                <TableLoader count="20" cols="4" />
              </td>
            </tr>
          )}

          {project?.data.length === 0 && (
            <tr className="single-row">
              <td colSpan={7}>
                <NoData />
              </td>
            </tr>
          )}
          {project?.data.map((item, key) => (
            <tr
              // onDoubleClick={() => handleShowInfo(item)}
              key={key}
            >
              <td>{item.project_aid}</td>
              <td>{item.project_title}</td>
              <td>{item.project_year}</td>
              <td>{item.project_description}</td>
              <td>{item.project_category}</td>
              <td>{item.project_publish_date}</td>
              <td>{item.project_is_active === 1 ? "Yes" : "No"}</td>
              <td className="table-action">
                <ul>
                  {item.project_is_active ? (
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
          queryKey={"projects/info"}
          endpoint={`/v1/projects/info/active/${id}`}
        />
      )}
      {store.isDelete && (
        <ModalDelete
          position={"center"}
          queryKey={"projects/info"}
          endpoint={`/v1/projects/info/${id}`}
        />
      )}
    </>
  );
};

export default DashProjectInfoTable;
