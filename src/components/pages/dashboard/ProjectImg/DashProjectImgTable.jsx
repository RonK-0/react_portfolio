import React, { useContext, useState } from "react";
import { LiaEdit, LiaHistorySolid, LiaTrashAltSolid } from "react-icons/lia";
import { PiArchive } from "react-icons/pi";
import {
  setIsActive,
  setIsAdd,
  setIsArchive,
  setIsEdit,
  setIsDelete,
} from "../../../../store/StoreAction";
import { StoreContext } from "../../../../store/StoreContext";
import NoData from "../../../partials/NoData";
import TableLoader from "../../../partials/TableLoader";
import SpinnerFetching from "../../../partials/spinners/SpinnerFetching";
import ModalConfirm from "../../../partials/modals/ModalConfirm";
import ModalDelete from "../../../partials/modals/ModalDelete";


const DashProjectImgTable = ({setItemEdit, project_img, isLoading, isFetching}) => {
  const { dispatch, store } = useContext(StoreContext);
  const [id, setId] = useState("");

  // const {
  //   isLoading,
  //   isFetching,
  //   error,
  //   data: project_img,
  // } = useQueryData(
  //   "/v1/projects/img", // endpoint
  //   "get", // method
  //   "projects/img"
  // );

  const handleEdit = (item) => {
    setItemEdit(item);
    dispatch(setIsAdd(true));
    dispatch(setIsEdit(true));
  };

  const handleArchive = (item) => {
    dispatch(setIsActive(true));
    setId(item.project_img_aid);
    dispatch(setIsArchive(0));
  };

  const handleRestore = (item) => {
    dispatch(setIsActive(true));
    setId(item.project_img_aid);
    dispatch(setIsArchive(1));
  };

  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setId(item.project_img_aid);
  };

  return (
    <>
      {isFetching && <SpinnerFetching />}
      <table className="dash_project_img ">
        <thead>
          <tr>
            <th>Project ID</th>
            <th>Project Title</th>
            <th>Project Img AID</th>
            <th>Has Img?</th>
            <th>Project Img Publish Date</th>
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

          {project_img?.data.length === 0 && (
            <tr className="single-row">
              <td colSpan={6}>
                <NoData />
              </td>
            </tr>
          )}
          {project_img?.data.map((item, key) => (
            <tr
              // onDoubleClick={() => handleShowInfo(item)}
              key={key}
            >
              <td>{item.project_id}</td>
              <td>{item.project_title}</td>
              <td>{item.project_img_aid}</td>
              <td>{item.project_img !== "" ? "Yes" : "No"}</td>
              <td>{item.project_img_publish_date}</td>
              <td>{item.project_img_is_active === 1 ? "Yes" : "No"}</td>
              <td className="table-action">
                <ul>
                  {item.project_img_is_active ? (
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
          queryKey={"projects/img"}
          endpoint={`/v1/projects/img/active/${id}`}
        />
      )}
      {store.isDelete && (
        <ModalDelete
          position={"center"}
          queryKey={"projects/img"}
          endpoint={`/v1/projects/img/${id}`}
        />
      )}
    </>
  );
};

export default DashProjectImgTable;
