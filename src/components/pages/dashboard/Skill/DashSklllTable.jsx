import React, { useContext, useState } from "react";
import { LiaEdit, LiaHistorySolid, LiaTrashAltSolid } from "react-icons/lia";
import { PiArchive } from "react-icons/pi";
import {
  setInfo,
  setIsActive,
  setIsAdd,
  setIsArchive,
  setIsEdit,
  setIsDelete,
  setIsShow,
} from "../../../../store/StoreAction";
import { StoreContext } from "../../../../store/StoreContext";
import NoData from "../../../partials/NoData";
import TableLoader from "../../../partials/TableLoader";
import SpinnerFetching from "../../../partials/spinners/SpinnerFetching";
import ModalConfirm from "../../../partials/modals/ModalConfirm";
import ModalDelete from "../../../partials/modals/ModalDelete";

const DashSklllTable = ({ isLoading, skills, isFetching, setItemEdit }) => {
  const { dispatch, store } = useContext(StoreContext);
  const [id, setId] = useState("");

  // const handleShowInfo = (item) => {
  //   dispatch(setIsShow(true));
  //   dispatch(setInfo(item));
  // };

  const handleEdit = (item) => {
    setItemEdit(item);
    dispatch(setIsAdd(true));
    dispatch(setIsEdit(true));
  };

  const handleArchive = (item) => {
    dispatch(setIsActive(true));
    setId(item.skill_aid);
    dispatch(setIsArchive(0));
  };

  const handleRestore = (item) => {
    dispatch(setIsActive(true));
    setId(item.skill_aid);
    dispatch(setIsArchive(1));
  };

  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setId(item.skill_aid);
  };
  return (
    <>
      {isFetching && <SpinnerFetching />}
      <table className="dash_skills">
        <thead>
          <tr>
            <th>Skill ID</th>
            <th>Skill Title</th>
            <th>Has Image?</th>
            <th>Skill Publish Date</th>
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

          {skills?.data.length === 0 && (
            <tr className="single-row">
              <td colSpan={6}>
                <NoData />
              </td>
            </tr>
          )}
          {skills?.data.map((item, key) => (
            <tr
              // onDoubleClick={() => handleShowInfo(item)}
              key={key}
            >
              <td>{item.skill_aid}</td>
              <td>{item.skill_title}</td>
              <td>{(item.skill_image !== "" && "Yes") || "No"}</td>
              <td>{item.skill_publish_date}</td>
              <td>{item.skill_is_active === 1 ? "Yes" : "No"}</td>
              <td className="table-action">
                <ul>
                  {item.skill_is_active ? (
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
          queryKey={"skills"}
          endpoint={`/v1/skills/active/${id}`}
        />
      )}
      {store.isDelete && (
        <ModalDelete
          position={"center"}
          queryKey={"skills"}
          endpoint={`/v1/skills/${id}`}
        />
      )}
    </>
  );
};

export default DashSklllTable;
