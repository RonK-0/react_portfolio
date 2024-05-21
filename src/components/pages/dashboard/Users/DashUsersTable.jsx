import React from "react";
import { PiArchive } from "react-icons/pi";
import { LiaEdit, LiaHistorySolid, LiaTrashAltSolid } from "react-icons/lia";
import TableLoader from "../../../partials/TableLoader";
import { StoreContext } from "../../../../store/StoreContext";
import NoData from "../../../partials/NoData";
import SpinnerFetching from "../../../partials/spinners/SpinnerFetching";
import {
  setInfo,
  setIsActive,
  setIsAdd,
  setIsArchive,
  setIsDelete,
  setIsEdit,
  setIsShow,
} from "../../../../store/StoreAction";
import ModalConfirm from "../../../partials/modals/ModalConfirm";
import ModalDelete from "../../../partials/modals/ModalDelete";

const DashUsersTable = ({ isLoading, user, isFetching, setItemEdit }) => {
  const { dispatch, store } = React.useContext(StoreContext);
  let counter = 1;
  const [id, setId] = React.useState("");

  const handleShowInfo = (item) => {
    dispatch(setIsShow(true));
    dispatch(setInfo(item));
  };

  const handleEdit = (item) => {
    setItemEdit(item);
    dispatch(setIsAdd(true));
    dispatch(setIsEdit(true));
  };

  const handleArchive = (item) => {
    dispatch(setIsActive(true));
    setId(item.user_aid);
    dispatch(setIsArchive(0));
  };

  const handleRestore = (item) => {
    dispatch(setIsActive(true));
    setId(item.user_aid);
    dispatch(setIsArchive(1));
  };

  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setId(item.user_aid);
  };

  return (
    <>
      {isFetching && <SpinnerFetching />}
      <table className="dash_users">
        <thead>
          <tr>
            <th>User ID</th>
            <th>User Name</th>
            <th>User Email</th>
            <th>User Active?</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {isLoading && (
            <tr className="single-row">
              <td colSpan={4}>
                <TableLoader count="20" cols="4" />
              </td>
            </tr>
          )}

          {user?.data.length === 0 && (
            <tr className="single-row">
              <td colSpan={4}>
                <NoData />
              </td>
            </tr>
          )}
          {user?.data.map((item, key) => (
            <tr
              // onDoubleClick={() => handleShowInfo(item)}
              key={key}
            >
              <td>{item.user_aid}</td>
              <td>{item.user_name}</td>
              <td>{item.user_email}</td>
              <td>{item.user_is_active === 1 ? "Yes" : "No"}</td>
              <td className="table-action">
                <ul>
                  {item.user_is_active ? (
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
          queryKey={"user"}
          endpoint={`/v1/user/active/${id}`}
        />
      )}
      {store.isDelete && (
        <ModalDelete
          position={"center"}
          queryKey={"user"}
          endpoint={`/v1/user/${id}`}
        />
      )}
    </>
  );
};

export default DashUsersTable;
