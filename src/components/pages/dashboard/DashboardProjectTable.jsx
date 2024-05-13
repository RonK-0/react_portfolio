import React, { useContext, useState } from "react";
import { LiaEdit, LiaHistorySolid, LiaTrashAltSolid } from "react-icons/lia";
import { PiArchive } from "react-icons/pi";
import {
    setInfo,
    setIsActive,
    setIsAdd,
    setIsArchive,
    setIsEdit,
} from "../../../store/StoreAction";
import { StoreContext } from "../../../store/StoreContext";
import NoData from "../../partials/NoData";
import TableLoader from "../../partials/TableLoader";
import SpinnerFetching from "../../partials/spinners/SpinnerFetching";

const DashboardProjectTable = ({
  isLoading,
  project,
  isFetching,
  setItemEdit,
}) => {
  const { dispatch, store } = useContext(StoreContext);
  const [id, setId] = useState("");

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
      <table className="db_dash_project w-full">
        <thead>
          <tr>
            <th>Project AID</th>
            <th>Project Title</th>
            <th>Project Year</th>
            <th>Project Description</th>
            <th>Project Category</th>
            <th>Project Is Active</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>TITLE</td>
            <td>2020</td>
            <td>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, odio perspiciatis! Animi culpa iusto quas beatae
              numquam mollitia similique illum.
            </td>
            <td>category</td>
            <td>Yes</td>
            <td className="table-action">
              <ul>
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
              </ul>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>TITLE</td>
            <td>2020</td>
            <td>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, odio perspiciatis! Animi culpa iusto quas beatae
              numquam mollitia similique illum.
            </td>
            <td>category</td>
            <td>Yes</td>
            <td className="table-action">
              <ul>
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
              </ul>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>TITLE</td>
            <td>2020</td>
            <td>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, odio perspiciatis! Animi culpa iusto quas beatae
              numquam mollitia similique illum.
            </td>
            <td>category</td>
            <td>Yes</td>
            <td className="table-action">
              <ul>
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
              </ul>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>TITLE</td>
            <td>2020</td>
            <td>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, odio perspiciatis! Animi culpa iusto quas beatae
              numquam mollitia similique illum.
            </td>
            <td>category</td>
            <td>Yes</td>
            <td className="table-action">
              <ul>
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
              </ul>
            </td>
          </tr>

          {isLoading && (
            <tr>
              <td colSpan={7}>
                <TableLoader count="20" cols="4" />
              </td>
            </tr>
          )}

          {project?.data.length === 0 && (
            <tr>
              <td colSpan={7}>
                <NoData />
              </td>
            </tr>
          )}
          {project?.data.map((item, key) => (
            <tr onDoubleClick={() => handleShowInfo(item)} key={key}>
              <td>1</td>
              <td>TITLE</td>
              <td>2020</td>
              <td>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, odio perspiciatis! Animi culpa iusto quas beatae
                numquam mollitia similique illum.
              </td>
              <td>category</td>
              <td>Yes</td>
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
    </>
  );
};

export default DashboardProjectTable;
