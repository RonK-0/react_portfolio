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
import useQueryData from "../../../custom-hook/useQueryData";

const DashProjSkillTable = ({setItemEdit}) => {
  const { dispatch, store } = useContext(StoreContext);
  const [id, setId] = useState("");

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

  const handleEdit = (item) => {
    setItemEdit(item);
    dispatch(setIsAdd(true));
    dispatch(setIsEdit(true));
  };

  const handleArchive = (item) => {
    dispatch(setIsActive(true));
    setId(item.project_skill_aid);
    dispatch(setIsArchive(0));
  };

  const handleRestore = (item) => {
    dispatch(setIsActive(true));
    setId(item.project_skill_aid);
    dispatch(setIsArchive(1));
  };

  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setId(item.project_skill_aid);
  };

  return (
    <>
      {isFetching && <SpinnerFetching />}
      <table className="dash_project_skill">
        <thead>
          <tr>
            <th>Project ID</th>
            <th>Project Title</th>
            <th>Skill AID</th>
            <th>Skill Name</th>
            <th>Skill Label</th>
            <th>Skill Publish Date</th>
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

          {project_skill?.data.length === 0 && (
            <tr className="single-row">
              <td colSpan={7}>
                <NoData />
              </td>
            </tr>
          )}
          {project_skill?.data.map((item, key) => (
            <tr
              // onDoubleClick={() => handleShowInfo(item)}
              key={key}
            >
              <td>{item.project_id}</td>
              <td>{item.project_title}</td>
              <td>{item.project_skill_aid}</td>
              <td>{item.project_skill}</td>
              <td>{item.project_skill_label}</td>
              <td>{item.project_skill_publish_date}</td>
              <td>{item.project_skill_is_active === 1 ? "Yes" : "No"}</td>
              <td className="table-action">
                <ul>
                  {item.project_skill_is_active ? (
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
          queryKey={"projects/skill"}
          endpoint={`/v1/projects/skill/active/${id}`}
        />
      )}
      {store.isDelete && (
        <ModalDelete
          position={"center"}
          queryKey={"projects/skill"}
          endpoint={`/v1/projects/skill/${id}`}
        />
      )}
    </>
  );
};

export default DashProjSkillTable;
